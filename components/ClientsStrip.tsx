'use client';

import { useState } from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Logoplsum', logo: '/images/logos/logo-1.svg' },
  { name: 'Logomark', logo: '/images/logos/logo-2.svg' },
  { name: 'Logostudio', logo: '/images/logos/logo-3.svg' },
  { name: 'Logobase', logo: '/images/logos/logo-4.svg' },
  { name: 'Logofolio', logo: '/images/logos/logo-5.svg' },
  { name: 'Logoscape', logo: '/images/logos/logo-6.svg' },
];

export default function ClientsStrip() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleClients = clients.slice(startIndex, startIndex + 5);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? clients.length - 5 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= clients.length - 5 ? 0 : prev + 1));
  };

  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-10 overflow-x-auto md:hidden">
          {clients.map((client) => (
            <div key={client.name} className="flex min-w-[90px] flex-col items-center gap-2 text-foreground/50">
              <div className="relative h-12 w-12">
                <Image src={client.logo} alt={client.name} fill className="object-contain opacity-80" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden items-center justify-between md:flex">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous clients"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-foreground/30 text-foreground/60 transition hover:border-foreground hover:text-foreground"
          >
            &larr;
          </button>
          <div className="flex flex-1 items-center justify-center gap-12 px-6">
            {visibleClients.map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-2 text-foreground/50">
                <div className="relative h-14 w-14">
                  <Image src={client.logo} alt={client.name} fill className="object-contain opacity-80" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next clients"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-foreground/30 text-foreground/60 transition hover:border-foreground hover:text-foreground"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
