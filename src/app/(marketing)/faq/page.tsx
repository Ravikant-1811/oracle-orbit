import { AnimationContainer, MaxWidthWrapper } from "@/components";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { FAQ } from "@/utils/constants/faq";

const FaqPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto text-center">
                    <MagicBadge title="FAQ" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Questions, answered
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        Here are the questions we hear most often about Linkify.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="max-w-3xl mx-auto w-full mt-8">
                    <Accordion type="single" collapsible>
                        {FAQ.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default FaqPage;
