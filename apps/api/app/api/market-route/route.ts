
import { NextRequest, NextResponse } from "next/server";
import { marketRoutingService } from "../../services/market-routing.service";

export const dynamic = 'force-dynamic'; // Ensure no caching for market prices

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const intent = searchParams.get("intent");

    if (!intent) {
        return NextResponse.json({ error: "Missing intent parameter" }, { status: 400 });
    }

    try {
        console.log(`[API] /market-route?intent=${intent}`);
        const recommendation = await marketRoutingService.findBestRoute(intent);

        if (!recommendation) {
            console.log(`[API] No recommendation found for intent: ${intent}`);
            return NextResponse.json({ message: "No suitable markets found matching intent." }, { status: 404 });
        }

        console.log(`[API] Returning recommendation: ${recommendation.bestMarketId}`);
        return NextResponse.json(recommendation);
    } catch (error: any) {
        console.error("Market Routing Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
