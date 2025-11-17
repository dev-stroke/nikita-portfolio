'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Hours of Experience' },
  { value: 100, suffix: '+', label: 'Projects Done' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
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
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="space-y-1">
      <p className="font-serif text-[clamp(2.25rem,4.8vw,3.75rem)] font-semibold text-foreground">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm font-medium text-foreground/50 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovering) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <section className="relative overflow-visible bg-background pt-24">
      <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-6xl flex-col justify-center gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* Hover Image - Follows Mouse */}
        <div
          className={`fixed z-30 transition-opacity duration-300 ease-in-out ${
            isHovering
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            width: 'clamp(200px, 30vw, 300px)',
            height: 'clamp(250px, 38vw, 380px)',
          }}
        >
          <Image
            src="/pp.jpg"
            alt="Nikita Chetry"
            fill
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </div>
        <div className={`max-w-xl space-y-6 text-center lg:text-left transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            <h1
              className="relative z-20 font-serif text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-tight text-foreground cursor-pointer transition-opacity duration-300"
              onMouseEnter={(e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={(e) => {
                if (isHovering) {
                  setMousePosition({ x: e.clientX, y: e.clientY });
                }
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                setMousePosition({ x: touch.clientX, y: touch.clientY });
                setIsHovering(true);
              }}
              onTouchEnd={() => setIsHovering(false)}
              onTouchCancel={() => setIsHovering(false)}
              onTouchMove={(e) => {
                if (isHovering) {
                  const touch = e.touches[0];
                  setMousePosition({ x: touch.clientX, y: touch.clientY });
                }
              }}
            >
              Hi! I&apos;m Nikita Chetry.
            </h1>
          </div>
          <div className={`space-y-3 font-serif text-[clamp(1.30rem,2vw,1.00rem)] italic leading-relaxed text-foreground/40 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p>
              A realistic artist who loves creating pencil sketches, canvas paintings,
              and customized outfit designs.
            </p>
            <p>
              I take art commissions and bring emotions to life through detailed artwork.
            </p>
            <p>
              My work is inspired by real moments and creative imagination.
            </p>
          </div>
          <div className={`flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-dashed border-foreground px-10 py-4 font-semibold tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className={`grid w-full max-w-sm gap-8 text-center sm:max-w-md lg:max-w-xs lg:text-right transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
