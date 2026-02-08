import { CopilotRuntime, copilotRuntimeNodeHttpEndpoint, OpenAIAdapter } from "@copilotkit/runtime";
import { OpenAI } from "openai";
import { marketService } from "../../services/market.service";

const openAIAdapter = new OpenAIAdapter({
    openai: new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" }) as any,
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
});

const runtime = new CopilotRuntime({
    actions: [
        {
            name: "searchMarkets",
            description: "Search for prediction markets on Kalshi and Polymarket based on a user's query.",
            parameters: [
                {
                    name: "query",
                    type: "string",
                    description: "The search query (e.g., 'tech stocks', 'will Trump win', 'crypto prices').",
                    required: true,
                },
                {
                    name: "platform",
                    type: "string",
                    description: "Filter by platform ('kalshi', 'polymarket', or 'all'). Defaults to 'all'.",
                    required: false,
                },
            ],
            handler: async ({ query, platform }: { query: string, platform?: string }) => {
                // Direct Service Call
                return await marketService.searchMarkets(query, platform);
            },
        },
        {
            name: "createOrder",
            description: "Create a prediction market order payload for the user to sign. Ask for confirmation on price type (Market/Limit).",
            parameters: [
                {
                    name: "marketId",
                    type: "string",
                    description: "The ID or slug of the market to trade on.",
                    required: true,
                },
                {
                    name: "side",
                    type: "string",
                    description: "The side to bet on ('buy' or 'sell').",
                    required: true,
                },
                {
                    name: "size",
                    type: "number",
                    description: "The number of shares or amount to trade.",
                    required: true,
                },
                {
                    name: "orderType",
                    type: "string",
                    description: "The type of order: 'market' or 'limit'.",
                    required: true,
                },
                {
                    name: "price",
                    type: "number",
                    description: "The limit price (between 0 and 1). Required if orderType is 'limit'. For 'market', it's ignored or set to market price.",
                    required: false,
                }
            ],
            handler: async ({ marketId, side, size, orderType, price }: { marketId: string, side: string, size: number, orderType: string, price?: number }) => {
                // If Market Order: price is usually not needed or handled differently by CLOB.
                // However, Polymarket CLOB usually requires a price (limit buffer) even for market-like behavior or we use FOK.
                // For this implementation, if 'market', we might fetch current price or use a safe limit.

                let effectivePrice = price;
                if (orderType === 'market') {
                    // Logic to fetch current best ask/bid would go here.
                    // For now, we'll assume the user or agent provides a price, 
                    // OR we set a wide limit (e.g. 0.99 for buy, 0.01 for sell) for immediate fill if allowed.
                    // But simplified: Just ask the user for a price if Limit, or imply a price if Market (not implemented fully).
                    // Returning a message if price is missing for Limit.
                    effectivePrice = 0; // Placeholder for "Market" logic downstream
                }

                if (orderType === 'limit' && (price === undefined || price === null)) {
                    return { error: "Price is required for Limit orders." };
                }

                // Call MarketService to get Payload
                try {
                    const result = await marketService.createOrderPayloadWithPrice(marketId, side as "buy" | "sell", size, effectivePrice || 0);
                    return {
                        status: "ready_to_sign",
                        ...result
                    };
                } catch (e: any) {
                    return { error: e.message };
                }
            }
        }
    ],
});

export const POST = copilotRuntimeNodeHttpEndpoint({
    endpoint: "/api/copilotkit",
    runtime,
    serviceAdapter: openAIAdapter,
}) as any;
