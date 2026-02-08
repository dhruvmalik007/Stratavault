import { MarketApi, ExchangeApi, Configuration, Market, Orderbook, Trade, PortfolioApi, CommunicationsApi, EventsApi, MultivariateApi, OrdersApi } from "kalshi-typescript";
import { PredictionMarket, MarketData, OrderBook, OrderParams, OrderResult, Balance } from "../index";

export class KalshiClient implements PredictionMarket {
    private _marketApi: MarketApi;
    private _exchangeApi: ExchangeApi;
    private _portfolioApi: PortfolioApi;
    private _communicationsApi: CommunicationsApi;
    private _eventsApi: EventsApi;
    private _multivariateApi: MultivariateApi;
    private _ordersApi: OrdersApi;

    private config: Configuration;

    constructor(apiKey?: string, apiSecret?: string) {
        const keyId = apiKey || ""; // || process.env.KALSHI_API_KEY || "";
        const privateKey = apiSecret || ""; // || process.env.KALSHI_API_SECRET || "";

        this.config = new Configuration({
            basePath: "https://api.elections.kalshi.com/trade-api/v2",
            apiKey: keyId,
            privateKeyPem: privateKey,
        });

        this._marketApi = new MarketApi(this.config);
        this._exchangeApi = new ExchangeApi(this.config);
        this._portfolioApi = new PortfolioApi(this.config);
        this._communicationsApi = new CommunicationsApi(this.config);
        this._eventsApi = new EventsApi(this.config);
        this._multivariateApi = new MultivariateApi(this.config);
        this._ordersApi = new OrdersApi(this.config);
    }

    public get market() { return this._marketApi; }
    public get exchange() { return this._exchangeApi; }
    public get portfolio() { return this._portfolioApi; }
    public get communications() { return this._communicationsApi; }
    public get events() { return this._eventsApi; }
    public get multivariate() { return this._multivariateApi; }
    public get orders() { return this._ordersApi; }

    async getMarket(ticker: string): Promise<MarketData | null> {
        try {
            const response = await this._marketApi.getMarket(ticker);
            const market = response.data.market;
            if (!market) return null;
            return this.mapToMarketData(market);
        } catch (error) {
            console.error(`Kalshi SDK Error (getMarket ${ticker}):`, error);
            return null;
        }
    }

    async searchMarkets(query: string): Promise<MarketData[]> {
        // Since Kalshi doesn't have a direct search API for markets by text,
        // we fetch recent events/markets and filter client-side.
        let allItems: any[] = [];
        let cursor: string | undefined = undefined;
        // Fetch up to 2 pages to populate search index for speed
        const MAX_PAGES = 2;
        const PER_PAGE_LIMIT = 50;

        try {
            // First try to just get markets directly
            for (let i = 0; i < MAX_PAGES; i++) {
                // Correct signature based on SDK definition:
                // limit, cursor, eventTicker, seriesTicker, minCreatedTs, maxCreatedTs, minUpdatedTs, maxCloseTs, minCloseTs, minSettledTs, maxSettledTs, status
                const response = await this._marketApi.getMarkets(
                    PER_PAGE_LIMIT,
                    cursor,
                    undefined, // eventTicker 
                    undefined, // seriesTicker
                    undefined, // minCreatedTs
                    undefined, // maxCreatedTs
                    undefined, // minUpdatedTs
                    undefined, // maxCloseTs
                    undefined, // minCloseTs
                    undefined, // minSettledTs
                    undefined, // maxSettledTs
                    "open" as any // status needs to be cast if strict enum is required, or passed as string matching enum
                );
                const markets = response.data.markets || [];
                allItems = allItems.concat(markets);
                cursor = response.data.cursor;
                if (!cursor) break;
            }

            const lowerQuery = query.toLowerCase();
            const filtered = allItems.filter((item: any) => {
                const title = (item.title || "").toLowerCase();
                const ticker = (item.ticker || "").toLowerCase();
                const subtitle = (item.subtitle || "").toLowerCase();
                return title.includes(lowerQuery) || ticker.includes(lowerQuery) || subtitle.includes(lowerQuery);
            });

            return filtered.slice(0, 10).map(m => this.mapToMarketData(m));
        } catch (error) {
            console.error("Kalshi SDK Error (searchMarkets):", error);
            return [];
        }
    }

