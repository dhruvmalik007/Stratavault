
// HMR Force Update
import { ContextAgent } from './context/context.agent';
import { LogicAgent } from './logic.agent';
import { ExecutionAgent } from './execution/execution.agent';
import { FWConfig } from './solver/types';
import { runSolverTask } from './solver/solver.worker';

export class ArbitrageService {
    private static instance: ArbitrageService;
    // private worker: Worker;
    private contextAgent: ContextAgent;
    private logicAgent: LogicAgent;
    private execAgent: ExecutionAgent;

    // Simple in-memory job store for MVP
    public jobs: Map<string, {
        status: string,
        result?: any,
        error?: string,
        timestamp: number,
        markets?: any[],
        constraints?: any[]
    }> = new Map();

    private constructor() {
        this.contextAgent = new ContextAgent();
        this.logicAgent = new LogicAgent();
        this.execAgent = new ExecutionAgent();

        // Worker thread temporarily disabled due to Next.js bundling issues.
        // Running in-process for MVP stability.


    }



    static getInstance() {
        if (process.env.NODE_ENV !== 'production') {
            if (!(global as any).arbitrageService) {
                (global as any).arbitrageService = new ArbitrageService();
            }
            return (global as any).arbitrageService;
        } else {
            if (!ArbitrageService.instance) {
                ArbitrageService.instance = new ArbitrageService();
            }
            return ArbitrageService.instance;
        }
    }

    async triggerScan(query: string) {
        console.log(`Starting Arbitrage Scan for: ${query}`);

        // 1. Context: Find Cluster
        const clusters = await this.contextAgent.scanForClusters(query);
        if (!clusters.length) return { message: "No clusters found" };

        const cluster = clusters[0]; // Process first one for MVP
        if (!cluster) return { message: "Cluster invalid" };

        // 2. Logic: Generate Constraints
        const constraints = await this.logicAgent.generateConstraints(cluster.markets);

        // 3. Prepare Solver Task
        const prices = cluster.markets.map(m => m.last_price || 0.5); // Mock price field access

        const config: FWConfig = {
            maxIterations: 100,
            initialEpsilon: 0.1,
            tolerance: 1e-4
        };

        // 4. Run Solver (Async In-Process)
        const taskId = `task-${Date.now()}`;

        // Init Job Status
        this.jobs.set(taskId, {
            status: 'processing',
            timestamp: Date.now(),
            markets: cluster.markets,
            constraints: constraints
        });

        // Execute without blocking (floating promise)
        runSolverTask({
            id: taskId,
            prices,
            constraints,
            config
        }).then(result => {
            const job = this.jobs.get(taskId);
            if (job) {
                job.status = result.status;
                job.result = result.result;
                // @ts-ignore
                job.error = result.error;
                this.jobs.set(taskId, job);

                if (result.status === 'success' && result.result) {
                    this.execAgent.executeStrategy(result.result, cluster.markets);
                }
            }
        });

        return {
            taskId,
            message: "Scan initiated",
            markets: cluster.markets.length,
            constraints: constraints.length
        };
    }

    getJob(taskId: string) {
        return this.jobs.get(taskId);
    }
}

export const arbitrageService = ArbitrageService.getInstance();
