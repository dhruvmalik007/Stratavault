
import { marketRoutingService } from "./app/services/market-routing.service";
import { marketDiscoveryService } from "./app/services/market-discovery.service";

async function main() {
    console.log("--- Testing Market Discovery for 'Will Bitcoin hit 100k' ---");
    // Test 1: Direct Discovery Service
    console.log("1. Testing Discovery Service directly...");
    const markets = await marketDiscoveryService.discoverMarkets("Will Bitcoin hit 100k");
    console.log(`Discovery found ${markets.length} markets.`);
    if (markets.length > 0) {
        console.log(`First market: ${markets[0].title} (${markets[0].id})`);
    }

    // Test 2: Routing Service (End-to-End)
    console.log("\n2. Testing Routing Service...");
    const route = await marketRoutingService.findBestRoute("Will Bitcoin hit 100k");
    if (route) {
        console.log("Route Found:");
        console.log(JSON.stringify(route, null, 2));
    } else {
        console.log("No route found.");
    }
}

main().catch(console.error);
