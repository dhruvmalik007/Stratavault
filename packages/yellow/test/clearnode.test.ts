import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { ClearNodeClient } from '../src/clearnode';
import { MockClearNodeServer } from './mock-clearnode';
import { ethers } from 'ethers';

const TEST_PORT = 8080;
const TEST_URL = `ws://localhost:${TEST_PORT}`;

describe('ClearNodeClient E2E', () => {
    let mockServer: MockClearNodeServer;
    let client: ClearNodeClient;
    let wallet: ethers.HDNodeWallet;

    beforeAll(() => {
        mockServer = new MockClearNodeServer(TEST_PORT);
        wallet = ethers.Wallet.createRandom();
    });

    afterAll(() => {
        mockServer.close();
    });

    it('should connect and authenticate', async () => {
        client = new ClearNodeClient({
            url: TEST_URL,
            wallet: wallet
        });

        await client.connect();

        // If connect resolves, it means auth succeeded per our implementation
        expect(true).toBe(true);
    });

    it('should retrieve channels', async () => {
        const channels = await client.getChannels();
        expect(channels).toBeDefined();
        expect(channels[0].channel_id).toBe('0x123');
    });

    it('should handle disconnect', async () => {
        client.disconnect();
        // Just verifying no errors are thrown
        expect(true).toBe(true);
    });
});
