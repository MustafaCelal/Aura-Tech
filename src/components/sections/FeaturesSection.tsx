'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    imageUrl: 'https://picsum.photos/seed/featureSupport/100/100',
    aiHint: 'customer support',
    title: 'Ongoing Support',
    description: 'Receive dedicated technical assistance to ensure your website performs optimally throughout its lifecycle.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/featureResponsive/100/100',
    aiHint: 'responsive design',
    title: 'Responsive Design',
    description: 'Our websites deliver a seamless and intuitive user experience across all devices – desktops, tablets, and mobiles.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/featureHosting/100/100',
    aiHint: 'domain hosting',
    title: 'Domain & Hosting Solutions',
    description: 'Simplify your launch with our integrated domain registration and reliable hosting services.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/featureSEO/100/100',
    aiHint: 'seo friendly',
    title: 'SEO-Friendly Foundations',
    description: 'Built with search engine optimization in mind, helping your website achieve greater visibility.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/featureDesign/100/100',
    aiHint: 'design choices',
    title: 'Professional Design',
    description: 'Benefit from bespoke designs crafted by our experienced team, tailored to reflect your brand identity.',
  },
];

export function FeaturesSection() {
  return (
    <Container id="features">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Features
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          What features & services can you get?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the comprehensive features and services designed to make your project a success. We partner with you from concept to launch, ensuring every detail aligns with your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card shadow-lg rounded-xl overflow-hidden flex flex-col">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  data-ai-hint={feature.aiHint}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
