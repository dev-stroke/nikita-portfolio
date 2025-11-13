'use client';

import Link from 'next/link';

const stats = [
  { value: '20,000+', label: 'Hours of Experience' },
  { value: '100+', label: 'Projects Done' },
  { value: '4,000+', label: 'Happy Clients' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col justify-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl space-y-8 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
            Nikita
          </p>
          <h1 className="font-serif text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-tight text-foreground">
            Hi! I&apos;m Nikita Chetry.
          </h1>
          <p className="font-serif text-[clamp(1.4rem,3vw,2.1rem)] italic text-foreground/40">
            A professional Artist designer based in India.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-dashed border-foreground px-10 py-4 font-semibold tracking-[0.2em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-sm gap-10 text-center sm:max-w-md lg:max-w-xs lg:text-right">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="font-serif text-[clamp(2.25rem,4.8vw,3.75rem)] font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground/50 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
