"use client";

import * as React from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Loader2, CheckCircle, Shield } from "lucide-react";
import { SafeManager } from "@repo/smart-account";

import { saveSafeAddress } from "../../app/actions/user"; // Adjust path
// import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useAccount, useWalletClient } from "wagmi";
import { UserRejectedRequestError } from "viem";
import { toast } from "@repo/ui/components/ui/sonner";

export function SafeDeployer({ onComplete }: { onComplete: () => void }) {
    // const { user } = usePrivy();
    // const { wallets } = useWallets();
    const { address, isConnected } = useAccount();
    const { data: walletClient } = useWalletClient();

    const [isDeploying, setIsDeploying] = React.useState(false);
    const [safeAddress, setSafeAddress] = React.useState<string | null>(null);
    const [error, setError] = React.useState<string | null>(null);



    const handleDeploy = async () => {
        if (!isConnected || !walletClient || !address) return;
        setIsDeploying(true);
        setError(null);

        try {
            console.log("Initializing SafeManager with signer:", address);
            // walletClient has request method compatible with EIP-1193
            const manager = new SafeManager({
                provider: walletClient as any,
                signer: address
            });

            const owners = [address];
            // Threshold 1 for single owner safe
            const deployedAddress = await manager.deploySafe(owners, 1);

            setSafeAddress(deployedAddress);

            // Save to backend
            // TODO: Ensure saveSafeAddress handles the new user context correctly
            // passing address as userId for now if privy user.id is missing
            await saveSafeAddress(address, deployedAddress, owners, "yellow-testnet");

            setTimeout(() => {
                onComplete();
            }, 1500);

        } catch (err: any) {
            console.error(err);
            if (err instanceof UserRejectedRequestError || err.name === 'UserRejectedRequestError' || err.message?.includes("User rejected")) {
                toast.error("Deployment Rejected", {
                    description: "You rejected the transaction request.",
                    action: {
                        label: "Retry",
                        onClick: handleDeploy
                    }
                });
            } else {
                setError(err.message || "Failed to deploy Safe");
            }
        } finally {
            setIsDeploying(false);
        }
    };

    if (safeAddress) {
        return (
            <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="pt-6 text-center space-y-4">
                    <div className="mx-auto h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Safe Smart Account Ready</h3>
                        <p className="text-sm text-muted-foreground font-mono mt-1">{safeAddress}</p>
                    </div>
                    <Button onClick={onComplete} className="w-full">Continue</Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Create Smart Account
                </CardTitle>
                <CardDescription>
                    Deploy your personal Safe vault to enable advanced trading and automations.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {error && (
                    <div className="p-3 text-sm bg-destructive/10 text-destructive rounded-md">
                        {error}
                    </div>
                )}

                <div className="bg-secondary/30 p-4 rounded-lg text-sm space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Network</span>
                        <span className="font-medium">Yellow Testnet</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-medium">Safe v1.4.1</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Gas Sponsor</span>
                        <span className="font-medium text-green-500">Free (Beta)</span>
                    </div>
                </div>

                <Button
                    onClick={handleDeploy}
                    disabled={isDeploying || !isConnected}
                    className="w-full"
                    size="lg"
                >
                    {isDeploying ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Deploying Safe...
                        </>
                    ) : (
                        "Create Smart Account"
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}
