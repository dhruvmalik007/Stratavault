import { database, putOrder, putMarket } from '@repo/database';

export class ExecutionAgent {

    /**
     * Analyzes the Arbitrage Opportunity and decides whether to execute.
     * @param opportunity The result from the BFW solver
     * @param marketIds IDs of markets involved
     */
    async executeStrategy(opportunity: any, markets: any[]) {
        if (!opportunity.arbitrageDetected) {
            console.log("No arbitrage found.");
            return;
        }

        const { optimalDistribution, distance } = opportunity;
        console.log(`Arbitrage Opportunity! Distance: ${distance}`);

        // 1. Log to DynamoDB (Placeholder)
        // const timestamp = new Date().toISOString();

        // 2. Mock Execution (Submit Orders)
        for (let i = 0; i < markets.length; i++) {
            const market = markets[i];
            const fairPrice = optimalDistribution[i];
            const marketPrice = market.last_price || 0.5; // Fallback

            const diff = marketPrice - fairPrice;
            const threshold = 0.02; // 2% spread required

            if (Math.abs(diff) > threshold) {
                const side = diff > 0 ? "Sell" : "Buy"; // If market > fair, sell. If market < fair, buy.
                const size = 100; // Mock size

                console.log(`EXECUTION: ${side} ${market.ticker || market.title} | Market: ${marketPrice.toFixed(3)} | Fair: ${fairPrice.toFixed(3)} | Diff: ${diff.toFixed(3)}`);

                try {
                    // Ensure market exists in DB before creating order
                    await putMarket({
                        id: market.slug || market.id,
                        slug: market.slug || market.id,
                        title: market.title,
                        description: market.description || market.metadata?.description || "",
                        category: market.category || "Politics",
                        status: "Active",
                        resolutionTime: market.resolutionTime || new Date(Date.now() + 86400000).toISOString(),
                        createdAt: new Date().toISOString()
                    });

                    await putOrder({
                        id: `ord_${Date.now()}_${i}`,
                        marketId: market.slug || market.id,
                        side: side,
                        price: marketPrice,
                        size: size,
                        remaining: size,
                        status: "Open",
                        createdAt: new Date().toISOString()
                    });
                } catch (e) {
                    console.error("Failed to place order:", e);
                }
            }
        }
    }
}
