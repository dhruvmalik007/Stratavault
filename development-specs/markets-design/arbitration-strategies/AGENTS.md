# Arbitrage Agent Architecture Specification (`AGENTS.md`)

## 1. System Overview

The **Arbitrage Agent** is a specialized high-performance service designed to detect and exploit risk-free profit opportunities across high-dimensional prediction markets. It leverages **Barrier Frank-Wolfe (BFW)** for optimization, integrating deeply with the monorepo's AI and Database layers.

### Architecture Diagram
```mermaid
graph TD
    A[Cron/Scheduler] -->|Trigger| B[Context Agent]
    B -->|Fetch Prices| C[Prediction Market Clients]
    C -->|Market Data| B
    B -->|Filter & Cluster| D[Logic Agent]
    D -->|Generate Constraints| E[Optimization Engine]
    E -->|Worker Thread| F[BFW Solver (Highs-JS)]
    F -->|True Probabilities| E
    E -->|Delta > Fees?| G[Execution Agent]
    G -->|Submit Orders| H[ClearNode / Exchanges]
    
    subgraph Shared Infrastructure
    I[Vector Memory @repo/ai] --- B
    J[DynamoDB @repo/database] --- G
    end
```

---

## 2. Technology Stack & Integration

### A. Optimization Engine (Solver)
- **Library**: `highs-js` for linear programming.
- **Reasoning**: MILP solver for Barrier Frank-Wolfe (BFW) optimization. Active maintenance and Node.js Worker Thread compatibility.
- **Pattern**: Running in a dedicated Worker Thread to prevent event-loop blocking.

### B. AI & Agent Workflow (`@repo/ai`)
- **Memory/Context**: Utilizes `MemoryManager` from `@repo/ai` (powered by `mem0ai`) for storing market semantic embeddings and context.
- **Vector Database**: Semantic clustering of markets is handled via the existing vector store integrations in `@repo/ai`.
- **LLM/Agents**: Logic parsing uses `@ai-sdk/openai` (via `@repo/ai`) to translate natural language market rules into linear inequalities.

### C. Data Persistence (`@repo/database`)
- **Storage**: **AWS DynamoDB**.
- **Schema**:
    - **ArbitrageOpportunities**: Stores detected opportunities, timestamps, and execution status.
    - **MarketSnapshots**: High-frequency snapshots of market states for backtesting.
- **Integration**: All database access goes through the typed helpers in `@repo/database`.

---

## 3. Component Breakdown

### A. Context Agent ("The Scout")
- **Role**: Identifies relevant market clusters (e.g., "Trump PA", "Senate PA").
- **Implementation**: `apps/api/src/agents/arbitrage/context.agent.ts`
- **Integration**:
    - Calls `marketService` (`apps/api/src/services`) for raw data.
    - Uses `MemoryManager.add()` (`@repo/ai`) to index market descriptions.
    - Uses `MemoryManager.search()` to find semantic neighbors (Cluster Candidates).

### B. Logic Agent ("The Mapper")
- **Role**: Translates semantics into math.
- **Example**: "If Margin > 5%, then Win = Yes" $\rightarrow x_{margin} - x_{win} \le 0$
- **Implementation**: `apps/api/src/agents/arbitrage/logic.agent.ts`
- **Integration**: 
    - Uses `generateObject` (`@ai-sdk/openai`) to reliably output JSON constraint structures from market descriptions.

### C. Optimization Engine (The Core)
- **Role**: BFW Solver implementation.
- **Implementation**: `apps/api/src/agents/arbitrage/solver/`
- **Solver**: Replace `IPOracle` GLPK logic with `Highs` model:
    ```typescript
    import { Highs } from 'highs-js';
    // ... setup model variables and constraints ...
    highs.solve();
    ```

### D. Execution Agent ("The Trader")
- **Role**: Risk checks and execution.
- **Implementation**: `apps/api/src/agents/arbitrage/execution.agent.ts`
- **Integration**:
    - Persists trade log to `DynamoDB` via `pubTrade()` (`@repo/database`).

---

## 4. Directory Structure (`apps/api/src/agents/arbitrage`)
```
src/agents/arbitrage/
├── context/
│   ├── market.fetcher.ts
│   └── cluster.service.ts   # Uses @repo/ai MemoryManager
├── solver/
│   ├── types.ts
│   ├── oracle.ts            # Highs-JS wrapper
│   ├── frank-wolfe.ts       # BFW Algorithm
│   └── solver.worker.ts     # Worker entry point
├── execution/
│   └── trade.executor.ts    # Writes to @repo/database
└── arbitrage.service.ts
```

## 5. Next Steps
1.  **Dependencies**: `pnpm add highs-js` in `apps/api`.
2.  **Scaffold**: Create the directory structure.
3.  **Implement**:
    - Port BFW Logic to use `highs-js`.
    - Wire up `Context Agent` to `@repo/ai` memory.
    - Wire up `Execution Agent` to `@repo/database` DynamoDB.
