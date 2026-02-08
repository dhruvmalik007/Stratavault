"use client";

import { SafeDeployer } from "../../components/safe/SafeDeployer";

import * as React from "react";
import { Stepper } from "@repo/ui/components/Stepper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { TxnStatus } from "@repo/ui/components/TxnStatus";
import { WalletConnectButton } from "../../components/solana/WalletConnectButton";
import { useSendMemoTx } from "../../components/solana/useSendMemoTx";
import { EVMConnectButton } from "../../components/safe/EVMConnectButton";

const steps = [
  { id: "wallet", label: "Connect" },
  { id: "create-safe", label: "Create Smart Account" },
  { id: "market", label: "Pick Market" },
  { id: "design", label: "Design Prediction" },
  { id: "size", label: "Size Position" },
  { id: "confirm", label: "Confirm & Trade" },
];

import { MarketPicker } from "../../components/market/MarketPicker";

export default function InvestorOnboardingPage(): any {
  const [current, setCurrent] = React.useState(0);
  const [memo, setMemo] = React.useState("hello-predict");
  const [selectedMarketId, setSelectedMarketId] = React.useState<string | null>(null);
  const { state, sendMemo } = useSendMemoTx();

  const handleMarketSelection = (marketId: string) => {
    console.log("Market Selected:", marketId);
    setSelectedMarketId(marketId);
    setCurrent(3); // Move to Design Prediction
  };

  const canNext = React.useMemo(() => {
    switch (current) {
      case 0:
        return true; // wallet connect handled by button
      case 1:
        return true; // MVP - market selection later
      case 2:
        return !!selectedMarketId; // Require selection? Or allow skip? allowing skip for now if via Continue button, but MarketPicker handles its own flow
      case 3:
        return true; // MVP
      default:
        return true;
    }
  }, [current, selectedMarketId]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Investor Onboarding</h1>
        <p className="text-sm text-muted-foreground">Guided flow to place your first trade.</p>
      </div>

      <Stepper steps={steps} currentStep={current} onStepChange={setCurrent} />

      {current === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Connect Strategy Wallet</CardTitle>
            <CardDescription>Connect your Ethereum/Polygon wallet to deploy Safe</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <WalletConnectButton /> */}
            <EVMConnectButton />
          </CardContent>
        </Card>
      )}

      {current === 1 && (
        <SafeDeployer onComplete={() => setCurrent(2)} />
      )}

      {current === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Pick a Market</CardTitle>
            <CardDescription>Describe your intent to find the best odds.</CardDescription>
          </CardHeader>
          <CardContent>
            <MarketPicker onMarketSelected={handleMarketSelection} />
          </CardContent>
        </Card>
      )}

      {current === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Design Prediction</CardTitle>
            <CardDescription>MVP placeholder - distribution editor will be here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Use templates, parameters, or freeform editor (coming soon).</p>
          </CardContent>
        </Card>
      )}

      {current === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Size Position</CardTitle>
            <CardDescription>Set your trade size</CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="memo">Demo memo (tx note)</Label>
            <Input id="memo" value={memo} onChange={(e) => setMemo(e.target.value)} />
          </CardContent>
        </Card>
      )}

      {current === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Confirm & Trade</CardTitle>
            <CardDescription>Sends a demo memo transaction to verify wallet + flow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <TxnStatus state={state} />
            <div className="flex justify-end gap-2">
              <Button onClick={async () => {
                // Execute Trade
                await sendMemo(memo);

                // Also log to DB or Request Execution
                try {
                  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
                  const res = await fetch(`${apiBase}/api/trade`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      marketId: selectedMarketId || "test-market",
                      marketTitle: "Bitcoin hitting 100k",
                      side: "Buy",
                      size: 10,
                      price: 0.45,
                      mode: 'proposal' // Prefer proposal if available
                    })
                  });

                  const data = await res.json();
                  if (data.type === 'payload') {
                    console.log("Received Unsigned Payload:", data.payload);
                    // Here we would trigger Safe execution
                    // alert(`Ready to Sign: ${data.platform} transaction`);
                    // For now, treat as success in UI for demo
                  } else if (data.success) {
                    console.log("Trade executed (Paper):", data.orderId);
                  }

                } catch (e) {
                  console.error("Failed to execute/log trade", e);
                }
              }}>Confirm & Execute (Safe/Agent)</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between">
        <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((c) => Math.max(0, c - 1))}>Back</Button>
        {/* Hide Continue for Safe step as it handles its own progression */}
        {current !== 1 && (
          <Button disabled={!canNext || current === steps.length - 1} onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}>Continue</Button>
        )}
      </div>
    </div>
  );
}
