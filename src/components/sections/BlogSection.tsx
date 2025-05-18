
import { BlogCard } from '@/components/BlogCard';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { featuredBlogPosts } from '@/lib/blog-data'; // Import featured posts

export function BlogSection() {
  return (
    <Container id="blog" className="bg-background">
      <div className="mb-12 text-center md:text-left">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-1 block">
          BLOG
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Read Our Latest Blog
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto md:mx-0">
          Dive into our latest insights, trends, and tips on web design, digital marketing, and technology. Stay informed and inspired with Aura Tech's expert perspectives.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {featuredBlogPosts.map((post) => ( // Use featuredBlogPosts
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
      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">View All Blog</Link>
        </Button>
      </div>
    </Container>
  );
}
