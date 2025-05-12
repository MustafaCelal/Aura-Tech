"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <Container id="cta" className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Let's discuss how Aura Tech can help you achieve your digital goals. Whether it's a new website, a marketing campaign, or innovative tech solutions, we're here to bring your vision to life.
        </p>
        <Button 
          asChild 
          variant="secondary" 
          size="lg" 
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md transition-transform hover:scale-105"
        >
          <Link href="#contact" className="flex items-center">
            Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
