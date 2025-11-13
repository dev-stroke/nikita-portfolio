'use client';

const education = [
  {
    years: '2019 — 2020',
    title: 'Master in Computer Science',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    years: '2015 — 2019',
    title: 'Bachelor in Computer Science',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    years: '2013 — 2014',
    title: 'Certificate in UI & UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const experience = [
  {
    years: '2021 — 2024',
    title: 'Chief Operating Officer @flatheme',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    years: '2019 — 2021',
    title: 'UI & UX Designer @flatheme',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    years: '2014 — 2019',
    title: 'Creative Director @flatheme',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

function TimelineColumn({ heading, items }: { heading: string; items: typeof education }) {
  return (
    <div className="space-y-8">
      <h2 className="font-serif text-[clamp(2.25rem,4vw,3rem)] text-foreground">{heading}</h2>
      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={item.title} className="relative overflow-hidden border border-foreground/20 bg-background/70 px-10 py-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
              {item.years}
            </span>
            <h3 className="mt-3 font-serif text-xl text-foreground">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60">{item.description}</p>
            <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
            {index !== items.length - 1 ? (
              <div className="absolute inset-x-10 bottom-0 h-px bg-foreground/15" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <TimelineColumn heading="Education" items={education} />
          <TimelineColumn heading="Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
