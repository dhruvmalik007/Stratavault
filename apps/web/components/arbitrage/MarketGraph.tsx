"use client";

import { useEffect, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    useReactFlow,
    ReactFlowProvider,
    NodeTypes,
    EdgeTypes,
    MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { MarketNode as MarketNodeComponent } from './MarketNode';
import { ConstraintEdge as ConstraintEdgeComponent } from './ConstraintEdge';
import { SolverResult, MarketNode, ConstraintEdge } from './types';

// Register custom types
const nodeTypes: NodeTypes = { marketNode: MarketNodeComponent };
const edgeTypes: EdgeTypes = { constraintEdge: ConstraintEdgeComponent };

interface MarketGraphProps {
    markets?: any[];
    constraints?: any[];
    solverResult?: SolverResult; // Prop for animation data
}

function GraphContent({ markets = [], constraints = [], solverResult }: MarketGraphProps) {
    const { fitView } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState<MarketNode>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<ConstraintEdge>([]);

    // 1. Initial Static Graph Construction
    useEffect(() => {
        if (!markets.length) return;

        const newNodes: MarketNode[] = markets.map((m, i) => ({
            id: `market-${i}`,
            type: 'marketNode',
            position: {
                x: (i % 3) * 300,
                y: Math.floor(i / 3) * 200
            },
            data: {
                market: m,
                index: i,
                probability: 0.5 // Default prob before solver runs
            },
        }));

        const mapping = (constraints || []).map((c: any, i: number) => {
            const sourceIndex = markets.findIndex(m => m.ticker === c.A);
            const targetIndex = markets.findIndex(m => m.ticker === c.B);

            if (sourceIndex === -1 || targetIndex === -1) return null;

            const edge: ConstraintEdge = {
                id: `edge-${i}`,
                source: `market-${sourceIndex}`,
                target: `market-${targetIndex}`,
                type: 'constraintEdge',
                data: {
                    label: `${c.coeffs[sourceIndex]}* A + ${c.coeffs[targetIndex]}* B ${c.type} ${c.bound}`,
                    isActive: false // Default inactive
                },
                markerEnd: { type: MarkerType.ArrowClosed },
            };
            return edge;
        });

        const newEdges: ConstraintEdge[] = mapping.filter((e: ConstraintEdge | null): e is ConstraintEdge => e !== null);

        setNodes(newNodes);
        setEdges(newEdges);

        // Fit view after a tick to allow layout to settle
        setTimeout(() => fitView({ padding: 0.2 }), 100);

    }, [markets, constraints, fitView, setNodes, setEdges]);


    // 2. "Computing Flow": Animate Results when Solver finishes
    useEffect(() => {
        if (!solverResult?.optimalDistribution) return;

        setNodes((nds) => nds.map((node) => {
            if (node.type !== 'marketNode') return node;
            const idx = node.data.index;
            const newProb = solverResult.optimalDistribution[idx];

            if (newProb === undefined) return node;

            // Only update if changed to avoid renders
            if (node.data.probability !== newProb) {
                return {
                    ...node,
                    data: { ...node.data, probability: newProb }
                };
            }
            return node;
        }));

        // Animate edges if arbitrage is detected
        if (solverResult.arbitrageDetected) {
            setEdges((eds) => eds.map(e => {
                if (e.type !== 'constraintEdge') return e;
                return {
                    ...e,
                    data: { ...e.data, isActive: true, label: (e.data as any).label || '' },
                    animated: true
                };
            }));
        }

    }, [solverResult, setNodes, setEdges]);

    return (
        <div style={{ width: '100%', height: '600px' }} className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
                className="bg-slate-900"
                minZoom={0.5}
                maxZoom={2}
            >
                <Background color="#334155" gap={16} />
                <Controls className="bg-white text-black" />
                <MiniMap className="bg-slate-800" nodeColor="#64748b" />
            </ReactFlow>
        </div>
    );
}

// Wrapper for ReactFlowProvider
export function MarketGraph(props: MarketGraphProps) {
    return (
        <ReactFlowProvider>
            <GraphContent {...props} />
        </ReactFlowProvider>
    );
}

export default MarketGraph;
