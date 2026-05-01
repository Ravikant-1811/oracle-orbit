"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/utils";

type HeroVisualProps = {
    src: string;
    alt: string;
    className?: string;
};

const HeroVisual = ({ src, alt, className }: HeroVisualProps) => {
    const [hasError, setHasError] = useState(false);
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log("[Oracle Orbit] Hero visual mounted", { src });
    }, [src]);

    useEffect(() => {
        const node = heroRef.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.info("[Oracle Orbit] Hero visual entered viewport", {
                        src,
                        error: hasError,
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [hasError, src]);

    return (
        <div ref={heroRef} className={cn("relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full", className)}>
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow" />
            <div className="-m-2 rounded-3xl p-3 ring-1 ring-inset ring-foreground/15 lg:-m-4 lg:rounded-[2rem] bg-background/70 backdrop-blur-3xl shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)]">
                <BorderBeam size={250} duration={12} delay={9} />
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src={src}
                        alt={alt}
                        width={1600}
                        height={900}
                        quality={100}
                        priority
                        className={cn("w-full h-auto object-cover")}
                        onLoad={() => {
                            console.log("[Oracle Orbit] Hero image loaded", { src });
                        }}
                        onError={() => {
                            console.error("[Oracle Orbit] Hero image failed to load", { src });
                            setHasError(true);
                        }}
                    />

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/35 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 via-background/35 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/25 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/25 to-transparent" />

                    {hasError && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-muted text-sm text-muted-foreground">
                            Hero image failed to load.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroVisual;
