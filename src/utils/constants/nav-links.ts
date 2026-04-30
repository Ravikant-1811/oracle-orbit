import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Company",
        href: "/about",
        menu: [
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
                icon: HelpCircleIcon,
            },
        ],
    },
    {
        title: "Services",
        href: "/services",
        menu: [
            {
                title: "Link Shortening",
                tagline: "Shorten links and track their performance.",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: "Password Protection",
                tagline: "Secure your links with a password.",
                href: "/features/password-protection",
                icon: LockIcon,
            },
            {
                title: "Advanced Analytics",
                tagline: "Gain insights into who is clicking your links.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            {
                title: "Custom QR Codes",
                tagline: "Use QR codes to reach your audience.",
                href: "/features/qr-codes",
                icon: QrCodeIcon,
            },
        ],
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
