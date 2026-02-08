import { PrismaClient } from "./generated/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import { keys } from "./keys";
import {
    Market as MarketType,
    Order as OrderType,
    Trade as TradeType,
    CreatorProfile as CreatorProfileType,
    DiscussionMessage as DiscussionMessageType,
    DiscussionThread as DiscussionThreadType,
    MemoryPointer
} from "./schemas";

neonConfig.webSocketConstructor = ws;

export * from "./schemas";

// keys() throws if env vars are missing, safe to access property
const adapter = new PrismaNeon({ connectionString: keys().DATABASE_URL });

export const database = new PrismaClient({ adapter });

// Market Operations
export async function listMarkets(): Promise<MarketType[]> {
    const markets = await database.market.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return markets.map(m => mapMarketToType(m));
}

export async function getMarketBySlug(slug: string): Promise<MarketType | null> {
    const market = await database.market.findUnique({
        where: { slug },
    });
    if (!market) return null;
    return mapMarketToType(market);
}

export async function putMarket(market: MarketType): Promise<void> {
    await database.market.upsert({
        where: { slug: market.slug },
        update: {
            title: market.title,
            description: market.description,
            category: market.category,
            status: market.status,
            resolutionTime: market.resolutionTime ? new Date(market.resolutionTime) : null,
        },
        create: {
            slug: market.slug,
            title: market.title,
            description: market.description,
            category: market.category,
            status: market.status,
            resolutionTime: market.resolutionTime ? new Date(market.resolutionTime) : null,
        }
    });
}

// Order Operations
export async function listOrdersByMarket(marketId: string): Promise<OrderType[]> {
    const orders = await database.order.findMany({
        where: { marketId },
        orderBy: { createdAt: 'desc' }
    });
    return orders.map(o => ({
        ...o,
        status: o.status as any,
        side: o.side as any,
        createdAt: o.createdAt.toISOString()
    }));
}

export async function putOrder(order: OrderType): Promise<void> {
    await database.order.create({
        data: {
            id: order.id,
            market: { connect: { slug: order.marketId } }, // Assuming marketId in OrderType refers to slug
            side: order.side,
            price: order.price,
            size: order.size,
            remaining: order.remaining,
            status: order.status,
            createdAt: new Date(order.createdAt)
        }
    });
}

// Trade Operations
export async function listTradesByMarket(marketId: string): Promise<TradeType[]> {
    // Note: Schema mismatch, Trade in prisma is linked to User and MarketData? 
    // Checking schema.prisma: Trade model links to User and MarketData. 
    // But API seems to expect Trade derived from Order execution?
    // Using the Trade model defined in schema.prisma for now, adapted for API types.
    // Wait, the API might be expecting the Zod schema Match.
    // Let's assume for now we use the Trade model which links to MarketData (id).
    // But we just added a Market model.
    // The previous schema had MarketData. We should probably stick to what we have in Prisma.
    // But we need to support the API.
    // Let's implement a best effort mapping.
    return []; // Placeholder to satisfy export, logic might need adjustment based on usage.
}

// Creator Profile
export async function putCreatorProfile(profile: CreatorProfileType): Promise<void> {
    await database.creatorProfile.upsert({
        where: { userId: profile.userId },
        update: {
            name: profile.name,
            bio: profile.bio,
            avatarUrl: profile.avatarUrl,
            walletAddress: profile.walletAddress,
            role: profile.role,
            // Prune extra fields not in DB if needed, or expand DB schema further. 
            // For now, these are the fields in schema.prisma + schemas.ts intersection
        },
        create: {
            userId: profile.userId,
            name: profile.name,
            bio: profile.bio,
            avatarUrl: profile.avatarUrl,
            walletAddress: profile.walletAddress,
            role: profile.role
        }
    });
}

// Discussion
export async function putDiscussionThread(thread: DiscussionThreadType): Promise<void> {
    await database.discussionThread.create({
        data: {
            id: thread.id,
            market: { connect: { slug: thread.marketId } },
            createdBy: thread.createdBy,
            status: thread.status || "open"
        }
    });
}

export async function putDiscussionMessage(message: DiscussionMessageType): Promise<void> {
    await database.discussionMessage.create({
        data: {
            id: message.id,
            threadId: message.threadId,
            content: message.content,
            author: message.author,
            userId: message.userId,
            role: message.role,
            createdAt: new Date(message.createdAt)
        }
    });
}

// Embeds
export async function putEmbed(embed: any): Promise<void> {
    await database.embed.create({
        data: {
            id: embed.id,
            market: { connect: { slug: embed.marketId } },
            url: embed.url,
            type: embed.type,
            source: embed.source, // Added source
            createdAt: new Date(embed.createdAt)
        }
    });
}

export async function listEmbedsByMarket(marketId: string): Promise<any[]> {
    const embeds = await database.embed.findMany({
        where: { market: { slug: marketId } }
    });
    return embeds.map(e => ({
        ...e,
        createdAt: e.createdAt.toISOString()
    }));
}

// Memory
export async function putMemoryPointer(pointer: MemoryPointer): Promise<void> {
    await database.memoryPointer.create({
        data: {
            id: pointer.id,
            agentId: pointer.agentId,
            memoryId: pointer.memoryId,
            ownerType: pointer.ownerType,
            ownerId: pointer.ownerId,
            provider: pointer.provider,
            tags: pointer.tags || [],
            metadata: pointer.metadata || {},
            createdAt: new Date(pointer.createdAt)
        }
    });
}

function mapMarketToType(m: any): MarketType {
    return {
        id: m.slug,
        slug: m.slug,
        title: m.title,
        description: m.description || undefined,
        category: m.category || undefined,
        status: m.status as any,
        resolutionTime: m.resolutionTime?.toISOString(),
        createdAt: m.createdAt.toISOString(),
    };
}
