"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { registerInterest } from "@/actions/register-interest";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

export const InterestForm = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await registerInterest(email);
            if (res.error) {
                toast.error(res.error);
            } else {
                toast.success(res.success);
                setEmail("");
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 w-full max-w-md mx-auto">
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-background/50 backdrop-blur-sm border-border focus:ring-primary"
            />
            <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
                {isLoading ? (
                    <Loader2Icon className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                Join Waitlist
            </Button>
        </form>
    );
};
