import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
