import { ethers } from 'ethers';

export const EIP712AuthTypes = {
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

export interface AuthParams {
    scope: string;
    expires_at: bigint;
    session_key: string;
    // allowances defaulted to empty
}

/**
 * Creates a "Smart Signer" that switches between EIP-712 (for auth_verify) and ECDSA (for everything else).
 * Used to satisfy Yellow Network Sandbox authentication requirements.
 */
export function createEIP712Signer(wallet: ethers.Wallet | ethers.HDNodeWallet, authParams: AuthParams, chainId?: number) {
    return async (message: any) => {
        // NitroliteRPCMessage is array: [version, method, params, id, timestamp]
        // Check if it's an array and method is auth_verify
        if (Array.isArray(message) && message[1] === 'auth_verify') {
            console.log('[yellow] Signing EIP-712 for AuthVerify');
            const params = message[2];
            const challenge = params.challenge;

            // Use provided chainId or fallback (though fallback might be tricky without async network fetch)
            // If chainId is undefined, ethers usually omits it or uses 1? 
            // Ideally we should pass it.
            const domain = {
                name: 'nitrolite',
                ...(chainId ? { chainId } : {})
            };
            const types = EIP712AuthTypes;
            const value = {
                challenge,
                scope: authParams.scope,
                wallet: wallet.address,
                session_key: authParams.session_key,
                expires_at: authParams.expires_at,
                allowances: []
            };

            if (typeof wallet.signTypedData === 'function') {
                return await wallet.signTypedData(domain, types, value);
            } else {
                // v5 fallback (though we require v6 in package.json)
                return await (wallet as any)._signTypedData(domain, types, value);
            }
        } else {
            // Fallback to ECDSA (personal_sign)
            // JSON stringify the payload (which is the RPC message array/object)
            const content = (typeof message === 'string' || Buffer.isBuffer(message) || message instanceof Uint8Array)
                ? message
                : JSON.stringify(message, (_, v) => typeof v === 'bigint' ? v.toString() : v);

            return await wallet.signMessage(content);
        }
    };
}
