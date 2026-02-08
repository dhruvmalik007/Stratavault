import { z } from "zod";

export const MarketStatusSchema = z.enum(["Draft", "Active", "Resolving", "Resolved"]);

export const MarketSchema = z.object({
  id: z.string().min(1), // slug
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  category: z.string().optional(),
  createdAt: z.string().min(1), // ISO
  resolutionTime: z.string().optional(),
  status: MarketStatusSchema,
});
export type Market = z.infer<typeof MarketSchema>;

export const PositionSchema = z.object({
  id: z.string().min(1),
  marketId: z.string().min(1),
  owner: z.string().min(1),
  size: z.number(),
  collateralLocked: z.number(),
  createdAt: z.string().min(1),
});
export type Position = z.infer<typeof PositionSchema>;

export const TradeSchema = z.object({
  id: z.string().min(1),
  marketId: z.string().min(1),
  positionId: z.string().min(1),
  side: z.enum(["Buy", "Sell"]),
  size: z.number(),
  avgPrice: z.number(),
  feesPaid: z.number(),
  createdAt: z.string().min(1),
});
export type Trade = z.infer<typeof TradeSchema>;

export const OrderStatusSchema = z.enum(["Open", "Filled", "Cancelled"]);
export const OrderSchema = z.object({
  id: z.string().min(1),
  marketId: z.string().min(1),
  side: z.enum(["Buy", "Sell"]),
  price: z.number(),
  size: z.number(),
  remaining: z.number(),
  status: OrderStatusSchema,
  createdAt: z.string().min(1),
});
export type Order = z.infer<typeof OrderSchema>;

export const CreatorProfileSchema = z.object({
  id: z.string().optional(),
  userId: z.string().min(1),
  walletAddress: z.string().optional(),
  role: z.string().optional(),
  name: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
  profileData: z.any().optional(),
  portfolioStats: z.any().optional(),
  portfolioConnected: z.boolean().optional(),
  verificationStatus: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
export type CreatorProfile = z.infer<typeof CreatorProfileSchema>;

export const DiscussionMessageSchema = z.object({
  id: z.string().min(1),
  threadId: z.string().min(1),
  content: z.string().min(1),
  author: z.string().optional(), // Made optional to match Prisma/API
  userId: z.string().min(1),
  role: z.string().min(1),
  createdAt: z.string().min(1),
});
export type DiscussionMessage = z.infer<typeof DiscussionMessageSchema>;

export const DiscussionThreadSchema = z.object({
  id: z.string().min(1),
  marketId: z.string().min(1),
  createdBy: z.string().optional(),
  status: z.string().optional(),
  createdAt: z.string().optional(),
  messages: z.array(DiscussionMessageSchema).optional(),
});
export type DiscussionThread = z.infer<typeof DiscussionThreadSchema>;

export const EmbedSchema = z.object({
  id: z.string().min(1),
  marketId: z.string().min(1),
  url: z.url(),
  source: z.string().min(1),
  type: z.string().min(1),
  createdAt: z.string().min(1),
});
export type Embed = z.infer<typeof EmbedSchema>;

export const MemoryPointerSchema = z.object({
  id: z.string().min(1),
  agentId: z.string().optional(),
  memoryId: z.string().optional(),
  ownerType: z.string().optional(),
  ownerId: z.string().optional(),
  provider: z.string().optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.any().optional(),
  createdAt: z.string().min(1),
});
export type MemoryPointer = z.infer<typeof MemoryPointerSchema>;
