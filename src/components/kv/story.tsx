"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-edu]",
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%" },
        },
      );
    },
    { scope: ref },
  );

  const items = education.filter((e) => e.id !== "maharishi");

  return (
    <section id="education" ref={ref} className="bg-[var(--paper)] px-5 py-24 text-[var(--ink)] md:px-10 md:py-32">
      <div className="mx-auto max-w-[1000px]">
        <p data-edu className="mb-3 text-[11px] tracking-[0.2em] uppercase opacity-45">
          Education
        </p>
        <h2 data-edu className="font-display mb-14 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold tracking-[-0.04em]">
          Learning path
        </h2>
        <div className="space-y-0">
          {items.map((item) => (
            <article
              key={item.id}
              data-edu
              className="grid gap-2 border-t border-black/10 py-8 md:grid-cols-[140px_1fr] md:gap-10"
            >
              <p className="text-sm tracking-[0.12em] uppercase opacity-45">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{item.school}</h3>
                <p className="mt-1 text-[15px] opacity-70">{item.program}</p>
                {item.details && <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-55">{item.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  const kalapak = experiences.find((e) => e.id === "kalapak");

  return (
    <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-28 md:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(72,209,204,0.1),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ x: "-12%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] font-extrabold tracking-[-0.05em]"
          >
            FOUNDER
          </motion.h2>
        </div>
        <div className="my-2 overflow-hidden text-right">
          <motion.p
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-[clamp(2rem,7vw,4.5rem)] font-semibold tracking-[-0.04em] text-[var(--accent)]"
          >
            &amp; TEAM
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ x: "12%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] font-extrabold tracking-[-0.05em]"
          >
            LEADER
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase">Kalapak Code Team · 2024–Present</p>
          <div>
            <p className="max-w-xl text-[15px] leading-[1.8] text-white/70">
              Founded and led an IT-focused team specializing in modern web and mobile development — overseeing planning,
              guiding coding best practices and architecture, and shipping collaborative work on time.
            </p>
            {kalapak && (
              <ul className="mt-6 space-y-2 text-sm text-white/55">
                {kalapak.responsibilities.map((r) => (
                  <li key={r.slice(0, 28)} className="border-l border-[var(--accent)]/50 pl-4">
                    {r}
                  </li>
                ))}
              </ul>
            )}
            <a
              href="https://www.kalapak-team.space"
              target="_blank"
              rel="noreferrer"
              className="link-line mt-8"
              data-cursor="Kalapak"
            >
              kalapak-team.space →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
