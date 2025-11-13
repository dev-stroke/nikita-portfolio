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
      <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col justify-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl space-y-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
            Nikita
          </p>
          <h1 className="font-serif text-[clamp(3.25rem,5.5vw,4.5rem)] font-semibold leading-tight text-foreground">
            Hi! I&apos;m Nikita Chetry.
          </h1>
          <p className="font-serif text-[clamp(1.6rem,2.5vw,2.1rem)] italic text-foreground/40">
            A professional Artist designer based in India.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-dashed border-foreground px-10 py-4 font-semibold tracking-[0.2em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-xs gap-12 text-right sm:max-w-sm lg:text-right">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="font-serif text-[clamp(2.75rem,4vw,3.5rem)] font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-base font-medium text-foreground/50 sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
