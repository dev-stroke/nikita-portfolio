'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAllProjects, type Project } from '@/lib/projects';

function PortfolioCard({ project, onImageClick }: { project: Project; onImageClick: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
      className="group relative block overflow-hidden border border-foreground/10 bg-background/70 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => project.image && onImageClick()}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
          unoptimized
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={overlayStyle}
      />
    </div>
  );
}

export default function PortfolioPageContent() {
  const projects = getAllProjects();
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Trigger animation on mount
    const cards = document.querySelectorAll('[data-portfolio-card]');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animation = 'none';
      setTimeout(() => {
        (card as HTMLElement).style.animation = `fadeInUp 0.6s ease-out forwards`;
        (card as HTMLElement).style.animationDelay = `${index * 100}ms`;
      }, 10);
    });
  }, []);

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
      <div className="min-h-screen bg-background py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-foreground">
              My Latest Works
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                data-portfolio-card
                className="transition-all duration-700"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <PortfolioCard project={project} onImageClick={() => handleImageClick(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>

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
                unoptimized
                priority
              />
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
        </div>
      )}
    </>
  );
}

