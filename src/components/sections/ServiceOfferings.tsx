
import { ServiceCard } from '@/components/ServiceCard';
import { Container } from '@/components/layout/Container';
import {
  GraduationCap,
  Megaphone,
  Sandwich,
  Store,
  Hotel,
  Briefcase,
  HeartPulse,
  Heart,
  CalendarDays,
  ArrowRight,
  Palette,
  CodeXml,
  Lightbulb,
  Presentation,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: Palette, title: 'Creative Design' },
  { icon: CodeXml, title: 'Web Development' },
  { icon: Megaphone, title: 'Digital Marketing' },
  { icon: Lightbulb, title: 'Brand Strategy' },
  { icon: Presentation, title: 'UI/UX Solutions' },
  { icon: GraduationCap, title: 'Course Institutions' },
  { icon: Store, title: 'E-commerce Stores' },
  { icon: Briefcase, title: 'Agency Portfolios' },
  { icon: CalendarDays, title: 'Event Pages' },
];

export function ServiceOfferings() {
  return (
    <Container id="services" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-xl shadow-lg">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Websites for Every Vision
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          We craft bespoke websites that elevate products, agencies, and personalities. Accessible anytime, anywhere, our designs inspire and engage. Explore possibilities below.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="#contact" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-base sm:text-lg group">
          Discuss Your Project
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Container>
  );
}

