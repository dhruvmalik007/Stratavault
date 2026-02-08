"use client";

import * as React from "react";
import { useChainId, useSwitchChain, useAccount } from "wagmi";
import { Button } from "@repo/ui/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { ChevronDown, Network } from "lucide-react";
import { polygon } from "wagmi/chains";

export function NetworkSwitcher() {
    const chainId = useChainId();
    const { chains, switchChain } = useSwitchChain();
    const { isConnected } = useAccount();

    const currentChain = chains.find((c) => c.id === chainId);

    // Auto-switch to Polygon on mount/connect if not on it
    React.useEffect(() => {
        if (isConnected && chainId !== polygon.id) {
            // Optional: Uncomment to force switch immediately
            // switchChain({ chainId: polygon.id });
            console.log("Connected to", chainId, "expected", polygon.id);
        }
    }, [isConnected, chainId, switchChain]);

    if (!isConnected) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 h-9">
                    <Network className="h-4 w-4" />
                    {currentChain?.name || "Unknown Network"}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {chains.map((chain) => (
                    <DropdownMenuItem
                        key={chain.id}
                        onClick={() => switchChain({ chainId: chain.id })}
                        disabled={chain.id === chainId}
                        className="cursor-pointer"
                    >
                        {chain.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
