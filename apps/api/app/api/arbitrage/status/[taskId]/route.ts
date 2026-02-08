import { NextResponse } from 'next/server';
import { arbitrageService } from '../../../../../src/agents/arbitrage/arbitrage.service';

export async function GET(req: Request, { params }: { params: Promise<{ taskId: string }> }) {
    const { taskId } = await params;
    const job = arbitrageService.getJob(taskId);

    if (!job) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
}
