"use client";

import React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Spinner } from "@repo/ui/components/ui/spinner";
// import { PrivyProvider, useActiveWallet } from "@privy-io/react-auth";
import { useWalletIdentity } from "./useWalletIdentity";

function truncate(pubkey: string) {
  return pubkey.length > 10 ? `${pubkey.slice(0, 4)}…${pubkey.slice(-4)}` : pubkey;
}

export function WalletConnectButton() {
  // const { wallet, connect } = useActiveWallet();
  const { connect, connected, publicKey } = useWalletIdentity();
  const [error, setError] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  async function onConnect() {
    setError(null);
    try {
      if (connect) await connect();
    } catch (e: any) {
      setError(e?.message ?? "Failed to connect wallet");
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="default" size="sm" disabled>Connect Wallet</Button>
      </div>
    );
  }

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          {truncate(publicKey)}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="default" size="sm" onClick={onConnect}>Connect Wallet</Button>
      {error ? <span className="text-xs text-rose-500">{error}</span> : null}
    </div>
  );
}
