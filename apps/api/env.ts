import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PRIVATE_KEY: z.string().min(1).optional(),
    CLEARNODE_URL: z.string().url(),
    KALSHI_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLEARNODE_URL: process.env.CLEARNODE_URL,
    KALSHI_API_KEY: process.env.KALSHI_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
});
