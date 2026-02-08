"use client";

import * as React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Spinner } from "@repo/ui/components/ui/spinner";
// import { useActiveWallet } from "@privy-io/react-auth";

function truncate(addr?: string) {
  if (!addr) return "";
  return addr.length > 10 ? `${addr.slice(0, 4)}…${addr.slice(-4)}` : addr;
}

export function AuthWalletButton() {
  // const { connect, setActiveWallet, wallet, network } = useActiveWallet();

  return null; // Placeholder to avoid breaking builds
}
