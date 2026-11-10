"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectItem } from "@/types";
import { Reveal, SectionHeading } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

function StackedCard({
  project,
  onOpen,
}: {
  project: ProjectItem;
  onOpen: (p: ProjectItem) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.article
      ref={ref}
      style={reduced ? undefined : { scale, y }}
      className={cn(
        "sticky top-24 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/30",
      )}
      data-cursor="View Project"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group grid w-full text-left lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
          <Image
            src={project.image}
            alt={`${project.title} visual`}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span
            className="absolute left-5 top-5 rounded-full px-3 py-1 font-mono text-xs text-white"
            style={{ backgroundColor: project.accent }}
          >
            {project.number}
          </span>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {project.tagline}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {project.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              {project.role}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)]">
              Explore <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal
            aria-label={project.title}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="800px"
              />
              <button
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-[var(--accent)]">
                {project.number}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.tagline}</p>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <p className="mt-5 text-sm">
                <span className="text-[var(--muted)]">Role: </span>
                {project.role}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Visit site <ArrowUpRight size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Featured
              <br />
              work & builds.
            </>
          }
          description="Selected initiatives and capability areas grounded in real experience — leadership, full-stack, and mobile."
        />

        <div className="relative mt-16 space-y-8 pb-10">
          {projects.map((project) => (
            <StackedCard
              key={project.id}
              project={project}
              onOpen={setActive}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="animate-marquee flex gap-10 whitespace-nowrap py-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {[...projects, ...projects].map((p, i) => (
                <span key={`${p.id}-${i}`}>
                  {p.number} {p.title} ·
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
