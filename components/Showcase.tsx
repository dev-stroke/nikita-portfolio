'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/projects';

const CATEGORY_CARDS = [
  {
    key: 'canvas painting' as const,
    label: 'Canvas Painting',
    caption: 'Large, detailed canvas pieces that bring stories to life on walls.',
    param: 'canvas-painting',
  },
  {
    key: 'pencil sketch' as const,
    label: 'Pencil Sketch',
    caption: 'Fine-line sketches capturing expressions and tiny details.',
    param: 'pencil-sketch',
  },
  {
    key: 'custom outfits & designs' as const,
    label: 'Custom Outfits & Designs',
    caption: 'Handcrafted outfit concepts with artistic prints and styling.',
    param: 'custom-outfits-designs',
  },
] as const;

export default function Showcase() {
  const allProjects = getAllProjects();

  const cardsWithImages = CATEGORY_CARDS.map((card) => ({
    ...card,
    image: allProjects.find((project) => project.category === card.key)?.image,
  })).filter((card) => card.image);

  return (
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
        </div>

        <div className="space-y-8">
          {cardsWithImages.map((card, index) => (
            <Link
              key={card.key}
              href={`/portfolio?category=${card.param}`}
              className="group block overflow-hidden border border-foreground/15 bg-black text-background shadow-lg transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-[260px] w-full sm:h-[320px] md:h-[360px]">
                <Image
                  src={card.image ?? ''}
                  alt={card.label}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/65" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 pb-6 pt-10 sm:px-8 sm:pb-8">
                  <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
                    {card.label}
                  </p>
                  <p className="max-w-lg text-xs sm:text-sm text-white/80">
                    {card.caption}
                  </p>
                  <span className="mt-3 inline-flex items-center text-[0.75rem] sm:text-sm font-semibold uppercase tracking-[0.3em] text-white">
                    Explore
                    <span className="ml-3 text-lg sm:text-xl transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
