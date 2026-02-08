import { WebSocket } from "ws";
import { ethers } from "ethers";
import { EventEmitter } from "events";
import * as nitrolite from "@erc7824/nitrolite";
import { createEIP712Signer } from "./auth";

// Mock types
type RequestData = any;
type ResponsePayload = any;

export interface ClearNodeConfig {
    url: string;
    chainId: number;
    wallet: ethers.Wallet | ethers.HDNodeWallet;
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
}

export interface AppSessionDefinition {
    protocol: string;
    participants: string[];
    weights: number[];
    quorum: number;
    challenge: number;
    nonce: number;
}

export interface Allocation {
    participant: string;
    asset: string;
    amount: string;
}

export class ClearNodeClient extends EventEmitter {
    private ws: WebSocket | null = null;
    public config: ClearNodeConfig;
    private reconnectAttempts = 0;
    private isConnected = false;
    private jwtToken: string | null = null;
    private requestMap = new Map<
        number,
        { resolve: (value: any) => void; reject: (reason?: any) => void; timeout: NodeJS.Timeout }
    >();

    // The "smart" signer that handles EIP-712 for auth and ECDSA for others
    private signer: (message: any) => Promise<string>;

    constructor(config: ClearNodeConfig) {
        super();
        this.config = {
            reconnectInterval: 3000,
            maxReconnectAttempts: 5,
            ...config,
        };

        // Initialize the hybrid signer
        this.signer = createEIP712Signer(this.config.wallet, {
            scope: 'console',
            session_key: this.config.wallet.address,
            expires_at: BigInt(Math.floor(Date.now() / 1000) + 3600),
        }, this.config.chainId);
    }

