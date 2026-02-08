"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWalletIdentity } from "../solana/useWalletIdentity";
import { Spinner } from "@repo/ui/components/ui/spinner"; // Assuming Spinner exists or use simple loader

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const wallet = useWalletIdentity();
  // Simple protection: if not connected, redirect.
  // Ideally we check for a session/signature, but for now connection is the baseline.
  const isLoading = false; // logic simplified

  useEffect(() => {
    if (!wallet.connected) {
      router.push("/");
    }
  }, [wallet.connected, router]);

  if (!wallet.connected) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="h-8 w-8" />
        <span className="ml-2">Please connect wallet...</span>
      </div>
    );
  }


  return <>{children}</>;
}
