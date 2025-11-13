import Link from 'next/link';

export default function ContactBanner() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <div className="rounded-3xl border border-foreground/10 bg-background/60 px-6 py-12 shadow-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/40">
            Let&apos;s collaborate
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-foreground">
            contact@flatheme.net
          </h2>
          <p className="mt-4 text-base text-foreground/60">
            Always exploring meaningful partnerships, new perspectives, and
            thoughtful challenges.
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