    /**
     * Connect to the ClearNode WebSocket
     */
    public async connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.ws) {
                this.ws.close();
            }

            // Ensure URL has protocol
            let url = this.config.url;
            if (!url.startsWith('ws')) {
                url = `wss://${url}`;
            }

            console.log(`[clearnode] Connecting to ${url}...`);
            this.ws = new WebSocket(url);

            // Connection timeout
            const connectionTimeout = setTimeout(() => {
                if (!this.isConnected) {
                    this.ws?.terminate();
                    reject(new Error("Connection timeout"));
                }
            }, 10000);

            this.ws.on("open", async () => {
                clearTimeout(connectionTimeout);
                this.isConnected = true;
                this.reconnectAttempts = 0;
                this.emit("connected");
                console.log("[clearnode] WebSocket connected");

                try {
                    await this.authenticate();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });

            this.ws.on("message", (data: any) => {
                this.handleMessage(data);
            });

            this.ws.on("error", (error) => {
                console.error("[clearnode] WebSocket error:", error);
                this.emit("error", error);
                if (!this.isConnected) {
                    clearTimeout(connectionTimeout);
                    reject(error);
                }
            });

            this.ws.on("close", (code, reason) => {
                clearTimeout(connectionTimeout);
                this.isConnected = false;
                this.jwtToken = null;
                this.emit("disconnected", { code, reason: reason.toString() });
                console.log(`[clearnode] WebSocket closed: ${code} ${reason}`);
                // Only reconnect if not intentionally closed? 
                // For now, simpler to always try unless disconnect() was called.
                // But we don't track 'intentional' here easily without flag.
                // Let's rely on attemptReconnect which checks max attempts.
                this.attemptReconnect();
            });
        });
    }

    /**
     * Authenticate with the ClearNode
     */
    private async authenticate(): Promise<void> {
        console.log("[clearnode] Starting authentication...");

        // 1. Send auth_request
        const authRequest = await nitrolite.createAuthRequestMessage({
            address: this.config.wallet.address as `0x${string}`,
            session_key: this.config.wallet.address as `0x${string}`,
            application: 'nitrolite',
            allowances: [],
            expires_at: BigInt(Math.floor(Date.now() / 1000) + 3600),
            scope: 'console'
        });
        this.ws!.send(authRequest);

        return new Promise((resolve, reject) => {
            const authTimeout = setTimeout(() => {
                this.removeListener('authenticated', onAuthSuccess);
                this.removeListener('auth_error', onAuthError);
                reject(new Error("Authentication timeout"));
            }, 15000);

            const onAuthSuccess = () => {
                clearTimeout(authTimeout);
                this.removeListener('auth_error', onAuthError);
                resolve();
            };

            const onAuthError = (err: Error) => {
                clearTimeout(authTimeout);
                this.removeListener('authenticated', onAuthSuccess);
                reject(err);
            };

            this.once('authenticated', onAuthSuccess);
            this.once('auth_error', onAuthError);
        });
    }

    /**
     * Helper to parse RPC response since parseRPCResponse is not exported
     */
    private parseRPCResponse(rawMessage: string): any {
        try {
            const json = JSON.parse(rawMessage);
            // Check if it's the array format: { res: [id, method, params, ...] }
            if (json.res && Array.isArray(json.res)) {
                return {
                    id: json.res[0],
                    method: json.res[1],
                    params: json.res[2]
                };
            }
            // Fallback or other formats
            return json;
        } catch (e) {
            console.error("[clearnode] Failed to parse RPC response", e);
            return {};
        }
    }

    /**
     * Handle incoming WebSocket messages
     */
    private async handleMessage(data: any) {
        try {
            const rawMessage = data.toString();
            // Try standard parse
            const message = this.parseRPCResponse(rawMessage);

            // Handle Authentication Flow
            if (message.method === "auth_challenge") {
                console.log("[clearnode] Processing auth_challenge");
                try {
                    // Normalize params
                    if (message.params && message.params.challenge_message) {
                        message.params.challengeMessage = message.params.challenge_message;
                        message.params.challenge = message.params.challenge_message;
                    }

                    // Use the hybrid signer which detects auth_verify context
                    const authVerify = await nitrolite.createAuthVerifyMessage(
                        this.signer as any, // Cast to match SDK signature expectation
                        message,
                    );
                    this.ws!.send(authVerify);
                } catch (error) {
                    console.error("[clearnode] Failed to sign auth challenge:", error);
                    this.emit("auth_error", error);
                }
                return;
            }

            if (message.method === "auth_success" || (message.params && message.params.success)) {
                console.log("[clearnode] Authentication successful");
                if (message.params && message.params.jwt) {
                    this.jwtToken = message.params.jwt;
                }
                this.emit("authenticated");
                return;
            }

            if (message.method === "auth_failure" || (message.params && message.params.success === false)) {
                const errorMsg = (message.params && message.params.error) || "Authentication failed";
                console.error(`[clearnode] ${errorMsg}`);
                this.emit("auth_error", new Error(errorMsg));
                return;
            }

            // Handle RPC Responses for Requests
            // If message.id is present, it might be a response to our request
            if (typeof message.id === "number") {
                const requestId = message.id;
                const requestHandler = this.requestMap.get(requestId);

                if (requestHandler) {
                    clearTimeout(requestHandler.timeout);
                    this.requestMap.delete(requestId);

                    if (message.error) {
                        requestHandler.reject(new Error(`RPC Error: ${JSON.stringify(message.error)}`));
                    } else {
                        requestHandler.resolve(message.params || message.result);
                    }
                }
            }

            // Emit generic message event for app consumers
            this.emit("message", message);

        } catch (error) {
            console.error("[clearnode] Error parsing message:", error);
        }
    }

    /**
     * Attempt reconnection with exponential backoff
     */
    private attemptReconnect() {
        if (this.reconnectAttempts >= (this.config.maxReconnectAttempts || 5)) {
            console.error("[clearnode] Max reconnect attempts reached");
            this.emit("error", new Error("Max reconnect attempts reached"));
            return;
        }

        this.reconnectAttempts++;
        const delay = (this.config.reconnectInterval || 3000) * Math.pow(2, this.reconnectAttempts - 1);

        console.log(`[clearnode] Attempting reconnect in ${delay}ms...`);
        setTimeout(() => {
            this.connect().catch((err) => console.error("[clearnode] Reconnect failed:", err));
        }, delay);
    }

    /**
     * Send a signed request and wait for response
     */
    public async sendRequest(
        createMessageFn: (signer: any, ...args: any[]) => Promise<string>,
        ...args: any[]
    ): Promise<any> {
        if (!this.isConnected) {
            throw new Error("Not connected");
        }

        // Use the hybrid signer for all requests. 
        // It will use ECDSA (personal_sign) for non-auth_verify messages.
        const signedMessageString = await createMessageFn(
            this.signer,
            ...args
        );

        const signedMessage = JSON.parse(signedMessageString);
        const requestId = signedMessage.req[0];

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                if (this.requestMap.has(requestId)) {
                    this.requestMap.delete(requestId);
                    reject(new Error(`Request timeout for ID ${requestId}`));
                }
            }, 30000);

            this.requestMap.set(requestId, { resolve, reject, timeout });
            this.ws!.send(signedMessageString);
        });
    }

    /**
     * Get all channels for the current user
     */
    public async getChannels() {
        return this.sendRequest(
            nitrolite.createGetChannelsMessage,
            this.config.wallet.address
        );
    }

    /**
     * Get ledger balances
     */
    public async getLedgerBalances(participant: string = this.config.wallet.address) {
        return this.sendRequest(
            nitrolite.createGetLedgerBalancesMessage,
            participant
        );
    }

    /**
     * Create an application session
     */
    public async createAppSession(
        participantB: string,
        amountA: string, // My allocation
        amountB: string, // Their allocation
        appDefinitionOverride?: Partial<AppSessionDefinition>
    ) {
        const appDefinition: AppSessionDefinition = {
            protocol: 'nitroliterpc',
            participants: [this.config.wallet.address, participantB],
            weights: [100, 0],
            quorum: 100,
            challenge: 0,
            nonce: Date.now(),
            ...appDefinitionOverride
        };

        const allocations: Allocation[] = [
            {
                participant: this.config.wallet.address,
                asset: 'ytest.usd',
                amount: amountA
            },
            {
                participant: participantB,
                asset: 'ytest.usd',
                amount: amountB
            }
        ];

        return this.sendRequest(
            nitrolite.createAppSessionMessage,
            [{ definition: appDefinition, allocations }]
        );
    }

    /**
     * Close an application session
     */
    public async closeAppSession(
        appSessionId: string,
        allocations: Allocation[]
    ) {
        const closeRequest = {
            app_session_id: appSessionId,
            allocations
        };

        return this.sendRequest(
            nitrolite.createCloseAppSessionMessage,
            [closeRequest]
        );
    }

    /**
     * Disconnect client
     */
    public disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.isConnected = false;
        this.reconnectAttempts = 0;
    }

    /**
     * Send a transfer (Simple Pay) to another participant
     */
    public async sendTransfer(recipient: string, asset: string, amount: string) {
        return this.sendRequest(
            nitrolite.createTransferMessage,
            {
                to: recipient,
                asset: asset,
                amount: amount
            }
        );
    }
}

