# Hackathon Submission Details

## 1. Description (Project Pitch)

**Stratavault** is the first **Agent-First Asset Manager** designed specifically for the exploding Prediction Market economy on Solana. It bridges the gap between active speculation and professional capital management by deploying autonomous AI agents to act as your personal "Quant Team."

In the current landscape, trading on platforms like Polymarket or Kalshi is a manual, high-friction process requiring constant attention. **Stratavault solves this by automating the entire lifecycle:**
1.  **Intelligent Discovery**: Instead of browsing endless categories, users simply ask natural questions like *"Will Bitcoin hit $100k by 2025?"*. Our **AI Market Discovery Engine** (powered by Vercel AI SDK) analyzes the intent and instantly maps it to live, tradable markets across multiple venues.
2.  **Agentic Execution**: Autonomous agents continuously scan for arbitrage opportunities and mispriced events 24/7. They don't sleep, ensuring you never miss a market-moving event.
3.  **Capital Efficiency**: When capital isn't actively deployed in a high-conviction trade, Stratavault automatically sweeps it into high-yield DeFi vaults (Kamino, Save), ensuring zero idle capital.

Stratavault isn't just a trading bot; it's a **self-driving hedge fund** that democratizes access to sophisticated quant strategies for the everyday user.

---

## 2. How it's made (Technical Deep Dive)

Stratavault was built using a robust, scalable **Monorepo architecture** (TurboRepo) to manage distinct applications for the Frontend (`apps/web`) and the Agentic Backend (`apps/api`).

**The Tech Stack:**
*   **Core Framework**: Next.js 16 (App Router) with Turbopack for lightning-fast builds.
*   **AI Integration**: We leveraged the **Vercel AI SDK (3.3)** and **OpenAI (GPT-4o)** to build our proprietary *Market Discovery Service*. This service acts as a semantic layer, translating complex user natural language queries into precise, effective search terms compatible with rigid market APIs.
*   **Agentic UX**: We integrated **CopilotKit** (`@copilotkit/react-core`, `@copilotkit/react-ui`) to create a deeply embedded conversational interface. The Copilot isn't just a chatbot; it has full context of the user's portfolio and can trigger actions (like "Analyze this position" or "Deploy capital") directly within the application state.
*   **Data & Markets**: We built custom adapters for **Polymarket** (utilizing their Gamma API/The Graph) and **Kalshi** to ingest real-time odds.
*   **Clearing & Settlement**: We experimentally integrated **Yellow Network**'s ClearNode technology for high-speed, cross-chain settlement capability, preparing the system for institutional-grade reliability.

**Notable "Hacks" & Innovations:**
One of the trickiest challenges was mapping vague human intent to specific prediction market IDs. We implemented a **"Two-Stage Discovery Pipeline"**:
1.  **Fast Path**: A curated map of high-volume markets (e.g., "BTC", "Trump") for instant 0-latency results.
2.  **Smart Path (LLM)**: For complex queries, an LLM agent deconstructs the request (e.g., *"Will the Fed cut rates in Q3?"*) and generates optimized search vectors for our market adapters, effectively "repairing" the user's query before it hits the search engine. This allows Stratavault to find markets that standard keyword searches often miss.

**Deployment**: The entire stack is deployed on **Vercel**, utilizing their Edge Network for low-latency API responses, critical for real-time market data.
