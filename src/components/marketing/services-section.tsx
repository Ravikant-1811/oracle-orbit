import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import { SERVICES, cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardThemes = [
    {
        panel: "from-violet-100/80 via-white to-violet-50/60",
        glow: "bg-violet-400/20",
        pill: "bg-white/90",
    },
    {
        panel: "from-sky-100/80 via-white to-sky-50/60",
        glow: "bg-sky-400/20",
        pill: "bg-white/90",
    },
    {
        panel: "from-emerald-100/80 via-white to-emerald-50/60",
        glow: "bg-emerald-400/20",
        pill: "bg-white/90",
    },
    {
        panel: "from-amber-100/80 via-white to-rose-50/60",
        glow: "bg-orange-400/20",
        pill: "bg-white/90",
    },
] as const;

interface ServicesSectionProps {
    badge?: string;
    title: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
}

const ServicesSection = ({
    badge = "Services",
    title,
    description,
    ctaLabel,
    ctaHref = "/services",
    className,
}: ServicesSectionProps) => {
    return (
        <MaxWidthWrapper className={cn("py-10", className)}>
            <AnimationContainer delay={0.1}>
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center py-8 text-center">
                    <MagicBadge title={badge} />
                    <h2 className="mt-6 text-3xl font-medium leading-[1.08] text-foreground text-balance font-heading md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
                        {description}
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {SERVICES.map((service, index) => {
                        const theme = cardThemes[index % cardThemes.length];

                        return (
                                <article
                                    id={service.id}
                                    key={service.title}
                                    className={cn(
                                        "group relative overflow-hidden rounded-[32px] border border-border/60 bg-background",
                                        "shadow-[0_24px_70px_-24px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:-translate-y-1",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "relative aspect-[4/3] overflow-hidden border-b border-border/50 bg-gradient-to-br",
                                            theme.panel,
                                        )}
                                    >
                                        <div className={cn("absolute -right-10 top-6 h-36 w-36 rounded-full blur-3xl", theme.glow)} />
                                        <div className={cn("absolute -left-12 bottom-8 h-28 w-28 rounded-full blur-3xl", theme.glow)} />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            priority={index === 0}
                                            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                                            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
                                        <div
                                            className={cn(
                                                "absolute left-5 top-5 rounded-full border border-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground shadow-sm backdrop-blur",
                                                theme.pill,
                                            )}
                                        >
                                            {service.eyebrow}
                                        </div>
                                    </div>

                                    <div className="flex h-full flex-col p-6">
                                        <h3 className="text-[1.75rem] font-semibold leading-tight text-foreground font-heading">
                                            {service.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                            {service.description}
                                        </p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-border/70 bg-muted/20 px-3 py-1 text-xs font-medium text-foreground/75"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                        );
                    })}
                </div>
            </AnimationContainer>

            {ctaLabel ? (
                <AnimationContainer delay={0.3}>
                    <div className="mt-10 flex justify-center">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50"
                        >
                            {ctaLabel}
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </AnimationContainer>
            ) : null}
        </MaxWidthWrapper>
    );
};

export default ServicesSection;
