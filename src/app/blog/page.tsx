
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/BlogCard';

// Placeholder blog post data for the dedicated blog page
// In a real app, this would likely come from a CMS or a more dedicated data source
const blogPosts = [
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Aug 15, 2024',
    title: 'The Digital Edge: Crafting User-Centric Web Experiences',
    description: 'Discover key principles for designing websites that not only look stunning but also provide intuitive and engaging user journeys, leading to higher conversion rates.',
    aiHint: 'user experience',
    href: '#', // Individual blog post links can be updated later
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Aug 10, 2024',
    title: 'Unlocking Growth: SEO Strategies for Modern Businesses',
    description: 'Learn how effective Search Engine Optimization can elevate your brand\'s visibility, attract organic traffic, and drive sustainable business growth in today\'s competitive market.',
    aiHint: 'growth data',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Aug 05, 2024',
    title: 'The Power of Branding: Creating a Lasting Impression Online',
    description: 'Explore the essentials of building a strong brand identity online, from compelling visuals to consistent messaging, that resonates with your target audience.',
    aiHint: 'modern brand',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Jul 28, 2024',
    title: 'Future-Proof Your Business: Embracing AI in Digital Marketing',
    description: 'Understand how Artificial Intelligence is reshaping digital marketing and how your business can leverage AI tools for smarter campaigns and enhanced customer engagement.',
    aiHint: 'future tech',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Jul 20, 2024',
    title: 'Responsive Web Design: Why It Matters More Than Ever',
    description: 'A deep dive into the importance of responsive design for user experience, SEO, and overall website success in a multi-device world.',
    aiHint: 'web responsive',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Jul 15, 2024',
    title: 'Cybersecurity Basics for Small Businesses',
    description: 'Protect your digital assets. Essential cybersecurity tips and practices for small businesses to stay safe online.',
    aiHint: 'data security',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Jul 10, 2024',
    title: 'Content Marketing That Converts: A Practical Guide',
    description: 'Learn to create and distribute valuable content that attracts, engages, and converts your target audience into loyal customers.',
    aiHint: 'marketing strategy',
    href: '#',
  },
  {
    imageUrl: 'https://placehold.co/600x375.png',
    date: 'Jul 05, 2024',
    title: 'The Role of UI/UX in Modern Web Development',
    description: 'Exploring how User Interface (UI) and User Experience (UX) design are crucial for building successful and user-friendly websites.',
    aiHint: 'design interface',
    href: '#',
  },
];

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
        </Container>
      </main>
      <Footer />
    </>
  );
}
