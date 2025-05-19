
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  aiHint?: string;
  href: string;
}

export function ToolCard({ title, description, icon: Icon, imageUrl, aiHint, href }: ToolCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-md rounded-lg flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:scale-105">
      <Link href={href} className="flex flex-col h-full">
        {imageUrl && (
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={aiHint || "tool illustration"}
            />
          </div>
        )}
        <CardHeader className="flex-row items-center gap-4 pb-2 pt-6 px-6">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2 flex-grow">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <div className="text-sm font-medium text-primary group-hover:text-primary/80 flex items-center w-full justify-end">
            Use Tool
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
