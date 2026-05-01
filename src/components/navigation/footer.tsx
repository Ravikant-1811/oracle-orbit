import Link from "next/link";
import Logo from "@/components/ui/logo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

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
        <footer className="w-full border-t border-border/60 bg-background">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    <section className="max-w-2xl">
                        <Link href="/" className="mt-4 inline-flex items-center">
                            <Logo variant="full" className="h-10 w-auto" />
                        </Link>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                            Oracle Orbit is your IT and growth partner. We build websites,
                            software, and automation, then improve visibility with SEO, Google
                            Business Profile (GMB), and performance marketing.
                        </p>
                    </section>

                    <section className="grid gap-10 sm:grid-cols-2">
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

                    </section>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                        &copy; {year} Oracle Orbit. All rights reserved.
                    </p>
                </div>

                <div className="mt-2 h-[20rem] hidden md:flex items-center justify-center md:h-[20rem]">
                    <TextHoverEffect text="ORACLE" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
