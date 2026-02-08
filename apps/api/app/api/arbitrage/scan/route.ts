import { NextResponse } from 'next/server';
import { arbitrageService } from '../../../../src/agents/arbitrage/arbitrage.service';

export async function POST(req: Request) {
    try {
        const { query } = await req.json();
        const result = await arbitrageService.triggerScan(query || "politics");

        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
