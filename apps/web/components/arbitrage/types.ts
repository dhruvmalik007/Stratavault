
export interface Market {
    title: string;
    ticker: string;
    last_price: number;
}

export interface Constraint {
    type: '<=' | '>=' | '=';
    coeffs: number[];
    bound: number;
}

export interface SolverResult {
    optimalDistribution: number[];
    arbitrageDetected: boolean;
    distance: number;
}

export type MarketNodeData = {
    market: Market;
    probability: number; // Implied probability from solver
    index: number;
    [key: string]: unknown;
};

export type ConstraintEdgeData = {
    label: string;
    isActive: boolean; // Is the constraint binding?
    [key: string]: unknown;
};

import { Node, Edge } from '@xyflow/react';

export type MarketNode = Node<MarketNodeData, 'marketNode'>;
export type ConstraintEdge = Edge<ConstraintEdgeData, 'constraintEdge'>;
