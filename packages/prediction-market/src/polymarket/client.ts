
import { ClobClient, Side } from "@polymarket/clob-client";
import { ethers } from "ethers";
import { PredictionMarket, MarketData, OrderBook, OrderParams, OrderResult, Balance } from "../index";
import { PolymarketEvent, PolymarketMarket, PriceHistoryPoint } from "./types";

const GAMMA_API_URL = "https://gamma-api.polymarket.com";

export class PolymarketClient implements PredictionMarket {
    private clobClient: ClobClient;
    private chainId: number;

    constructor(chainId: number = 137, signer?: ethers.Signer) {
        this.chainId = chainId;
        this.clobClient = new ClobClient(
            "https://clob.polymarket.com",
            chainId,
            signer as any, // ClobClient expects AbstractSigner, ethers.Signer is compatible in standard setup, casting to any if strict checking fails due to version mismatch
            undefined // Credentials can be managed internally by ClobClient if signer is usually not enough for API keys, but ClobClient needs API keys derived. 
            // For hackathon simplicity, we assume signer is enough for L1/L2 interactions or we'll need to pass API creds if using CLOB API keys.
            // If signer is provided, ClobClient can derive keys or sign headers.
            // Documentation says: ClobClient(host, chainId, signer, creds?, ...)
        );
    }

    async getMarket(ticker: string): Promise<MarketData | null> {
        try {
            // Ticker is treated as Slug
            const markets = await this.getMarkets(undefined, ticker);
            if (!markets || markets.length === 0) return null;

            // Assume the first match is the correct one if searching by slug
            const market = markets[0];
            if (!market) return null; // Safe check
            return this.mapToMarketData(market);
        } catch (error) {
            console.error(`Polymarket Error (getMarket ${ticker}):`, error);
            return null;
        }
    }

    async searchMarkets(query: string): Promise<MarketData[]> {
        try {
            // Search via Gamma API events endpoint which supports query
            const events = await this.getEvents(10, query);
            if (!events) return [];

            // Extract markets from events
            const markets: MarketData[] = [];
            for (const event of events) {
                if (event.markets && event.markets.length > 0) {
                    // Just take the first valid market for the event for now
                    // or map all markets in the event
                    for (const m of event.markets) {
                        markets.push(this.mapToMarketData(m));
                    }
                }
            }
            return markets.slice(0, 10);
        } catch (error) {
            console.error("Polymarket Error (searchMarkets):", error);
            return [];
        }
    }

    async getOrderBook(ticker: string): Promise<OrderBook | null> {
        try {
            // Resolve Token ID for YES outcome
            const market = await this.getMarketInternal(ticker);
            if (!market) return null;

            const yesTokenId = this.getOutcomeTokenId(market, "Yes");
            if (!yesTokenId) return null;

            const ob = await this.clobClient.getOrderBook(yesTokenId);
            if (!ob) return null;

            return {
                bids: ob.bids.map(b => ({ price: Number(b.price), size: Number(b.size) })),
                asks: ob.asks.map(a => ({ price: Number(a.price), size: Number(a.size) }))
            };
        } catch (error) {
            console.error(`Polymarket Error (getOrderBook ${ticker}):`, error);
            return null;
        }
    }

    async placeOrder(order: OrderParams): Promise<OrderResult> {
        // ... (existing implementation)
        // I will just append the new method after placeOrder
        try {
            // Resolve Token ID
            const market = await this.getMarketInternal(order.ticker);
            if (!market) return {
                orderId: "", status: "failed", filledCount: 0, remainingCount: order.count, error: "Market not found"
            };

            const tokenId = this.getOutcomeTokenId(market, "Yes");
            if (!tokenId) return {
                orderId: "", status: "failed", filledCount: 0, remainingCount: order.count, error: "Validation error: No YES token found"
            };

            // ClobClient placeOrder
            // ClobClient.createOrder(args)
            const response = await this.clobClient.createOrder({
                tokenID: tokenId,
                price: order.price,
                side: order.side === 'buy' ? Side.BUY : Side.SELL,
                size: order.count,
                feeRateBps: 0, // Maker?
                nonce: Date.now() // Simple nonce
            });

            return {
                orderId: response.orderID as string, // Cast assuming string ID
                status: "open", // Optimistic
                filledCount: 0,
                remainingCount: order.count,
                error: undefined
            };

        } catch (error: any) {
            console.error(`Polymarket Error (placeOrder):`, error);
            return {
                orderId: "",
                status: "failed",
                filledCount: 0,
                remainingCount: order.count,
                error: error.message || "Unknown error"
            };
        }
    }

