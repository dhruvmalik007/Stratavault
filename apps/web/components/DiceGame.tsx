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

export function DiceGame() {
    const { address, isConnected, chain } = useAccount();
    const { switchChainAsync } = useSwitchChain();
    const { data: walletClient } = useWalletClient();
    const [connected, setConnected] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [partnerAddress, setPartnerAddress] = useState("");
    const [simulatePartner, setSimulatePartner] = useState(false);
    const [diceValue, setDiceValue] = useState<number | null>(null);

    // Ephemeral Session Key State
    const sessionAccountRef = useRef<ReturnType<typeof privateKeyToAccount> | null>(null);

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
                    session_key: sessionAccountRef.current?.address as `0x${string}`,
                    application: 'dice-game-v1', // SCOPE UPDATED FOR DICE GAME
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

                if (msg.res && Array.isArray(msg.res)) {
                    msg = { id: msg.res[0], method: msg.res[1], params: msg.res[2] };
                }

                if (msg.method === 'auth_challenge') {
                    addLog("⛓ Received Auth Challenge, Signing...");
                    try {
                        if (!walletClient || !authParamsRef.current) return;

                        const params = msg.params || {};
                        if (params.challenge_message) {
                            params.challengeMessage = params.challenge_message;
                            params.challenge = params.challenge_message;
                        }

                        const challenge = params.challenge || params.challengeMessage;
                        if (!challenge) {
                            throw new Error("Missing challenge string");
                        }

                        const domain = { name: 'nitrolite' };
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

                        const dummySigner = async () => signature;

                        const challengePayload = {
                            ...msg,
                            params: { ...msg.params, ...params }
                        };

                        const authVerify = await nitrolite.createAuthVerifyMessage(
                            dummySigner,
                            challengePayload
                        );
                        socket.send(authVerify);
                        addLog("📤 Sent Auth Verify");
                    } catch (e) {
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
        const type = message.type || message.method;

        if (type === 'app_session_created' || (message.params && message.params.app_session_id)) {
            const sid = message.sessionId || (message.params && message.params.app_session_id);
            setSessionId(sid);
            addLog(`✅ Session ready: ${sid}`);
        } else if (type === 'game_move' || (message.params && message.params.type === 'game_move')) {
            const move = message.params || message;
            addLog(`🎲 Opponent Rolled: ${move.value}`);
        } else if (type === 'error' || message.error) {
            const errMsg = message.error ? JSON.stringify(message.error) : (message.params && message.params.error);
            addLog(`❌ Error: ${errMsg}`);
        } else {
            if (type === 'assets') return;
            addLog(`Received: ${JSON.stringify(message)}`);
        }
    };

    // 3. Create Session
    const createSession = async () => {
        if (!walletClient || !address) return;
        // if (!partnerAddress) {
        //     addLog("⚠️ Please enter a partner address");
        //     return;
        // }

        addLog("Creating Dice Game Session...");

        try {
            const participants = partnerAddress
                ? [address as `0x${string}`, partnerAddress as `0x${string}`]
                : [address as `0x${string}`];

            const weights = partnerAddress ? [50, 50] : [100];
            const quorum = 100;

            const appDefinition = {
                protocol: 'NitroRPC/0.4',
                application: 'dice-game-v1', // Updated App Name
                participants,
                weights,
                quorum,
                challenge: 0,
                nonce: Date.now()
            };

            const allocations = partnerAddress
                ? [
                    { participant: address as `0x${string}`, asset: 'usdc', amount: '10' },
                    { participant: partnerAddress as `0x${string}`, asset: 'usdc', amount: '10' }
                ]
                : [
                    { participant: address as `0x${string}`, asset: 'usdc', amount: '10' }
                ];

            let sessionMessage = await nitrolite.createAppSessionMessage(
                messageSigner,
                { definition: appDefinition, allocations }
            );

            // Handle Self-Transfer / Simulation
            const userAddr = address?.toLowerCase();
            const partnerAddr = partnerAddress?.trim().toLowerCase();

            if ((userAddr && partnerAddr && userAddr === partnerAddr) || (simulatePartner && partnerAddr)) {
                if (simulatePartner) addLog("⚠️ Simulation Mode: Forcing 2nd signature!");
                else addLog(`🔄 Self-transfer detected: ${userAddr}`);
                try {
                    let msgObj = typeof sessionMessage === 'string' ? JSON.parse(sessionMessage) : sessionMessage;

                    // Robust Signature Duplication Logic
                    let signature = msgObj.signatures?.[0] || msgObj.signature;

                    if ((msgObj.signatures && Array.isArray(msgObj.signatures) && msgObj.signatures.length === 1) ||
                        (!msgObj.signatures && msgObj.signature)) {
                        addLog("➕ Duplicating signature for 2nd participant slot...");

                        if (!msgObj.signatures && msgObj.signature) {
                            msgObj.signatures = [msgObj.signature];
                            delete msgObj.signature;
                        }

                        msgObj.signatures.push(msgObj.signatures[0]);
                        sessionMessage = JSON.stringify(msgObj);
                        addLog(`📝 Sig Count After: ${msgObj.signatures.length}`);
                    }
                } catch (e) {
                    console.error("Error patching signatures", e);
                    addLog(`❌ Error patching signatures: ${e}`);
                }
            } else if (!partnerAddr) {
                addLog(`ℹ️ Solo Session (1 Participant): ${userAddr}`);
            } else {
                addLog(`ℹ️ Different participants: ${userAddr} vs ${partnerAddr}`);
            }

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

    // 4. Roll Dice
    const rollDice = async () => {
        if (!walletClient || !address || !sessionId) return;

        try {
            const roll = Math.floor(Math.random() * 6) + 1;
            setDiceValue(roll);
            addLog(`🎲 You Rolled: ${roll}`);

            const gameData = {
                type: 'game_move',
                move: 'roll',
                value: roll,
                timestamp: Date.now(),
                sessionId: sessionId
            };

            const signature = await messageSigner(JSON.stringify(gameData));

            const payload = JSON.stringify({
                ...gameData,
                signature,
                sender: address
            });

            ws.current?.send(payload);
            addLog(`📤 Broadcasted Roll: ${roll}`);
        } catch (e) {
            addLog(`Error sending roll: ${e}`);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Yellow Dice Game 🎲</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${isAuthenticated ? 'bg-green-500' : connected ? 'bg-yellow-500' : 'bg-red-500'}`} />
                        <span>{isAuthenticated ? "Authenticated" : connected ? "Handshaking..." : "Disconnected"}</span>
                        <Button onClick={connectToSandbox} disabled={connected}>
                            {isAuthenticated ? "Connected" : connected ? "Authenticating..." : "Connect Sandbox"}
                        </Button>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                        ℹ️ <strong>Solo Mode:</strong> You are playing on a single-participant state channel. <br />
                        All actions are signed only by you.
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={createSession} disabled={!isAuthenticated || !!sessionId} className="w-full">
                            {sessionId ? "Session Active" : "Start Solo Game Session"}
                        </Button>
                    </div>

                    <Button
                        onClick={rollDice}
                        disabled={!connected || !sessionId}
                        variant="secondary"
                        className="w-full h-24 text-xl"
                    >
                        Roll Dice 🎲
                    </Button>

                    {diceValue && (
                        <div className="text-center p-8 border-2 border-dashed rounded-xl bg-gray-50 dark:bg-gray-800 animate-in fade-in zoom-in duration-300">
                            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">You Rolled</div>
                            <span className="text-6xl font-black text-primary">{diceValue}</span>
                        </div>
                    )}

                    {sessionId && (
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded text-xs font-mono break-all">
                            Session ID: {sessionId}
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Game Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 overflow-y-auto bg-black/5 dark:bg-black/50 p-4 rounded-lg font-mono text-[10px] leading-relaxed">
                        {logs.map((log, i) => (
                            <div key={i} className="mb-1 border-b border-black/5 pb-1 last:border-0">{log}</div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
