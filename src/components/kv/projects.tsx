"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const total = String(projects.length).padStart(2, "0");

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-project]");
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { scale: 1, y: 80, rotate: 0 },
            {
              scale: i === cards.length - 1 ? 1 : 0.9 - i * 0.02,
              y: 0,
              rotate: i % 2 === 0 ? -0.6 : 0.6,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "top 20%",
                scrub: true,
              },
            },
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          "[data-project]",
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 75%" },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section id="projects" ref={ref} className="bg-[var(--paper)] px-5 py-24 text-[var(--ink)] md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.2em] uppercase opacity-50">Projects</p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold tracking-[-0.04em]">
              Selected work
            </h2>
          </div>
          <p className="text-sm tracking-[0.14em] uppercase opacity-45">{total} builds</p>
        </div>

        <div className="relative space-y-6 md:space-y-[-4vw]">
          {projects.map((project, i) => (
            <article
              key={project.id}
              data-project
              className="group relative overflow-hidden border border-black/10 bg-[#f7f5f0] will-change-transform md:sticky md:top-[12vh]"
              style={{ zIndex: i + 1 }}
            >
              <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                <a
                  href={project.href || project.github || "#projects"}
                  target={project.href || project.github ? "_blank" : undefined}
                  rel="noreferrer"
                  className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[420px]"
                  data-cursor="View project"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 55vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
                  <span className="absolute top-4 left-4 border border-white/30 bg-black/40 px-3 py-1 text-[11px] tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                    {project.number} / {total}
                  </span>
                </a>
                <div className="flex flex-col justify-between p-6 md:p-10">
                  <div>
                    <p className="text-[11px] tracking-[0.16em] uppercase opacity-45">{project.tagline}</p>
                    <h3 className="font-display mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.03em] transition group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-[15px]">{project.description}</p>
                    <p className="mt-4 text-sm font-medium">{project.role}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="border border-black/12 px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer" className="link-line text-[var(--ink)]" data-cursor="Live">
                        Live site <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="link-line text-[var(--ink)]" data-cursor="GitHub">
                        GitHub <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
