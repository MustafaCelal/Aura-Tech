
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { allBlogPosts } from '@/lib/blog-data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    // Optionally, return default metadata or allow Next.js to handle it
    return {
      title: 'Post Not Found - Aura Tech',
    };
  }

  // Ensure imageUrl is absolute for Open Graph, or handle appropriately
  const ogImageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `https://yourdomain.com${post.imageUrl}`;


  return {
    title: `${post.title} - Aura Tech Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: ogImageUrl, 
          width: 1200, // Standard OG width
          height: 630, // Standard OG height
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    }
  };
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); 
  }

  return (
    <>
      <Header />
      <main>
        <Container className="py-12 md:py-16 lg:py-20">
          <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary">
            <div className="mb-8 border-b border-border pb-6">
              <h1 className="!mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{post.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Published on <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
              </p>
            </div>

            {post.imageUrl && (
              <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={post.imageUrl}
                  alt={`Cover image for ${post.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  data-ai-hint={post.aiHint || "blog post image"}
                  priority 
                />
              </div>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
