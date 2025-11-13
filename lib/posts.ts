export interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  date: string;
  author?: string;
  tags?: string[];
}

const posts: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and build your first application',
    content:
      'Next.js is a powerful React framework that enables you to build full-stack web applications. In this post, we\'ll explore the fundamentals and get you started on your journey.\n\nNext.js provides features like server-side rendering, static site generation, and API routes out of the box. This makes it an excellent choice for building modern web applications.',
    image: '/images/blog/nextjs.jpg',
    date: '2024-01-10',
    author: 'John Doe',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    slug: 'design-trends-2024',
    title: 'Design Trends for 2024',
    excerpt: 'Exploring the latest design trends shaping the digital landscape',
    content:
      'The design world is constantly evolving, and 2024 brings exciting new trends. From bold typography to minimalist interfaces, we\'ll explore what\'s shaping the future of design.\n\nKey trends include:\n- Glassmorphism\n- Dark mode optimization\n- Micro-interactions\n- Sustainable design practices',
    image: '/images/blog/design-trends.jpg',
    date: '2024-02-05',
    author: 'Jane Smith',
    tags: ['Design', 'UI/UX', 'Trends'],
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance',
    excerpt: 'Tips and techniques for building faster websites',
    content:
      'Performance is crucial for user experience and SEO. In this post, we\'ll discuss various techniques to optimize your website\'s performance.\n\nWe\'ll cover:\n- Image optimization\n- Code splitting\n- Caching strategies\n- Lazy loading\n- Performance monitoring tools',
    image: '/images/blog/performance.jpg',
    date: '2024-03-15',
    author: 'Mike Johnson',
    tags: ['Performance', 'Optimization', 'Web Development'],
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

