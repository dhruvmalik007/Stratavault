import { ClearNodeClient } from "@repo/yellow";
import { ethers } from "ethers";
import { env } from "../../env";

class ClearNodeService {
    private static instance: ClearNodeService;
    public client: ClearNodeClient;
    private wallet: ethers.Wallet;

    private constructor() {
        this.wallet = new ethers.Wallet(env.PRIVATE_KEY!);
        this.client = new ClearNodeClient({
            url: env.CLEARNODE_URL!,
            wallet: this.wallet,
            chainId: 1,
        });

        this.setupListeners();
        this.client.connect().catch((err) => {
            console.error("Failed to connect to ClearNode on startup:", err);
        });
    }

    public static getInstance(): ClearNodeService {
        if (!ClearNodeService.instance) {
            ClearNodeService.instance = new ClearNodeService();
        }
        return ClearNodeService.instance;
    }

    private setupListeners() {
        this.client.on("connected", () => {
            console.log("ClearNode Service Connected");
        });

        this.client.on("authenticated", () => {
            console.log("ClearNode Service Authenticated");
        });

        this.client.on("message", (msg) => {
            // Here we will handle incoming game messages later
            // For example, if we receive a session invite ("battle challenge")
            console.log("ClearNode Service Received Message:", msg);
        });
    }

    public getAddress(): string {
        return this.wallet.address;
    }
}

export const clearNodeService = ClearNodeService.getInstance();
