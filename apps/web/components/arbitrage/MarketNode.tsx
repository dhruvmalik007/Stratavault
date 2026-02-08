import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { MarketNodeData, MarketNode as MarketNodeType } from './types';

export function MarketNode({ data }: NodeProps<MarketNodeType>) {
    const { market, probability, index } = data;

    // Probability Bar Width (clamp 0-100)
    const probPercent = Math.min(100, Math.max(0, probability * 100));

    return (
        <div className="w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden group hover:border-cyan-500 transition-colors duration-300">
            {/* Header */}
            <div className="px-3 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400">{market.ticker}</span>
                <span className="text-sm font-bold text-emerald-400">${market?.last_price?.toFixed(2) ?? '0.00'}</span>
            </div>

            {/* Body */}
            <div className="p-3">
                <div className="text-xs text-white font-medium truncate mb-2" title={market.title}>
                    {market.title}
                </div>

                {/* Probability Meter */}
                <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    {/* Animated Bar */}
                    <div
                        className="absolute h-full bg-cyan-600 transition-all duration-1000 ease-in-out"
                        style={{ width: `${probPercent}% ` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-mono mix-blend-difference">
                        Implied: {(probability * 100).toFixed(1)}%
                    </div>
                </div>
            </div>

            {/* Connection Handles */}
            <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-slate-500" />
            <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-slate-500" />
        </div>
    );
}
