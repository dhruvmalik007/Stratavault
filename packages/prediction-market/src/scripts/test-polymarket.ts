
import { PolymarketClient } from "../polymarket/client";

async function main() {
    const client = new PolymarketClient(137);

    console.log("Fetching Polymarket Events (Top 5)...");
    const events = await client.getEvents(5);
    console.log(`Found ${events.length} events.`);
    if (events.length > 0 && events[0]) {
        console.log("Example Event:", events[0].title);
    }

    // Try fetching markets for the first event
    if (events.length > 0 && events[0]) {
        const eventId = events[0].id;
        console.log(`Fetching markets for event ${eventId}...`);
        const markets = await client.getMarkets(eventId);
        console.log(`Found ${markets.length} markets.`);

        if (markets.length > 0) {
            const market = markets[0];
            if (!market) return;
            console.log("Market:", market.question);

            // Get orderbook if token ID exists
            // Get orderbook if token ID exists
            if (market.clobTokenIds && market.clobTokenIds.length > 0) {
                console.log("clobTokenIds type:", typeof market.clobTokenIds);
                console.log("clobTokenIds value:", JSON.stringify(market.clobTokenIds));

                let tokenId: string = (market.clobTokenIds && market.clobTokenIds.length > 0) ? (market.clobTokenIds[0] as string) : "";

                // If it's a string representation of an array (Gamma API quirk or transformation)
                // e.g. "[\"0x...\"]"
                // Or if it's already an array but we want to be safe
                if (typeof market.clobTokenIds === 'string' || (Array.isArray(market.clobTokenIds) && typeof market.clobTokenIds[0] === 'string' && market.clobTokenIds[0].startsWith('['))) {
                    try {
                        const raw = typeof market.clobTokenIds === 'string' ? market.clobTokenIds : market.clobTokenIds[0];
                        const parsed = JSON.parse(raw || "[]");
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            tokenId = parsed[0];
                        }
                    } catch (e) {
                        console.warn("Could not parse clobTokenIds:", e);
                    }
                }

                console.log(`Fetching orderbook for ${tokenId}...`);
                const book = await client.getOrderbook(tokenId);
                console.log("Orderbook (Top Bids/Asks):", JSON.stringify(book, null, 2).slice(0, 500));
            }
        }
    }
}

main().catch(console.error);
