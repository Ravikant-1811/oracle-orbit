"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
            <h1 className="text-2xl font-medium">
                Welcome to the dashboard
            </h1>
            <p className="text-gray-500 mt-2 max-w-md">
                Auth has been removed from this local build, so this page now acts as a simple landing screen.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <Button onClick={() => router.push("/")} variant="outline">
                    Back to home
                </Button>
            </div>
        </div>
    );
};

export default DashboardPage;
