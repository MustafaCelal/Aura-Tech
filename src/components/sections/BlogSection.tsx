import { BlogCard } from '@/components/BlogCard';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    imageUrl: 'https://picsum.photos/seed/blog-web-design/600/375',
    date: 'Aug 15, 2024',
    title: 'The Digital Edge: Crafting User-Centric Web Experiences',
    description: 'Discover key principles for designing websites that not only look stunning but also provide intuitive and engaging user journeys, leading to higher conversion rates.',
    aiHint: 'web design process',
    href: '#',
  },
  {
    imageUrl: 'https://picsum.photos/seed/blog-seo/600/375',
    date: 'Aug 10, 2024',
    title: 'Unlocking Growth: SEO Strategies for Modern Businesses',
    description: 'Learn how effective Search Engine Optimization can elevate your brand\'s visibility, attract organic traffic, and drive sustainable business growth in today\'s competitive market.',
    aiHint: 'seo analytics chart',
    href: '#',
  },
  {
    imageUrl: 'https://picsum.photos/seed/blog-branding/600/375',
    date: 'Aug 05, 2024',
    title: 'The Power of Branding: Creating a Lasting Impression Online',
    description: 'Explore the essentials of building a strong brand identity online, from compelling visuals to consistent messaging, that resonates with your target audience.',
    aiHint: 'brand identity moodboard',
    href: '#',
  },
  {
    imageUrl: 'https://picsum.photos/seed/blog-ai-marketing/600/375',
    date: 'Jul 28, 2024',
    title: 'Future-Proof Your Business: Embracing AI in Digital Marketing',
    description: 'Understand how Artificial Intelligence is reshaping digital marketing and how your business can leverage AI tools for smarter campaigns and enhanced customer engagement.',
    aiHint: 'ai marketing concept',
    href: '#',
  },
];

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
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            imageUrl={post.imageUrl}
            date={post.date}
            title={post.title}
            description={post.description}
            aiHint={post.aiHint}
            href={post.href}
          />
        ))}
      </div>
      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="#">View All Blog</Link>
        </Button>
      </div>
    </Container>
  );
}
