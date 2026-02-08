import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';
import { LinearConstraint, Vector } from './solver/types';

const ConstraintSchema = z.object({
    constraints: z.array(z.object({
        description: z.string(),
        coeffs: z.array(z.number()),
        bound: z.number(),
        type: z.enum(['<=', '=', '>='])
    }))
});

export class LogicAgent {

    /**
     * Converts a list of Markets (OUTCOMES) into Linear Constraints over probabilities.
     * e.g. "Market A and Market B are mutually exclusive" => p_A + p_B <= 1
     */
    async generateConstraints(markets: any[]): Promise<LinearConstraint[]> {
        if (!markets || markets.length === 0) {
            console.warn("LogicAgent: No markets provided for constraint generation.");
            return [];
        }

        const marketInfo = markets.map((m, i) =>
            `Index ${i}: ${m.title} (Ticker: ${m.ticker})`
        ).join('\n');

        // Prompt LLM to discover logical relationships
        // This is the "Semantic Mapping" layer.
        const prompt = `
      You are a Logic Agent for a Prediction Market Arbitrage engine.
      Analyze the following market outcomes and identify logical constraints on their probabilities.
      Markets:
      ${marketInfo}

      Output strict linear inequalities in the form of coefficients for each market index.
      The variables x_0, x_1, ... represent the probability of each market outcome occurring (0 to 1).
      
      Common Logic:
      - Mutually Exclusive: x_i + x_j <= 1
      - Exhaustive: x_i + x_j + ... = 1
      - Implication: If A implies B, then x_A <= x_B  => x_A - x_B <= 0
      - Negation: A is NOT B => x_A + x_B = 1 (if exhaustive) or x_A + x_B <= 1
      
      Also always include basic probability bounds 0 <= x_i <= 1 for each i, if implicit.
      (Actually, strict constraints only. Bounds are handled by the solver generally, but good to be explicit if complex).
    `;

        let retries = 3;
        while (retries > 0) {
            try {
                // Use 'tool' mode (function calling) for better JSON reliability with gpt-4o
                // 'json' mode can be flaky with markdown fences or strict schema adherence
                const result = await generateObject({
                    model: openai('gpt-4o') as any,
                    schema: ConstraintSchema,
                    prompt,
                    mode: 'tool', // Changed from 'json' to 'tool'
                });

                // Map Zod result to internal LinearConstraint type
                const data = result.object as any;
                return data.constraints.map((c: any) => ({
                    type: c.type as '<=' | '>=' | '=',
                    coeffs: c.coeffs,
                    bound: c.bound
                }));
            } catch (error: any) {
                console.warn(`LogicAgent generation failed (${retries} retries left):`, error.message);
                if (retries === 1) {
                    // Last attempt failed
                    if (error.text) {
                        console.error('Failed Response Text:', error.text);
                    }
                    // Return empty constraints instead of crashing the whole agent
                    return [];
                }
                retries--;
                await new Promise(r => setTimeout(r, 1000)); // Backoff
            }
        }
        return [];
    }
}
