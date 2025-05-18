

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceOfferings } from '@/components/sections/ServiceOfferings';
import { TransformingIdeasSection } from '@/components/sections/TransformingIdeasSection';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { ContactForm } from '@/components/sections/ContactForm';
import { AiHeadlineTool } from '@/components/sections/AiHeadlineTool';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PricingSection } from '@/components/sections/PricingSection';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceOfferings />
        <WhyChooseUsSection />
        <TransformingIdeasSection />
        <FeaturesSection />
        <ProjectShowcase />
        <TestimonialSection />
        <PricingSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
        <AiHeadlineTool />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
