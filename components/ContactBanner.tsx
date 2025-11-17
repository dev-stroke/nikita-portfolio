'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function ContactBanner() {
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
      { threshold: 0.3 }
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
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <div
          ref={ref}
          className={`rounded-3xl border border-foreground/10 bg-background/60 px-6 py-12 shadow-sm sm:px-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/40">
            Let&apos;s connect!
          </p>
          <h2 className="mt-6 font-serif text-[clamp(1.25rem,5vw,3.5rem)] text-foreground">
            strokenikita@gmail.com
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/60 italic">
            Let&apos;s create something beautiful together. Whether it&apos;s bringing your vision to life through art,
            designing spaces that tell your story, or crafting personalized pieces that capture your essence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-foreground/40">
            <Link href="/#top" className="rounded-full border border-foreground/20 px-4 py-2 transition-colors hover:bg-foreground hover:text-background">
              Back to Top
            </Link>
            <Link href="/contact" className="rounded-full border border-foreground/20 px-4 py-2 transition-colors hover:bg-foreground hover:text-background">
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
