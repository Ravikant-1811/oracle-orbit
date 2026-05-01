import { BookOpenIcon, GlobeIcon, HelpCircleIcon, MailIcon, MegaphoneIcon, NewspaperIcon, SearchIcon, UsersIcon, WandSparklesIcon } from "lucide-react";

export const COMPANY_LINKS = [
    {
        title: "About Us",
        tagline: "Learn more about Oracle Orbit.",
        href: "/about",
        icon: NewspaperIcon,
    },
    {
        title: "Clients",
        tagline: "See who we work with.",
        href: "/clients",
        icon: UsersIcon,
    },
    {
        title: "FAQ",
        tagline: "Answers to common questions.",
        href: "/faq",
        icon: HelpCircleIcon,
    },
    {
        title: "Blog",
        tagline: "Insights, updates, and ideas.",
        href: "/resources/blog",
        icon: BookOpenIcon,
    },
    {
        title: "Contact",
        tagline: "Let’s talk about your project.",
        href: "/contact",
        icon: MailIcon,
    },
] as const;

export const SERVICE_LINKS = [
    {
        title: "Websites & software",
        tagline: "Conversion-ready builds that feel fast and reliable.",
        href: "/services#websites",
        icon: GlobeIcon,
    },
    {
        title: "SEO & GBP",
        tagline: "Rank locally and show up where customers search.",
        href: "/services#seo",
        icon: SearchIcon,
    },
    {
        title: "Automation",
        tagline: "Workflow automations that remove repetitive work.",
        href: "/services#automation",
        icon: WandSparklesIcon,
    },
    {
        title: "Performance marketing",
        tagline: "Campaigns and reporting that drive revenue.",
        href: "/services#marketing",
        icon: MegaphoneIcon,
    },
] as const;

export const NAV_LINKS = [
    {
        title: "Company",
        href: "/about",
        menu: COMPANY_LINKS,
    },
    {
        title: "Services",
        href: "/services",
        menu: SERVICE_LINKS,
    },
    {
        title: "FAQ",
        href: "/faq",
    },
    {
        title: "Blog",
        href: "/resources/blog",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];
