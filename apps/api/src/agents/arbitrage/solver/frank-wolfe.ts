import { FWConfig, LinearConstraint, Vector } from './types';
import { IPOracle } from './oracle';

export class BarrierFrankWolfe {
    private oracle: IPOracle;

    constructor() {
        this.oracle = new IPOracle();
    }

    /**
     * Projects market prices 'p' onto the polytope P defined by constraints.
     * Finds 'x' in P that maximizes sum(pi * log(xi)).
     * This is equivalent to finding the Minimimum relative entropy / KL Divergence,
     * or simply finding the arbitrage-free probability distribution closest to market prices.
     * 
     * If the minimum utility is > 0 (or some threshold), there is an arbitrage (?).
     * Actually, usually:
     * We want: Find p* in ConvexHull(Outcomes) such that p* approx MarketPrices.
     * If MarketPrices is OUTSIDE ConvexHull(Outcomes), then Arbitrage exists.
     * 
     * Detailed BFW Logic:
     * 1. Start with an active set of vertices S = {v0}
     * 2. Current iterate x_t = v0
     * 3. Compute gradient of barrier function (log barrier)
     * 4. Find descent direction via Oracle
     * 5. Step size line search
     * 6. Update x_t
     */
    async project(prices: Vector, constraints: LinearConstraint[], config: FWConfig): Promise<{
        optimalDistribution: Vector;
        arbitrageDetected: boolean;
        distance: number; // Distance between prices and valid polytope
    }> {
        const dim = prices.length;

        // 1. Initial Feasible Point validation
        // For now, assume uniform distribution is valid or try to find one?
        // In many FW implementations, we start with a known vertex or run "Phase I" simplex.
        // For prediction markets, the "uniform" vector often isn't valid if constraints are strict.
        // Let's rely on the Oracle to give us a starting vertex (any valid outcome).

        // Finding ANY valid vertex: Maximize 0 subject to constraints.
        const startRes = await this.oracle.findDescentVertex(new Array(dim).fill(0), constraints);
        let x = startRes.vertex; // Current point in polytope

        // For the arbitrage check:
        // We want to minimize || x - p ||^2  (Project p onto Polytope)
        // Objective: Minimize 0.5 * x^T x - p^T x
        // Gradient of f(x) = x - p

        let activeSet: Vector[] = [x];
        let weights: number[] = [1.0];

        for (let t = 0; t < config.maxIterations; t++) {
            // Gradient of 0.5 ||x-p||^2 is (x - p)
            // We want to minimize this, so FW direction is min <grad, s> => min <x-p, s>
            // which is max <p-x, s>

            const gradient = x.map((xi, i) => prices[i]! - xi); // Direction p - x

            // Oracle: Find s to maximize <gradient, s>
            const oracleRes = await this.oracle.findDescentVertex(gradient, constraints);
            const s = oracleRes.vertex;

            // Frank-Wolfe Gap: <x-p, x-s> ? 
            // Gap g_t = <gradient, s - x> = <p-x, s-x>  (Wait, gradient is p-x or x-p?)
            // Let F(x) = 0.5 ||x-p||^2. Grad = x-p.
            // FW Subproblem: min <Grad, s> s.t. s in P
            // => min <x-p, s>
            // => max <p-x, s>

            const gradDesc = x.map((xi, i) => xi - prices[i]!); // Actual gradient
            // Oracle maximizes < -grad, s > => < p-x, s >
            const dirVector = prices.map((pi, i) => pi - x[i]!); // p - x

            // Check gap
            // <grad, x - s>
            let gap = 0;
            for (let i = 0; i < dim; i++) {
                gap += gradDesc[i]! * (x[i]! - s[i]!);
            }

            if (gap < config.tolerance) {
                break; // Converged
            }

            // Step size gamma = 2 / (k + 2) or line search
            // Exact line search for quadratic problem:
            // min || (x + gamma(s-x)) - p ||^2
            // d = s - x
            // min || (x-p) + gamma*d ||^2
            // Take deriv wrt gamma: 2 * < (x-p) + gamma*d, d > = 0
            // <x-p, d> + gamma <d, d> = 0
            // gamma = - <x-p, d> / <d, d> = <p-x, d> / ||d||^2

            const d = s.map((si, i) => si - x[i]!); // direction
            const d_sq = d.reduce((sum, v) => sum + v * v, 0);
            const p_minus_x_dot_d = d.reduce((sum, di, i) => sum + (prices[i]! - x[i]!) * di, 0);

            let gamma = p_minus_x_dot_d / (d_sq + 1e-9);
            gamma = Math.max(0, Math.min(1, gamma)); // Clamp to [0,1]

            // Update x
            x = x.map((xi, i) => xi + gamma * d[i]!);
        }

        // Distance squared
        // Distance squared
        const distSq = x.reduce((sum, xi, i) => sum + (xi - prices[i]!) ** 2, 0);
        const distance = Math.sqrt(distSq);

        // If distance is significant, it means Price vector 'p' is OUTSIDE the polytope.
        // This implies an arbitrage opportunity exists (specifically, Incoherence).
        // The point 'x' is the closest arbitrage-free distribution.

        return {
            optimalDistribution: x,
            arbitrageDetected: distance > 1e-3, // Threshold
            distance
        };
    }
}
