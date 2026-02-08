import { BarrierFrankWolfe } from './frank-wolfe';
import { FWConfig, LinearConstraint, Vector } from './types';

// Initialize solver logic here
const solver = new BarrierFrankWolfe();

export async function runSolverTask(task: {
    id: string;
    prices: Vector;
    constraints: LinearConstraint[];
    config: FWConfig;
}) {
    try {
        const result = await solver.project(task.prices, task.constraints, task.config);
        return {
            id: task.id,
            result,
            status: 'success'
        };
    } catch (error: any) {
        return {
            id: task.id,
            error: error.message,
            status: 'error'
        };
    }
}
