"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn, COMPANY_LINKS, NAV_LINKS, SERVICE_LINKS } from "@/utils";
import { ChevronDown, LucideIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex lg:hidden items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="primary" className="rounded-full shadow-sm">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[92vw] rounded-l-3xl border-l border-border/70 bg-white px-5 pt-5">
                    <SheetClose asChild className="absolute right-4 top-4 bg-background z-20 flex items-center justify-center">
                        <Button size="icon" variant="ghost" className="rounded-full text-foreground/70">
                            <X className="h-5 w-5" />
                        </Button>
                    </SheetClose>
                    <div className="mt-10 flex flex-col gap-4">
                        <Link href="/contact" className={buttonVariants({ className: "w-full rounded-md" })}>
                            Get Started
                        </Link>
                        <ul className="mt-4">
                            <Accordion type="single" collapsible className="w-full">
                                {NAV_LINKS.map((link) => (
                                    <AccordionItem key={link.title} value={link.title} className="last:border-none">
                                        {link.menu ? (
                                            <>
                                                <AccordionTrigger className="py-4 text-foreground">
                                                    <span className="flex items-center gap-1.5">
                                                        {link.title}
                                                        <ChevronDown className="h-3.5 w-3.5" />
                                                    </span>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="space-y-4 pb-3">
                                                        {link.title === "Services" ? (
                                                            <>
                                                                <Link
                                                                    href="/services"
                                                                    onClick={handleClose}
                                                                    className="relative block overflow-hidden rounded-2xl border border-border/60 bg-muted/10"
                                                                >
                                                                    <div className="relative aspect-[16/9]">
                                                                        <Image
                                                                            src="/assets/services/nav-services.svg"
                                                                            alt="Oracle Orbit services preview"
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="p-4">
                                                                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                                                                            Oracle Orbit Services
                                                                        </p>
                                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                                            Build, rank, automate, and grow.
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                                <ul onClick={handleClose} className="w-full">
                                                                    {SERVICE_LINKS.map((menuItem) => (
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
                                                            </>
                                                        ) : link.title === "Company" ? (
                                                            <ul onClick={handleClose} className="w-full">
                                                                {COMPANY_LINKS.map((menuItem) => (
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
                                                        ) : (
                                                            <ul onClick={handleClose} className={cn("w-full")}>
                                                                {link.menu.map((menuItem) => (
                                                                    <ListItem key={menuItem.title} title={menuItem.title} href={menuItem.href} icon={menuItem.icon}>
                                                                        {menuItem.tagline}
                                                                    </ListItem>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={handleClose}
                                                className="flex items-center w-full py-4 font-medium text-foreground/70 hover:text-foreground"
                                            >
                                                <span>{link.title}</span>
                                            </Link>
                                        )}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <Link
                href={href!}
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center space-x-2 text-foreground">
                    <Icon className="h-4 w-4 text-foreground/70" />
                    <h6 className="text-sm !leading-none">
                        {title}
                    </h6>
                </div>
                <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default MobileNavbar;
