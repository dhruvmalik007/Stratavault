import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ExternalLink, TrendingUp, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

export interface Market {
    id: string;
    title: string;
    platform: 'kalshi' | 'polymarket';
    url: string;
    metadata?: any;
    price?: number;
}

export function MarketCard({ market }: { market: Market }) {
    const isKalshi = market.platform === 'kalshi';
    const [price, setPrice] = useState(market.price || 50);

    // Simulation of "Real-Time" updates for Demo purposes
    // in a real app, this would be a WebSocket subscription
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setPrice(p => Math.min(99, Math.max(1, p + (Math.random() - 0.5) * 2)));
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-muted/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-2">
                    <Badge variant={isKalshi ? "default" : "secondary"} className="mb-2">
                        {market.platform === 'kalshi' ? 'Kalshi' : 'Polymarket'}
                    </Badge>
                    <div className="flex items-center gap-2">
                        {market.price !== undefined && (
                            <span className={`font-mono font-bold ${price > 50 ? 'text-green-500' : 'text-red-500'}`}>
                                {price.toFixed(1)}%
                            </span>
                        )}
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                </div>
                <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {market.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-2">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {market.metadata?.ticker && (
                        <div className="flex items-center gap-1">
                            <span className="font-mono text-xs bg-muted/50 px-1 py-0.5 rounded">
                                {market.metadata.ticker}
                            </span>
                        </div>
                    )}
                    {market.metadata?.volume && (
                        <span className="text-xs text-muted-foreground flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Vol: {market.metadata.volume}
                        </span>
                    )}
                    {market.metadata?.description && (
                        <p className="line-clamp-3 text-xs opacity-80 mt-1">
                            {market.metadata.description}
                        </p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="pt-2">
                <Button asChild variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <a href={market.url} target="_blank" rel="noopener noreferrer">
                        Trade Now <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
