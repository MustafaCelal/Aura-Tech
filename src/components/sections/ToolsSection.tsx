
"use client";

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { featuredTools } from '@/lib/tools-data';
import { ToolCard } from '@/components/ToolCard';
import { Wrench } from 'lucide-react';

export function ToolsSection() {
  return (
    <Container id="tools-showcase" className="bg-muted/30 dark:bg-muted/10 rounded-xl">
      <div className="mb-12 text-center">
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
          <Wrench className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Explore Our Digital Tools
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a suite of intelligent tools designed to enhance your productivity and creativity, from AI-powered assistants to practical organizers.
        </p>
      </div>
      {featuredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTools.map((tool) => (
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
         <p className="text-center text-muted-foreground">No tools featured at the moment. Check back soon!</p>
      )}
      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/tools">View All Tools</Link>
        </Button>
      </div>
    </Container>
  );
}
