
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
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const services = [
  { icon: GraduationCap, title: 'Course Institutions' },
  { icon: Megaphone, title: 'Campaign' },
  { icon: Sandwich, title: 'Food' },
  { icon: Store, title: 'Restaurant' },
  { icon: Hotel, title: 'Hotel' },
  { icon: Briefcase, title: 'Agency' },
  { icon: HeartPulse, title: 'Clinic' },
  { icon: Heart, title: 'Wedding' },
  { icon: CalendarDays, title: 'Event' },
];

export function ServiceOfferings() {
  return (
    <Container id="services" className="bg-background/70 rounded-xl backdrop-blur-sm shadow-lg">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Websites for Every Vision
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          We craft bespoke websites that elevate products, agencies, and personalities. Accessible anytime, anywhere, our designs inspire and engage. Explore possibilities below.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
          />
        ))}
        <Link href="#contact" className="h-full">
          <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center p-6 text-center bg-card border-border rounded-lg cursor-pointer">
            <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-foreground">Yours</h3>
          </Card>
        </Link>
      </div>
    </Container>
  );
}
