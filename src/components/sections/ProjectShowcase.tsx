import { ProjectCard } from '@/components/ProjectCard';
import { Container } from '@/components/layout/Container';

const projects = [
  {
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    title: 'E-commerce Rebrand',
    category: 'Web Design & Branding',
    aiHint: 'modern website'
  },
  {
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    title: 'Mobile App Launch',
    category: 'App Development & Marketing',
    aiHint: 'mobile application'
  },
  {
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    title: 'Startup Pitch Deck',
    category: 'Graphic Design & Strategy',
    aiHint: 'presentation design'
  },
  {
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    aiHint: 'social media'
  },
];

export function ProjectShowcase() {
  return (
    <Container id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Recent Work</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Take a look at some of the successful projects we've delivered for our amazing clients.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            category={project.category}
            aiHint={project.aiHint}
          />
        ))}
      </div>
    </Container>
  );
}
