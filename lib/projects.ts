export interface Project {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  content?: string;
  date?: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    slug: 'project-1',
    title: 'Immersive Color Study',
    image: '/images/portfolio/project-1.svg',
  },
  {
    slug: 'project-2',
    title: 'Digital Anatomy',
    image: '/images/portfolio/project-2.svg',
  },
  {
    slug: 'project-3',
    title: 'Soft Matter Bloom',
    image: '/images/portfolio/project-3.svg',
  },
  {
    slug: 'project-4',
    title: 'Timber Resonance',
    image: '/images/portfolio/project-4.svg',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