    async createOrderPayload(order: OrderParams): Promise<any> {
        try {
            const market = await this.getMarketInternal(order.ticker);
            if (!market) throw new Error("Market not found");

            const tokenId = this.getOutcomeTokenId(market, "Yes");
            if (!tokenId) throw new Error("Token ID not found");

            return {
                tokenID: tokenId,
                price: order.price,
                side: order.side === 'buy' ? Side.BUY : Side.SELL,
                size: order.count,
                feeRateBps: 0,
                nonce: Date.now()
            };
        } catch (error: any) {
            console.error("Polymarket createOrderPayload error:", error);
            throw error;
        }
    }



    async getBalance(): Promise<Balance> {
        // Not easily available via ClobClient without full state?
        // If we have a signer, we can fetch USDC balance on Polygon.
        // For now returning 0 or mock.
        return { available: 0, locked: 0, currency: "USDC" };
    }

    // --- Private Helpers ---

    private async getMarketInternal(slug: string): Promise<PolymarketMarket | null> {
        // Helper to fetch raw market
        const markets = await this.getMarkets(undefined, slug);
        return markets[0] || null;
    }

    private getOutcomeTokenId(market: PolymarketMarket, outcomeLabel: string = "Yes"): string | null {
        // Fallback: try to find outcome index.
        // Polymarket usually has outcomes property e.g. ["Yes", "No"] (order varies!)
        if (!market.outcomes || !market.clobTokenIds) return null;

        // Find index of "Yes" (case sensitive?)
        const index = market.outcomes.findIndex(o => o === "Yes" || o === "YES");
        if (index === -1) return null;

        return market.clobTokenIds[index] || null;
    }

    private mapToMarketData(m: PolymarketMarket): MarketData {
        // Try to find Yes price
        let price = 0;
        let index = -1;
        if (m.outcomes) {
            index = m.outcomes.findIndex(o => o === "Yes");
        }
        if (index !== -1 && m.outcomePrices) {
            try {
                price = Number(m.outcomePrices[index]);
            } catch (e) { }
        }

        return {
            id: m.slug, // Use Slug as ID
            title: m.question,
            description: m.description || "",
            outcome: "Yes",
            price: price,
            liquidity: Number(m.liquidity) || 0,
            volume: Number(m.volume) || 0,
            provider: "polymarket",
            url: `https://polymarket.com/event/${m.slug}`,
            expirationDate: m.endDate // ISO string
        };
    }

    // --- Existing Methods (Kept/Refined) ---

    async getEvents(limit: number = 20, query?: string): Promise<PolymarketEvent[]> {
        try {
            let url = `${GAMMA_API_URL}/events?limit=${limit}&active=true&closed=false`;
            if (query) {
                url += `&q=${encodeURIComponent(query)}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Gamma API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data as PolymarketEvent[];
        } catch (error) {
            console.error("Error fetching Polymarket events:", error);
            return [];
        }
    }

    async getMarkets(eventId?: string, slug?: string): Promise<PolymarketMarket[]> {
        try {
            let url = `${GAMMA_API_URL}/markets?active=true&closed=false`;
            if (eventId) {
                url += `&event_id=${eventId}`;
            }
            if (slug) {
                url += `&slug=${slug}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Gamma API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data as PolymarketMarket[];
        } catch (error) {
            console.error("Error fetching Polymarket markets:", error);
            return [];
        }
    }

    async getPriceHistory(tokenId: string, resolution: string = "1h", from?: number, to?: number): Promise<PriceHistoryPoint[]> {
        try {
            // Gamma API endpoint for candles
            let url = `${GAMMA_API_URL}/markets/${tokenId}/candles?resolution=${resolution}`;
            if (from) url += `&from=${from}`;
            if (to) url += `&to=${to}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Gamma API error: ${response.statusText}`);
            }
            const data = await response.json();
            // Map Gamma candle format to simplified PriceHistoryPoint usually [t, o, h, l, c, v]
            // or formatted objects. Assuming objects based on standard API practices.
            return data.map((candle: any) => ({
                t: candle.t || candle.timestamp,
                p: candle.c || candle.close // closing price
            }));
        } catch (error) {
            console.error(`Error fetching price history for ${tokenId}:`, error);
            return [];
        }
    }
}
