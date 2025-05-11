
'use client';

import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of experienced professionals is dedicated to delivering top-notch solutions tailored to your needs.',
    aiHint: 'team collaboration'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies and creative thinking to provide innovative and effective results.',
    aiHint: 'bright idea'
  },
  {
    icon: Zap,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand your goals and achieve them.',
    aiHint: 'customer focus'
  },
  {
    icon: ShieldCheck,
    title: 'Proven Results & Reliability',
    description: 'With a track record of successful projects, we deliver reliable solutions that drive growth and engagement.',
    aiHint: 'success chart'
  },
];

export function WhyChooseUsSection() {
  return (
    <Container id="why-choose-us" className="bg-muted/20 dark:bg-muted/10 rounded-xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Why Choose Aura Tech?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We are committed to excellence and innovation, providing you with digital solutions that make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-card shadow-lg rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
            <CardHeader className="items-center pt-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <benefit.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
