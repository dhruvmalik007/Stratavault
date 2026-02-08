import { MarketApi, ExchangeApi, Configuration, Market, Orderbook, Trade, PortfolioApi, CommunicationsApi, EventsApi, MultivariateApi } from "kalshi-typescript";

export class KalshiClient {
    private _marketApi: MarketApi;
    private _exchangeApi: ExchangeApi;
    private _portfolioApi: PortfolioApi;
    private _communicationsApi: CommunicationsApi;
    private _eventsApi: EventsApi;
    private _multivariateApi: MultivariateApi;

    private config: Configuration;

    constructor(apiKey?: string, apiSecret?: string) {
        // TEMPORARY: Default to empty keys to avoid ECONNRESET on public endpoints.
        // Kalshi Auth requires specific timestamp headers which the SDK might be mishandling.
        // Public access is sufficient for Search.
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
    }

    public get market() { return this._marketApi; }
    public get exchange() { return this._exchangeApi; }
    public get portfolio() { return this._portfolioApi; }
    public get communications() { return this._communicationsApi; }
    public get events() { return this._eventsApi; }
    public get multivariate() { return this._multivariateApi; }

    async getEvents(limit: number = 20, cursor?: string): Promise<any> {
        try {
            // Using EventsApi directly if available
            // Based on exports, EventsApi exists.
            // We try generic listing. Status "open" might be a valid filter.
            const response = await this._eventsApi.getEvents(limit, cursor);
            return response.data;
        } catch (error) {
            console.error("Kalshi SDK Error (getEvents):", error);
            // Fallback to markets if events specific call fails or differs in signature
            try {
                return await this._marketApi.getMarkets(limit, cursor);
            } catch (innerError) {
                return { markets: [] };
            }
        }
    }

    async getMarket(ticker: string): Promise<any> {
        try {
            const response = await this._marketApi.getMarket(ticker);
            return response.data;
        } catch (error) {
            console.error(`Kalshi SDK Error (getMarket ${ticker}):`, error);
            return null;
        }
    }

    async getOrderbook(ticker: string): Promise<any> {
        try {
            const response = await this._marketApi.getMarketOrderbook(ticker);
            return response.data;
        } catch (error) {
            console.error(`Kalshi SDK Error (getOrderbook ${ticker}):`, error);
            return null;
        }
    }

    async getTrades(ticker: string, limit: number = 50): Promise<any> {
        try {
            const response = await this._marketApi.getTrades(limit, ticker);
            return response.data;
        } catch (error) {
            console.error(`Kalshi SDK Error (getTrades ${ticker}):`, error);
            return [];
        }
    }

    async searchMarkets(query: string, limit: number = 20): Promise<any[]> {
        // Since Kalshi doesn't have a direct search API for markets by text,
        // we fetch recent events/markets and filter client-side.

        let allItems: any[] = [];
        let cursor: string | undefined = undefined;
        // Fetch up to 5 pages (approx 500 items) to populate search index
        const MAX_PAGES = 5;
        const PER_PAGE_LIMIT = 100; // Safe limit below 200

        try {
            for (let i = 0; i < MAX_PAGES; i++) {
                const eventsData = await this.getEvents(PER_PAGE_LIMIT, cursor);
                const items = eventsData.events || eventsData.markets || [];
                allItems = allItems.concat(items);

                cursor = eventsData.cursor;
                if (!cursor) break; // No more pages
            }

            const lowerQuery = query.toLowerCase();
            const filtered = allItems.filter((item: any) => {
                const title = (item.title || "").toLowerCase();
                const ticker = (item.ticker || "").toLowerCase();
                return title.includes(lowerQuery) || ticker.includes(lowerQuery);
            });

            return filtered.slice(0, limit);
        } catch (error) {
            console.error("Kalshi SDK Error (searchMarkets):", error);
            // Return whatever we found so far if possible, or empty
            return [];
        }
    }
}
