"use client";

import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "@/components/animations/reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              A little
              <br />
              about me.
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
              {profile.about.lead}
            </p>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {profile.about.body}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.milestones.map((item, i) => (
                <Reveal key={item.year} delay={0.12 + i * 0.06}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]/50">
                    <p className="font-mono text-sm text-[var(--accent)]">
                      {item.year}
                    </p>
                    <p className="mt-3 text-sm leading-snug text-[var(--foreground)]">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    {lang.name} · {lang.level}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
