"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atlas } from "@/data/atlas";
import { Media } from "./media";

gsap.registerPlugin(ScrollTrigger);

export function Marquee() {
  const items = [...atlas.logos, ...atlas.logos];
  return (
    <section className="overflow-hidden border-b border-white/10 bg-[var(--ink)] py-7">
      <div className="fade-edge">
        <div className="animate-marquee flex w-max gap-14 px-6">
          {items.map((logo, i) => (
            <span key={`${logo}-${i}`} className="font-display text-lg font-semibold tracking-tight text-white/35 whitespace-nowrap md:text-xl">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-intro]",
        { y: 50, opacity: 0, clipPath: "inset(15% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white md:px-10 md:py-36">
      <p data-intro className="pointer-events-none absolute top-1/2 left-3 hidden origin-left -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.32em] text-white/40 uppercase md:left-6 md:block">
        {atlas.introSide}
      </p>
      <div className="mx-auto grid max-w-[1100px] gap-10">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
          <p data-intro className="text-sm text-white/45">Intro</p>
          <div data-intro className="space-y-5 text-[15px] leading-[1.8] text-white/78 md:text-base">
            {atlas.intro.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </div>
        <div data-intro className="relative aspect-[16/9] overflow-hidden border border-white/15 md:aspect-[16/8]">
          <Media
            src={atlas.portrait}
            alt={atlas.name}
            pos="center"
            overlay="soft"
            className="absolute inset-0 h-full w-full"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
        <div data-intro className="flex justify-end text-right">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/50">{atlas.folio}</p>
            <p className="font-display text-[clamp(3.5rem,14vw,8rem)] leading-none font-semibold tracking-[-0.04em] text-[var(--accent)]">
              {atlas.version}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function parseStat(value: string) {
  const num = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  return { num, suffix };
}

export function Impact() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo("[data-impact]", { y: 48, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const { num, suffix } = parseStat(el.dataset.count || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: num,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = num % 1 ? `${obj.v.toFixed(1)}${suffix}` : `${Math.round(obj.v)}${suffix}`;
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-[var(--paper)] px-5 py-20 text-[var(--ink)] md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-[1.05fr_auto_1fr]">
        <div data-impact className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
          <Media
            src={atlas.impactImage}
            alt={atlas.name}
            pos="center"
            className="absolute inset-0 h-full w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            zoomOnHover
          />
        </div>
        <p className="hidden origin-center -rotate-90 self-center text-xs font-semibold tracking-[0.14em] uppercase md:block">
          / Our Impact
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {atlas.stats.map((s) => (
            <article key={s.label} data-impact className="flex min-h-[220px] flex-col justify-between bg-white p-6 md:p-8">
              <div>
                <p data-count={s.value} className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-none font-semibold tracking-[-0.04em]">0</p>
                <p className="mt-3 font-medium">{s.label}</p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#666]">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
