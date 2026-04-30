import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MagicBadge from "@/components/ui/magic-badge";

const ContactPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto text-center">
                    <MagicBadge title="Contact" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Let&apos;s talk about your setup
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        Reach out if you need help with onboarding, setup, or a custom workflow for your team.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button asChild>
                            <Link href="mailto:support@linkify.io">Email us</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/faq">Read FAQ</Link>
                        </Button>
                    </div>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ContactPage;
