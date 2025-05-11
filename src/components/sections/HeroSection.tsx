import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Container } from '@/components/layout/Container';

export function HeroSection() {
  return (
    <Container className="flex flex-col lg:flex-row items-center gap-12 !pt-12 sm:!pt-16 lg:!pt-20">
      <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Elevate Your Brand with <br className="hidden sm:inline" />
          <span className="text-primary">Aura Tech</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
          We craft stunning digital experiences and innovative marketing strategies that captivate audiences and drive growth. Discover your brand's true potential.
        </p>
        
        <div className="mt-10">
          <form className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 sm:rounded-lg sm:shadow-lg sm:overflow-hidden sm:border sm:border-input">
            <Input
              type="text"
              id="heroName"
              placeholder="Your Name"
              aria-label="Your Name"
              className="h-14 text-base sm:rounded-none sm:border-0 sm:border-r sm:border-input focus:ring-0 focus:border-primary flex-grow"
            />
            <Select>
              <SelectTrigger
                id="heroWebsiteType"
                aria-label="Website Type"
                className="h-14 text-base sm:rounded-none sm:border-0 data-[state=open]:ring-0 data-[state=open]:border-primary min-w-[180px] sm:min-w-0 sm:flex-grow"
              >
                <SelectValue placeholder="Website Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="business">Business Website</SelectItem>
                <SelectItem value="landing_page">Landing Page</SelectItem>
              </SelectContent>
            </Select>
            <Button
              size="lg"
              type="submit"
              className="h-14 text-base sm:rounded-none shrink-0"
            >
              Get Started
            </Button>
          </form>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg" className="text-base">
            <a href="#contact">Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#projects">Our Work</a>
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
           <div aria-hidden="true" className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div>
        </div>
      </div>
    </Container>
  );
}
