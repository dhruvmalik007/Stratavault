import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import "@repo/ui/globals.css";
import "./globals.css";
import { Header } from "@repo/ui/components/ui/header";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { TopLoadingBar } from "@repo/ui/components/top-loading-bar";
import { PageTransition } from "@repo/ui/components/page-transition";
import { CopilotProvider } from "@/components/CopilotProvider";
import { CopilotSidebarClient } from "../components/CopilotSidebarClient";
import { SolanaProviders } from "../components/solana/SolanaProviders";
import { UnifiedWalletButton } from "../components/solana/UnifiedWalletButton";
// import { PrivyProviders } from "../components/privy/PrivyProviders";
import { Web3Provider } from "../components/Web3Provider";
import { Toaster } from "@repo/ui/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "predictionality markets",
  description: "investing in the trends with no binary choices and market manipulations by other solvers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CopilotProvider runtimeUrl={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"}/api/copilotkit`} publicApiKey={process.env.NEXT_PUBLIC_COPILOTKIT_PUBLIC_API_KEY}>
            <Web3Provider>
              <SolanaProviders>
                <TopLoadingBar />
                <Header rightSlot={<UnifiedWalletButton />} />
                <PageTransition>
                  <main className="container mx-auto px-4 py-6">{children}</main>
                </PageTransition>
                {/* Render copilot sidebar as sibling and client-only to avoid side effects */}
                <CopilotSidebarClient
                  labels={{
                    title: "Assistant",
                    initial: "Hi! How can I help you in the predictions today?",
                  }}
                />
                <Toaster />
              </SolanaProviders>
            </Web3Provider>
          </CopilotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
