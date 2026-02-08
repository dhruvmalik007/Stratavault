
export interface KalshiEvent {
    event_ticker: string; // Updated from ticker
    sub_title: string;
    title: string;
    mutually_exclusive: boolean;
    series_ticker: string;
    category: string;
    markets: KalshiMarket[];
}

export interface KalshiMarket {
    ticker: string;
    event_ticker: string;
    subtitle: string;
    title: string;
    open_time: string;
    close_time: string;
    expiration_time: string;
    status: string;
    yes_bid: number;
    yes_ask: number;
    no_bid: number;
    no_ask: number;
    last_price: number;
    previous_yes_ask: number;
    previous_yes_bid: number;
    volume: number;
    open_interest: number;
    liquidity: number;
}

export interface KalshiOrderbook {
    yes: [number, number][]; // [price, quantity]
    no: [number, number][];
    yes_dollars?: [number, number][]; // optional detailed view
    no_dollars?: [number, number][];
}

export interface KalshiTrade {
    trade_id: string;
    taker_side: string;
    count: number;
    yes_price: number;
    no_price: number;
    created_time: string;
}

export interface KalshiEventsResponse {
    events: KalshiEvent[];
    cursor?: string;
}
