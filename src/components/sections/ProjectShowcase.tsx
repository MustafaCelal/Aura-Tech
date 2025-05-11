import { ProjectCard } from '@/components/ProjectCard';
import { Container } from '@/components/layout/Container';

const projects = [
  {
    imageUrl: 'https://picsum.photos/seed/campaign/600/450',
    title: 'Campaign',
    description: 'We provide all technical support for your website during its active period.',
    aiHint: 'marketing campaign',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/socialmedia/600/450',
    title: 'Social Media Promotion',
    description: 'We provide all technical support for your website during its active period.',
    aiHint: 'social media marketing',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/wedding/600/450',
    title: 'Wedding Organizer',
    description: 'We provide all technical support for your website during its active period.',
    aiHint: 'event planning',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/tripplanner/600/450',
    title: 'Trip Planner',
    description: 'We provide all technical support for your website during its active period.',
    aiHint: 'travel planning',
    href: '#contact',
  },
];

export function ProjectShowcase() {
  return (
    <Container id="projects" className="bg-background">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
          PROJECT
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Discover Our Selected Project
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl">
          Every website that we build is special for our clients. We are ready to provide services from start to finish. The following is service you get:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            aiHint={project.aiHint}
            href={project.href}
          />
        ))}
      </div>
    </Container>
  );
}
