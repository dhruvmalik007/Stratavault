"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { useWalletIdentity } from "@/components/solana/useWalletIdentity";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const { connect, connected } = useWalletIdentity();
  const [busy, setBusy] = React.useState<string | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (connected) router.replace("/creator-onboarding");
  }, [connected, router]);

  async function doLogin(method: "wallet") {
    setErr(null);
    setBusy(method);
    try {
      if (connect) await connect();
    } catch (e: any) {
      setErr(e?.message ?? "Signup failed");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <Card className="w-full max-w-md shadow-md transition-shadow hover:shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Connect Wallet</CardTitle>
          <CardDescription>Connect a wallet to start trading</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" disabled={!!busy} onClick={() => doLogin("wallet")}>
            {busy === "wallet" ? "Connecting..." : "Connect Wallet"}
          </Button>
          {err ? <div className="text-xs text-rose-500">{err}</div> : null}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="underline">Log in</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
