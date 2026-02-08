"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

// Dynamic requires for Solana if needed (keeping legacy structure)
// eslint-disable-next-line @typescript-eslint/no-var-requires
let SolanaReact: any = {};
try { SolanaReact = require("@solana/react"); } catch (_) { }

export type WalletIdentity = {
  source: "wagmi" | "solana-react" | "none" | "privy"; // Keep privy type for backward compat if needed, but won't use it
  publicKey?: string;
  connected: boolean;
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
  signTransaction?: (tx: any) => Promise<any>;
  sendAndConfirm?: (txOrBytes: any) => Promise<string>;
};

export function useWalletIdentity(): WalletIdentity {
  // Wagmi (EVM)
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();

  // Solana React
  const srWallet = typeof SolanaReact.useWallet === "function" ? SolanaReact.useWallet() : ({} as any);

  // Prefer Wagmi/EVM if connected
  if (isConnected && address) {
    const connect = async () => {
      // Connect using the first available connector (usually injected/MetaMask)
      // In a real app, you might want a modal to choose connector
      const connector = connectors[0];
      if (connector) await connectAsync({ connector });
    };
    const disconnect = async () => {
      await disconnectAsync();
    };

    return {
      source: "wagmi",
      publicKey: address,
      connected: true,
      connect,
      disconnect,
      // EVM doesn't use signTransaction/sendAndConfirm in the same way as Solana hooks here
      // But for UnifiedWalletButton which mostly displays address + connect/disconnect, this is sufficient.
    };
  }

  // Solana Fallback
  if (srWallet?.connected && srWallet?.publicKey) {
    const connect = async () => srWallet?.connect?.();
    const disconnect = async () => srWallet?.disconnect?.();
    return {
      source: "solana-react",
      publicKey: srWallet.publicKey?.toString?.(),
      connected: true,
      connect,
      disconnect
    }
  }

  // Not connected
  const connect = async () => {
    // Default connect action: try Wagmi Injected
    // You might want to trigger a modal here or just connect to the first connector
    const connector = connectors.find(c => c.id === 'injected') || connectors[0];
    if (connector) await connectAsync({ connector });
  };

  return {
    source: "none",
    connected: false,
    connect
  };
}
