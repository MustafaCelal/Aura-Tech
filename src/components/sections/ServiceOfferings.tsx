import { ServiceCard } from '@/components/ServiceCard';
import { Container } from '@/components/layout/Container';
import { Palette, Code2, Megaphone, Lightbulb, LayoutGrid } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Visually stunning designs that tell your brand’s story and captivate your audience. From logos to full brand identities.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Responsive, high-performance websites and web applications built with modern technologies for seamless user experiences.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that boost visibility, engagement, and conversions across all digital channels.',
  },
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    description: 'Strategic insights and planning to define your brand’s voice, position, and roadmap for long-term success.',
  },
];

export function ServiceOfferings() {
  return (
    <Container id="services" className="bg-secondary/30 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Services</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive suite of creative and technical services to bring your vision to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Container>
  );
}
