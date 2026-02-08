
import { NextRequest, NextResponse } from "next/server";
import { database, putOrder } from "@repo/database";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { marketId, side, size, price, marketTitle, slug } = body;

        if (!marketId || !side || !size || !price) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Ensure Market Exists in DB (if not, create it/upsert)
        // For paper trading, we might need to ensure the market record exists for the foreign key constraint.
        // We'll trust the frontend sends valid market info or we fetch valid market info.
        // Ideally we fetching market details again using MarketService but for speed we might upsert.
        // However, putOrder requires marketId to exist.

        const existingMarket = await database.market.findUnique({ where: { slug: marketId } });
        if (!existingMarket) {
            await database.market.create({
                data: {
                    slug: marketId,
                    title: marketTitle || "Unknown Market",
                    status: "Active",
                    createdAt: new Date(),
                }
            });
        }

        // 2. Execution Logic
        // If "proposal" mode or NO private key configured on backend, return unsigned payload to frontend.
        const usePayload = body.mode === 'proposal' || !process.env.PRIVATE_KEY;

        if (usePayload) {
            try {
                // Clean up marketId (slug) / ticker
                const ticker = marketId;

                // Get payload from MarketService
                // We need to import marketService
                const { marketService } = await import("../../services/market.service"); // Dynamic import to avoid cycles or ensure init? 
                // Actually static import is fine usually but let's keep it simple.

                const { platform, payload } = await marketService.createOrderPayloadWithPrice(
                    ticker,
                    side as "buy" | "sell",
                    size,
                    price
                );

                return NextResponse.json({
                    success: true,
                    type: 'payload',
                    platform,
                    payload,
                    message: "Transaction payload generated. Sign execution on frontend."
                });
            } catch (e: any) {
                return NextResponse.json({ error: "Failed to generate payload", details: e.message }, { status: 500 });
            }
        }

        // Default: Paper Trading / Direct Execution if Key exists AND mode != proposal (but we prioritize payload if key is missing)
        const orderId = uuidv4();
        await putOrder({
            id: orderId,
            marketId: marketId,
            side: side,
            price: price,
            size: size,
            remaining: 0, // Fully filled for paper trade
            status: "Filled",
            createdAt: new Date().toISOString()
        });

        return NextResponse.json({ success: true, orderId, type: 'execution' });

    } catch (error: any) {
        console.error("Trade Execution Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
