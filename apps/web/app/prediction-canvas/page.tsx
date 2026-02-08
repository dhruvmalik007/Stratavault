"use client";

import { useState } from "react";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { experimental_useObject as useObject } from "ai/react";
import { Market, MarketCard } from "@/components/prediction/MarketCard";
import { Sparkles, ArrowRight, Search, Loader2 } from "lucide-react";
import { z } from "zod";

// Schema must match the server action
const MarketSchema = z.object({
    markets: z.array(z.object({
        id: z.string(),
        title: z.string(),
        platform: z.enum(['kalshi', 'polymarket']),
        url: z.string(),
        metadata: z.any().optional(),
        price: z.number().optional(),
        volume: z.string().optional()
    }))
});

export default function PredictionCanvas() {
    const [copilotMarkets, setCopilotMarkets] = useState<Market[]>([]); // Markets from Copilot
    const [genQuery, setGenQuery] = useState("");

    // Vercel AI SDK useObject hook
    const { object, submit, isLoading } = useObject({
        api: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"}/api/gen-search`, // Use backend URL properly
        schema: MarketSchema,
    });

    // Combine manual AI results + Copilot results
    // We prioritize the 'object' (streaming results) if active
    const streamingMarkets = (object as any)?.markets;
    const displayMarkets = (streamingMarkets as Market[]) || copilotMarkets;

    const handleGenSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!genQuery.trim()) return;
        submit(genQuery);
    };

    // Make the current markets readable to the Copilot so it can answer follow-up questions about them
    useCopilotReadable({
        description: "The list of currently displayed prediction markets on the canvas.",
        value: displayMarkets,
    });

    // Define the action that the Copilot can call
    useCopilotAction({
        name: "renderMarkets",
        available: "remote",
        description: "Render the prediction markets found by the search on the canvas.",
        parameters: [
            {
                name: "markets",
                type: "object[]",
                description: "The list of markets found by the backend search.",
                required: true,
            },
            {
                name: "logs",
                type: "string[]",
                description: "Execution logs showing the search steps, filters applied, and reasoning. Use these to explain your findings.",
                required: false,
            },
        ],
        handler: async ({ markets: foundMarkets, logs }) => {
            if (foundMarkets) {
                setCopilotMarkets(foundMarkets);
            }
            if (logs) {
                console.log("Copilot Reasoning Logs:", logs);
            }
        },
        render: ({ status }) => status === "complete" ? "Markets rendered on canvas." : "Rendering markets...",
    });

    // Connect Copilot to GenUI Streaming
    useCopilotAction({
        name: "searchMarketsGen",
        available: "remote",
        description: "Search for prediction markets using Generative AI streaming to the canvas.",
        parameters: [
            {
                name: "query",
                type: "string",
                description: "The search query for markets (e.g. 'crypto', 'elections')",
                required: true
            }
        ],
        handler: async ({ query }) => {
            // Trigger the useObject streaming
            submit(query);
            return "Searching markets on canvas...";
        }
    });

    return (
        <div className="flex flex-col min-h-[calc(100vh-80px)] bg-background/50 relative overflow-hidden">
            {/* Ambient background effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-grid-white/[0.02]">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2 border border-primary/20">
                        <Sparkles className="w-3 h-3 mr-2" />
                        Generative UI Market Discovery
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        What will happen next?
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                        Ask the Copilot sidebar to find markets for you.
                        <br />
                        <span className="text-sm opacity-70">Try "Find markets about crypto"</span>
                    </p>
                </div>

                {/* Results Grid */}
                {displayMarkets && displayMarkets.length > 0 ? (
                    <div className="w-full max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" />
                                Found {displayMarkets.length} Markets
                            </h2>
                            <button
                                onClick={() => { setCopilotMarkets([]); window.location.reload(); }}
                                // Hacky reload or state reset, ideal is reset object but useObject doesn't expose easy reset without raw fetch
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Clear Results
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {displayMarkets.map((market, idx) => (
                                <div key={market?.id || idx} className="animate-in zoom-in-50 duration-500 fill-mode-backwards" style={{ animationDelay: `${idx * 100}ms` }}>
                                    <MarketCard market={market!} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    !isLoading && (
                        <div className="flex flex-col items-center justify-center flex-grow opacity-50 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center">
                                <Search className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                            <p className="text-muted-foreground text-sm">No markets displayed yet. Try the search bar above!</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
