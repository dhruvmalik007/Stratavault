import { WebSocket, WebSocketServer } from 'ws';
import * as http from 'http';

/**
 * Mock ClearNode Server for testing
 */
export class MockClearNodeServer {
    private wss: WebSocketServer;
    private server: http.Server;

    constructor(port: number) {
        this.server = http.createServer();
        this.wss = new WebSocketServer({ server: this.server });

        this.wss.on('connection', (ws) => {
            ws.on('message', (message) => {
                this.handleMessage(ws, message.toString());
            });
        });

        this.server.listen(port, () => {
            console.log(`Mock server listening on port ${port}`);
        });
    }

    private handleMessage(ws: WebSocket, rawMessage: string) {
        try {
            const message = JSON.parse(rawMessage);
            const requestData = message.req; // [id, method, params, timestamp]

            if (!requestData) {
                // If it's an auth_verify, it might have a different structure or just include 'res' from challenge
                // But Nitrolite messages usually put request data in 'req'
                // Actually auth request/response flow is handled uniquely.
                // Let's check the structure more roughly for the test
                return;
            }

            const [id, method, params] = requestData;

            if (method === 'auth_request') {
                // Send Challenge
                const challengeMsg = {
                    res: [id, 'auth_challenge', {
                        challenge: 'mock-challenge-nonce',
                        challengeMessage: 'mock-challenge-nonce',
                        nonce: '123'
                    }]
                };
                ws.send(JSON.stringify(challengeMsg));
            } else if (method === 'auth_verify') {
                // Send Success
                const successMsg = {
                    res: [id, 'auth_success', { jwt: 'mock-jwt-token' }]
                };
                ws.send(JSON.stringify(successMsg));
            } else if (method === 'get_channels') {
                const channelsResponse = {
                    res: [id, 'get_channels', [
                        { channel_id: '0x123', status: 'open', amount: '100' }
                    ]]
                };
                ws.send(JSON.stringify(channelsResponse));
            }
            // Add more mock responses as needed
        } catch (e) {
            console.error(e);
        }
    }

    public close() {
        this.wss.close();
        this.server.close();
    }
}
