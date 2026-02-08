
"use client";

import { useState } from "react";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { RecommendedTraceCard } from "./RecommendedTraceCard";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Search } from "lucide-react";

export function MarketPicker({ onMarketSelected }: { onMarketSelected: (marketId: string) => void }) {
    const [intent, setIntent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [recommendation, setRecommendation] = useState<any>(null);

    useCopilotReadable({
        description: "The user is looking to pick a prediction market to trade on.",
        value: {
            currentIntent: intent,
            hasRecommendation: !!recommendation
        }
    });

    useCopilotAction({
        name: "findMarket",
        description: "Finds the best prediction market for a given user intent (e.g. 'Bet on Trump').",
        parameters: [
            {
                name: "intent",
                type: "string",
                description: "The user's trading intent or query."
            }
        ],
        handler: async ({ intent }) => {
            setIntent(intent);
            await fetchRecommendation(intent);
            return "Searching for markets...";
        },
        render: "Searching markets..."
    });

    const fetchRecommendation = async (query: string) => {
        setIsLoading(true);
        try {
            // Call the API we created in apps/api
            const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
            const res = await fetch(`${apiBase}/api/market-route?intent=${encodeURIComponent(query)}`);
            const data = await res.json();

            if (res.ok) {
                setRecommendation(data);
            } else {
                console.error("Market route error:", data);
            }
        } catch (e) {
            console.error("Failed to fetch recommendation:", e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            {!recommendation ? (
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Describe your bet (e.g. 'Will Bitcoin hit 100k?')"
                                value={intent}
                                onChange={(e) => setIntent(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && fetchRecommendation(intent)}
                            />
                            <Button onClick={() => fetchRecommendation(intent)} disabled={isLoading}>
                                {isLoading ? "Scanning..." : <Search className="w-4 h-4" />}
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Or ask the AI Assistant in the sidebar to "Find best odds for..."
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <RecommendedTraceCard recommendation={recommendation} onSelect={onMarketSelected} />
            )}
        </div>
    );
}
