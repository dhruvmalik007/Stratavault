
import { ClobClient } from "@polymarket/clob-client";
import { PolymarketEvent, PolymarketMarket, PriceHistoryPoint } from "./types";

const GAMMA_API_URL = "https://gamma-api.polymarket.com";

export class PolymarketClient {
    private clobClient: ClobClient;

    constructor(chainId: number = 137) {
        this.clobClient = new ClobClient(
            "https://clob.polymarket.com",
            chainId,
            undefined,
            undefined
        );
    }

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

    async getMarkets(eventId?: string): Promise<PolymarketMarket[]> {
        try {
            let url = `${GAMMA_API_URL}/markets?active=true&closed=false`;
            if (eventId) {
                url += `&event_id=${eventId}`;
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

    async getOrderbook(tokenId: string) {
        try {
            return await this.clobClient.getOrderBook(tokenId);
        } catch (error) {
            console.error(`Error fetching orderbook for ${tokenId}:`, error);
            return null;
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
