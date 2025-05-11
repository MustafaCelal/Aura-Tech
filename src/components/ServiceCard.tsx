import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
}

export function ServiceCard({ icon: Icon, title }: ServiceCardProps) {
  return (
    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center p-6 text-center bg-card border border-border rounded-lg cursor-pointer">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
      <h3 className="text-base sm:text-lg font-medium text-foreground">{title}</h3>
    </Card>
  );
}
