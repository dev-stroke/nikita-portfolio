'use client';

import { useMemo } from 'react';
import type { ReactNode } from 'react';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const iconClasses = 'h-9 w-9 text-foreground/35';

const services: Service[] = [
  {
    number: '01.',
    title: 'UI & UX Design',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M21 3c-8 0-14 6-14 14v4h4c8 0 14-6 14-14V3h-4z" />
        <path d="M11 17c0-6 4-10 10-10" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'Social Marketing',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M3 11h4l8-8v18l-8-8H3v-2z" />
        <circle cx="18" cy="6" r="1" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Branding',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 3l8 4v6c0 5-4 8-8 8s-8-3-8-8V7l8-4z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    number: '04.',
    title: 'Graphic Design',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M12 2l4 4-4 4-4-4 4-4z" />
        <path d="M6 12l4 4-4 4-4-4 4-4zM18 12l4 4-4 4-4-4 4-4z" />
        <path d="M12 10l4 4-4 4-4-4 4-4z" />
      </svg>
    ),
  },
  {
    number: '05.',
    title: 'Copywriting',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M4 20h16" />
        <path d="M11 4l7 7-7 7H4v-7l7-7z" />
        <path d="M13 6l5 5" />
      </svg>
    ),
  },
  {
    number: '06.',
    title: 'Consulting',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export default function Services() {
  const items = useMemo(() => services, []);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service) => (
            <div key={service.title} className="space-y-6 text-center md:text-left">
              <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-foreground/40">
                {service.number}
              </span>
              <div className="flex items-center justify-center gap-4 text-foreground/30 md:justify-start">
                {service.icon}
                <span className="font-serif text-2xl italic text-foreground/40 md:text-3xl">
                  {service.title}
                </span>
              </div>
              <p className="text-base leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
