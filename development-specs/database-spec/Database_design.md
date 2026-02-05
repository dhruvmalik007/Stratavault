# Database Design (Yellow Network + Uniswap V4)

**Target**: Postgres (Supabase/RDS) for structured relational data.
**Cache**: Redis for hot session state (nonces, signatures).

## Core Tables

### 1. `yellow_sessions` (Off-Chain State Channels)
Tracks the lifecycle of ephemeral session wallets.
- `session_id` (PK, VARCHAR): Unique Session ID from Nitrolite SDK.
- `creator_address` (VARCHAR): Wallet initiating the session.
- `counterparty_address` (VARCHAR): Market maker or solver.
- `status` (ENUM): 'OPEN', 'DISPUTED', 'SETTLED'.
- `final_snapshot_hash` (VARCHAR): Merkle root of the final state.
- `on_chain_tx` (VARCHAR): Settlement transaction hash on Ethereum.
- `created_at` (TIMESTAMP).

### 2. `intent_logs` (High-Frequency Orders)
Stores the raw off-chain user intents (signatures).
- `intent_id` (PK, UUID).
- `session_id` (FK -> yellow_sessions.session_id).
- `asset_pair` (VARCHAR): e.g., 'ETH-USDC'.
- `direction` (ENUM): 'BUY', 'SELL'.
- `signed_message` (JSONB): The full EIP-712 payload + signature.
- `nonce` (BIGINT): Anti-replay counter.

### 3. `agent_leaderboard` (Uniswap V4 Performance)
Tracks how well Agents are managing liquidity pools.
- `agent_id` (PK, VARCHAR).
- `epoch` (VARCHAR): e.g., '2026-W05'.
- `v4_pool_id` (VARCHAR): The specific Uniswap pool being managed.
- `pnl_eth` (DECIMAL): Realized Profit/Loss.
- `roi_percent` (DECIMAL): Return on Liquidity.
- `sharpe_ratio` (DECIMAL): Risk-adjusted return.

---

## Simulation & Strategy Tables

### 4. `strategies` (Algo Registry)
Defines the available strategies for simulation.
- `strategy_id` (PK, VARCHAR): e.g., 'BF_WOLFE_OPTIMIZER', 'V4_YELLOW_ARB'.
- `description` (TEXT): e.g., "Barrier Frank-Wolfe convex optimization for market equilibrium".
- `parameters_schema` (JSONB): JSON Schema for valid inputs (e.g., `{"risk_tolerance": "number"}`).
- `created_at` (TIMESTAMP).

### 5. `simulation_runs` (LangGraph State)
Stores the inputs and outputs of every agent simulation loop.
- `simulation_id` (PK, UUID).
- `user_id` (FK): User triggering the sim (via Copilot).
- `strategy_id` (FK).
- `status` (ENUM): 'RUNNING', 'SUCCESS', 'FAILED', 'REJECTED'.
- `input_params` (JSONB): The context fetched from Mem0 + Market Data.
- `output_pnl` (DECIMAL): Predicted profit.
- `confidence_score` (DECIMAL): 0.0 - 1.0 (from BFW Solver).
- `execution_payload` (JSONB): The generated Yellow Intent ready for signing.

### 6. `execution_triggers` (The "Strike")
Links a successful simulation to a blockchain transaction.
- `trigger_id` (PK, UUID).
- `simulation_id` (FK).
- `approved_by_user` (BOOLEAN): CopilotKit UI approval flag.
- `yellow_session_id` (FK).
- `tx_hash` (VARCHAR): Final on-chain settlement proof.

---

## Access Patterns (SQL)

### Dashboard: "My Active Sessions"
```sql
SELECT * FROM yellow_sessions 
WHERE creator_address = :user_wallet 
AND status = 'OPEN' 
ORDER BY created_at DESC;
```

### Agent Logic: "Verify Replay Protection"
```sql
SELECT MAX(nonce) FROM intent_logs 
WHERE session_id = :current_session_id;
```

### Analytics: "Top Agents by ROI"
```sql
SELECT agent_id, AVG(roi_percent) as avg_roi 
FROM agent_leaderboard 
WHERE epoch = '2026-W05' 
GROUP BY agent_id 
ORDER BY avg_roi DESC 
LIMIT 10;
```

