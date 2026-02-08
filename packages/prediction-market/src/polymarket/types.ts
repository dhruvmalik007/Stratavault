
export interface PolymarketEvent {
    id: string;
    ticker: string;
    slug: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    image: string;
    icon: string;
    active: boolean;
    closed: boolean;
    archived: boolean;
    new: boolean;
    featured: boolean;
    restricted: boolean;
    liquidity: number;
    volume: number;
    openInterest: number;
    sortBy: string;
    markets: PolymarketMarket[];
}

export interface PolymarketMarket {
    id: string;
    question: string;
    conditionId: string;
    slug: string;
    resolutionSource: string;
    endDate: string;
    liquidity: string;
    startDate: string;
    image: string;
    icon: string;
    description: string;
    outcomes: string[];
    outcomePrices: string[];
    volume: string;
    active: boolean;
    closed: boolean;
    marketMakerAddress: string;
    createdAt: string;
    updatedAt: string;
    clobTokenIds: string[];
    acceptingOrders: boolean;
    negRisk: boolean;
    negRiskMarketID: string;
    negRiskRequestID: string;
    groupItemTitle: string;
}

export interface PolymarketOrderbook {
    market: string; // Token ID
    asks: { price: string; size: string }[];
    bids: { price: string; size: string }[];
}

export interface PriceHistoryPoint {
    t: number; // timestamp
    p: number; // price
}
