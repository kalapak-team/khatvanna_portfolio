"use client";

import { Reveal, SectionHeading } from "@/components/animations/reveal";

const points = [
  "Founded and led an IT-focused team specializing in modern web and mobile development.",
  "Oversaw project planning and task assignments.",
  "Guided members in coding best practices and improved UI/UX and system architecture.",
  "Coordinated team communication and ensured timely delivery.",
  "Promoted collaboration, learning, and innovation.",
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              Founder &
              <br />
              Team Leader.
            </>
          }
          description="Kalapak Code Team — building together, shipping together, learning together."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <blockquote className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build.
              <br />
              Learn.
              <br />
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] bg-clip-text text-transparent">
                Collaborate.
              </span>
            </blockquote>
          </Reveal>

          <ul className="space-y-4">
            {points.map((point, i) => (
              <Reveal key={point} delay={0.08 * i}>
                <li className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  <span className="mr-3 font-mono text-xs text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
