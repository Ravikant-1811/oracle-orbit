import { Metadata } from "next";

export const generateMetadata = ({
    title = "Oracle Orbit - IT & Growth Partner",
    description = "Oracle Orbit builds websites, software, and automation, then scales visibility with SEO, Google Business Profile, and performance marketing.",
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@oracleorbit",
    },
    metadataBase: process.env.NEXT_PUBLIC_APP_DOMAIN
        ? new URL(`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`)
        : new URL("https://oracleorbit.com"),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
