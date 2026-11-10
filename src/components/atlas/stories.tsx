"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atlas } from "@/data/atlas";
import { StarGraphic } from "./star";
import { Media } from "./media";

gsap.registerPlugin(ScrollTrigger);

export function Discover() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-disc]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
      gsap.fromTo(
        "[data-star]",
        { rotate: -30, scale: 0.8, opacity: 0 },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <>
      <section ref={ref} className="grid min-h-[68vh] md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[var(--ink)] px-8 py-20 text-white md:px-14">
          <p
            data-disc
            className="font-display max-w-md text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.25] font-medium tracking-[-0.02em]"
          >
            {atlas.discover}
          </p>
          <a href="#work" className="link-line mt-10 w-fit">
            view all project
          </a>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
          <div data-star className="h-[72%] w-[72%] max-w-[420px] -translate-x-[6%]">
            <StarGraphic className="h-full w-full" />
          </div>
        </div>
      </section>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-[var(--paper)] px-6 py-24 text-[var(--ink)]">
        <p className="font-display relative z-10 max-w-3xl text-center text-[clamp(1.6rem,4vw,2.7rem)] leading-[1.25] font-semibold tracking-[-0.03em]">
          {atlas.statement}
        </p>
        <StarGraphic className="pointer-events-none absolute bottom-[-12%] left-1/2 h-[55vw] w-[55vw] max-h-[520px] max-w-[520px] -translate-x-1/2 text-black/8" />
      </section>
    </>
  );
}

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-gal]");
      panels.forEach((panel, i) => {
        gsap.fromTo(panel, { y: 70, opacity: 0, scale: i === 1 ? 0.72 : 0.9 }, {
          y: 0, opacity: 1, scale: i === 1 ? 0.82 : 1, duration: 1.1, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        });
      });
      if (panels[0]) gsap.to(panels[0], { xPercent: -10, ease: "none", scrollTrigger: { trigger: ref.current, scrub: true } });
      if (panels[2]) gsap.to(panels[2], { xPercent: 10, ease: "none", scrollTrigger: { trigger: ref.current, scrub: true } });
      if (panels[1]) gsap.to(panels[1], { yPercent: -8, ease: "none", scrollTrigger: { trigger: ref.current, scrub: true } });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-[var(--ink)] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-[1400px] items-end justify-center gap-3 md:gap-5">
        {atlas.gallery.map((src, i) => {
          const isPortrait = src.includes("portrait");
          return (
            <div
              key={src}
              data-gal
              className={`relative aspect-[3/4] overflow-hidden will-change-transform ${
                i === 1 ? "w-[22%] self-center" : "w-[32%]"
              }`}
            >
              <Media
                src={src}
                alt=""
                pos={isPortrait ? "center 22%" : "center"}
                className="absolute inset-0 h-full w-full"
                sizes="32vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Reel() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo("[data-reel-media]", { scale: 1.18, clipPath: "inset(14% 10% 14% 10%)" }, {
        scale: 1, clipPath: "inset(0% 0% 0% 0%)", ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top 80%", end: "top 25%", scrub: true },
      });
    },
    { scope: ref },
  );

  return (
    <section id="stories" ref={ref} className="bg-black px-5 py-16 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.1rem)] font-semibold tracking-[-0.03em]">
            Cinematic brand stories.
          </h2>
          <p className="text-xs tracking-[0.1em] text-white/45 uppercase">/ From 2023</p>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]">
          <div data-reel-media className="absolute inset-0 will-change-transform">
            <Media
              src={atlas.reelImage}
              alt="Reel"
              pos="center"
              overlay="soft"
              className="absolute inset-0 h-full w-full"
              sizes="100vw"
            />
          </div>
          <button type="button" className="group absolute inset-0 z-10 flex items-center justify-center gap-4" aria-label="Play reel">
            <span className="font-display text-xl tracking-[0.2em] uppercase md:text-3xl">Play</span>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--accent)]/70 transition group-hover:scale-110 md:h-20 md:w-20">
              <Play className="ml-1 fill-[var(--accent)] text-[var(--accent)]" size={22} />
            </span>
            <span className="font-display text-xl tracking-[0.2em] uppercase md:text-3xl">Reel</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  const ref = useRef<HTMLElement>(null);
  const [yi, setYi] = useState(3);
  useGSAP(
    () => {
      gsap.fromTo("[data-award-line]", { scaleX: 0 }, {
        scaleX: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
      gsap.fromTo("[data-award]", { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-[var(--ink)] px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2 data-award className="font-display mb-16 text-center text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] md:mb-24">
          Crafting Impact:
          <br />
          Recognition Timeline
        </h2>
        <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[500px]">
          <div data-award-line className="absolute top-1/2 right-0 left-0 h-px origin-center bg-white/80" />
          <p data-award className="absolute top-[calc(50%-2.2rem)] left-0 hidden text-xs tracking-[0.12em] uppercase md:block">{atlas.awardsLeft}</p>
          <p data-award className="absolute top-[calc(50%-2.2rem)] right-0 hidden text-right text-xs tracking-[0.12em] uppercase md:block">{atlas.awardsRight}</p>
          <div data-award className="relative z-10 aspect-[3/4] w-[min(58vw,280px)] overflow-hidden border border-white/20 md:w-[320px]">
            <Media
              src="/creflow/projects/pro-thm-1.avif"
              alt="Award highlight"
              pos="center"
              className="absolute inset-0 h-full w-full"
              sizes="320px"
            />
          </div>
          <p data-award className="absolute right-0 bottom-8 max-w-[160px] text-right text-xs text-white/40">{atlas.awardLabel}</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
          {atlas.years.map((y, i) => (
            <button key={y} type="button" onClick={() => setYi(i)} className={`font-display text-lg transition-opacity md:text-xl ${yi === i ? "text-[var(--accent)] opacity-100" : "opacity-35 hover:opacity-70"}`}>
              {y}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = atlas.testimonials[index];
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % atlas.testimonials.length), 4800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-black px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-3 text-center text-xs tracking-[0.14em] uppercase">/ Clients Say</p>
        <h2 className="font-display mb-12 text-center text-[clamp(2rem,5vw,3.4rem)] font-semibold tracking-[-0.03em]">Stories in motion</h2>
        <AnimatePresence mode="wait">
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden border border-white/20 md:grid-cols-2"
          >
            <div className="relative min-h-[320px] md:min-h-full">
              <Media
                src={item.image}
                alt={item.name}
                pos={item.image.includes("portrait") ? "center 22%" : "center"}
                className="absolute inset-0 h-full w-full"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col justify-center bg-[var(--paper)] p-8 text-[var(--ink)] md:p-12">
              <p className="mb-6 font-semibold">✱ {item.company}</p>
              <p className="font-display text-[clamp(1.15rem,2.3vw,1.7rem)] leading-[1.35] font-semibold tracking-[-0.02em]">
                “{item.quote}”
              </p>
              <div className="mt-10">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#777]">{item.role}</p>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-2">
          {atlas.testimonials.map((t, i) => (
            <button key={t.name} type="button" aria-label={`Story ${i + 1}`} onClick={() => setIndex(i)} className={`h-1.5 w-7 rounded-full ${i === index ? "bg-[var(--accent)]" : "bg-white/25"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
