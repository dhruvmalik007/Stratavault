# Architecture: Safe-Based Agentic Prediction Market

## Overview
This system enables users to leverage AI agents (Copilots) to identify and execute arbitrage/investment strategies across prediction markets (Polymarket, Kalshi). It uses **Safe (Gnosis) Smart Accounts** to provide a secure, programmable execution layer for users, abstracting the complexity of cross-chain interactions.

## Core Components

### 1. User Onboarding & Identity
- **Auth**: Privy (Hybrid: Social + Wallet).
- **Wallet**:
  - **EOA**: User's connected wallet (Phantom/Metamask).
  - **Smart Account**: A specific Safe deployed on Polygon (for Polymarket) owned by the User's EOA (or a derived key).
  - **Identity**: Stored in DynamoDB (`UserProfile`), mapping `userId` <-> `safeAddress`.

### 2. Smart Account Infrastructure (`@packages/smart-account`)
- **Safe Core SDK**: Used to deploy and manage Safes.
- **Factroy**: Deterministic deployment using `SafeFactory`.
- **Relayer**: Optional Gelato/Safe relay for gasless experience (if sponsored).
- **Modules**:
  - **Polymarket Adapter**: specialized functions to buy/sell CTF shares.
  - **Recovery**: Optional social recovery.

### 3. Intelligence Layer (`apps/api` + `packages/ai`)
- **Market Scanner**: Agents periodically scan Polymarket and Kalshi APIs.
- **Strategy Engine**:
  - Calculates Arbitrage opportunities (e.g., Yes on Poly vs No on Kalshi).
  - Generates "Trade Signals".
- **Copilot**:
  - User Interface agent (`@copilotkit`) that explains the strategy to the user.
  - "Invest" action triggers the Safe transaction construction.

### 4. Integration Layer ("Yellow")
- **State Channels**: `@packages/yellow`.
- **Purpose**: Used for high-frequency test transactions or "Simulated" state channel settlements before on-chain commitment.

## Data Flow

1. **Connect**: User connects via Frontend (`apps/web`).
2. **Onboard**: System checks DB. If no Safe, prompts "Create Smart Account".
3. **Deploy**:
   - Frontend calls `SafeFactory.predictSafeAddress()`.
   - User signs deployment transaction (or system sponsors it).
   - Safe Address saved to User Profile.
4. **Dashboard**:
   - Agent displays "Arbitrage Opportunity on Election Market".
   - User clicks "Invest 100 USDC".
5. **Execution**:
   - Frontend constructs Safe Transaction: `approve(USDC) -> buy(Outcome)`.
   - User signs via EOA.
   - Transaction submitted to Blockchain.

## Technology Stack

- **Frontend**: Next.js, Tailwind, Shadcn UI.
- **Backend**: Next.js API Routes / Node.js.
- **Database**: DynamoDB (User Profiles, Market Cache).
- **Blockchain**: Polygon (Polymarket), Ethereum (Safe).
- **AI**: OpenAI/Perplexity (Market Research), CopilotKit (UI).

