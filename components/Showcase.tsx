'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getAllProjects, type Project } from '@/lib/projects';

function ShowcaseCard({ project }: { project: Project }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const overlayStyle = isHovering
    ? {
        background: `radial-gradient(220px at ${position.x}px ${position.y}px, rgba(255,255,255,0.35) 0%, rgba(0,0,0,0.65) 100%)`,
      }
    : { background: 'transparent' };

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative overflow-hidden border border-foreground/10 bg-background/60 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      {project.image && (
        <div className="relative h-[320px] w-full sm:h-[360px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105 group-focus-visible:scale-105"
          />
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={overlayStyle}
      />
      {project.title ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="rounded-xl bg-white/80 px-6 py-4 font-serif text-xl text-foreground shadow-lg">
            {project.title}
          </span>
        </div>
      ) : null}
    </Link>
  );
}

export default function Showcase() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Portfolio
            </p>
            <h2 className="mt-2 font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-foreground">
              Selected Work
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ShowcaseCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
