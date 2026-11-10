"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atlas } from "@/data/atlas";
import { Media } from "./media";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        "[data-hero-media]",
        { scale: 1.2, opacity: 0.4 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
        0,
      ).fromTo(
        "[data-hero]",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.95, ease: "power3.out" },
        0.2,
      );

      gsap.to("[data-hero-media]", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-mark]", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[700px] overflow-hidden bg-[#05070c] text-white"
    >
      {/* Full-bleed cinematic portrait / visual */}
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-media className="absolute inset-[-10%] will-change-transform">
          <Media
            src={atlas.heroImage}
            alt={atlas.name}
            priority
            pos="center"
            className="absolute inset-0 h-full w-full"
            imgClassName="scale-[1.01]"
            sizes="100vw"
            overlay="none"
          />
        </div>
        {/* Soft edge vignette only — Creflow hero already cinematic */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/30" />
      </div>

      {/* // BASED … vertical left */}
      <p
        data-hero
        className="absolute top-1/2 left-3 z-10 origin-center -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.32em] text-white/80 uppercase md:left-5 lg:left-7"
      >
        {atlas.based}
      </p>

      {/* BE / DR / X vertical right */}
      <p
        data-hero
        className="absolute top-1/2 right-3 z-10 origin-center -translate-y-1/2 rotate-90 text-[10px] tracking-[0.32em] text-white/80 uppercase md:right-5 lg:right-7"
      >
        {atlas.socials}
      </p>

      {/* Tagline — mid left */}
      <p
        data-hero
        className="absolute top-[38%] left-5 z-10 max-w-[200px] text-[13px] leading-[1.45] font-medium text-white md:left-16 md:max-w-[240px] md:text-[15px] lg:left-20 lg:max-w-[260px]"
      >
        {atlas.tagline}
      </p>

      {/* Services — mid right */}
      <div
        data-hero
        className="absolute top-[34%] right-5 z-10 hidden text-right text-[11px] leading-[1.85] tracking-[0.14em] text-white uppercase md:block md:right-14 lg:right-16 lg:text-[12px]"
      >
        {atlas.servicesSide.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>

      {/* Contact card — bottom left (Creflow style) */}
      <a
        data-hero
        href="#contact"
        className="group absolute bottom-8 left-4 z-20 flex w-[210px] items-stretch overflow-hidden bg-[#141414]/92 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-400 hover:bg-[#1a1a1a] md:bottom-10 md:left-10 md:w-[230px]"
      >
        <div className="relative h-[78px] w-[72px] shrink-0 overflow-hidden md:h-[86px] md:w-[80px]">
          <Media
            src={atlas.founder.image}
            alt={atlas.founder.name}
            pos="center"
            className="absolute inset-0 h-full w-full"
            imgClassName="transition duration-700 group-hover:scale-110"
            sizes="80px"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-[13px] font-medium text-white">
            Contact Us
            <ArrowUpRight
              size={13}
              strokeWidth={2}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </p>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
            {atlas.founder.name}
          </p>
          <p className="text-[11px] text-white/55">{atlas.founder.role}</p>
        </div>
      </a>

      {/* Giant wordmark — bottom right, overlapping image */}
      <h1
        data-hero-mark
        className="pointer-events-none absolute right-3 bottom-3 z-10 font-display text-[clamp(3.75rem,15.5vw,10.5rem)] leading-[0.82] font-bold tracking-[-0.05em] text-white uppercase will-change-transform md:right-6 md:bottom-4 lg:right-8"
      >
        {atlas.wordmark.split("").map((ch, i) => (
          <span key={`${ch}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.25 + i * 0.05,
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </h1>
    </section>
  );
}
