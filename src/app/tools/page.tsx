
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ToolCard } from '@/components/ToolCard';
import { allTools } from '@/lib/tools-data';
import { Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Tools - Aura Tech | Boost Your Productivity',
  description: 'Explore a collection of innovative digital tools by Aura Tech, designed to help you with marketing, organization, and creative tasks.',
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="mb-10 text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
               <Wrench className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Suite of Digital Tools
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage our curated tools to streamline your workflows, generate creative ideas, and organize your projects effectively.
            </p>
          </div>
          {allTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTools.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  slug={tool.slug}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  imageUrl={tool.imageUrl}
                  aiHint={tool.aiHint}
                  href={tool.href}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No tools available at the moment. Check back soon!</p>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
