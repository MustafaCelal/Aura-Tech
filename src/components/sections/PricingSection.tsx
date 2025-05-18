
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Link will still be used for the main CTA if needed, but individual tier buttons will use onClick.
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Launch',
    price: 'CHF 690.– setup',
    frequency: '+ 29.–/month',
    description: 'Ideal for Freelancers, Creatives, and New Ventures seeking a professional online start with essential features and reliable support.',
    features: [
      '1-Page Professional Website',
      'SEO-Ready Structure',
      'Basic Hosting & Maintenance',
      'Mobile-Responsive Design',
      'Contact Form Integration',
    ],
    cta: 'Get Started',
    href: '#contact', // This href will be used by the new onClick handler
    featured: false,
  },
  {
    name: 'Professional',
    price: 'CHF 990.– setup',
    frequency: '+ 39.–/month',
    description: 'Perfect for Local Shops, Therapists, and Coaches needing more content depth, CMS capabilities, and integrations.',
    features: [
      'Up to 3 Pages',
      'Advanced SEO Optimization',
      'Blog CMS Integration',
      'Calendar/Booking Integration',
      'Extended Hosting & Maintenance',
    ],
    cta: 'Choose Professional',
    href: '#contact',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'CHF 1,490.– setup',
    frequency: '+ 79.–/month',
    description: 'Designed for Small Agencies and Service Providers aiming for growth, offering modularity and strategic insights.',
    features: [
      'Modular Pages (Expansion Option)',
      'Includes all features of Professional',
      'Growth Suggestions Report',
      'Catalog-Ready CMS',
      'Priority Support',
    ],
    cta: 'Select Scale',
    href: '#contact',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    frequency: '',
    description: 'Bespoke solutions for E-commerce, Corporates, and SaaS platforms with unique, complex requirements and dedicated support.',
    features: [
      'Tailored Web Architecture',
      'Custom APIs & Admin Panel',
      'Service Level Agreement (SLA)',
      'Dedicated Support Team',
      'Scalable Infrastructure',
    ],
    cta: 'Request Quote',
    href: '#contact',
    featured: false,
  },
];

export function PricingSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTierSelection = (tierName: string, tierHref: string) => {
    if (!isMounted) return;

    const contactSection = document.getElementById(tierHref.substring(1)); // Remove '#' from href
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const messageTextarea = document.getElementById('message') as HTMLTextAreaElement | null;

        if (messageTextarea) {
          const currentMessage = messageTextarea.value;
          const newFormattedMessage = `Interested in Pricing Plan: ${tierName}\n--------------------------\n${currentMessage}`;
          messageTextarea.value = newFormattedMessage;
          // Dispatch input event for React Hook Form or other libraries to pick up the change
          messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));
        }

        if (nameInput) {
          nameInput.focus();
        } else if (emailInput) { 
          emailInput.focus();
        }
      }, 300); 
    }
  };

  return (
    <Container id="pricing" className="bg-muted/30 dark:bg-muted/10 rounded-xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Strategic Packages for Your Digital Success
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose a plan tailored to your business objectives in Switzerland. Each package combines a one-time design fee with monthly hosting & updates, ensuring quality and continuous support.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
              tier.featured ? 'border-2 border-primary scale-105 bg-card relative' : 'bg-card'
            }`}
          >
            {tier.featured && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
            )}
            <CardHeader className="pt-8">
              <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-extrabold tracking-tight text-foreground block">{tier.price}</span>
                {tier.frequency && <span className="text-lg font-medium text-muted-foreground block">{tier.frequency}</span>}
              </div>
              <CardDescription className="mt-3 text-sm text-muted-foreground h-20 sm:h-24">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul role="list" className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto p-6">
              <Button
                size="lg"
                variant={tier.featured ? 'default' : 'outline'}
                className="w-full"
                onClick={() => handleTierSelection(tier.name, tier.href)}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
