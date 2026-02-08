
/**
 * @repo/prediction-market
 */

// Polymarket
export * from "./polymarket/client";
export * from "./polymarket/types";

// Kalshi
export * from "./kalshi/client";
export * from "./kalshi/types";

// Common Interface
export interface MarketData {
    id: string; // Ticker or Token ID
    title: string;
    description: string;
    outcome: string; // "Yes", "No", "Trump", "Harris"
    price: number; // Current price (0-1 or 0-100)
    liquidity?: number;
    volume?: number;
    provider: "kalshi" | "polymarket";
    url?: string;
    image?: string;
    metrics?: {
        volume24h?: number;
        liquidity?: number;
    };
    expirationDate?: string;
}

export interface OrderBook {
    bids: { price: number; size: number }[];
    asks: { price: number; size: number }[];
}

export interface OrderParams {
    ticker: string; // Market ID
    side: "buy" | "sell";
    price: number; // Limit price
    count: number; // Number of contracts
    expiration?: number; // Unix timestamp
}

export interface OrderResult {
    orderId: string;
    status: "filled" | "open" | "canceled" | "failed";
    filledCount: number;
    remainingCount: number;
    error?: string;
}

export interface Balance {
    available: number;
    locked: number;
    currency: string;
}

export interface PredictionMarket {
    getMarket(ticker: string): Promise<MarketData | null>;
    searchMarkets(query: string): Promise<MarketData[]>;
    getOrderBook(ticker: string): Promise<OrderBook | null>;
    placeOrder(order: OrderParams): Promise<OrderResult>;
    createOrderPayload(order: OrderParams): Promise<any>; // Returns platform-specific payload for frontend signing
    getBalance(): Promise<Balance>;
}

export const predictionMarket = () => {
    console.log("prediction-market package ready!");
};