
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string; 
  aiHint?: string;
  href?: string;
}

export function ProjectCard({ imageUrl, title, description, aiHint, href = "#" }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-md rounded-lg flex flex-col h-full group">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-ai-hint={aiHint || "creative project"}
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={href} className="text-sm font-medium text-primary hover:text-primary/80 flex items-center group">
          View Work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
