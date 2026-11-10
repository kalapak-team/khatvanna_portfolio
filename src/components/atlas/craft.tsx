"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atlas } from "@/data/atlas";
import { Media } from "./media";

gsap.registerPlugin(ScrollTrigger);

export function Craft() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-craft]").forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope: ref },
  );

  return (
    <section id="craft" ref={ref} className="bg-[var(--ink)] px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full border border-[var(--accent)]" />
          <span className="text-sm">Expertise</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm text-white/65">Scope :</p>
            <div className="flex max-w-[240px] flex-wrap gap-2">
              {atlas.scope.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </aside>
          <div className="space-y-8 md:space-y-12">
            {atlas.craft.map((item, i) => (
              <article key={item.title} data-craft className="relative aspect-[16/10] overflow-hidden border border-white/12 md:aspect-[16/9]">
                <Media
                  src={item.image}
                  alt={item.title}
                  pos="center"
                  overlay="bottom"
                  className="absolute inset-0 h-full w-full"
                  imgClassName={`transition-all duration-700 ${
                    active === i ? "scale-100 grayscale-0" : "scale-105 grayscale"
                  }`}
                  sizes="70vw"
                />
                <h3 className="absolute top-5 left-5 z-10 font-display text-[clamp(1.3rem,3.2vw,2.8rem)] font-semibold tracking-[-0.02em] uppercase md:top-8 md:left-8">
                  {item.title}
                </h3>
                <p className="absolute right-5 bottom-5 z-10 max-w-[260px] text-right text-xs leading-relaxed text-white/85 md:right-8 md:bottom-8 md:text-sm">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const total = atlas.projects.length;
  const project = atlas.projects[index];

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const panels = gsap.utils.toArray<HTMLElement>("[data-work-panel]");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setIndex(i),
          onEnterBack: () => setIndex(i),
        });
      });

      // Pin the showcase viewport while panels scrub through
      ScrollTrigger.create({
        trigger: section.querySelector("[data-work-pin]"),
        start: "top top",
        end: () => `+=${Math.max(panels.length, 1) * window.innerHeight * 0.85}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" ref={sectionRef} className="bg-white text-[var(--ink)]">
      <div className="px-5 pt-20 md:px-10 md:pt-28">
        <h2 className="font-display mx-auto mb-4 flex max-w-[1400px] items-end justify-between text-[clamp(2rem,8vw,5.2rem)] leading-none font-semibold tracking-[-0.04em]">
          <span>RECENT</span>
          <span className="pb-2 text-xs font-normal tracking-[0.12em] text-[#9a9a9a]">/ @25-26</span>
          <span>PROJECTS</span>
        </h2>
      </div>

      <div data-work-pin className="relative min-h-[100svh]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-10 md:grid-cols-[120px_1fr_200px] md:px-10 md:py-16">
          <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative aspect-[5/6] overflow-hidden bg-[#eee]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Media
                    src={project.image}
                    alt={project.title}
                    pos="center"
                    className="absolute inset-0 h-full w-full"
                    sizes="620px"
                    zoomOnHover
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between bg-[#ececec] px-4 py-3 text-sm">
              <span className="font-medium">{project.title}</span>
              <span className="text-[#666]">{project.date}</span>
            </div>
          </div>

          <div className="md:justify-self-end">
            <p className="text-[11px] tracking-[0.14em] text-[#999] uppercase">Industry</p>
            <p className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
              {project.industry}
            </p>
            <div className="mt-8 flex gap-2">
              {atlas.projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  aria-label={`Project ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === index ? "bg-black" : "bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Invisible scroll spacers driving index changes */}
        <div className="pointer-events-none absolute inset-x-0 top-0">
          {atlas.projects.map((p) => (
            <div key={p.title} data-work-panel className="h-[85vh]" />
          ))}
        </div>
      </div>
    </section>
  );
}
