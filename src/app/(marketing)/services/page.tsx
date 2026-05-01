import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import { SERVICE_GROUPS, cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const groupThemes = [
    {
        panel: "from-violet-100/80 via-white to-violet-50/60",
        glow: "bg-violet-400/20",
        icon: "bg-violet-500/10",
    },
    {
        panel: "from-sky-100/80 via-white to-sky-50/60",
        glow: "bg-sky-400/20",
        icon: "bg-sky-500/10",
    },
    {
        panel: "from-emerald-100/80 via-white to-emerald-50/60",
        glow: "bg-emerald-400/20",
        icon: "bg-emerald-500/10",
    },
] as const;

const ServicesPage = () => {
    return (
        <div className="overflow-x-hidden">
            <MaxWidthWrapper className="py-16">
                <AnimationContainer delay={0.1}>
                    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-8 text-center">
                        <MagicBadge title="Services" />
                        <h1 className="mt-6 text-4xl font-medium leading-[1.06] text-foreground text-balance font-heading md:text-6xl">
                            All the services Oracle Orbit offers, in one place.
                        </h1>
                        <p className="mt-5 max-w-3xl text-lg text-muted-foreground text-balance md:text-xl">
                            From digital marketing and SEO to websites, automation, software, and IT support,
                            this is the full service stack we use to help businesses build, launch, and grow.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {SERVICE_GROUPS.map((group) => (
                                <Link
                                    key={group.id}
                                    href={`#${group.id}`}
                                    className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                >
                                    {group.badge}
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimationContainer>

                <div className="space-y-16">
                    {SERVICE_GROUPS.map((group, groupIndex) => {
                        const theme = groupThemes[groupIndex % groupThemes.length];

                        return (
                            <section key={group.id} id={group.id} className="scroll-mt-28">
                                <AnimationContainer delay={0.15 + groupIndex * 0.08}>
                                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
                                        <MagicBadge title={group.badge} />
                                        <h2 className="mt-6 text-3xl font-medium leading-[1.08] text-foreground text-balance font-heading md:text-5xl">
                                            {group.title}
                                        </h2>
                                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
                                            {group.description}
                                        </p>
                                    </div>
                                </AnimationContainer>

                                <AnimationContainer delay={0.2 + groupIndex * 0.08}>
                                    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                        {group.items.map((service, index) => (
                                            <article
                                                key={service.id}
                                                className={cn(
                                                    "group relative overflow-hidden rounded-[32px] border border-border/60 bg-background",
                                                    "shadow-[0_24px_70px_-24px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-1",
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        "relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-border/50 bg-gradient-to-br",
                                                        theme.panel,
                                                    )}
                                                >
                                                    <div className={cn("absolute -right-8 top-6 h-32 w-32 rounded-full blur-3xl", theme.glow)} />
                                                    <div className={cn("absolute -left-10 bottom-6 h-24 w-24 rounded-full blur-3xl", theme.glow)} />
                                                    <div className={cn("relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/70 bg-white/90 shadow-sm backdrop-blur", theme.icon)}>
                                                        <service.icon className="h-11 w-11 text-foreground" strokeWidth={1.6} />
                                                    </div>
                                                    <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground shadow-sm backdrop-blur">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </div>
                                                </div>

                                                <div className="flex h-full flex-col p-6">
                                                    <h3 className="text-[1.7rem] font-semibold leading-tight text-foreground font-heading">
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
                                        ))}
                                    </div>
                                </AnimationContainer>
                            </section>
                        );
                    })}
                </div>

                <AnimationContainer delay={0.45}>
                    <div className="mt-16 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50"
                        >
                            Talk to Oracle Orbit
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default ServicesPage;
