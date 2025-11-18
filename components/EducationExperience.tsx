export default function EducationExperience() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="space-y-6 text-center md:text-left max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
            About
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,4vw,3rem)] text-foreground">
            About Me
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70">
            Hi, I’m Nikita, an artist from Assam, currently living and working in Bengaluru.
          </p>
          <p className="text-sm leading-relaxed text-foreground/70">
            My journey hasn’t been simple. I had to leave my home and studies because of early marriage
            pressure, but I chose a different path. I chose my dreams.
          </p>
          <p className="text-sm leading-relaxed text-foreground/70">
            I moved out alone to build the life I imagined for myself. Today, I balance a job while actively
            working on my passion: art. Art is not just a hobby for me it’s my identity, my escape, and my dream
            for the future. I want to take my artistic journey far ahead and eventually pursue it full-time,
            even beyond India, including my future goal of working in places.
          </p>
          <div className="relative mt-4 overflow-hidden border border-foreground/15 bg-background/80 px-5 py-6 shadow-sm backdrop-blur-sm">
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-foreground/45">
              Experience
            </span>
            <h3 className="mt-2 font-serif text-lg text-foreground">
              Independent Artist & Interior Designer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">
              Self-employed, creating realistic artwork, designing interiors, and building 3D miniatures
              that turn client stories and ideas into tangible, detailed spaces and visuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
