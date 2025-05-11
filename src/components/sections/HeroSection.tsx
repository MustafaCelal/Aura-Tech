
"use client";

import Image from 'next/image';
import { useState } from 'react';
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
  const [heroName, setHeroName] = useState('');
  const [heroWebsiteType, setHeroWebsiteType] = useState('');

  const handleHeroSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // A short delay can help ensure elements are ready after scroll, especially if there are transitions.
      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const messageTextarea = document.getElementById('message') as HTMLTextAreaElement | null;

        if (nameInput && heroName) {
          nameInput.value = heroName;
          // Dispatch an input event to ensure any listeners (e.g., from form libraries if used) are notified.
          nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        if (messageTextarea && heroWebsiteType) {
          messageTextarea.value = `Interested in: ${heroWebsiteType}\n--------------------------\n`;
           messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));
        }

        if (emailInput) {
          emailInput.focus();
        }
      }, 100); // Adjust delay if needed, or use a more robust method for waiting for element availability
    }
  };

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
        
        <div className="mt-10 bg-card p-3 sm:p-4 rounded-xl shadow-xl border">
          <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 sm:rounded-lg sm:shadow-inner sm:overflow-hidden sm:border sm:border-input/50">
            <Input
              type="text"
              id="heroNameInput"
              placeholder="Your Name"
              aria-label="Your Name"
              className="h-14 text-base sm:rounded-none sm:border-0 sm:border-r sm:border-input/50 focus:ring-0 focus:border-primary flex-grow"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
            <Select value={heroWebsiteType} onValueChange={setHeroWebsiteType}>
              <SelectTrigger
                id="heroWebsiteType"
                aria-label="Website Type"
                className="h-14 text-base sm:rounded-none sm:border-0 data-[state=open]:ring-0 data-[state=open]:border-primary min-w-[180px] sm:min-w-0 sm:flex-grow text-muted-foreground"
              >
                <SelectValue placeholder="Website Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Business Website">Business Website</SelectItem>
                <SelectItem value="Landing Page">Landing Page</SelectItem>
                <SelectItem value="Portfolio">Portfolio</SelectItem>
                <SelectItem value="Blog">Blog</SelectItem>
                <SelectItem value="E-commerce">E-commerce</SelectItem>
                <SelectItem value="Custom Solution">Custom Solution</SelectItem>
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
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/seed/auratechhero/1200/900"
            alt="Abstract creative illustration representing Aura Tech's services"
            fill // Changed from layout="fill" for Next 13+
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }} // Changed from objectFit="cover"
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