    async getOrderBook(ticker: string): Promise<OrderBook | null> {
        try {
            const response = await this._marketApi.getMarketOrderbook(ticker);
            const ob = response.data.orderbook;
            if (!ob) return null;

            // Map 'yes' bids to Bids. Map 'no' bids to Asks (100 - price).
            // Based on type defs: Orderbook has 'yes_dollars'?: string[][], 'no_dollars'?: string[][]
            // Also 'true'/'false' but those might be legacy.
            // Using 'yes_dollars' as primary source if available.

            // Safe access using any to avoid strict type checks on ambiguous fields until confirmed
            const obAny = ob as any;
            const yesBids = ob.yes_dollars || obAny.yes || obAny['true'] || [];
            const noBids = ob.no_dollars || obAny.no || obAny['false'] || [];

            // Helper to parse price/size. Kalshi returns [price, size]
            const parseLevel = (level: any[]) => ({
                price: Number(level[0]) / 100,
                size: Number(level[1])
            });

            const bids = yesBids.map(parseLevel);

            // For NO bids, these are technically ASKs for YES contracts.
            // Price P for NO means I can buy NO at P.
            // Buying NO at P is equivalent to Selling YES at 100-P.
            // So a NO Bid at P becomes a YES Ask at 100-P.
            const asks = noBids.map((level: any[]) => {
                const p = Number(level[0]);
                const s = Number(level[1]);
                return {
                    price: (100 - p) / 100,
                    size: s
                };
            }).sort((a: any, b: any) => a.price - b.price); // Sort asks ascending

            return { bids, asks };
        } catch (error) {
            console.error(`Kalshi SDK Error (getOrderBook ${ticker}):`, error);
            return null;
        }
    }

    async placeOrder(order: OrderParams): Promise<OrderResult> {
        try {
            // Kalshi uses cents for price, so multiply by 100
            const priceCents = Math.floor(order.price * 100);

            // Check Action: buy/sell
            const action = order.side === 'buy' ? 'buy' : 'sell';

            // Provide current timestamp if not
            const timestamp = Math.floor(Date.now() / 1000);

            // Use OrdersApi to create order
            // Use OrdersApi to create order
            const response = await this._ordersApi.createOrder({
                ticker: order.ticker,
                action: action as any, // 'buy' or 'sell'
                type: 'limit' as any,
                yes_price: priceCents,
                count: order.count,
                client_order_id: `stratavault-${timestamp}-${Math.random().toString(36).substring(7)}`,
                side: 'yes' as any, // Stratavault default: only trading YES contracts for now
                expiration_ts: order.expiration
            });

            const o = response.data.order!;
            return {
                orderId: o.order_id!,
                status: o.status === 'executed' ? 'filled' : 'open',
                filledCount: (o as any).filled_count || 0, // Assuming filled_count exists on runtime response
                remainingCount: (o as any).remaining_count || order.count,
                error: undefined
            };
        } catch (error: any) {
            console.error(`Kalshi SDK Error (placeOrder):`, error);
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
        // Kalshi doesn't support off-chain signing for trade execution in the same way as EVM/Polymarket.
        // API keys are required for execution.
        // We return the params so the frontend could potentially call the API if it had keys,
        // or to indicate this isn't supported for Safe-style signing.
        return {
            platform: "kalshi",
            ticker: order.ticker,
            side: order.side,
            count: order.count,
            price: order.price,
            note: "Kalshi requires API Key execution. Payload for reference only."
        };
    }

    async getBalance(): Promise<Balance> {
        try {
            const response = await this._portfolioApi.getBalance();
            const b = response.data;
            // Based on GetBalanceResponse: { balance: number, portfolio_value: number, updated_ts: number }
            return {
                available: b.balance || 0,
                locked: 0, // Not explicitly provided
                currency: "USD"
            }
        } catch (error) {
            console.error(`Kalshi SDK Error (getBalance):`, error);
            return { available: 0, locked: 0, currency: "USD" };
        }
    }

    // Helper to map Kalshi Market to Stratavault MarketData
    private mapToMarketData(m: any): MarketData {
        return {
            id: m.ticker,
            title: m.title,
            description: m.subtitle || "",
            outcome: "Yes", // Default to Yes contract
            price: (m.last_price || m.floor_price || 0) / 100, // Return normalized 0-1
            liquidity: m.liquidity || 0,
            volume: m.volume || 0,
            provider: "kalshi",
            url: `https://kalshi.com/markets/${m.ticker}`,
            expirationDate: m.expiration_date
        };
    }
}
