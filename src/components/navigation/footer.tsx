import Link from "next/link";
import { AnimationContainer, Icons } from "@/components";

const services = [
    { label: "Websites", href: "/services" },
    { label: "Software", href: "/services" },
    { label: "Automation", href: "/services" },
    { label: "SEO", href: "/services" },
    { label: "GMB", href: "/services" },
    { label: "Performance Marketing", href: "/services" },
];

const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Contact", href: "/contact" },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative w-full border-t border-border/60 bg-gradient-to-b from-background to-muted/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-10 rounded-full bg-foreground" />

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                    <AnimationContainer delay={0.1}>
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3">
                                <Icons.logo className="h-11 w-11 shrink-0" />
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
                                        OracleOrbit Services
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                        Oracle Orbit
                                    </h2>
                                </div>
                            </div>

                            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                                Build it. Launch it. Grow it. Oracle Orbit is your IT and growth
                                partner. We build websites, software, and automation, then scale
                                your visibility with SEO, Google Business Profile (GMB), and
                                performance marketing.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {["Software", "DevOps", "Marketing", "All-in-one growth partner"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm"
                                        >
                                            {item}
                                        </span>
                                    ),
                                )}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                                >
                                    Start a Project
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </AnimationContainer>

                    <div className="grid gap-8 sm:grid-cols-2">
                        <AnimationContainer delay={0.2}>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/90">
                                    Services
                                </h3>
                                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                                    {services.map((service) => (
                                        <li key={service.label}>
                                            <Link
                                                href={service.href}
                                                className="transition-colors hover:text-foreground"
                                            >
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer delay={0.3}>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/90">
                                    Company
                                </h3>
                                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                                    {companyLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="transition-colors hover:text-foreground"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer delay={0.4}>
                            <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm sm:col-span-2">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/90">
                                    Growth partner
                                </p>
                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    We help brands ship clean websites, reliable software, useful
                                    automation, and marketing systems that bring in more visibility,
                                    leads, and long-term growth.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                                    <span className="rounded-full border border-border/70 px-3 py-2">
                                        Web
                                    </span>
                                    <span className="rounded-full border border-border/70 px-3 py-2">
                                        SEO
                                    </span>
                                    <span className="rounded-full border border-border/70 px-3 py-2">
                                        GMB
                                    </span>
                                    <span className="rounded-full border border-border/70 px-3 py-2">
                                        Ads
                                    </span>
                                </div>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <AnimationContainer delay={0.5}>
                        <p className="text-sm text-muted-foreground">
                            &copy; {year} Oracle Orbit. All rights reserved.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer delay={0.6}>
                        <p className="text-sm text-muted-foreground">
                            OracleOrbit Services · Build it. Launch it. Grow it.
                        </p>
                    </AnimationContainer>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
