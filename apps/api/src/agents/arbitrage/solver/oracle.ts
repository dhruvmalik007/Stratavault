import solver from 'javascript-lp-solver';
import { LinearConstraint, OracleResult, Vector } from './types';

export class IPOracle {

    constructor() { }

    /**
     * Finds the vertex 'z' that MINIMIZES <gradient, z> subject to constraints.
     * In BFW context, we typically want to find a descent direction. 
     * If the gradient is of the objective function f(x), we want to MAXIMIZE <gradient, z>.
     * 
     * We map the problem to a standard LP format:
     * Maximize: c^T x
     * Subject to: Ax <= b
     */
    async findDescentVertex(gradient: Vector, constraints: LinearConstraint[]): Promise<OracleResult> {

        // 1. Define Variables
        // javascript-lp-solver uses a model object where keys are variable names.
        const variables: Record<string, any> = {};

        // Initialize variables x_0, x_1... with their objective coefficients (gradient)
        gradient.forEach((coeff, i) => {
            variables[`x_${i}`] = {
                obj: coeff,
                // Assume implicit bounds [0,1] for probabilities if not specified, 
                // but let constraints handle strictness.
                // However, solver defaults to non-negative.
            };
        });

        // 2. Define Constraints
        const modelConstraints: Record<string, any> = {};

        constraints.forEach((c, i) => {
            const constraintName = `c_${i}`;

            // Map type <=, >=, = to min/max/equal properties
            // javascript-lp-solver format: { min: ..., max: ..., equal: ... }
            if (c.type === '<=') {
                modelConstraints[constraintName] = { max: c.bound };
            } else if (c.type === '>=') {
                modelConstraints[constraintName] = { min: c.bound };
            } else if (c.type === '=') {
                modelConstraints[constraintName] = { equal: c.bound };
            }

            // Register coefficients in the variables
            c.coeffs.forEach((val, idx) => {
                const varName = `x_${idx}`;
                if (variables[varName]) {
                    variables[varName][constraintName] = val;
                }
            });
        });

        // 3. Construct Model
        const model = {
            optimize: "obj",
            opType: "max",
            constraints: modelConstraints,
            variables: variables,
            ints: {} // Leave empty for LP relaxation (continuous probabilities) 
            // or populate for MILP if we needed discrete outcomes.
        };

        // 4. Solve
        const results = solver.Solve(model);

        // 5. Extract Result Vector
        const vertex: Vector = [];
        for (let i = 0; i < gradient.length; i++) {
            vertex.push(results[`x_${i}`] || 0);
        }

        return {
            vertex,
            gap: 0,
            value: results.result
        };
    }
}
