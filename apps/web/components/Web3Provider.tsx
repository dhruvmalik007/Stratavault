"use client";

import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, polygon, sepolia, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected } from "wagmi/connectors";
import React from "react";

// Define Yellow Testnet (XRPL EVM Sidechain Testnet)
const yellowTestnet = {
    id: 1449000,
    name: 'Yellow Testnet',
    nativeCurrency: {
        name: 'XRP',
        symbol: 'XRP', // or ETH, usually XRP on EVM sidechain
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc-evm-sidechain.xrpl.org'] }, // Likely RPC for 1449000
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://evm-sidechain.xrpl.org' }, // Verify URL effectively
    },
} as const;

const config = createConfig({
    chains: [polygon, mainnet, base, sepolia, yellowTestnet],
    transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [base.id]: http(),
        [sepolia.id]: http(),
        [yellowTestnet.id]: http(),
    },
    connectors: [injected()],
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}
