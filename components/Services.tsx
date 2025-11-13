'use client';

import { useMemo } from 'react';
import type { ReactNode } from 'react';

interface Skill {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const iconClasses = 'h-9 w-9 text-foreground/35';

const skills: Skill[] = [
  {
    number: '01.',
    title: 'Art',
    description:
      "My lifelong passion. I express emotions through various mediums, creating pieces that resonate with people's hearts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'Sketching',
    description:
      "I capture moments and emotions with just a pencil, bringing subjects to life through detailed sketches.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Canvas Painting',
    description:
      "I explore colors and textures on canvas, where each brushstroke tells a story and brings my creative visions to life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M6 6h12M6 12h12M6 18h8" />
      </svg>
    ),
  },
  {
    number: '04.',
    title: 'Custom Design',
    description:
      "I create unique outfit designs tailored to each person's personality, capturing their individual essence and style.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        <path d="M7 2v20M17 2v20" />
      </svg>
    ),
  },
  {
    number: '05.',
    title: 'Creativity',
    description:
      "I draw inspiration from real moments and everyday life, transforming ordinary experiences into extraordinary artistic expressions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-2.83 2.83M6.76 17.24l-2.83 2.83M4.93 19.07l2.83-2.83M17.24 6.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: '06.',
    title: 'Visual Storytelling',
    description:
      "I tell stories through my artwork, connecting with people emotionally and capturing feelings that words cannot express.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <circle cx="7" cy="7" r="1" />
        <circle cx="17" cy="7" r="1" />
        <circle cx="7" cy="17" r="1" />
        <circle cx="17" cy="17" r="1" />
      </svg>
    ),
  },
];

export default function Services() {
  const items = useMemo(() => skills, []);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((skill) => (
            <div key={skill.title} className="space-y-4 text-center md:text-left">
              <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-foreground/40">
                {skill.number}
              </span>
              <div className="flex items-center justify-center gap-4 text-foreground/30 md:justify-start">
                {skill.icon}
                <span className="font-serif text-2xl italic text-foreground/40 md:text-3xl">
                  {skill.title}
                </span>
              </div>
              <p className="text-base leading-relaxed text-foreground/60">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
