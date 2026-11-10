"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, SectionHeading } from "@/components/animations/reveal";

const lines = [
  { cmd: "$ whoami", out: "khat-vanna" },
  { cmd: "$ role", out: "computer-science-student · full-stack-developer" },
  { cmd: "$ stack", out: "next.js / react / laravel / php / python / flutter" },
  { cmd: "$ status", out: "always-learning" },
];

const stages = [
  {
    id: "01",
    title: "Think",
    text: "Clarify the problem, users, and constraints before writing code.",
  },
  {
    id: "02",
    title: "Build",
    text: "Ship clean interfaces and reliable systems with modern stack choices.",
  },
  {
    id: "03",
    title: "Improve",
    text: "Iterate on UX, architecture, and team collaboration after each release.",
  },
];

export function Creative() {
  const reduced = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (visibleLines >= lines.length) return;
    const t = window.setTimeout(() => setVisibleLines((v) => v + 1), 700);
    return () => window.clearTimeout(t);
  }, [visibleLines, reduced]);

  const shown = reduced ? lines.length : visibleLines;

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How I
              <br />
              build.
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                <p className="font-mono text-xs text-[var(--accent)]">
                  {stage.id}
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {stage.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#07070a] p-5 font-mono text-sm text-[#d4d4d8] shadow-2xl sm:p-8">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <span className="h-3 w-3 rounded-full bg-[#eab308]" />
              <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
            </div>
            <div className="space-y-4">
              {lines.slice(0, shown).map((line) => (
                <motion.div
                  key={line.cmd}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-[var(--highlight)]">{line.cmd}</p>
                  <p className="mt-1 text-[var(--muted)]">{line.out}</p>
                </motion.div>
              ))}
              {!reduced && shown < lines.length && (
                <span className="inline-block h-4 w-2 animate-pulse bg-[var(--accent)]" />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
