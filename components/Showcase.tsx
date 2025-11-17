'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { getAllProjects, type Project } from '@/lib/projects';

function ShowcaseCard({ project, index, onImageClick }: { project: Project; index: number; onImageClick: (index: number) => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
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
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-foreground/10 bg-background/60 shadow-lg transition-all duration-700 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => project.image && onImageClick(index)}
    >
      {project.image && (
        <div className="relative h-[320px] w-full sm:h-[360px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={overlayStyle}
      />
    </div>
  );
}

export default function Showcase() {
  const projects = getAllProjects().slice(0, 4);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Close modal on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedIndex(null);
      }
    };

    if (zoomedIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [zoomedIndex]);

  const handleImageClick = (index: number) => {
    setZoomedIndex(index);
  };

  const closeZoom = () => {
    setZoomedIndex(null);
  };

  const showPrev = () => {
    if (zoomedIndex === null) return;
    setZoomedIndex((prev) =>
      prev === null ? prev : (prev - 1 + projects.length) % projects.length
    );
  };

  const showNext = () => {
    if (zoomedIndex === null) return;
    setZoomedIndex((prev) =>
      prev === null ? prev : (prev + 1) % projects.length
    );
  };

  return (
    <>
      <section className="bg-background py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Portfolio
              </p>
              <h2 className="mt-2 font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-foreground">
                Featured Work
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
            {projects.map((project, index) => (
              <ShowcaseCard key={project.slug} project={project} index={index} onImageClick={handleImageClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {zoomedIndex !== null && projects[zoomedIndex] && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 py-16 sm:py-4 animate-in fade-in duration-300 overflow-y-auto"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close zoom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative flex flex-col items-center max-w-[90vw] w-full animate-in zoom-in-95 duration-300 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-shrink-0">
              <Image
                src={projects[zoomedIndex].image ?? ''}
                alt={projects[zoomedIndex].title}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto max-w-full mx-auto object-contain rounded-lg"
                priority
                unoptimized
              />
            </div>
            {/* Navigation buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
