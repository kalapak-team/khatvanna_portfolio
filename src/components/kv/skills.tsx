"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Marquee() {
  const row = [...profile.marquee, ...profile.marquee];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[var(--ink)] py-5" aria-hidden>
      <div className="fade-edge">
        <div className="animate-marquee flex w-max gap-8">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm tracking-[0.18em] text-white/55 uppercase">
              {item}
              <span className="text-[var(--accent)]">/</span>
            </span>
          ))}
        </div>
      </div>
      <div className="fade-edge mt-3">
        <div className="animate-marquee-slow flex w-max gap-8" style={{ animationDirection: "reverse" }}>
          {[...row].reverse().map((item, i) => (
            <span key={`r-${item}-${i}`} className="flex items-center gap-8 font-display text-lg tracking-[-0.02em] text-white/25 uppercase">
              {item}
              <span className="text-white/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<string | null>(profile.workWith[0].id);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-skill]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="skills" ref={ref} className="bg-[var(--ink)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <p data-skill className="mb-3 text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase">
          What I work with
        </p>
        <h2 data-skill className="font-display mb-12 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold tracking-[-0.04em]">
          Capabilities
        </h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {profile.workWith.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id} data-skill>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  data-cursor="Expand"
                >
                  <span className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-sm text-white/35">{item.id}</span>
                    <span className="font-display text-[clamp(1.25rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
                      {item.title}
                    </span>
                  </span>
                  <span className={cn("text-xl transition", isOpen && "rotate-45 text-[var(--accent)]")}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-2xl pb-6 pl-10 text-sm leading-relaxed text-white/65 md:pl-16 md:text-[15px]">
                        <p>{item.text}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.techs.map((t) => (
                            <span key={t} className="border border-white/15 px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Toolbox() {
  return (
    <section className="bg-[var(--ink-2)] px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="mb-3 text-[11px] tracking-[0.2em] text-white/40 uppercase">My toolbox</p>
        <h2 className="font-display mb-12 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
          Technologies I ship with
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {profile.toolbox.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              whileHover={{ y: -4, borderColor: "var(--accent)", color: "var(--accent)" }}
              className="cursor-default border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm tracking-wide"
              data-cursor={tech}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
