
import { generateText, LanguageModelV1 } from "ai";
import { openai } from "@ai-sdk/openai";
import { marketService } from "./market.service";

// Known markets that are hard to find via keyword search or are "featured"
const KNOWN_MARKETS: Record<string, string> = {
    // Perplexity found this for "Bitcoin 100k"
    "bitcoin": "what-price-will-bitcoin-hit-before-2027",
    "btc": "what-price-will-bitcoin-hit-before-2027",
    "bitcoin 100k": "what-price-will-bitcoin-hit-before-2027",
};

export class MarketDiscoveryService {
    private static instance: MarketDiscoveryService;

    private constructor() { }

    public static getInstance(): MarketDiscoveryService {
        if (!MarketDiscoveryService.instance) {
            MarketDiscoveryService.instance = new MarketDiscoveryService();
        }
        return MarketDiscoveryService.instance;
    }

    /**
     * Intellegently discovers markets using LLM intent analysis and curated maps.
     */
    async discoverMarkets(userQuery: string): Promise<any[]> {
        console.log(`[MarketDiscovery] Processing query: "${userQuery}"`);

        // 1. Check Known Markets (Fast Path)
        const normalized = userQuery.toLowerCase();
        for (const [key, id] of Object.entries(KNOWN_MARKETS)) {
            if (normalized.includes(key)) {
                console.log(`[MarketDiscovery] Found known market map for key "${key}" -> ${id}`);
                // Fetch full details for this specific market ID
                // MarketService needs a method to get by ID, but createOrderPayload does it.
                // We'll use searchMarkets with the ID (Polymarket search often works with slug)
                // Or we can add a getMarket(id) to MarketService. 
                // For now, let's try searching specifically for the slug which usually works on Poly.
                const results = await marketService.searchMarkets(id);
                if (results.markets.length > 0) return results.markets;
            }
        }

        // 2. LLM Intent Analysis (Smart Path)
        // If query is complex, use LLM to extract "searchable keywords" or "platform specific query"
        // e.g. "Will Bitcoin hit 100k" -> "Bitcoin Price 2026" (if valid)
        // This simulates the "Perplexity-like" breakdown.

        let refinedQuery = userQuery;
        try {
            // Only use LLM if query is long/complex
            if (userQuery.split(' ').length > 3) {
                const { text } = await generateText({
                    model: openai("gpt-4o") as unknown as LanguageModelV1,
                    prompt: `You are a market search assistant. The user wants to find a prediction market for: "${userQuery}".
                     Convert this into a short, effective keyword search query for Polymarket or Kalshi. 
                     Examples:
                     "Will Trump win?" -> "Trump"
                     "Bitcoin 100k?" -> "Bitcoin Price"
                     "Fed Rate cut?" -> "Fed Rates"
                     Return ONLY the keyword string.`
                });
                refinedQuery = text.trim().replace(/"/g, '');
                console.log(`[MarketDiscovery] LLM refined query: "${userQuery}" -> "${refinedQuery}"`);
            }
        } catch (e) {
            console.warn("[MarketDiscovery] LLM refinement failed, using original query.", e);
        }

        // 3. Execute Search
        const searchRes = await marketService.searchMarkets(refinedQuery);
        return searchRes.markets;
    }
}

export const marketDiscoveryService = MarketDiscoveryService.getInstance();
