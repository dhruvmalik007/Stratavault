
/**
 * @repo/prediction-market
 */

// Polymarket
export * from "./polymarket/client";
export * from "./polymarket/types";

// Kalshi
export * from "./kalshi/client";
export * from "./kalshi/types";

export const predictionMarket = () => {
    console.log("prediction-market package ready!");
};