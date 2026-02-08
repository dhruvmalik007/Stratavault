export type Vector = number[];
export type Matrix = number[][];

export interface LinearConstraint {
    coeffs: Vector; // The 'a' in a^T * x <= b
    bound: number;  // The 'b'
    type: '<=' | '=' | '>=';
}

export interface FWConfig {
    maxIterations: number;
    initialEpsilon: number;
    tolerance: number;
}

export interface OracleResult {
    vertex: Vector;
    gap: number;
    value: number; // Objective value at vertex
}

// Represents an arbitrary market/outcome space
export interface ProblemInstance {
    prices: Vector; // Current market prices p
    constraints: LinearConstraint[]; // Logical constraints
    dimension: number;
}
