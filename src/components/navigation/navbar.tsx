"use client";

import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn, COMPANY_LINKS, NAV_LINKS, SERVICE_LINKS } from "@/utils";
import { LucideIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimationContainer from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-[99999] w-full pt-4">
            <AnimationContainer reverse delay={0.08} className="size-full">
                <MaxWidthWrapper className="flex items-center justify-center">
                    <div className="w-full max-w-6xl rounded-full border border-border/70 bg-white/85 px-3 py-3 shadow-[0_18px_60px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/#home" className="shrink-0">
                                <Logo variant="full" className="h-8 w-auto" />
                            </Link>

                            <NavigationMenu className="hidden lg:flex">
                                <NavigationMenuList className="gap-1">
                                    {NAV_LINKS.map((link) => (
                                        <NavigationMenuItem key={link.title}>
                                            {link.menu ? (
                                                <>
                                                    <NavigationMenuTrigger className="h-10 rounded-full bg-transparent px-4 text-sm font-medium text-foreground/70 hover:bg-black/5 hover:text-foreground">
                                                        {link.title}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent
                                                        className={cn(
                                                            "rounded-3xl border border-border/70 bg-white p-4 shadow-xl",
                                                            link.title === "Services"
                                                                ? "lg:w-[820px]"
                                                                : "lg:w-[640px]",
                                                        )}
                                                    >
                                                        {link.title === "Services" ? (
                                                            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                                                                <NavigationMenuLink asChild>
                                                                    <Link
                                                                        href="/services"
                                                                        className="group relative overflow-hidden rounded-[24px] border border-border/60 bg-muted/10 no-underline outline-none transition-transform duration-300 hover:-translate-y-0.5"
                                                                    >
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                                                        <Image
                                                                            src="/assets/services/nav-services.svg"
                                                                            alt="Oracle Orbit services preview"
                                                                            fill
                                                                            sizes="(min-width: 1024px) 360px, 100vw"
                                                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                                                        />
                                                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.72))]" />
                                                                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/85 p-4 backdrop-blur">
                                                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                                                                Oracle Orbit Services
                                                                            </p>
                                                                            <h6 className="mt-2 text-xl font-semibold text-foreground">
                                                                                Build, rank, automate, and grow.
                                                                            </h6>
                                                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                                                Websites, SEO, GMB, automation, and performance marketing in one place.
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>

                                                                <div className="flex flex-col">
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                                                                Services
                                                                            </p>
                                                                            <h5 className="mt-2 text-lg font-semibold text-foreground">
                                                                                All services
                                                                            </h5>
                                                                        </div>
                                                                        <Link
                                                                            href="/services"
                                                                            className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                                                        >
                                                                            View all
                                                                        </Link>
                                                                    </div>

                                                                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                                                        {SERVICE_LINKS.map((menuItem) => (
                                                                            <MenuCard
                                                                                key={menuItem.title}
                                                                                title={menuItem.title}
                                                                                href={menuItem.href}
                                                                                icon={menuItem.icon}
                                                                            >
                                                                                {menuItem.tagline}
                                                                            </MenuCard>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                                                                <NavigationMenuLink asChild>
                                                                    <Link
                                                                        href="/about"
                                                                        className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-border/60 bg-gradient-to-br from-muted/40 to-background p-5 no-underline outline-none transition-transform duration-300 hover:-translate-y-0.5"
                                                                    >
                                                                        <div>
                                                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                                                                Company
                                                                            </p>
                                                                            <h6 className="mt-3 text-2xl font-semibold text-foreground">
                                                                                Meet Oracle Orbit
                                                                            </h6>
                                                                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                                                                We are your IT and growth partner, building websites, software, automation, and visibility systems.
                                                                            </p>
                                                                        </div>
                                                                        <div className="mt-6 flex flex-wrap gap-2">
                                                                            {["About", "Clients", "FAQ", "Blog", "Contact"].map((item) => (
                                                                                <span
                                                                                    key={item}
                                                                                    className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                                                                >
                                                                                    {item}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>

                                                                <div>
                                                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                                                        Company links
                                                                    </p>
                                                                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                                                        {COMPANY_LINKS.map((menuItem) => (
                                                                            <MenuCard
                                                                                key={menuItem.title}
                                                                                title={menuItem.title}
                                                                                href={menuItem.href}
                                                                                icon={menuItem.icon}
                                                                            >
                                                                                {menuItem.tagline}
                                                                            </MenuCard>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    legacyBehavior
                                                    passHref
                                                >
                                                    <NavigationMenuLink
                                                        className={cn(
                                                            "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground",
                                                        )}
                                                    >
                                                        {link.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="hidden shrink-0 items-center gap-2 lg:flex">
                                <Link
                                    href="/contact"
                                    className={buttonVariants({
                                        size: "sm",
                                        className:
                                            "h-11 rounded-full bg-foreground px-6 pr-7 text-background shadow-none ring-1 ring-foreground/5 hover:bg-foreground/90",
                                    })}
                                >
                                    Get Started
                                    <ZapIcon className="ml-1.5 h-3.5 w-3.5 fill-current" />
                                </Link>
                            </div>

                            <MobileNavbar />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </AnimationContainer>
        </header>
    );
};

const MenuCard = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild>
            <Link
                href={href!}
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-2xl border border-border/60 bg-muted/10 p-4 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-muted/40 focus:bg-muted/40",
                    className,
                )}
                {...props}
            >
                <div className="flex items-center space-x-2 text-foreground">
                    <Icon className="h-4 w-4 text-foreground/70" />
                    <h6 className="text-sm font-medium !leading-none">
                        {title}
                    </h6>
                </div>
                <p
                    title={children! as string}
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                >
                    {children}
                </p>
            </Link>
        </NavigationMenuLink>
    );
});
MenuCard.displayName = "MenuCard";

export default Navbar;
