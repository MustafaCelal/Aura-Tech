
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { allTools, type Tool } from '@/lib/tools-data';
import { AiHeadlineTool } from '@/components/sections/AiHeadlineTool';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tool = allTools.find((t) => t.slug === params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found - Aura Tech',
    };
  }
  const ogImageUrl = tool.imageUrl?.startsWith('http') ? tool.imageUrl : `https://auratech.agency${tool.imageUrl || '/placeholder-og.png'}`; // Assuming a domain for absolute URLs

  return {
    title: `${tool.title} - Aura Tech Tools`,
    description: tool.description,
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: 'website',
      images: tool.imageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: tool.title, }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.description,
      images: tool.imageUrl ? [ogImageUrl] : [],
    }
  };
}

export async function generateStaticParams() {
  return allTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolPage({ params }: Props) {
  const tool = allTools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const IconComponent = tool.icon;

  return (
    <>
      <Header />
      <main>
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              {tool.imageUrl && (
                <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg mx-auto max-w-2xl">
                  <Image
                    src={tool.imageUrl}
                    alt={`Illustration for ${tool.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    data-ai-hint={tool.aiHint || "tool concept"}
                    priority
                  />
                </div>
              )}
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                 <IconComponent className="w-10 h-10 text-primary" />
              </div>
              <h1 className="!mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{tool.title}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{tool.description}</p>
            </div>

            {/* Specific tool content rendering */}
            {tool.slug === 'ai-headline-generator' && (
              <div className="mt-8">
                <AiHeadlineTool />
              </div>
            )}

            {/* Placeholder for other tools */}
            {tool.slug !== 'ai-headline-generator' && (
              <div className="mt-12 prose prose-lg mx-auto dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary">
                <p>This is the dedicated page for the <strong>{tool.title}</strong> tool.</p>
                <p>The interactive components and detailed information for this tool will be available here soon. Stay tuned for updates!</p>
                <div className="mt-8 p-8 bg-muted/50 rounded-xl text-center border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Tool Interface Coming Soon</h3>
                  <p className="text-muted-foreground">We are working hard to bring you the best experience for the {tool.title}.</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
