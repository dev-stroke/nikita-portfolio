import Layout from '@/components/Layout';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen px-4 py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50">
              Case Study
            </p>
            <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              {project.title}
            </h1>
          </div>

          {project.image && (
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={640}
                className="h-auto w-full"
              />
            </div>
          )}

          {project.description ? (
            <p className="text-lg text-foreground/70">{project.description}</p>
          ) : null}

          {project.content ? (
            <div className="prose prose-lg max-w-none text-foreground/70 dark:prose-invert">
              <p>{project.content}</p>
            </div>
          ) : (
            <p className="text-base text-foreground/60">
              Detailed documentation for this project is coming soon. Stay tuned.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

