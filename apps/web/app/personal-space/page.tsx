
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Loader2, TrendingUp, History, Wallet } from "lucide-react";

interface Order {
    id: string;
    marketTitle: string;
    marketSlug: string;
    side: "Buy" | "Sell";
    size: number;
    price: number;
    status: string;
    createdAt: string;
}

interface PersonalSpaceData {
    positions: Order[];
    history: Order[];
}

export default function PersonalSpacePage() {
    const [data, setData] = useState<PersonalSpaceData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
                const res = await fetch(`${apiBase}/api/personal-space`);
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (error) {
                console.error("Failed to fetch personal space data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // Poll every 5 seconds for updates (e.g. after a trade)
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    if (loading && !data) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <header>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Personal Space</h1>
                <p className="text-muted-foreground">Track your active positions and trading history.</p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{data?.positions.length || 0}</div>
                        <p className="text-xs text-muted-foreground">Open trades</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            ${data?.history.reduce((acc, curr) => acc + (curr.price * curr.size), 0).toFixed(2)}
                        </div>
                        <p className="text-xs text-muted-foreground">Lifetime traded volume</p>
                    </CardContent>
                </Card>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Wallet className="w-5 h-5" /> Active Portfolios
                </h2>
                {data?.positions.length === 0 ? (
                    <Card className="bg-muted/50 border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                            <p className="text-muted-foreground mb-2">No active positions.</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-4">
                        {data?.positions.map((pos) => (
                            <Card key={pos.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex items-center justify-between p-4">
                                        <div className="space-y-1">
                                            <h3 className="font-medium text-lg">{pos.marketTitle}</h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Badge variant={pos.side === 'Buy' ? 'default' : 'destructive'}>
                                                    {pos.side}
                                                </Badge>
                                                <span>{pos.size} shares @ ${pos.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-xl">
                                                ${(pos.size * pos.price).toFixed(2)}
                                            </div>
                                            <Badge variant="outline" className="mt-1">
                                                Current
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <History className="w-5 h-5" /> Activity History
                </h2>
                <Card>
                    <CardContent className="p-0">
                        {data?.history.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground">No history yet.</div>
                        ) : (
                            <div className="divide-y">
                                {data?.history.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-4 hover:bg-muted/5">
                                        <div>
                                            <p className="font-medium text-sm">{item.marketTitle}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(item.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm">
                                            <Badge variant="secondary" className="uppercase text-[10px]">
                                                {item.status}
                                            </Badge>
                                            <div className="text-right min-w-[80px]">
                                                <div className={item.side === 'Buy' ? "text-green-500" : "text-red-500"}>
                                                    {item.side} {item.size}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    @ ${item.price.toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
