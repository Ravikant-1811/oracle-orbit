import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import ServicesSection from "@/components/marketing/services-section";
import HeroCta from "@/components/marketing/hero-cta";
import HeroVisual from "@/components/marketing/hero-visual";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const HomePage = async () => {
    console.log("[Oracle Orbit] Rendering marketing homepage");

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-white transition-colors duration-200 group-hover:bg-slate-50" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-foreground flex items-center justify-center gap-1">
                                ✨ OracleOrbit Services
                                <span className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">→</span>
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            <span className="block">Connect</span>
                            <span className="block">
                                Innovate{" "}
                                <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                    Elevate
                                </span>
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Oracle Orbit is your IT and growth partner for websites, software,
                            and automation.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">
                                We pair clean builds with SEO, Google Business Profile, and
                                performance marketing to bring in better visibility and leads.
                            </span>
                        </p>
                        <HeroCta />
                        <div className="mt-12 flex w-full flex-col items-center px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium text-foreground/70">
                                Trusted by design teams at
                            </h2>
                            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
                                {COMPANIES.map((company) => (
                                    <li key={company.name} className="flex items-center justify-center">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={120}
                                            height={48}
                                            quality={100}
                                            className="h-7 w-auto object-contain opacity-70 grayscale brightness-50 md:h-8"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="w-full">
                        <HeroVisual src="/assets/heroimg.jpg" alt="Oracle Orbit hero image" />
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >
            <ServicesSection
                badge="Services"
                title="Minimum services that build, rank, and grow your business"
                description="We keep the offer focused: websites and software, SEO and Google Business Profile, automation and integrations, and performance marketing."
                ctaLabel="Explore services"
                ctaHref="/services"
                className="pt-10"
            />

            {/* Process Section */}
            <MaxWidthWrapper className="py-12">
                <AnimationContainer delay={0.1}>
                    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center py-8 text-center">
                        <MagicBadge title="How we work" />
                        <h2 className="mt-6 text-3xl font-medium !leading-[1.05] text-foreground text-balance font-heading md:text-5xl">
                            A process built for growth.
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
                            We audit what&apos;s working, plan the right build, and execute with a steady cadence so your site and marketing keep improving.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3 md:gap-6">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <div className="relative rounded-[24px] border border-border/60 bg-background p-6 shadow-[0_24px_70px_-24px_rgba(15,23,42,0.12)]">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-muted/10">
                                        <process.icon strokeWidth={1.5} className="h-7 w-7 text-foreground" />
                                    </div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 text-lg font-medium text-foreground">
                                        {id + 1}
                                    </div>
                                </div>
                                <h3 className="mt-10 text-2xl font-medium text-foreground">
                                    {process.title}
                                </h3>
                                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                                    {process.description}
                                </p>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            What our users are saying
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Here&apos;s what some of our users have to say about Linkify.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(0, 3).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(3, 6).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(6, 9).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Step into the future of link management
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Experience the cutting-edge solution that transforms how you handle your links. Elevate your online presence with our next-gen platform.
                            </p>
                            <div className="mt-6">
                                <Button>
                                    Get started for free
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
