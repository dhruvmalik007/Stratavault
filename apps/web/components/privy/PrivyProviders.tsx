"use client";

import React from "react";
// import { PrivyProvider } from "@privy-io/react-auth";

// dynamic optional utilities from @solana/kit for RPC config
// eslint-disable-next-line @typescript-eslint/no-var-requires
let SolanaKit: any = {};
try { SolanaKit = require("@solana/kit"); } catch (_) { }

export function PrivyProviders({ children }: { children: any }) {
  // disabled for now to remove hard dependency on @privy-io/react-auth
  return <>{children}</>;
}
