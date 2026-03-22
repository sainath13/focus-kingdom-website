"use server";

import { db } from "@/lib";

export const registerInterest = async (email: string) => {
    if (!email || !email.includes("@")) {
        return { error: "Invalid email address" };
    }

    try {
        const existingLead = await db.lead.findUnique({
            where: { email },
        });

        if (existingLead) {
            return { error: "You've already registered your interest!" };
        }

        await db.lead.create({
            data: { email },
        });

        return { success: "Thanks for your interest! We'll be in touch soon." };
    } catch (error) {
        console.error("Error registering interest:", error);
        return { error: "Something went wrong. Please try again later." };
    }
};
