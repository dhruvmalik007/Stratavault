"use server";

import { database as prisma } from "@repo/database";

export async function saveSafeAddress(userId: string, safeAddress: string, owners: string[], network: string) {
    try {
        await prisma.user.upsert({
            where: { userId },
            update: {
                safeAddress,
                safeOwners: owners,
                network,
            },
            create: {
                userId,
                safeAddress,
                safeOwners: owners,
                network,
                walletAddress: owners[0] || "",
                role: "participant"
            }
        });
        return { success: true };
    } catch (error) {
        console.error("Failed to save Safe address:", error);
        return { success: false, error: (error as Error).message };
    }
}
