
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  aiHint: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Aura Tech delivered exceptional service and results. Their work has become an invaluable asset to our business. We're amazed by the impact!",
    name: 'Jerome Bell',
    role: 'Doctor',
    avatarUrl: 'https://placehold.co/100x100.png',
    aiHint: 'corporate headshot',
  },
  {
    id: 2,
    quote: "The team at Aura Tech provided outstanding service and a perfect solution for our needs. Their expertise truly transformed our business operations.",
    name: 'Ronald Richards',
    role: 'Businessman',
    avatarUrl: 'https://placehold.co/100x100.png',
    aiHint: 'business professional',
  },
  {
    id: 3,
    quote: "Working with Aura Tech has been a game-changer. Their innovative approach and dedication to our project have made us incredibly happy with the outcome.",
    name: 'Leslie Alexander',
    role: 'Restaurant Owner',
    avatarUrl: 'https://placehold.co/100x100.png',
    aiHint: 'client portrait',
  },
  {
    id: 4,
    quote: "Aura Tech completely transformed our online presence. Their team is not only incredibly talented but also a genuine pleasure to collaborate with. Highly recommended!",
    name: 'Sarah Miller',
    role: 'Marketing Director',
    avatarUrl: 'https://placehold.co/100x100.png',
    aiHint: 'innovative leader',
  },
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  return (
    <Card className={cn(
      "bg-card shadow-lg rounded-xl p-6 md:p-8 flex flex-col justify-between h-full border-2",
      isActive ? "border-primary" : "border-border"
    )}>
      <div>
        <Quote className="w-8 h-8 text-primary/70 mb-4 transform -scale-x-100" />
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
          {testimonial.quote}
        </p>
      </div>
      <div className="flex items-center mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={testimonial.aiHint}
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  );
};

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Display 3 testimonials at a time

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonialsData.length - itemsPerPage) : Math.max(0, prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonialsData.length - itemsPerPage ? 0 : Math.min(testimonialsData.length - itemsPerPage, prevIndex + 1)
    );
  };

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Ensure we always have 3 cards by looping if necessary, only if there are enough testimonials
  let displayedTestimonials = [...visibleTestimonials];
  if (testimonialsData.length >= itemsPerPage) {
    while (displayedTestimonials.length < itemsPerPage && testimonialsData.length > 0) {
      displayedTestimonials.push(testimonialsData[displayedTestimonials.length % testimonialsData.length]);
    }
  } else {
    displayedTestimonials = testimonialsData; // Show all if less than itemsPerPage
  }


  return (
    <Container id="testimonials" className="bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-1 block">
            TESTIMONIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What are they saying?
          </h2>
        </div>
        {testimonialsData.length > itemsPerPage && (
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12 disabled:opacity-50"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= testimonialsData.length - itemsPerPage && testimonialsData.length > itemsPerPage }
              aria-label="Next testimonial"
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        )}
      </div>

      <div className={cn(
        "grid grid-cols-1 gap-6 md:gap-8",
        displayedTestimonials.length === 1 && "md:grid-cols-1 max-w-lg mx-auto",
        displayedTestimonials.length === 2 && "md:grid-cols-2",
        displayedTestimonials.length >= 3 && "md:grid-cols-3",
      )}>
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            isActive={index === 0 && currentIndex === 0} // Highlight first card only if it's the actual first one
          />
        ))}
      </div>
    </Container>
  );
}
