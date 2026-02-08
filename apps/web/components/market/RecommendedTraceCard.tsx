
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

interface Option {
    id: string;
    title: string;
    provider: "kalshi" | "polymarket";
    price: number;
    url: string;
}

interface Recommendation {
    intent: string;
    bestMarketId: string;
    bestProvider: "kalshi" | "polymarket";
    price: number;
    reasoning: string;
    allOptions: Option[];
}

export function RecommendedTraceCard({ recommendation, onSelect }: { recommendation: Recommendation, onSelect: (marketId: string) => void }) {
    if (!recommendation) return null;

    return (
        <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🚀 Recommended Strategy</span>
                    <Badge variant="secondary">AI Optimized</Badge>
                </CardTitle>
                <CardDescription>
                    Based on your intent: <strong>"{recommendation.intent}"</strong>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 bg-background rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="font-semibold text-lg">{recommendation.bestProvider === 'kalshi' ? 'Kalshi' : 'Polymarket'}</h4>
                            <p className="text-sm text-muted-foreground">{recommendation.reasoning}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-green-500">${recommendation.price.toFixed(2)}</span>
                            <p className="text-xs text-muted-foreground">per share</p>
                        </div>
                    </div>
                </div>

                {recommendation.allOptions.length > 1 && (
                    <div className="space-y-2">
                        <p className="text-xs font-medium uppercase text-muted-foreground">Alternative Markets</p>
                        {recommendation.allOptions.filter(o => o.id !== recommendation.bestMarketId).map(opt => (
                            <div key={opt.id} className="flex justify-between items-center text-sm p-2 rounded hover:bg-muted/50">
                                <span className="flex items-center gap-2">
                                    <span className="capitalize text-muted-foreground">{opt.provider}</span>
                                    <span className="truncate max-w-[200px]">{opt.title}</span>
                                </span>
                                <span>${opt.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                )}

                <Button className="w-full mt-2" onClick={() => onSelect(recommendation.bestMarketId)}>
                    Execute Best Trade <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </CardContent>
        </Card>
    );
}
