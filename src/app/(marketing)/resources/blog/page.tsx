import { AnimationContainer, Blogs, MaxWidthWrapper } from "@/components";
import type { Metadata } from "next";
import { generateMetadata } from "@/utils";

export const metadata: Metadata = generateMetadata({
    title: "Oracle Orbit Blog | SEO, websites, automation, and growth",
    description: "Read Oracle Orbit insights on websites, SEO, Google Business Profile, automation, and performance marketing.",
    image: "/assets/blogs/seo-priorities.svg",
    url: "/resources/blog",
    keywords: [
        "Oracle Orbit blog",
        "SEO",
        "Google Business Profile",
        "website development",
        "automation",
        "performance marketing",
    ],
});

const BlogPage = () => {
    return (
        <MaxWidthWrapper className="flex flex-col items-center justify-center pb-20 pt-10 md:pt-16">
            <AnimationContainer delay={0.1} className="w-full">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                        Oracle Orbit Blog
                    </span>
                    <h1 className="mt-6 text-3xl font-semibold !leading-tight md:text-5xl lg:text-6xl">
                        SEO, websites, automation, and growth insights.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                        A small collection of practical articles on building better websites, showing up in search, and turning visibility into real enquiries.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full pt-14 md:pt-20">
                <Blogs />
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default BlogPage
