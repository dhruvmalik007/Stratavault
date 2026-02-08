"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useAccount, useWalletClient, useSwitchChain } from "wagmi";
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import * as nitrolite from "@erc7824/nitrolite";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";

// EIP-712 Types for manual signing
const EIP712AuthTypes = {
    Policy: [
        { name: 'challenge', type: 'string' },
        { name: 'scope', type: 'string' },
        { name: 'wallet', type: 'address' },
        { name: 'session_key', type: 'address' },
        { name: 'expires_at', type: 'uint64' },
        { name: 'allowances', type: 'Allowance[]' },
    ],
    Allowance: [
        { name: 'asset', type: 'string' },
        { name: 'amount', type: 'string' },
    ],
};

export function SimplePayment() {
    const { address, isConnected, chain } = useAccount();
    const { switchChainAsync } = useSwitchChain();
    const { data: walletClient } = useWalletClient();
    const [connected, setConnected] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [partnerAddress, setPartnerAddress] = useState("");
    const [simulatePartner, setSimulatePartner] = useState(false); // New Toggle

    // Ephemeral Session Key State
    const sessionAccountRef = useRef<ReturnType<typeof privateKeyToAccount> | null>(null);

    // ... auto-fill partner ...

    const [sessionId, setSessionId] = useState<string | null>(null);
    const ws = useRef<WebSocket | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authParamsRef = useRef<any>(null);

    const addLog = useCallback((msg: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
    }, []);

    // 1. Setup Message Signer (Use Session Key for App Messages)
    const messageSigner = useCallback(async (message: string | any) => {
        if (!sessionAccountRef.current) throw new Error("No session key");

        const msgStr = typeof message === 'string' ? message : JSON.stringify(message);

        // Use the ephemeral private key to sign app messages
        return await sessionAccountRef.current.signMessage({
            message: msgStr
        });
    }, []);

    // 2. Connect to ClearNode
    const connectToSandbox = useCallback(() => {
        if (ws.current) ws.current.close();
        if (!address) {
            addLog("⚠️ Address not found, please connect wallet first");
            return;
        }

        // Generate Fresh Session Key
        sessionAccountRef.current = privateKeyToAccount(generatePrivateKey());
        addLog(`🔑 Generated Session Key: ${sessionAccountRef.current.address.slice(0, 10)}...`);

        addLog("Connecting to Yellow Network Sandbox...");
        const socket = new WebSocket('wss://clearnet-sandbox.yellow.com/ws');
        ws.current = socket;

        socket.onopen = async () => {
            setConnected(true);
            addLog("🟢 Connected to Yellow Network!");

            // AUTH STEP 1: Send Auth Request
            addLog("Sending Auth Request...");
            try {
                const now = Math.floor(Date.now() / 1000);
                authParamsRef.current = {
                    address: address as `0x${string}`,
                    session_key: sessionAccountRef.current?.address as `0x${string}`, // Use ephemeral key
                    application: 'nitrolite', // Updated from 'nitrolite' to match session definition
                    // Increase expiry to 24 hours to avoid "expired" errors if server clock drifts or logic is strict
                    expires_at: BigInt(now + 86400),
                    scope: 'console',
                    allowances: [],
                };

                const authReq = await nitrolite.createAuthRequestMessage(authParamsRef.current);
                socket.send(authReq);
            } catch (e) {
                addLog(`Auth Request Error: ${e}`);
            }
        };

        socket.onmessage = async (event) => {
            try {
                let msg = JSON.parse(event.data);

                // Handle Nitrolite RPC wrapper { res: [id, method, params] }
                if (msg.res && Array.isArray(msg.res)) {
                    msg = { id: msg.res[0], method: msg.res[1], params: msg.res[2] };
                }

                if (msg.method === 'auth_challenge') {
                    addLog("⛓ Received Auth Challenge, Signing...");
                    try {
                        // AUTH STEP 2: Sign Challenge
                        if (!walletClient || !authParamsRef.current) return;

                        // Normalize params
                        const params = msg.params || {};
                        if (params.challenge_message) {
                            params.challengeMessage = params.challenge_message;
                            params.challenge = params.challenge_message;
                        }

                        const challenge = params.challenge || params.challengeMessage;
                        if (!challenge) {
                            throw new Error("Missing challenge string");
                        }

                        // Use manual EIP-712 signing to control Domain and ChainID
                        // REMOVING chainId from domain as server likely doesn't expect it for authentication
                        // despite the network requirement for assets.
                        const domain = {
                            name: 'nitrolite'
                        };
                        const types = { Policy: EIP712AuthTypes.Policy, Allowance: EIP712AuthTypes.Allowance };
                        const value = {
                            challenge,
                            scope: authParamsRef.current.scope,
                            wallet: address as `0x${string}`,
                            session_key: authParamsRef.current.session_key,
                            expires_at: authParamsRef.current.expires_at,
                            allowances: []
                        };

                        const signature = await walletClient.signTypedData({
                            domain,
                            types,
                            primaryType: 'Policy',
                            message: value
                        });

                        // Dummy signer that returns our signature
                        const dummySigner = async () => signature;

                        // We need to construct the object expected by createAuthVerifyMessage
                        const challengePayload = {
                            ...msg,
                            params: {
                                ...msg.params,
                                ...params // Normalized
                            }
                        };

                        const authVerify = await nitrolite.createAuthVerifyMessage(
                            dummySigner,
                            challengePayload
                        );
                        socket.send(authVerify);
                        addLog("📤 Sent Auth Verify");
                    } catch (e) {
                        // Check for the specific chain mismatch error text to give better feedback
                        const errStr = String(e);
                        if (errStr.includes("Provided chainId") && errStr.includes("must match the active chainId")) {
                            addLog("❌ Chain ID Mismatch! Please switch your wallet to Yellow Testnet (1449000).");
                        } else {
                            addLog(`Signing Error: ${e}`);
                        }
                        console.error(e);
                    }
                } else if (msg.method === 'auth_success' || (msg.params && msg.params.success)) {
                    setIsAuthenticated(true);
                    addLog("✅ Authenticated Successfully!");
                } else {
                    handleMessage(msg);
                }
            } catch (e) {
                console.error("Parse error", e);
            }
        };

        socket.onclose = () => {
            setConnected(false);
            setIsAuthenticated(false);
            addLog("🔴 Disconnected");
        };

        socket.onerror = (e) => {
            addLog("⚠️ WebSocket Error");
            console.error(e);
        };
    }, [addLog, address, walletClient]);

    const handleMessage = (message: any) => {
        // ... Log logic ...
        const type = message.type || message.method;

        if (type === 'app_session_created' || (message.params && message.params.app_session_id)) {
            const sid = message.sessionId || (message.params && message.params.app_session_id);
            setSessionId(sid);
            addLog(`✅ Session ready: ${sid}`);
        } else if (type === 'payment') {
            addLog(`💰 Payment received: ${message.amount}`);
        } else if (type === 'error' || message.error) {
            const errMsg = message.error ? JSON.stringify(message.error) : (message.params && message.params.error);
            addLog(`❌ Error: ${errMsg}`);
        } else {
            // Filter out noisy assets/metrics logs if needed, or just show them
            if (type === 'assets') return;
            addLog(`Received: ${JSON.stringify(message)}`);
        }
    };

    // 3. Create Session
    const createSession = async () => {
        if (!walletClient || !address) return;
        if (!partnerAddress) {
            addLog("⚠️ Please enter a partner address");
            return;
        }

        addLog("Creating Payment Session...");

        try {
            const appDefinition = {
                protocol: 'NitroRPC/0.4',
                application: 'payment-app-v1', // Required by RPCAppDefinition
                participants: [address as `0x${string}`, partnerAddress as `0x${string}`],
                weights: [50, 50],
                quorum: 100,
                challenge: 0,
                nonce: Date.now()
            };

            const allocations = [
                { participant: address as `0x${string}`, asset: 'usdc', amount: '800000' },
                { participant: partnerAddress as `0x${string}`, asset: 'usdc', amount: '200000' }
            ];

            // nitrolite.createAppSessionMessage expects (signer, payload)
            // Payload should be the object directly, matching RPCAppSessionDefinition structure
            let sessionMessage = await nitrolite.createAppSessionMessage(
                messageSigner,
                { definition: appDefinition, allocations }
            );

            // Handle Self-Transfer (Participant 0 == Participant 1)
            // The Node expects 2 signatures, one for each participant slot.
            // Since we are both, we must provide our signature twice.
            const userAddr = address?.toLowerCase();
            const partnerAddr = partnerAddress?.trim().toLowerCase();

            if ((userAddr && partnerAddr && userAddr === partnerAddr) || simulatePartner) {
                if (simulatePartner) addLog("⚠️ Simulation Mode: Forcing 2nd signature!");
                else addLog(`🔄 Self-transfer detected: ${userAddr}`);
                try {
                    let msgObj = typeof sessionMessage === 'string' ? JSON.parse(sessionMessage) : sessionMessage;

                    addLog(`📝 Msg Keys: ${Object.keys(msgObj).join(', ')}`);
                    addLog(`📝 Full Msg: ${JSON.stringify(msgObj).slice(0, 200)}...`);

                    // Try to find signature in alternate locations
                    let signature = msgObj.signatures?.[0] || msgObj.signature;

                    addLog(`📝 Sig Found: ${!!signature}`);

                    if ((msgObj.signatures && Array.isArray(msgObj.signatures) && msgObj.signatures.length === 1) ||
                        (!msgObj.signatures && msgObj.signature)) {
                        addLog("➕ Duplicating signature for 2nd participant slot...");

                        // If existing is single string signature, convert to array
                        if (!msgObj.signatures && msgObj.signature) {
                            msgObj.signatures = [msgObj.signature];
                            delete msgObj.signature; // Standardize on array
                        }

                        msgObj.signatures.push(msgObj.signatures[0]);
                        sessionMessage = JSON.stringify(msgObj);
                        addLog(`📝 Sig Count After: ${msgObj.signatures.length}`);
                    }
                } catch (e) {
                    console.error("Error patching signatures", e);
                    addLog(`❌ Error patching signatures: ${e}`);
                }
            } else {
                addLog(`ℹ️ Different participants: ${userAddr} vs ${partnerAddr}`);
            }


            // Ensure we send a string
            if (typeof sessionMessage !== 'string') {
                sessionMessage = JSON.stringify(sessionMessage);
            }

            ws.current?.send(sessionMessage);
            addLog("📨 Session creation request sent!");
        } catch (e) {
            addLog(`Error creating session: ${e}`);
            console.error(e);
        }
    };

    // 4. Send Payment
    const sendPayment = async () => {
        if (!walletClient || !address || !sessionId) return;

        try {
            addLog("Sending Payment...");
            const amount = "100000"; // 0.1 USDC

            const paymentData = {
                type: 'payment',
                amount: amount,
                recipient: partnerAddress,
                timestamp: Date.now(),
                sessionId: sessionId // Likely needed to route within session
            };

            const signature = await messageSigner(JSON.stringify(paymentData));

            const payload = JSON.stringify({
                ...paymentData,
                signature,
                sender: address
            });

            ws.current?.send(payload);
            addLog(`💸 Sent ${amount} USDC!`);
        } catch (e) {
            addLog(`Error sending payment: ${e}`);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Yellow Sandbox Payment App</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${isAuthenticated ? 'bg-green-500' : connected ? 'bg-yellow-500' : 'bg-red-500'}`} />
                        <span>{isAuthenticated ? "Authenticated" : connected ? "Handshaking..." : "Disconnected"}</span>
                        <Button onClick={connectToSandbox} disabled={connected}>
                            {isAuthenticated ? "Connected" : connected ? "Authenticating..." : "Connect Sandbox"}
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Partner Address</label>
                        <Input
                            placeholder="0x..."
                            value={partnerAddress}
                            onChange={(e) => setPartnerAddress(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="simulate"
                            checked={simulatePartner}
                            onChange={(e) => setSimulatePartner(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="simulate" className="text-sm font-medium">
                            Simulate Partner Signature (Force 2nd Sig)
                        </label>
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={createSession} disabled={!isAuthenticated}>
                            Create Payment Session
                        </Button>
                        <Button onClick={sendPayment} disabled={!connected || !sessionId} variant="secondary">
                            Send 0.1 USDC
                        </Button>
                    </div>

                    {sessionId && (
                        <div className="p-2 bg-green-100 dark:bg-green-900 rounded text-sm">
                            Session ID: {sessionId}
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Live Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 overflow-y-auto bg-black/10 p-4 rounded font-mono text-xs">
                        {logs.map((log, i) => (
                            <div key={i} className="mb-1">{log}</div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
