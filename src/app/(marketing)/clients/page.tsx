import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const ClientsPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto text-center">
                    <MagicBadge title="Clients" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Plans built for growing teams and clients
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        Choose the setup that fits your business, whether you&apos;re solo, small, or scaling fast.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <PricingCards />
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ClientsPage;
