"use client";

import { motion, useReducedMotion } from "motion/react";
import { featuredStack, skillGroups } from "@/data/skills";
import { Reveal, SectionHeading } from "@/components/animations/reveal";

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              My technology
              <br />
              ecosystem.
            </>
          }
          description="A practical stack across languages, frameworks, databases, and deployment platforms — without invented percentages."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <motion.div
                className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--background)] font-display text-xl font-semibold"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              >
                BUILD
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={reduced ? undefined : { rotate: -360 }}
                transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
              >
                {featuredStack.map((tech, i) => {
                  const angle = (i / featuredStack.length) * Math.PI * 2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <span
                      key={tech}
                      className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-xs text-[var(--foreground)] shadow-lg"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.id} delay={0.08 * i}>
                <article className="h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]/40">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-3 py-1.5 text-sm text-[var(--foreground)] transition hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
                        data-cursor={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
