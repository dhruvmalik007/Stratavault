'use client';

import { useState } from 'react';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { MarketGraph } from '../../components/arbitrage/MarketGraph';

export default function ArbitrageDashboard() {
    const [query, setQuery] = useState("");
    const [logs, setLogs] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [taskId, setTaskId] = useState<string | null>(null);
    const [jobDetails, setJobDetails] = useState<any>(null);

    const runScan = async () => {
        setLoading(true);
        setLogs(prev => [...prev, `Starting scan for: ${query}...`]);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/arbitrage/scan`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setTaskId(data.taskId);
            setLogs(prev => [...prev, `Scan Initiated. Task ID: ${data.taskId}`, `Markets Found: ${data.markets}`, `Constraints Generated: ${data.constraints}`]);

            // Start polling
            pollStatus(data.taskId);

        } catch (e: any) {
            setLogs(prev => [...prev, `Error: ${e.message}`]);
            setLoading(false);
        }
    };

    const pollStatus = async (id: string) => {
        const interval = setInterval(async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/arbitrage/status/${id}`);
                const job = await res.json();

                if (job.status === 'success' || job.status === 'error') {
                    clearInterval(interval);
                    setLoading(false);

                    if (job.status === 'success') {
                        setJobDetails(job);
                        setLogs(prev => [...prev, `✅ Solver Completed!`, `Distance: ${job.result.distance.toFixed(6)}`, `Arbitrage Detected: ${job.result.arbitrageDetected}`]);
                    } else {
                        setLogs(prev => [...prev, `❌ Solver Failed: ${job.error}`]);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <header>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        Arbitrage Agent Command Center
                    </h1>
                    <p className="text-gray-400">Barrier Frank-Wolfe Optimization Engine</p>
                </header>

                <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                        <CardTitle>Define Agent Strategy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4">
                            <Input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-black border-zinc-700 text-white"
                                placeholder="Describe your strategy (e.g., 'Find arbitrage in US elections')..."
                            />
                            <Button
                                onClick={runScan}
                                disabled={loading}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                            >
                                {loading ? 'Analyzing...' : 'Deploy Agent'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {jobDetails && jobDetails.status === 'success' && (
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardHeader>
                            <CardTitle>Arbitrage Network Visualization</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <MarketGraph
                                markets={jobDetails.markets}
                                constraints={jobDetails.constraints}
                                solverResult={jobDetails.result} // Pass solver result for animation
                            />
                        </CardContent>
                    </Card>
                )}

                <Card className="bg-zinc-900 border-zinc-800 min-h-[400px]">
                    <CardHeader>
                        <CardTitle>Live Execution Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-mono text-sm space-y-2">
                            {logs.map((log, i) => (
                                <div key={i} className="border-l-2 border-zinc-700 pl-4 py-1">
                                    <span className="text-zinc-500">[{new Date().toLocaleTimeString()}]</span> {log}
                                </div>
                            ))}
                            {logs.length === 0 && <span className="text-zinc-600 italic">Ready to engage...</span>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
