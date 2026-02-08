"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useWalletClient, useAccount } from "wagmi";
import * as nitrolite from "@erc7824/nitrolite";

// Re-defining types locally for the hook since we can't easily import from packages/yellow in client component
// without potential build issues in some monorepos.
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

export function useClearNode(clearNodeUrl: string) {
    const { address } = useAccount();
    const { data: walletClient } = useWalletClient();
    const [isConnected, setIsConnected] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const ws = useRef<WebSocket | null>(null);

    // Keep track of auth params to reuse for challenge signing
    const authParamsRef = useRef<any>(null);

    const addLog = useCallback((msg: string) => {
        setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
        console.log(`[useClearNode] ${msg}`);
    }, []);

    const connect = useCallback(() => {
        if (!clearNodeUrl || !address || !walletClient) return;

        if (ws.current) ws.current.close();

        addLog(`Connecting to ${clearNodeUrl}...`);

        let url = clearNodeUrl;
        if (!url.startsWith('ws')) {
            url = `wss://${url}`;
            addLog(`Auto-prefixed URL: ${url}`);
        }

        const socket = new WebSocket(url);
        ws.current = socket;

        socket.onopen = async () => {
            setIsConnected(true);
            addLog("WebSocket Connected");

            try {
                addLog("Starting Authentication...");
                const now = Math.floor(Date.now() / 1000);
                authParamsRef.current = {
                    address: address as `0x${string}`,
                    session_key: address as `0x${string}`,
                    application: 'nitrolite',
                    expires_at: BigInt(now + 3600),
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
            const data = event.data.toString();
            let msg: any;
            try {
                const json = JSON.parse(data);
                if (json.res && Array.isArray(json.res)) {
                    msg = { id: json.res[0], method: json.res[1], params: json.res[2] };
                } else {
                    msg = json;
                }
            } catch {
                return;
            }

            if (msg.method === 'auth_challenge') {
                addLog(`Received Auth Challenge`);

                try {
                    // Create EIP-712 signer using Wagmi Wallet Client
                    // This mimics the 'Hybrid Signer' logic but specific for Browser/Wagmi
                    const eip712Signer = nitrolite.createEIP712AuthMessageSigner(
                        walletClient,
                        authParamsRef.current,
                        { name: 'nitrolite' } // Strict domain check
                    );

                    // Normalize params
                    const params = msg.params || {};
                    if (params.challenge_message) {
                        params.challengeMessage = params.challenge_message;
                        params.challenge = params.challenge_message;
                    }

                    // For 'createAuthVerifyMessage', we need a signer that can handle the specific structure
                    // But nitrolite SDK's createEIP712AuthMessageSigner returns a signer that expects
                    // the *payload* to be signed.
                    // HOWEVER, createAuthVerifyMessage calls the signer with the *entire RPC message*.
                    // This mismatch is what likely caused issues before.

                    // Let's manually invoke the EIP-712 signature since we know exactly what we need.

                    const challenge = params.challenge || params.challengeMessage;
                    if (!challenge) {
                        throw new Error("Missing challenge string");
                    }

                    // Use the connected chain ID (should be 1449000 now)
                    if (walletClient.chain.id !== 1449000) {
                        addLog("⚠️ Wrong Network. Switching to Yellow Testnet (1449000)...");
                        try {
                            await walletClient.switchChain({ id: 1449000 });
                            addLog("✅ Network Switched!");
                        } catch (switchError) {
                            addLog(`❌ Failed to switch network: ${switchError}`);
                            return;
                        }
                    }
                    const chainId = 1449000;

                    // Construct the Typed Data with Chain ID
                    const domain = {
                        name: 'nitrolite',
                        chainId: chainId
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

                    // Sign with Wagmi
                    const signature = await walletClient.signTypedData({
                        domain,
                        types,
                        primaryType: 'Policy',
                        message: value
                    });

                    // Create the verify message manually or via helper if we pass a simple signer
                    // But standard helper might try to sign again.
                    // The SDK has `createAuthVerifyMessage` which takes a signer.
                    // Let's use a dummy signer that just returns our signature.

                    const dummySigner = async () => signature;

                    const authVerify = await nitrolite.createAuthVerifyMessage(
                        dummySigner,
                        { ...msg, params } // Pass normalized params
                    );

                    socket.send(authVerify);
                    addLog("Sent Auth Verify");

                } catch (e) {
                    addLog(`Auth Signing Error: ${e}`);
                    console.error(e);
                }
            } else if (msg.method === 'auth_success' || (msg.params && msg.params.success)) {
                setIsAuthenticated(true);
                addLog("Authenticated Successfully!");
            } else if (msg.method === 'error' || (msg.error)) {
                addLog(`Error: ${JSON.stringify(msg.error || msg.params?.error)}`);
            } else if (msg.method === 'auth_failure') {
                addLog("Authentication Failed");
            } else if (msg.method === 'bu') {
                addLog("Balance Update Recieved!");
            } else {
                // Ignore ping/pong or others for log clarity?
                // addLog(`Received: ${msg.method}`);
            }
        };

        socket.onclose = () => {
            setIsConnected(false);
            setIsAuthenticated(false);
            addLog("WebSocket Disconnected");
        };

        socket.onerror = (e) => {
            addLog("WebSocket Error");
            console.error(e);
        };

    }, [clearNodeUrl, address, walletClient, addLog]);

    const sendMessage = useCallback((msg: any) => {
        if (ws.current && isConnected) {
            ws.current.send(JSON.stringify(msg));
            addLog(`Sent: ${JSON.stringify(msg)}`);
        }
    }, [isConnected, addLog]);

    // New helper to send Transfer
    const sendTransfer = useCallback(async (recipient: string, amount: string) => {
        if (!ws.current || !walletClient) return;
        try {
            addLog(`Signing Transfer of ${amount} to ${recipient}...`);
            // Transfers use simple ECDSA (personal_sign)
            const signer = async (payload: any) => {
                const message = JSON.stringify(payload);
                return await walletClient.signMessage({ message });
            };

            const transferMsg = await nitrolite.createTransferMessage(
                signer,
                {
                    to: recipient! as `0x${string}`,
                    asset: 'ytest.usd',
                    amount: amount
                }
            );

            ws.current.send(transferMsg);
            addLog("Sent Transfer Message");
        } catch (e) {
            addLog(`Transfer Error: ${e}`);
        }
    }, [walletClient, addLog]);

    return { isConnected, isAuthenticated, logs, connect, sendMessage, sendTransfer };
}
