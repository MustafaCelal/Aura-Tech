
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const handleHeroSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isMounted) return;

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const messageTextarea = document.getElementById('message') as HTMLTextAreaElement | null;

        if (nameInput && heroName) {
          nameInput.value = heroName;
          // Dispatch input event for React Hook Form or other libraries to pick up the change
          nameInput.dispatchEvent(new Event('input', { bubbles: true }));

        }

        if (messageTextarea && heroWebsiteType) {
          const currentMessage = messageTextarea.value;
          const newFormattedMessage = `Interested in: ${heroWebsiteType}\n--------------------------\n${currentMessage}`;
          messageTextarea.value = newFormattedMessage;
          messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));

        }
        
        if (emailInput) {
          emailInput.focus();
        } else if (nameInput && !heroName) { 
           nameInput.focus();
        } else if (messageTextarea && !heroWebsiteType) { 
            messageTextarea.focus();
        }


      }, 100); // Small delay to ensure scroll is complete
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
        
        <div className="mt-10 bg-card p-1.5 sm:p-2 rounded-xl shadow-lg border border-border/20">
          <form 
            onSubmit={handleHeroSubmit} 
            className="flex flex-col sm:flex-row items-stretch gap-0 sm:rounded-lg sm:overflow-hidden bg-background sm:border sm:border-input"
          >
            <Input
              type="text"
              id="heroNameInput"
              placeholder="Your Name"
              aria-label="Your Name"
              className="h-14 text-base sm:rounded-none sm:border-0 sm:border-r sm:border-border/30 focus:ring-0 focus:border-primary flex-grow placeholder:text-muted-foreground/70 text-foreground bg-transparent px-4"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
            <Select value={heroWebsiteType} onValueChange={setHeroWebsiteType}>
              <SelectTrigger
                id="heroWebsiteType"
                aria-label="Website Type"
                className="h-14 text-base sm:rounded-none sm:border-0 data-[state=open]:ring-0 data-[state=open]:border-primary min-w-[180px] sm:min-w-0 sm:flex-grow placeholder:text-muted-foreground/70 text-foreground bg-transparent px-4 border-t border-b sm:border-t-0 sm:border-b-0 border-border/30"
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
              className="h-14 text-base sm:rounded-l-none shrink-0"
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/1200x900.png"
            alt="Abstract creative illustration representing Aura Tech's services"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transform transition-transform duration-500 hover:scale-105"
            data-ai-hint="brand elevation"
            priority
          />
           <div aria-hidden="true" className="absolute inset-0 rounded-xl ring-1 ring-inset ring-foreground/5"></div>
        </div>
      </div>
    </Container>
  );
}
