import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceOfferings } from '@/components/sections/ServiceOfferings';
import { TransformingIdeasSection } from '@/components/sections/TransformingIdeasSection';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { ContactForm } from '@/components/sections/ContactForm';
import { AiHeadlineTool } from '@/components/sections/AiHeadlineTool';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceOfferings />
        <TransformingIdeasSection />
        <ProjectShowcase />
        <AiHeadlineTool />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
