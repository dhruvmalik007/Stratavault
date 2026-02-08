import React from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from '@xyflow/react';
import { ConstraintEdgeData } from './types';

export function ConstraintEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
}: EdgeProps) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const edgeData = data as unknown as ConstraintEdgeData; // Safe cast
    const isActive = edgeData?.isActive ?? false;

    return (
        <>
            <BaseEdge
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    ...style,
                    stroke: isActive ? '#10b981' : '#475569', // Emerald if active, Slate if inactive
                    strokeWidth: isActive ? 2 : 1,
                    strokeDasharray: isActive ? '5,5' : 'none',
                    animation: isActive ? 'dashdraw 1s linear infinite' : 'none' // We'll add keyframes in global CSS or style tag
                }}
            />
            {/* Inline Style for Animation (or move to global CSS) */}
            {isActive && (
                <style>
                    {`
                    @keyframes dashdraw {
                        from { stroke-dashoffset: 10; }
                        to { stroke-dashoffset: 0; }
                    }
                    `}
                </style>
            )}

            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                    }}
                    className="nodrag nopan"
                >
                    <div className={`px-2 py-1 rounded shadow-sm text-[10px] font-mono border ${isActive
                            ? 'bg-emerald-900/90 text-emerald-200 border-emerald-700'
                            : 'bg-slate-900/90 text-slate-400 border-slate-700'
                        }`}>
                        {edgeData?.label || ''}
                    </div>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
