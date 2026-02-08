"use client";

import * as React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { Loader2 } from "lucide-react";
import { NetworkSwitcher } from "./NetworkSwitcher";

export function EVMConnectButton() {
    const { connectors, connect, isPending } = useConnect();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    if (isConnected) {
        return (
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="text-sm font-mono bg-secondary p-2 rounded truncate max-w-[200px]">
                        {address}
                    </div>
                    <NetworkSwitcher />
                </div>
                <Button variant="outline" onClick={() => disconnect()}>
                    Disconnect
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {connectors.map((connector) => (
                <Button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    disabled={isPending}
                    className="w-full"
                >
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Connect {connector.name}
                </Button>
            ))}
        </div>
    );
}
