'use client';

const skills = [
  {
    name: 'Art',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: 'Sketching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Canvas Painting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M6 6h12M6 12h12M6 18h8" />
      </svg>
    ),
  },
  {
    name: 'Custom Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        <path d="M7 2v20M17 2v20" />
      </svg>
    ),
  },
  {
    name: 'Creativity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-2.83 2.83M6.76 17.24l-2.83 2.83M4.93 19.07l2.83-2.83M17.24 6.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Visual Storytelling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
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

export default function ClientsStrip() {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="bg-background py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Mobile & Desktop: Infinite auto-scroll marquee */}
        <div className="overflow-hidden">
          <div className="marquee-container group">
            <div className="marquee-content">
              {duplicatedSkills.map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="flex flex-col items-center gap-2 text-foreground/50 flex-shrink-0 px-4 md:px-8">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-foreground/60 transition-all duration-300 hover:scale-110 hover:text-foreground">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] md:tracking-[0.35em] whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}