"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, ShieldCheck, Wallet } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";

export function Hero(): React.JSX.Element {
    return (
        <section className="relative overflow-hidden py-20 px-6 lg:px-8">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 opacity-30 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 opacity-20 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50 text-sm font-medium text-foreground/80">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Strategies Live: APY up to 12%</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent leading-[1.1]">
                        Master the Market with <span className="text-primary">Advanced Strategies</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
                        Seamlessly integrate DeFi lending protocols for optimized savings while you trade. Maximize yield, minimize risk with our automated diverse strategies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
                            <a href="/onboarding">
                                Explore Strategies
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50">
                            View Markets
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
                        <div>
                            <p className="text-3xl font-bold font-mono">$1.2M+</p>
                            <p className="text-sm text-muted-foreground">Yield Earned</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-mono">850+</p>
                            <p className="text-sm text-muted-foreground">Active Strategies</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-mono text-green-400">12%</p>
                            <p className="text-sm text-muted-foreground">Avg APY</p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element (3D Strategy/Dashboard Mockup) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
                >
                    <div className="relative w-full aspect-square max-w-[500px] border border-border/40 bg-card/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl skew-y-1 rotate-y-6 lg:rotate-y-12 transition-transform hover:rotate-y-6 ring-1 ring-white/10">
                        {/* Mock UI Content */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Wallet className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Balance</p>
                                    <p className="text-xl font-bold">$24,500.00</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">Net APY</p>
                                <p className="text-xl font-bold text-green-400">+12.4%</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 border border-border/30">
                                    <div className={`h-8 w-8 rounded md:rounded-full flex items-center justify-center ${i === 0 ? 'bg-orange-500/20 text-orange-400' : i === 1 ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-foreground/20 rounded mb-1.5" />
                                        <div className="h-1.5 w-16 bg-foreground/10 rounded" />
                                    </div>
                                    <div className="text-right">
                                        <div className="h-2 w-12 bg-green-500/40 rounded ml-auto mb-1.5" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <ShieldCheck className="h-6 w-6 text-green-500" />
                            <div>
                                <p className="text-xs font-semibold">Audited Contracts</p>
                                <p className="text-[10px] text-muted-foreground">100% Secure</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
