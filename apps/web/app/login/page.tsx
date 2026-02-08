"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import * as React from "react";
import { useWalletIdentity } from "@/components/solana/useWalletIdentity";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { connect, connected, source } = useWalletIdentity();
  const [email, setEmail] = React.useState("");
  const [busy, setBusy] = React.useState<string | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (connected) {
      router.push("/dashboard");
    }
  }, [connected, router]);

  async function doLogin(method: "email" | "google" | "wallet") {
    setErr(null); setBusy(method);
    try {
      if (method === "wallet") {
        if (connect) await connect();
      } else {
        // Mock login for now or implement other auth
        setErr("Only wallet login supported in this version");
      }
    } catch (e: any) {
      setErr(e?.message ?? "Login failed");
    } finally { setBusy(null); }
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Log in</CardTitle>
          <CardDescription>Sign in with your wallet</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Button variant="outline" disabled={!!busy} onClick={() => doLogin("wallet")}>{busy === "wallet" ? "Connecting..." : "Connect Wallet"}</Button>
          </div>
          {err ? <div className="text-xs text-rose-500">{err}</div> : null}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground">
            Need help? <Link href="/signup" className="underline">Connect Wallet</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
