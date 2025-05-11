
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function TransformingIdeasSection() {
  return (
    <Container id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square lg:aspect-[4/3] order-last lg:order-first">
          <Image
            src="https://picsum.photos/seed/transform-left/600/800"
            alt="Transforming ideas illustration with checklist and laptop"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="rounded-xl object-cover shadow-lg"
            data-ai-hint="digital checklist"
          />
        </div>
        <div className="text-center lg:text-left lg:pl-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Transforming Ideas into Reality.
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-primary">
            Your Web Agency Solution
          </h3>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            We are a dedicated team of professionals in the digital world,
            delivering creative and innovative web solutions to meet your
            unique needs. As an enthusiastic digital agency, we are committed
            to empowering businesses and organizations in achieving their
            online goals.
          </p>
          <Button asChild variant="link" className="mt-8 text-lg px-0 text-primary hover:text-primary/80">
            <Link href="#contact">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="hidden lg:block relative aspect-square lg:aspect-[3/4] col-span-1 lg:col-start-3">
            {/* This div is for the right side image, will be positioned with grid magic */}
        </div>
      </div>
      {/* Second image, absolutely positioned relative to the container for the large screen decorative effect */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-1/3 max-w-xs xl:max-w-sm 2xl:max-w-md aspect-[3/4] pointer-events-none">
         <Image
            src="https://picsum.photos/seed/transform-right/450/600"
            alt="Modern workspace illustration"
            fill
            sizes="33vw"
            className="rounded-xl object-cover shadow-lg"
            data-ai-hint="modern workspace"
          />
      </div>
    </Container>
  );
}
