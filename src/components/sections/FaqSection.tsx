'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const allFaqData = [
  {
    question: "What is a web agency?",
    answer: "A web agency, like Aura Tech, is a specialized firm offering comprehensive services in website design, development, digital marketing, and online strategy. We partner with businesses to create and enhance their digital presence."
  },
  {
    question: "What services are offered by Aura Tech?",
    answer: "Aura Tech provides a full suite of digital services, including custom web design, robust development (front-end & back-end), e-commerce solutions, CMS integration, SEO, digital marketing campaigns, social media management, and ongoing website support and maintenance."
  },
  {
    question: "How do I start a project with Aura Tech?",
    answer: "Starting a project with Aura Tech is simple. Reach out via our contact form or email with an overview of your project, goals, and if possible, your budget. We'll then schedule a consultation to discuss your vision in detail."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "Project timelines vary based on complexity and scope. A standard informational website might take 4-8 weeks, while more complex platforms like e-commerce sites or custom applications can take several months. We provide a detailed timeline after our initial consultation."
  },
  {
    question: "How is the budget for a website project determined?",
    answer: "Your project budget depends on factors such as website type, page count, custom features, design intricacy, and ongoing maintenance needs. We offer transparent, detailed quotes after understanding your specific requirements, and can discuss various packages or custom proposals."
  },
  {
    question: "Do you provide ongoing support and maintenance after launch?",
    answer: "Yes, Aura Tech offers comprehensive ongoing support and maintenance plans. These ensure your website stays secure, up-to-date, and performs at its best, covering updates, security, content changes, and technical help."
  },
  {
    question: "Can Aura Tech help with redesigning an existing website?",
    answer: "Absolutely! We specialize in website redesigns, focusing on enhancing aesthetics, user experience, performance, and functionality. We can seamlessly migrate your content and upgrade your site to meet current standards."
  }
];

const INITIAL_DISPLAY_COUNT = 5;

export function FaqSection() {
  const [visibleFaqs, setVisibleFaqs] = useState(allFaqData.slice(0, INITIAL_DISPLAY_COUNT));
  const [showAll, setShowAll] = useState(allFaqData.length <= INITIAL_DISPLAY_COUNT);

  const handleToggleShowMore = () => {
    if (showAll) {
      setVisibleFaqs(allFaqData.slice(0, INITIAL_DISPLAY_COUNT));
      setShowAll(false);
    } else {
      setVisibleFaqs(allFaqData);
      setShowAll(true);
    }
  };

  return (
    <Container id="faq">
      <Card className="bg-primary/5 p-6 sm:p-8 rounded-xl shadow-lg mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
              Find answers to common questions about our services, process, and how we can help your business succeed online. If you don't find your answer here, feel free to reach out!
            </p>
            <Button asChild className="mt-6">
              <Link href="#contact">Ask Another Question</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-md mx-auto md:max-w-none">
            <Image
              src="https://picsum.photos/seed/faq-bubbles/600/450"
              alt="FAQ Illustration with speech bubbles and question mark"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="rounded-lg object-contain"
              data-ai-hint="faq illustration"
            />
          </div>
        </div>
      </Card>

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full max-w-3xl mx-auto">
        {visibleFaqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b border-border">
            <AccordionTrigger className="py-4 text-left text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-sm sm:text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {allFaqData.length > INITIAL_DISPLAY_COUNT && (
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" onClick={handleToggleShowMore}>
            {showAll ? "Show Less Questions" : "Show More Questions"}
          </Button>
        </div>
      )}
    </Container>
  );
}
