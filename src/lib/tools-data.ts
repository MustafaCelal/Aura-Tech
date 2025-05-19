
import type { LucideIcon } from 'lucide-react';
import { Sparkles, Edit3, Plane, Heart } from 'lucide-react'; // Using Edit3 for Wedding Organizer as a placeholder

export interface Tool {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  aiHint?: string;
  href: string;
}

export const allTools: Tool[] = [
  {
    slug: 'ai-headline-generator',
    title: 'AI Headline Generator',
    description: 'Craft compelling headlines for your marketing campaigns using cutting-edge AI.',
    icon: Sparkles,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'creative writing',
    href: '/tools/ai-headline-generator',
  },
  {
    slug: 'wedding-organizer-assistant',
    title: 'Wedding Organizer Assistant',
    description: 'Plan your perfect wedding day with our intuitive digital assistant and tools.',
    icon: Heart, // Changed from Edit3 to Heart
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'wedding planning',
    href: '/tools/wedding-organizer-assistant',
  },
  {
    slug: 'trip-planner-pro',
    title: 'Trip Planner Pro',
    description: 'Organize your travel itineraries, discover new destinations, and manage bookings seamlessly.',
    icon: Plane,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'travel adventure',
    href: '/tools/trip-planner-pro',
  },
  // Example for another tool - can be expanded
  {
    slug: 'seo-analyzer',
    title: 'SEO Analyzer',
    description: 'Get insights into your website\'s SEO performance and discover areas for improvement.',
    icon: Sparkles, // Using Sparkles as a placeholder, consider a more specific SEO icon
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'data analysis',
    href: '/tools/seo-analyzer',
  },
];

// For the homepage tools section, show a limited number of tools
export const featuredTools = allTools.slice(0, 3);
