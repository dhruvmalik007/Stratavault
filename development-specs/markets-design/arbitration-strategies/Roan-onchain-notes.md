## 
Here is the technical specification for the **Frontier-tech/Extralabs Arbitrage Engine**.

This specification translates the mathematical framework of **Integer Programming (IP)** and **Marginal Polytopes** into a deployable, low-latency architecture. The system bypasses brute-force enumeration () in favor of constraint satisfaction solvers.

### **System Architecture: The "Alpha-Seeker" Pipeline**

---

### **1. Ingestion & Semantic Mapping Layer ("The Scout")**

**Goal:** Ingest thousands of discrete markets and identify logical clusters (e.g., "Trump PA" and "GOP PA Margin") using "Context Engineering."

* **Data Sources:**
* **Polymarket:** `GET /clob/book` (Limit Order Book level data is required for precise pricing).
* **Kalshi:** `v2/markets` (Regulated exchange data).


* **The "Context Engineering" Pipeline:**
* **Vectorization:** Markets are not matched by keywords but by **semantic embeddings** (using a high-dimensional model like `text-embedding-3-small` or `Cohere-embed`).
* **Embedding Space:**
* Market A: "Trump wins Pennsylvania"  Vector 
* Market B: "Republicans win PA by >5%"  Vector 
* **Clustering:** Use **HNSW (Hierarchical Navigable Small World)** indexing to find nearest neighbors. If Cosine Similarity , they are flagged as a "Cluster Candidates."




* **Logical Parser (LLM Agent):**
* An LLM (fine-tuned Llama 3 or GPT-4o) acts as a "Logic Extractor." It takes the text of the clustered markets and outputs a **Dependency Directed Acyclic Graph (DAG)**.
* *Output Example:* `Market_B (Subset) implies Market_A (Superset)`.



---

### **2. The Constraint Generation Engine ("The Mapper")**

**Goal:** Convert the Logic DAG into the linear constraints required for the Integer Programming solver.

* **Mathematical Translation:**
Instead of iterating  outcomes, we define the **Valid Payoff Vector Set** .
* Let  be the resolution of Market .
* If Market B (Margin > 5%) implies Market A (Win), we generate the linear constraint:


* If Market C and Market D are mutually exclusive (e.g., "Win by 1-5%" vs "Win by 5-10%"):




* **Matrix Construction:**
The system automatically constructs the Constraint Matrix  and vector  such that any valid outcome vector  satisfies:



---

### **3. The Arbitrage Core (The Solver)**

**Goal:** Detect if the current market prices allow for a risk-free profit by solving the **Dual Problem**.

* **The Primal Problem (Cost Minimization):**
We want to find a portfolio  (positions in various contracts) that costs  and pays off  in *every* valid outcome in .
* **The Integer Programming Formulation:**
We do not check every outcome. Instead, we use a solver (like **Gurobi**, **SCIP**, or **Google OR-Tools**) to minimize the "Worst Case Payout."
**Objective:**



**Subject to:**
1. **Cost Constraint:**  (Normalize investment to $1)
2. **Payoff Constraint:** For all valid , the portfolio payoff .


* *Note:* Since  is defined by linear constraints, we solve this using **Mixed-Integer Linear Programming (MILP)** where the constraints cut off the invalid regions of the hypercube.



---

### **4. Frontend Visualization & Execution ("The Cockpit")**

**Goal:** Render the "Conditional Density" and execute the trade.

* **Tech Stack:** Next.js + D3.js (for custom probability density visualizations).
* **Dynamic Rendering:**
* **Visual:** A probability density curve derived from the prices of the "Margin" buckets.
* **The "Arb" Signal:** When the implied probability of a subset (e.g., Margin > 5%) exceeds the probability of the superset (Win), the UI highlights the "Gap" in red.


* **Execution Strategy (Atomic Transacting):**
* The user clicks "Execute Strategy."
* The system fires parallel orders to the **CLOB** (Central Limit Order Book).
* **Legging Risk Management:** Use "Fill-or-Kill" (FOK) or "Immediate-or-Cancel" (IOC) orders to ensure you don't get stuck with one leg of the arbitrage (e.g., buying the "Long" but missing the "Short").



---

### **Next Step: The "Solver" Prototype**

The core difficulty is correctly setting up the `scipy.optimize.milp` or `OR-Tools` wrapper.



