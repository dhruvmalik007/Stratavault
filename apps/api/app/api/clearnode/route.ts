import { NextResponse } from "next/server";
import { clearNodeService } from "../../services/clearnode.service";

export async function GET() {
    return NextResponse.json({
        address: clearNodeService.getAddress(),
        status: clearNodeService.client["isConnected"] ? "connected" : "disconnected",
        url: process.env.CLEARNODE_URL // Publicly expose URL so frontend knows where to connect
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // This endpoint can be used to manually trigger actions or testing
        if (body.action === "challenge") {
            // Logic to accept a challenge could go here
            // For now, we just acknowledge
            return NextResponse.json({ status: "challenged_accepted", target: body.target });
        }

        return NextResponse.json({ error: "Unknown action" }, { status: 400 });

    } catch (e) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
