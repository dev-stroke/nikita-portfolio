export interface Project {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  content?: string;
  date?: string;
  tags?: string[];
  category?: string;
}

const projects: Project[] = [
  {
    slug: 'project-1',
    title: 'Immersive Color Study',
    image: '/images/portfolio/project-1.svg',
    category: 'Creative',
  },
  {
    slug: 'project-2',
    title: 'Digital Anatomy',
    image: '/images/portfolio/project-2.svg',
    category: 'Graphic',
  },
  {
    slug: 'project-3',
    title: 'Soft Matter Bloom',
    image: '/images/portfolio/project-3.svg',
    category: 'Creative',
  },
  {
    slug: 'project-4',
    title: 'Timber Resonance',
    image: '/images/portfolio/project-4.svg',
    category: 'Graphic',
  },
  {
    slug: 'project-5',
    title: 'Metallic Reflections',
    image: '/images/portfolio/project-2.svg',
    category: 'Creative',
  },
  {
    slug: 'project-6',
    title: 'Pixelated World',
    image: '/images/portfolio/project-1.svg',
    category: 'Graphic',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string | null): Project[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

