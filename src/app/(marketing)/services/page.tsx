import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import MagicBadge from "@/components/ui/magic-badge";

const ServicesPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto text-center">
                    <MagicBadge title="Services" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Everything Linkify does for your brand
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        From shortening and analytics to QR codes and protection, these are the core services built into Linkify.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <BentoGrid className="py-8">
                    {CARDS.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ServicesPage;
