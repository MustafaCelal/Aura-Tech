
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/BlogCard';
import { allBlogPosts } from '@/lib/blog-data'; // Import all posts

export const metadata: Metadata = {
  title: 'Blog - Aura Tech | Insights and Articles',
  description: 'Explore the latest articles, insights, and news from Aura Tech on web design, digital marketing, and technology trends.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-12 md:py-16 lg:py-20">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore Our Insights
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and news from Aura Tech on web design, digital marketing, and innovative technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => ( // Use allBlogPosts here
              <BlogCard
                key={post.slug}
                imageUrl={post.imageUrl}
                date={post.date}
                title={post.title}
                description={post.description}
                aiHint={post.aiHint}
                href={`/blog/${post.slug}`} // Update href to dynamic slug
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
