
import { KalshiClient } from "../kalshi/client";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
    const client = new KalshiClient();

    console.log("Fetching Kalshi Events (Limit 15)...");
    const response = await client.events.getEvents(15);

    const res = response as any;
    if (!res || (!res.markets && !res.events)) {
        console.log("No markets or events found.");
        return;
    }

    const items = res.markets || res.events || [];
    console.log(`Found ${items.length} items.`);

    if (items.toString().length > 0) {
        // Use the first item to test other endpoints
        // Note: Event objects have 'event_ticker', Market objects have 'ticker'.
        const item = items[0];
        const ticker = (item as any).ticker || (item as any).event_ticker;

        console.log("Example Item Ticker:", ticker);
        console.log("Title:", item.title);

        if (ticker) {
            console.log("Fetching specific market details...");
            // Note: getMarket expects a market ticker, not event ticker usually?
            // If we have an event, we need a market ticker. 
            // Events usually contain markets? 
            // Let's try to get markets for this event if it is an event.
            // But client.getMarket expects a ticker string.

            // If it is an event ticker (e.g. "KX-123"), getMarket might fail if it expects "KX-123-Yes".
            // Let's try to list markets via direct API to find a valid market ticker.

            console.log("--- Testing Direct MarketApi Access ---");
            const directMarkets = await client.market.getMarkets(5);
            console.log(`Direct MarketApi returned ${directMarkets.data.markets?.length} markets.`);

            const validMarketTicker = directMarkets.data.markets?.[0]?.ticker || ticker;
            console.log("Using market ticker for detail fetch:", validMarketTicker);

            console.log("Fetching market details...");
            const marketDetails: any = await client.getMarket(validMarketTicker);
            console.log("Market Details Title:", marketDetails?.market?.title || marketDetails?.title || "Failed to fetch");

            console.log("Fetching orderbook...");
            const book = await client.getOrderBook(validMarketTicker);
            if (book) {
                console.log("Orderbook (snapshot):", JSON.stringify(book).slice(0, 200));
            } else {
                console.log("Orderbook unavailable.");
            }

            // Trades API not implemented in main interface, skipping or using raw API if needed
            // console.log("Fetching recent trades...");
            // const trades = await client.getTrades(validMarketTicker);
        }
    }
}

main().catch(console.error);
