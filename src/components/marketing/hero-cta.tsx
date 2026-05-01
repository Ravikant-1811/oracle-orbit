"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const HeroCta = () => {
    useEffect(() => {
        console.log("[Oracle Orbit] Hero CTA mounted");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 z-50">
            <Button asChild className="rounded-full px-6 pr-5 shadow-sm">
                <Link
                    href="/contact"
                    className="flex items-center"
                    onClick={() => console.info("[Oracle Orbit] Hero CTA clicked", { href: "/contact" })}
                >
                    Get Started
                </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 pr-5">
                <Link
                    href="/services"
                    className="flex items-center"
                    onClick={() => console.info("[Oracle Orbit] Hero CTA clicked", { href: "/services" })}
                >
                    Services
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
            </Button>
        </div>
    );
};

export default HeroCta;
