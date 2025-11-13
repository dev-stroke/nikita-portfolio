export default function AboutSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
            About
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-foreground">
            Designing meaningful digital experiences.
          </h2>
        </div>
        <div className="grid gap-8 text-lg leading-relaxed text-foreground/70 md:grid-cols-2">
          <p>
            We craft interfaces that balance aesthetics with functionality,
            focusing on thoughtful user journeys and delightful interactions. Our
            collaborative process ensures every product feels bespoke and true to
            your brand.
          </p>
          <p>
            From discovery workshops to polished hand-off, we partner closely with
            teams to ship work that resonates. We obsess over details so the final
            experience feels effortless across every device.
          </p>
        </div>
      </div>
    </section>
  );
}

