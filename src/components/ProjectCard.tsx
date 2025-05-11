import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  aiHint?: string;
}

export function ProjectCard({ imageUrl, title, category, aiHint }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={aiHint || "creative project"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
             <h3 className="text-lg font-semibold text-primary-foreground">{title}</h3>
             <p className="text-sm text-primary-foreground/80">{category}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

