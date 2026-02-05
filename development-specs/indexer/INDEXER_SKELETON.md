# Indexer Skeleton (Yellow Network + Uniswap V4)

## Overview
- **Yellow Network Indexer**: Listens for `SessionOpened`, `SessionClosed`, and `Dispute` events from the Settlement Contract.
- **Uniswap V4 Indexer**: Tracks `Swap` and `ModifyPosition` events via Alchemy/Infura WebSockets.
- **Agent Logs**: Ingests off-chain "Intent Log" from Nitrolite SDK (peer-to-peer gossip).

## Application Stack
- **Network**: Ethereum Sepolia / Yellow Testnet
- **Libraries**: `viem` (Event listening), `@yellow-network/nitrolite-sdk` (Off-chain decoding).
- **Storage**: Postgres (Structured Relational) + Redis (Hot Session State).

## Event Mapping

### 1. Yellow Settlement Contract
- `SessionOpened(sessionId, participants[], collateral)`
    -> `INSERT INTO sessions (id, status, participants)`
- `SessionSettled(sessionId, finalSnapshotHash, payout[])`
    -> `UPDATE sessions SET status='SETTLED', payout=$3`

### 2. Uniswap V4 PoolManager
- `Swap(poolId, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick)`
    -> `INSERT INTO v4_swaps ...`
- `ModifyPosition(poolId, sender, tickLower, tickUpper, liquidityDelta)`
    -> `INSERT INTO v4_liquidity ...`

## Pseudocode (Viem)
```typescript
import { createPublicClient, http, parseAbiItem } from 'viem'
import { yellowSettlementAbi } from './abis'

const client = createPublicClient({ chain: sepolia, transport: http() })

// 1. Index On-Chain Settlements
client.watchContractEvent({
  address: YELLOW_CONTRACT,
  abi: yellowSettlementAbi,
  eventName: 'SessionSettled',
  onLogs: logs => {
    logs.forEach(log => {
      upsertSession(log.args.sessionId, 'SETTLED', log.args.payout)
    })
  }
})

// 2. Index V4 Swaps for Agent Strategy Triggers
client.watchContractEvent({
  address: POOL_MANAGER,
  abi: poolManagerAbi,
  eventName: 'Swap',
  onLogs: logs => {
    // If swap is massive, trigger Agent to rebalance Yellow Session
    if (isWhaleMovement(log.args)) {
      triggerAgentStrategy(log.args)
    }
  }
})
```
