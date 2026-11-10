"use client";

import { education } from "@/data/education";
import { Reveal, SectionHeading } from "@/components/animations/reveal";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Learning
              <br />
              path.
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/40 sm:p-8">
                <p className="font-mono text-xs text-[var(--accent)]">
                  {item.period}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.program}</p>
                {item.details && (
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {item.details}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
