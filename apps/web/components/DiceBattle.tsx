"use client";

import React, { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useClearNode } from "../hooks/useClearNode";
import { MessageLog } from "./MessageLog";

export function DiceBattle() {
    const { address, isConnected: isWalletConnected } = useAccount();
    const { connect: connectWallet, connectors } = useConnect();
    const [serverUrl, setServerUrl] = useState("");

    React.useEffect(() => {
        // Fetch ClearNode URL from API
        // Fetch ClearNode URL from API
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
        fetch(`${apiUrl}/api/clearnode/info`)
            .then(res => res.json())
            .then(data => {
                if (data.url) setServerUrl(data.url);
                else setServerUrl('ws://localhost:8000/ws');
            })
            .catch(err => {
                console.error("Failed to fetch ClearNode info:", err);
                setServerUrl('ws://localhost:8000/ws');
            });
    }, []);

    // Initialize hook
    const { isConnected, isAuthenticated, logs, connect, sendMessage, sendTransfer } = useClearNode(serverUrl);

    const handleConnectWallet = () => {
        const connector = connectors[0];
        if (connector) {
            connectWallet({ connector });
        }
    };

    const handleStartBattle = async () => {
        // Send a "challenge" message to the backend via ClearNode (once connected)
        // Or trigger via API to INVITE us.
        // For demo, let's assume we are connected to ClearNode and send a message "to" the server's address.
        // We need to know server's address. 
        // We can invoke an API to get it.

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
        const res = await fetch(`${apiUrl}/api/clearnode/info`); // This needs to be proxied or full URL if locally dev
        // Assuming proxy or CORS handled.
        // Actually /api on web sends to web backend (nextjs). Need to route to apps/api?
        // If apps/web and apps/api are different ports, we need full URL.
        // Let's assume user inputs target address for now or hardcode for demo if verified.
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">🎲 Dice Roll Battle</h1>
                {!isWalletConnected ? (
                    <button
                        onClick={handleConnectWallet}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Connected: {address?.slice(0, 6)}...{address?.slice(-4)}</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Connection Panel */}
                <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Connection</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">ClearNode URL</label>
                            <input
                                className="w-full bg-background border rounded px-3 py-2"
                                value={serverUrl}
                                onChange={(e) => setServerUrl(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={connect}
                            disabled={!isWalletConnected || isConnected}
                            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isConnected ? "Connected to ClearNode" : "Connect to ClearNode"}
                        </button>

                        <div className="flex items-center justify-between text-sm">
                            <span>Status:</span>
                            <span className={isConnected ? "text-green-500 font-bold" : "text-red-500"}>
                                {isConnected ? (isAuthenticated ? "Authenticated" : "Handshaking...") : "Disconnected"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Game Panel */}
                <div className={`p-6 border rounded-lg bg-card text-card-foreground shadow-sm relative ${!isAuthenticated ? 'opacity-50' : ''}`}>
                    {!isAuthenticated && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10 rounded-lg">
                            <span className="bg-black text-white px-3 py-1 rounded">Authenticate to Play</span>
                        </div>
                    )}
                    <h2 className="text-xl font-semibold mb-4">Game Actions</h2>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400">
                            Bet <strong>5 YTEST.USD</strong> to roll the dice.
                            If you roll 4, 5, or 6, you double your money!
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={async () => {
                                    // Fetch House address first?
                                    // ideally we cache it or pass it as prop.
                                    // For now, let's fetch it again or store it in state if efficient.
                                    try {
                                        // For Testing: Send to SELF as requested by user ("partner address ... replaced with the same one which is loggedIn")
                                        // This verifies the transfer flow without needing the House bot to be perfect yet.
                                        if (address) {
                                            await sendTransfer(address, "5000000");
                                        }
                                    } catch (e) {
                                        console.error("Bet failed", e);
                                    }
                                }}
                                disabled={!isAuthenticated}
                                className="flex-1 h-32 text-2xl font-bold border-2 border-dashed border-primary rounded hover:bg-primary/10 transition flex flex-col items-center justify-center gap-2"
                            >
                                <span>🎲 ROLL (BET 5)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <MessageLog logs={logs} />
        </div>
    );
}
