import {
  createAppSessionMessage,
  createAuthRequestMessage,
  createAuthVerifyMessageFromChallenge,
  createECDSAMessageSigner
} from '@erc7824/nitrolite';
import { parseAnyRPCResponse as parseRPCResponse } from '@erc7824/nitrolite/dist/rpc/parse/parse.js';
import { ethers } from 'ethers';
import WebSocket from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
  console.error("PRIVATE_KEY is required in .env");
  process.exit(1);
}

const EIP712AuthTypes = {
  Policy: [
    { name: 'challenge', type: 'string' },
    { name: 'scope', type: 'string' },
    { name: 'wallet', type: 'address' },
    { name: 'session_key', type: 'address' },
    { name: 'expires_at', type: 'uint64' },
    { name: 'allowances', type: 'Allowance[]' },
  ],
  Allowance: [
    { name: 'asset', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
};

class SimplePaymentApp {
  ws: WebSocket | null = null;
  messageSigner: any = null;
  userAddress: string | null = null;
  sessionId: string | null = null;
  isAuthenticated: boolean = false;

  // Auth params to ensure consistency between Request and Verify
  authParams = {
    scope: 'console',
    expires_at: BigInt(Math.floor(Date.now() / 1000) + 3600),
    session_key: '',
    allowances: [],
    // application is not in EIP712 type definition but sent in request
  };

  async init() {
    const wallet = new ethers.Wallet(PRIVATE_KEY as string);
    this.userAddress = wallet.address;
    this.authParams.session_key = this.userAddress;

    // Use SDK provided ECDSA signer for standard messages (ensures correct serialization)
    const pk = PRIVATE_KEY!.startsWith('0x') ? PRIVATE_KEY : `0x${PRIVATE_KEY}`;
    const sdkSigner = createECDSAMessageSigner(pk as `0x${string}`);

    // Smart Signer: uses EIP-712 for auth_verify, SDK ECDSA for others
    this.messageSigner = async (message: any) => {
      // NitroliteRPCMessage is array: [version, method, params, id, timestamp]
      if (Array.isArray(message) && message[1] === 'auth_verify') {
        console.log('[indexer] Signing EIP-712 for AuthVerify');
        const params = message[2];
        const challenge = params.challenge;

        const domain = { name: 'nitrolite' };
        const types = EIP712AuthTypes;
        const value = {
          challenge,
          scope: this.authParams.scope,
          wallet: this.userAddress,
          session_key: this.authParams.session_key,
          expires_at: this.authParams.expires_at,
          allowances: this.authParams.allowances
        };

        if (typeof wallet.signTypedData === 'function') {
          return await wallet.signTypedData(domain, types, value);
        } else {
          return await (wallet as any)._signTypedData(domain, types, value);
        }
      } else {
        // Fallback to SDK signer to avoid serialization mismatch
        return await sdkSigner(message);
      }
    };

    console.log('✅ [indexer] Wallet initialized:', this.userAddress);

    // Step 2: Connect to ClearNode
    console.log('[indexer] Connecting to Yellow Network Sandbox...');
    this.ws = new WebSocket('wss://clearnet-sandbox.yellow.com/ws');

    this.ws.on('open', async () => {
      console.log('🟢 [indexer] Connected to Yellow Network!');
      await this.authenticate();
    });

    this.ws.on('message', (data: Buffer) => {
      try {
        const message = parseRPCResponse(data.toString());
        console.log('[indexer] 📨 Received:', JSON.stringify(message, null, 2));
        this.handleMessage(message);
      } catch (e) {
        console.error("[indexer] Error parsing message:", e);
      }
    });

    this.ws.on('error', (err) => {
      console.error('❌ [indexer] WebSocket Error:', err);
    });

    this.ws.on('close', (code, reason) => {
      console.log(`[indexer] Connection closed: ${code} ${reason}`);
      this.isAuthenticated = false;
    });

    return this.userAddress;
  }

  async authenticate() {
    if (!this.ws || !this.messageSigner || !this.userAddress) return;
    console.log('[indexer] Starting authentication...');

    const authRequest = await createAuthRequestMessage({
      address: this.userAddress as `0x${string}`,
      scope: this.authParams.scope,
      expires_at: this.authParams.expires_at,
      allowances: this.authParams.allowances,
      session_key: this.authParams.session_key as `0x${string}`,
      application: 'nitrolite'
    });

    this.ws.send(authRequest);
  }

  async createSession(partnerAddress: string) {
    if (!this.isAuthenticated || !this.ws) {
      console.warn("[indexer] Cannot create session: Not authenticated or disconnected");
      return;
    }

    const appDefinition = {
      application: 'payment-app-v1', // Required field
      protocol: 'NitroRPC/0.2', // RPCProtocolVersion
      participants: [this.userAddress, partnerAddress],
      weights: [50, 50],
      quorum: 100,
      challenge: 0,
      nonce: Date.now()
    };

    const allocations = [
      { participant: this.userAddress, asset: 'ytest.usd', amount: '1' }, // 0.05 USDC
    ];

    console.log("[indexer] Creating session");

    try {
      const sessionMessage = await createAppSessionMessage(
        this.messageSigner,
        { definition: appDefinition, allocations } as any
      );

      // sessionMessage comes stringified from SDK
      this.ws.send(sessionMessage);
      console.log('✅ [indexer] Payment session message sent!');
    } catch (e) {
      console.error("[indexer] Failed to create session message:", e);
    }
  }

  async handleMessage(message: any) {
    if (!message) return;

    // Handle authentication flow
    if (message.method === 'auth_challenge') {
      console.log('[indexer] Handling auth challenge...');
      try {
        const challenge = message.params?.challengeMessage;
        if (challenge) {
          const verifyMsg = await createAuthVerifyMessageFromChallenge(
            this.messageSigner,
            challenge
          );
          this.ws!.send(verifyMsg);
          console.log('[indexer] Sent auth verify');
        } else {
          console.warn('[indexer] Auth challenge missing challengeMessage', message.params);
        }
      } catch (e) {
        console.error('[indexer] Auth challenge handling failed:', e);
      }
    }

    // Check for auth success
    if (message.method === 'auth_verify') {
      // SDK typings say: AuthVerifyResponse = { method: 'auth_verify', params: { success: boolean, error?: string } }
      // BUT wait, logs might show different.
      if (message.params?.success) {
        console.log('✅ [indexer] Authentication successful!');
        this.isAuthenticated = true;
        this.onAuthenticated();
      } else {
        // Sometimes success is not present but error is?
        if (message.params?.error) {
          console.error('❌ [indexer] Authentication failed:', message.params.error);
        } else if (message.params?.success === undefined) {
          // Check if it returned a session token or something?
          // Usually it just returns success: true.
          // Assuming success if no error?
          // Let's rely on success field for now.
          console.log('❓ [indexer] Auth verify response ambiguous:', message);
        }
      }
    }

    // App messages
    if (message.type === 'session_created' || (message.method === 'create_app_session' && !message.error)) {
      this.sessionId = message.sessionId || message.params?.session_id; // Check fields
      console.log('✅ [indexer] Session ready:', this.sessionId);
    }

    // Check for errors
    if (message.error) {
      console.error('❌ [indexer] Error (global):', message.error);
    }
  }

  async onAuthenticated() {
    // Trigger session creation once authenticated
    await this.createSession(
      this.userAddress!
    );
  }
}

async function main() {
  const app = new SimplePaymentApp();
  await app.init();
  setInterval(() => { }, 1000);
}

main().catch(console.error);
