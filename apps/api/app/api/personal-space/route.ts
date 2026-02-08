
import { NextRequest, NextResponse } from "next/server";
import { database } from "@repo/database";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        // Fetch all orders for the "Personal Scope" (Single Tenant Assumption)
        const orders = await database.order.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                market: true
            }
        });

        const positions = orders.filter(o => o.status === 'open' || o.status === 'pending');
        const history = orders.filter(o => o.status !== 'open' && o.status !== 'pending');

        return NextResponse.json({
            positions: positions.map(p => ({
                id: p.id,
                marketTitle: p.market.title,
                marketSlug: p.market.slug,
                side: p.side,
                size: p.size,
                price: p.price,
                status: p.status,
                createdAt: p.createdAt
            })),
            history: history.map(h => ({
                id: h.id,
                marketTitle: h.market.title,
                marketSlug: h.market.slug,
                side: h.side,
                size: h.size,
                price: h.price,
                status: h.status,
                createdAt: h.createdAt
            }))
        });
    } catch (error: any) {
        console.error("Personal Space API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
