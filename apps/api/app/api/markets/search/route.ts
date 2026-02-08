import { NextResponse } from "next/server";
import { marketService } from "../../../services/market.service";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const platform = searchParams.get("platform") || undefined;

    if (!query) {
        return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
    }

    try {
        const result = await marketService.searchMarkets(query, platform);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error", logs: [] }, { status: 500 });
    }
}
