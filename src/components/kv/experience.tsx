"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-exp]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%" },
        },
      );

      gsap.fromTo(
        "[data-exp-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="experience" ref={ref} className="bg-[var(--ink)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <p data-exp className="mb-3 text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase">
          Experience
        </p>
        <h2 data-exp className="font-display mb-16 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold tracking-[-0.04em]">
          Immersive timeline
        </h2>

        <div className="relative">
          <div
            data-exp-line
            className="absolute top-0 bottom-0 left-[7px] origin-top w-px bg-gradient-to-b from-[var(--accent)] via-white/30 to-transparent md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-14 md:space-y-20">
            {experiences.map((item, i) => (
              <article
                key={item.id}
                data-exp
                className={`relative grid gap-4 pl-10 md:grid-cols-2 md:gap-12 md:pl-0 ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--ink)] md:left-1/2 md:-translate-x-1/2`}
                />
                <div className={i % 2 === 1 ? "md:col-start-2" : "md:pr-12"}>
                  <p className="text-[11px] tracking-[0.18em] text-white/45 uppercase">{item.period}</p>
                  <h3 className="font-display mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                    {item.organization}
                  </h3>
                  <p className="mt-1 text-[var(--accent)]">{item.role}</p>
                  <ul className={`mt-4 space-y-2 text-sm leading-relaxed text-white/65 ${i % 2 === 1 ? "md:ml-auto" : ""} max-w-md`}>
                    {item.responsibilities.map((r) => (
                      <li key={r.slice(0, 24)}>{r}</li>
                    ))}
                  </ul>
                </div>
                {i % 2 === 0 && <div className="hidden md:block" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
