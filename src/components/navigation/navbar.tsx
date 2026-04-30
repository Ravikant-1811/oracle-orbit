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
import { cn, NAV_LINKS } from "@/utils";
import { ZapIcon } from "lucide-react";
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
                                                    <NavigationMenuContent>
                                                        <ul className={cn(
                                                            "grid gap-1 rounded-2xl border border-border/70 bg-white p-4 shadow-xl md:w-[420px] lg:w-[560px]",
                                                            link.title === "Services" ? "lg:grid-cols-[.85fr_1fr]" : "lg:grid-cols-2"
                                                        )}>
                                                            {link.title === "Services" && (
                                                                <li className="row-span-4 pr-2 relative rounded-xl overflow-hidden">
                                                                    <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                                                    <NavigationMenuLink asChild className="z-20 relative">
                                                                        <Link
                                                                            href="/"
                                                                            className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-muted/40 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                                        >
                                                                            <h6 className="mb-2 mt-4 text-lg font-semibold text-foreground">
                                                                                All Features
                                                                            </h6>
                                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                                Manage links, track performance, and more.
                                                                            </p>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            )}
                                                            {link.menu.map((menuItem) => (
                                                                <ListItem
                                                                    key={menuItem.title}
                                                                    title={menuItem.title}
                                                                    href={menuItem.href}
                                                                    icon={menuItem.icon}
                                                                >
                                                                    {menuItem.tagline}
                                                                </ListItem>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <Link href={link.href} legacyBehavior passHref>
                                                    <NavigationMenuLink className={cn(
                                                        "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground",
                                                    )}>
                                                        {link.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="hidden lg:flex items-center gap-2 shrink-0">
                                <Link href="/contact" className={buttonVariants({ size: "sm", className: "rounded-md px-5 pr-6 shadow-sm" })}>
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

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: any }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-muted focus:bg-muted",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-foreground">
                        <Icon className="h-4 w-4 text-foreground/70" />
                        <h6 className="text-sm font-medium !leading-none">
                            {title}
                        </h6>
                    </div>
                    <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default Navbar;
