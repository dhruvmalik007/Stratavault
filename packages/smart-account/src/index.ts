import Safe, { SafeAccountConfig, PredictedSafeProps, SafeDeploymentConfig, Eip1193Provider } from '@safe-global/protocol-kit';
import { SafeTransaction, TransactionResult } from '@safe-global/types-kit';

export interface SafeConfig {
    provider: Eip1193Provider | string; // EIP-1193 provider or RPC URL
    signer: string; // Address or Private Key
}

export class SafeManager {
    private provider: Eip1193Provider | string;
    private signer: string;

    constructor(config: SafeConfig) {
        this.provider = config.provider;
        this.signer = config.signer;
    }

    /**
     * Deploys a new Safe or returns existing address if already deployed for this salt.
     * @param owners List of owner addresses
     * @param threshold Number of confirmations required
     * @param saltNonce Optional salt for deterministic deployment
     */
    async deploySafe(owners: string[], threshold: number = 1, saltNonce?: string): Promise<string> {
        const safeAccountConfig: SafeAccountConfig = {
            owners,
            threshold,
        };

        const safeDeploymentConfig: SafeDeploymentConfig = {
            saltNonce
        };

        const predictedSafe: PredictedSafeProps = {
            safeAccountConfig,
            safeDeploymentConfig
        };

        const protocolKit = await Safe.init({
            provider: this.provider,
            signer: this.signer,
            predictedSafe
        });

        const safeAddress = await protocolKit.getAddress();
        const isSafeDeployed = await protocolKit.isSafeDeployed();

        if (isSafeDeployed) {
            return safeAddress;
        }

        const deploymentTransaction = await protocolKit.createSafeDeploymentTransaction();

        // Prepare transaction execution
        // We need to send this transaction using the provider/signer
        // Since we are abstracted from ethers, we need a way to send 'eth_sendTransaction'
        // If provider is EIP-1193, we can use request.

        let txHash;

        if (typeof this.provider !== 'string' && 'request' in this.provider) {
            // Browser/Wallet provider
            txHash = await this.provider.request({
                method: 'eth_sendTransaction',
                params: [{
                    to: deploymentTransaction.to,
                    value: `0x${BigInt(deploymentTransaction.value).toString(16)}`,
                    data: deploymentTransaction.data,
                    from: this.signer // The connected wallet address
                }]
            });
        } else {
            // RPC URL logic - requires a backend signer implementation (e.g. ethers Wallet)
            // But we removed ethers dependency. If backend needs to deploy, we might need ethers or viem here.
            // For now, assume mainly frontend or EIP-1193 provider.
            // If this.provider is string, we'd need a signer to sign and send.
            // Protocol Kit v6 can sign if we passed private key as signer.
            // protocolKit.getSafeProvider().getExternalSigner()? 

            // If simple deployment transaction:
            const client = await protocolKit.getSafeProvider().getExternalSigner();
            // Current SDK v6 might allow sending transaction via client if it's initialized with private key
            if (!client) throw new Error("No external signer available");

            // Client from SafeProvider (viem based)
            // Need to check how to use it.
            // For now, throwing error for RPC URL deployment to keep it simple and focused on frontend fix.
            throw new Error("RPC URL deployment not yet fully implemented without ethers");
        }

        // Wait for transaction? 
        // We don't have a reliable wait/receipt method with just EIP-1193 request.
        // We can poll or just return the hash/address.
        // For Onboarding, returning address is usually enough, but we want to ensure it's deployed.
        // Apps usually wait for receipt.

        return safeAddress;
    }

    /**
     * Creates a transaction to execute a call on a target contract.
     * @param safeAddress Address of the Safe
     * @param to Target contract address
     * @param value Value in wei
     * @param data Calldata
     */
    async createTransaction(safeAddress: string, to: string, value: string, data: string): Promise<SafeTransaction> {
        const protocolKit = await Safe.init({
            provider: this.provider,
            signer: this.signer,
            safeAddress
        });

        const safeTransactionData = {
            to,
            value,
            data,
            operation: 0, // Call
        };

        const safeTransaction = await protocolKit.createTransaction({ transactions: [safeTransactionData] });
        return safeTransaction;
    }

    /**
     * Signs a transaction hash.
     * @param safeAddress 
     * @param safeTransaction 
     */
    async signTransaction(safeAddress: string, safeTransaction: SafeTransaction): Promise<SafeTransaction> {
        const protocolKit = await Safe.init({
            provider: this.provider,
            signer: this.signer,
            safeAddress
        });
        const signedSafeTransaction = await protocolKit.signTransaction(safeTransaction);
        return signedSafeTransaction;
    }

    /**
     * Executes a transaction.
     * @param safeAddress 
     * @param signedSafeTransaction 
     */
    async executeTransaction(safeAddress: string, signedSafeTransaction: SafeTransaction): Promise<TransactionResult> {
        const protocolKit = await Safe.init({
            provider: this.provider,
            signer: this.signer,
            safeAddress
        });
        const executeTxResponse = await protocolKit.executeTransaction(signedSafeTransaction);
        return executeTxResponse; // v6 returns TransactionResult
    }
}
