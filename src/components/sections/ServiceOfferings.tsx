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
    <Container id="services" className="bg-background rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Website for all</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We are ready to help all the needs to make products, agencies, or personalities increasingly known through websites that can be accessed anytime, anywhere. Below is a sample website that can be your inspiration.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
      <div className="flex justify-center md:justify-end">
        <Link href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-base sm:text-lg group">
          See all
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Container>
  );
}
