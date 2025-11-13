'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectsByCategory, type Project } from '@/lib/projects';

type Filter = 'all' | 'Graphic' | 'Creative';

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
      className="group relative block overflow-hidden border border-foreground/10 bg-background/70 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl"
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
          className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={overlayStyle}
      />
      {project.title ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="rounded-xl bg-white/80 px-6 py-4 font-serif text-xl text-foreground shadow-lg">
            {project.title}
          </span>
        </div>
      ) : null}
    </Link>
  );
}

export default function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const filteredProjects = getProjectsByCategory(activeFilter === 'all' ? null : activeFilter);

  const filters: Filter[] = ['all', 'Graphic', 'Creative'];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-foreground">
            My Latest Works
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                activeFilter === filter
                  ? 'bg-foreground text-background'
                  : 'border border-dashed border-foreground/30 bg-background text-foreground hover:border-foreground/50'
              }`}
            >
              {filter === 'all' ? 'Show All' : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

