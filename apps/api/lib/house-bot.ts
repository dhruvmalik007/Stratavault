import { ClearNodeClient, ClearNodeConfig } from "@repo/yellow";
import { ethers } from "ethers";

// Singleton instance
let houseBotInstance: HouseBot | null = null;

export class HouseBot {
    private client: ClearNodeClient;
    private wallet: ethers.Wallet;

    constructor() {
        if (!process.env.PRIVATE_KEY) {
            throw new Error("PRIVATE_KEY environment variable is not set");
        }

        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

        const config: ClearNodeConfig = {
            url: "wss://clearnet-sandbox.yellow.com/ws", // Hardcoded for now, or env
            chainId: 11155111, // Sepolia? No, Yellow Sandbox uses own, but let's stick to config
            wallet: this.wallet,
        };

        this.client = new ClearNodeClient(config);

        this.client.on("connected", () => console.log("[HouseBot] Connected"));
        this.client.on("authenticated", () => {
            console.log("[HouseBot] Authenticated as House:", this.wallet.address);
        });

        this.client.on("message", (msg) => this.handleMessage(msg));
    }

    public async start() {
        console.log("[HouseBot] Starting...");
        await this.client.connect();
    }

    public getAddress() {
        return this.wallet.address;
    }

    private async handleMessage(msg: any) {
        // Listen for "Transfers" (Bets)
        // message format for transfer notification might be specific
        // Typically notifications come as methods

        // Use generalized message inspection for now
        // if (msg.method === 'transfer_received' ... )

        // For the Demo, we might not get value immediately.
        // Let's assume the client sends a "roll_dice" custom message *after* sending funds?
        // Or we just listen for a standard "Transfer" RPC if supported. 
        // SDK doesn't always emit transfer events clearly without polling history.

        // Strategy: 
        // 1. User sends Transfer.
        // 2. User sends "roll_dice" message (Simulated via some other channel? No, ClearNode is for settlement).
        // Nitrolite doesn't support arbitrary P2P messages easily outside of channels.

        // Pivot: We will use the NextJS API as the "Control Plane" for the game.
        // User calls POST /api/game/roll
        // Bot checks if User transferred funds recently? (Hard to verify instantaneously without indexer).

        // Alternative: User sends Transfer, we rely on `bu` (Balance Update) messages?
        // `bu` messages come when OUR balance changes.

        if (msg.method === 'bu') {
            console.log("[HouseBot] Balance Update received:", JSON.stringify(msg.params));
            // msg.params.balanceUpdates: [{ asset, amount }]
            // This tells us our balance changed, but not WHO sent it. 
            // We might need to query ledger transactions.
        }
    }

    // Helper to send payout
    public async payout(recipient: string, amount: string) {
        console.log(`[HouseBot] Paying out ${amount} to ${recipient}`);
        try {
            const res = await this.client.sendTransfer(recipient, 'ytest.usd', amount);
            console.log("[HouseBot] Payout success:", res);
            return res;
        } catch (error) {
            console.error("[HouseBot] Payout failed:", error);
            throw error;
        }
    }
}

// Helper to ensure bot is running
export async function getHouseBot() {
    if (!houseBotInstance) {
        houseBotInstance = new HouseBot();
        // Fire and forget start
        houseBotInstance.start().catch(err => console.error("[HouseBot] Failed to start:", err));
    }
    return houseBotInstance;
}
