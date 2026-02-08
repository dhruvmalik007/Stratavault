
import { marketDiscoveryService } from "./market-discovery.service";
import { marketService } from "./market.service";
import { MemoryManager } from "@repo/ai";

export interface RouteRecommendation {
    intent: string;
    bestMarketId: string;
    bestProvider: "kalshi" | "polymarket";
    price: number;
    reasoning: string;
    allOptions: Array<{
        id: string;
        title: string;
        provider: "kalshi" | "polymarket";
        price: number;
        url: string;
    }>;
}

export class MarketRoutingService {
    private static instance: MarketRoutingService;

    private constructor() { }

    public static getInstance(): MarketRoutingService {
        if (!MarketRoutingService.instance) {
            MarketRoutingService.instance = new MarketRoutingService();
        }
        return MarketRoutingService.instance;
    }

    async findBestRoute(intent: string): Promise<RouteRecommendation | null> {
        console.log(`[MarketRouting] Analyzing intent: "${intent}"`);

        // 1. Check MemoryManager (placeholder)
        // try { const mem = MemoryManager.getInstance(); ... } catch (e) {}

        // 2. Discover Markets via Intelligent Discovery (Uses LLM + Curated Map)
        const markets = await marketDiscoveryService.discoverMarkets(intent);

        if (!markets || markets.length === 0) {
            console.log("[MarketRouting] No markets found via Discovery.");
            return null;
        }

        // 3. Store active markets in memory
        try {
            const mem = MemoryManager.getInstance();
            const memories = markets.map(m => `Found Market possibly relevant to "${intent}": ${m.title} (${m.id}) Price: ${m.metadata?.last_price || 'N/A'}`);
            await mem.addMemories(memories, { userId: 'system' });
        } catch (e) { }

        // 4. Filter & Normalize (Existing Logic)
        const options = markets.map(m => {
            // Normalize prices
            let price = 0;
            if (m.platform === 'kalshi') {
                if (m.metadata) {
                    price = m.metadata.yes_ask || m.metadata.last_price || 0;
                    if (price > 1) price = price / 100;
                }
            } else if (m.platform === 'polymarket') {
                if (m.metadata) {
                    // Polymarket metadata (Event/Market) extraction logic
                    let markets = m.metadata.markets;
                    if (typeof markets === 'string') { try { markets = JSON.parse(markets); } catch (e) { } }

                    if (Array.isArray(markets) && markets.length > 0) {
                        const market = markets[0];
                        let prices = market.outcomePrices;
                        if (typeof prices === 'string') { try { prices = JSON.parse(prices); } catch (e) { } }

                        let outcomes = market.outcomes;
                        if (typeof outcomes === 'string') { try { outcomes = JSON.parse(outcomes); } catch (e) { } }

                        if (Array.isArray(outcomes) && Array.isArray(prices)) {
                            const yesIdx = outcomes.findIndex((o: string) => o === "Yes");
                            if (yesIdx !== -1 && prices[yesIdx]) {
                                price = Number(prices[yesIdx]);
                            }
                        }
                    } else if (m.metadata.outcomePrices) {
                        let prices = m.metadata.outcomePrices;
                        if (typeof prices === 'string') { try { prices = JSON.parse(prices); } catch (e) { } }
                        if (Array.isArray(prices) && prices.length > 0) {
                            price = Number(prices[0]) || 0;
                        }
                    }
                }
            }
            return {
                id: m.id,
                title: m.title,
                provider: m.platform as "kalshi" | "polymarket",
                price: price,
                url: m.url
            };
        }).filter(o => o.price > 0);

        if (options.length === 0) {
            console.log("[MarketRouting] No priced markets found (after filter).");
            return null;
        }

        // 5. Rank
        options.sort((a, b) => a.price - b.price);
        const best = options[0]; // Fix: Define best before checking it

        if (!best) {
            console.log("[MarketRouting] No best market found after sorting.");
            return null;
        }

        return {
            intent,
            bestMarketId: best.id,
            bestProvider: best.provider,
            price: best.price,
            reasoning: `Best price found on ${best.provider} at $${best.price.toFixed(2)} vs others.`,
            allOptions: options
        };
    }
}

export const marketRoutingService = MarketRoutingService.getInstance();
