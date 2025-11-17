'use client';

import { useState, useEffect, useRef } from 'react';

const education = [
  {
    years: 'Higher Secondary',
    title: 'Arts Stream',
    description: [
      'I completed my Higher Secondary Education in Arts and decided to discontinue my studies after 12th.',
      'To build a better future and pursue my goals, I chose to move out of my village, as the opportunities I needed were not available there.',
      'This step allowed me to focus on shaping my career with dedication and independence.',
    ],
  },
];

const experience = [
  {
    years: 'Self-employed • Present',
    title: 'Independent Artist & Interior Designer',
    description: [
      'Create realistic pencil sketches, canvas paintings, and custom designs.',
      'Design interior spaces with creative detailing and aesthetic balance.',
      'Build 3D miniatures showcasing scaled models of interiors and art concepts.',
      'Work with clients to bring imagination to life through personalized artwork.',
    ],
  },
];

function TimelineColumn({ heading, items, columnIndex }: { heading: string; items: typeof education; columnIndex: number }) {
  return (
    <div className="space-y-6 text-center md:text-left">
      <h2 className="font-serif text-[clamp(2.25rem,4vw,3rem)] text-foreground animate-fade-in">{heading}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineCard key={item.title} item={item} index={index} columnIndex={columnIndex} />
        ))}
      </div>
    </div>
  );
}

function TimelineCard({ item, index, columnIndex }: { item: typeof education[0]; index: number; columnIndex: number }) {
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

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-foreground/20 bg-background/70 px-6 py-8 shadow-sm transition-all duration-500 hover:border-foreground/30 hover:shadow-md sm:px-8 ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${columnIndex === 0 ? '-translate-x-8' : 'translate-x-8'}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
            <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
              {item.years}
            </span>
            <h3 className="mt-3 font-serif text-lg text-foreground sm:text-xl">{item.title}</h3>
            <div className="mt-4 space-y-2.5">
              {Array.isArray(item.description) ? (
                item.description.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-foreground/60 flex items-start">
                    <span className="mr-2 text-foreground/40">•</span>
                    <span>{paragraph}</span>
                  </p>
                ))
              ) : (
                <p className="text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              )}
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
    </div>
  );
}

export default function EducationExperience() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <TimelineColumn heading="Education" items={education} columnIndex={0} />
          <TimelineColumn heading="Experience" items={experience} columnIndex={1} />
        </div>
      </div>
    </section>
  );
}
