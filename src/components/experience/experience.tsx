"use client";

import { experiences } from "@/data/experience";
import { Reveal, SectionHeading } from "@/components/animations/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve
              <br />
              been building.
            </>
          }
          description="Roles that shaped how I label carefully, lead teams, and support academic communities."
        />

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent sm:left-[11px]" />

          <ul className="space-y-8">
            {experiences.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08}>
                <li className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8 lg:grid-cols-[180px_1fr]">
                  <div className="relative pl-8 sm:pl-10">
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] sm:top-2" />
                    <p className="font-mono text-sm text-[var(--accent)]">
                      {item.period}
                    </p>
                  </div>

                  <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]/40 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight">
                          {item.organization}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {item.role}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                      </div>
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {item.responsibilities.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
