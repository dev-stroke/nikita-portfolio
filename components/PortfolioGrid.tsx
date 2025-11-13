// components/PortfolioGrid.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getAllProjects, type Project } from '@/lib/projects';

function PortfolioCard({ project }: { project: Project }) {
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
      className="group relative block overflow-hidden border border-foreground/10 bg-background/70 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 group-focus-visible:scale-105"
        />
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

export default function PortfolioGrid() {
  const projects = getAllProjects();

  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Selected Work
            </p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3rem)] text-foreground">
              Portfolio Highlights
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-foreground/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
