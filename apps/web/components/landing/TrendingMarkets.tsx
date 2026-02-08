"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { TrendingUp, Users } from "lucide-react";

// Mock Data
const trendingMarkets = [
    {
        id: 1,
        question: "Will Bitcoin hit $100k in 2024?",
        volume: "$4.2M",
        yesPrice: 0.62,
        category: "Crypto",
        data: [40, 45, 55, 60, 58, 62, 65, 62]
    },
    {
        id: 2,
        question: "Super Bowl LIX Winner",
        volume: "$8.5M",
        yesPrice: 0.45,
        category: "Sports",
        data: [20, 25, 30, 45, 42, 48, 45, 45],
        label: "Chiefs"
    },
    {
        id: 3,
        question: "Fed Interest Rate Decision",
        volume: "$12.1M",
        yesPrice: 0.88,
        category: "Economics",
        data: [80, 82, 85, 88, 88, 89, 87, 88],
        label: "Cut"
    },
    {
        id: 4,
        question: "GTA VI Release Date",
        volume: "$2.3M",
        yesPrice: 0.35,
        category: "Gaming",
        data: [50, 45, 40, 35, 32, 35, 38, 35]
    }
];

export function TrendingMarkets(): React.JSX.Element {
    return (
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Trending Markets</h2>
                    <p className="text-muted-foreground mt-2">High volume predictions happening right now.</p>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80">View All Markets →</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingMarkets.map((market) => (
                    <Card key={market.id} className="group hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-2 space-y-3">
                            <div className="flex justify-between items-start">
                                <Badge variant="secondary" className="bg-secondary/50 text-xs font-normal">
                                    {market.category}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground gap-1">
                                    <Users className="h-3 w-3" />
                                    {market.volume}
                                </div>
                            </div>
                            <CardTitle className="text-base font-medium leading-snug min-h-[3rem]">
                                {market.question}
                                {market.label && <span className="block text-sm text-muted-foreground mt-1 text-primary">{market.label}</span>}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                            <div className="h-16 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={market.data.map((val, i) => ({ val, i }))}>
                                        <Line
                                            type="monotone"
                                            dataKey="val"
                                            stroke={market.yesPrice > 0.5 ? "#10b981" : "#f43f5e"}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2 flex justify-between items-center border-t border-border/30 mt-2">
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground">Yes</span>
                                <span className="font-bold text-lg">{Math.floor(market.yesPrice * 100)}¢</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-xs text-muted-foreground">No</span>
                                <span className="font-bold text-lg text-muted-foreground">{100 - Math.floor(market.yesPrice * 100)}¢</span>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
