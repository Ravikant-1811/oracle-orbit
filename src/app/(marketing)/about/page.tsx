import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const companyHighlights = [
    "Websites",
    "Software",
    "Automation",
    "SEO",
    "GMB",
    "Performance Marketing",
];

const AboutPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto text-center">
                    <MagicBadge title="Company" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Oracle Orbit is the company behind your build and growth
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        We build websites, software, and automation systems, then scale
                        visibility with SEO, Google Business Profile, and performance
                        marketing for teams that want clear momentum.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2} className="mt-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {companyHighlights.map((item) => (
                        <div
                            key={item}
                            className="rounded-3xl border border-border/70 bg-background px-5 py-4 text-center text-sm font-medium text-foreground shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border/70 bg-muted/20 p-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80">
                        Clients we work with
                    </p>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                        Clinics, local services, ecommerce brands, startups, and professional
                        teams that need a reliable partner for digital growth.
                    </p>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default AboutPage;
