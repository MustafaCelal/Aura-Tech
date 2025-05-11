import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function HeroSection() {
  return (
    <Container className="flex flex-col lg:flex-row items-center gap-12 !pt-12 sm:!pt-16 lg:!pt-20">
      <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Elevate Your Brand with <span className="text-primary">Aura Tech</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
          We craft stunning digital experiences and innovative marketing strategies that captivate audiences and drive growth. Discover your brand's true potential.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg" className="text-base">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="#projects">Our Work</Link>
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/seed/auratechhero/1200/900"
            alt="Abstract creative illustration representing Aura Tech's services"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-105"
            data-ai-hint="abstract technology"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
