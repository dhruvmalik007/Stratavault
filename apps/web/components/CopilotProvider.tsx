"use client";

import { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export function CopilotProvider({ children, publicApiKey, runtimeUrl }: { children: ReactNode, publicApiKey?: string, runtimeUrl?: string }) {
    return (
        <CopilotKit publicApiKey={publicApiKey} runtimeUrl={runtimeUrl}>
            <CopilotPopup
                instructions={"You are a helpful assistant for the Solana Prediction Market."}
                labels={{
                    title: "Market Assistant",
                    initial: "How can I help you analyze a market today?",
                }}
            />
            {children}
        </CopilotKit>
    );
}
