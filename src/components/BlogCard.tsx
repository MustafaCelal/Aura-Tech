
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  aiHint?: string;
  href?: string;
}

export function BlogCard({ imageUrl, date, title, description, aiHint, href = "#" }: BlogCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-md rounded-lg flex flex-col h-full group">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={aiHint || "blog post"}
          />
        </div>
      </Link>
      <CardContent className="p-6 flex-grow">
        <p className="text-xs text-muted-foreground mb-2">{date}</p>
        <Link href={href} className="block">
          <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
      {/* Optional: Add a footer with a "Read More" link if needed in the future
      <CardFooter className="p-6 pt-0">
        <Link href={href} className="text-sm font-medium text-primary hover:text-primary/80 flex items-center group">
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
      */}
    </Card>
  );
}
