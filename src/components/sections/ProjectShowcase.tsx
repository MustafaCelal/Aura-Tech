
import { ProjectCard } from '@/components/ProjectCard';
import { Container } from '@/components/layout/Container';

const projects = [
  {
    imageUrl: 'https://picsum.photos/seed/campaign/600/450',
    title: 'Campaign',
    description: 'Developed a multi-channel marketing campaign that significantly boosted brand awareness and lead generation for a key client.',
    aiHint: 'digital strategy',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/socialmedia/600/450',
    title: 'Social Media Promotion',
    description: 'Executed a targeted social media promotion strategy, resulting in increased engagement and follower growth for a lifestyle brand.',
    aiHint: 'online engagement',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/wedding/600/450',
    title: 'Wedding Organizer',
    description: 'Designed an elegant and user-friendly website for a premium wedding organizer, enhancing their online bookings and client communication.',
    aiHint: 'corporate solution',
    href: '#contact',
  },
  {
    imageUrl: 'https://picsum.photos/seed/tripplanner/600/450',
    title: 'Trip Planner',
    description: 'Created an intuitive trip planning platform with custom features, simplifying travel arrangements for adventure seekers.',
    aiHint: 'modern app',
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
          Showcasing Our Success Stories
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl">
          Explore a selection of our recent projects that highlight our commitment to quality, innovation, and client satisfaction. Each project demonstrates our capability to deliver impactful digital solutions.
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

