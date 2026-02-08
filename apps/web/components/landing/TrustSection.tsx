"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

// Placeholder icons (using text for now or SVGs if available, simple placeholder approach)
const partners = [
    { name: "Arc", color: "text-blue-500" },
    { name: "Yellow Network", color: "text-yellow-500" },
    { name: "Uniswap", color: "text-pink-500" },
    { name: "Aave", color: "text-purple-400" },
    { name: "Chainlink", color: "text-blue-600" },
    { name: "Solana", color: "text-teal-400" },
];

export function TrustSection(): React.JSX.Element {
    return (
        <section className="py-20 border-t border-border/30 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                <h2 className="text-2xl font-semibold text-muted-foreground">Trusted by industry leaders</h2>

                <div className="relative overflow-hidden w-full mask-linear-fade">
                    <motion.div
                        className="flex gap-20 min-w-max items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                        animate={{ x: ["100%", "-100%"] }} // Right to Left
                        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                    >
                        {/* Triplicated for infinite scroll effect */}
                        {[...partners, ...partners, ...partners].map((p, i) => (
                            <div key={i} className={`text-2xl font-bold flex items-center gap-2 ${p.color}`}>
                                {/* Logo Placeholder */}
                                <div className="h-8 w-8 rounded-full bg-current opacity-20" />
                                {p.name}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                        <p className="text-xl font-medium mb-4">"The settlement speed is unmatched. Integrating DeFi yield directly into my trading dashboard is a game changer."</p>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="h-10 w-10 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full" />
                            <div className="text-left">
                                <p className="font-bold text-sm">Alex T.</p>
                                <p className="text-xs text-muted-foreground">Pro Trader</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                        <p className="text-xl font-medium mb-4">"Finally, a prediction market that doesn't feel like a casino. The strategies are robust and transparent."</p>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="h-10 w-10 bg-gradient-to-tr from-green-400 to-teal-500 rounded-full" />
                            <div className="text-left">
                                <p className="font-bold text-sm">Sarah J.</p>
                                <p className="text-xs text-muted-foreground">DeFi Analyst</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border/50">
                        <p className="text-xl font-medium mb-4">"Yellow Network integration allows me to settle across chains instantly. Pure magic."</p>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="h-10 w-10 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full" />
                            <div className="text-left">
                                <p className="font-bold text-sm">Mike R.</p>
                                <p className="text-xs text-muted-foreground">Crypto Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
