"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticLink } from "@/components/animations/magnetic";

export function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full gradient-orb blur-2xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-secondary)_28%,transparent),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-28">
        <div>
          <motion.p
            className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-[var(--accent)]"
            {...fade(0.2)}
          >
            Computer Science Student / Developer
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            {...fade(0.35)}
          >
            I&apos;m
            <span className="mt-2 block text-[var(--foreground)]">Khat</span>
            <span className="block bg-gradient-to-r from-[var(--accent)] via-[var(--highlight)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Vanna.
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
            {...fade(0.55)}
          >
            {profile.tagline}
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.7)}>
            <MagneticLink href="#projects" data-cursor="Work">
              View My Work
            </MagneticLink>
            <MagneticLink href="#contact" variant="ghost" data-cursor="Contact">
              Contact Me
              <ArrowDownRight size={16} />
            </MagneticLink>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] text-[var(--muted)]"
            {...fade(0.85)}
          >
            <span>01 · Code</span>
            <span>02 · Design</span>
            <span>03 · Build</span>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-md" {...fade(0.95)}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/30 via-transparent to-[var(--accent-secondary)]/30 blur-xl" />
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-black/40"
            data-cursor="Profile"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/vanna-portrait.jpg"
                alt="Portrait of Khat Vanna in formal attire"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-xl font-semibold text-white">
                  {profile.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/75">
                  Norton University · Cambodia
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-3 top-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 backdrop-blur-md sm:-left-8"
            animate={reduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Based in
            </p>
            <p className="mt-1 text-sm font-medium">Cambodia</p>
          </motion.div>

          <motion.div
            className="absolute -right-2 bottom-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 backdrop-blur-md sm:-right-6"
            animate={reduced ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Founder
            </p>
            <p className="mt-1 text-sm font-medium">Kalapak Code</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
