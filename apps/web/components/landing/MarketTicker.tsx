"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

const markets = [
    { id: 1, title: "BTC > $100k", prob: 62, trend: "up" },
    { id: 2, title: "ETH > $4k", prob: 45, trend: "down" },
    { id: 3, title: "Fed Rate Cut", prob: 88, trend: "up" },
    { id: 4, title: "SOL ETF Approved", prob: 32, trend: "down" },
    { id: 5, title: "US GDP Growth > 2%", prob: 75, trend: "up" },
    { id: 6, title: "Oil < $70", prob: 55, trend: "flat" },
];

export function MarketTicker(): React.JSX.Element {
    return (
        <div className="w-full bg-secondary/30 border-y border-border/40 overflow-hidden py-3">
            <div className="flex select-none gap-8 items-center w-full">
                <motion.div
                    className="flex gap-12 min-w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                >
                    {[...markets, ...markets, ...markets].map((market, i) => (
                        <div key={`${market.id}-${i}`} className="flex items-center gap-3">
                            <span className="text-sm font-medium text-foreground/80">{market.title}</span>
                            <div className={`flex items-center gap-1 text-sm font-mono font-bold ${market.trend === 'up' ? 'text-green-400' :
                                market.trend === 'down' ? 'text-red-400' : 'text-muted-foreground'
                                }`}>
                                {market.prob}%
                                {market.trend === 'up' && '↑'}
                                {market.trend === 'down' && '↓'}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
