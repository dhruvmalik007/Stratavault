import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        url: process.env.CLEARNODE_URL || 'ws://localhost:8000/ws', // Backend Env Var
    });
}
