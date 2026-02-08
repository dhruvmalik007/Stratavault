import { Hero } from "@/components/landing/Hero";
import { MarketTicker } from "@/components/landing/MarketTicker";
import { TrendingMarkets } from "@/components/landing/TrendingMarkets";
import { TrustSection } from "@/components/landing/TrustSection";

export default async function Home(): Promise<any> {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Hero />
      <MarketTicker />
      <TrendingMarkets />
      <TrustSection />
    </div>
  );
}
