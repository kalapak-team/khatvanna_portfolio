"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        "[data-hero]",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power3.out", delay: 0.35 },
      );

      gsap.fromTo(
        "[data-hero-media]",
        { scale: 1.18, opacity: 0.35 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out", delay: 0.15 },
      );

      gsap.to("[data-hero-media]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: ref },
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[var(--ink)]"
      onMouseMove={(e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 24);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 16);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(72,209,204,0.12),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(125,211,252,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:72px_72px]" />

      <motion.div
        data-hero-media
        className="absolute inset-0 will-change-transform"
        style={{ x: sx, y: sy }}
      >
        <div className="absolute top-[8%] right-[-4%] h-[78%] w-[min(62vw,720px)] overflow-hidden md:right-[4%] md:w-[min(48vw,560px)]">
          <div className="absolute inset-0 [clip-path:polygon(8%_0,100%_0,100%_100%,0_92%)]">
            <Image
              src={profile.portrait}
              alt={profile.name}
              fill
              priority
              sizes="(max-width:768px) 90vw, 560px"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-[var(--ink)]/40" />
          </div>
        </div>
      </motion.div>

      <p
        data-hero
        className="absolute top-1/2 left-3 z-10 origin-center -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.28em] text-white/70 uppercase md:left-6"
      >
        {profile.sideLabelLeft}
      </p>
      <p
        data-hero
        className="absolute top-1/2 right-3 z-10 origin-center -translate-y-1/2 rotate-90 text-[10px] tracking-[0.28em] text-white/70 uppercase md:right-6"
      >
        {profile.sideLabelRight}
      </p>

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-28 md:px-10 md:pb-24 lg:justify-center lg:pb-0">
        <div className="max-w-[900px]">
          <p data-hero className="mb-4 text-[11px] tracking-[0.22em] text-[var(--accent)] uppercase">
            Computer Science · Student & Developer
          </p>
          <h1 data-hero className="font-display text-[clamp(3.8rem,14vw,9.5rem)] leading-[0.86] font-extrabold tracking-[-0.05em]">
            {profile.firstName}
            <br />
            <span className="text-white/90">{profile.lastName}</span>
          </h1>
          <p data-hero className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70 md:text-base">
            {profile.heroStatement}
          </p>
          <div data-hero className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="focus-ring bg-[var(--accent)] px-5 py-3 text-[11px] font-semibold tracking-[0.14em] text-[#041414] uppercase"
              data-cursor="View"
            >
              View work
            </a>
            <a href="#contact" className="link-line" data-cursor="Contact">
              Get in touch <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        data-hero
        data-cursor="Contact"
        className="focus-ring group absolute bottom-6 left-5 z-20 flex max-w-[280px] items-center gap-3 border border-white/15 bg-white/5 p-2 backdrop-blur-md md:left-10 md:bottom-8"
      >
        <div className="relative h-[64px] w-[58px] shrink-0 overflow-hidden">
          <Image
            src={profile.portraitAlt}
            alt=""
            fill
            sizes="58px"
            className="object-cover object-[center_20%] transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className="pr-2">
          <p className="flex items-center gap-1 text-[11px] text-white/70">
            Contact <ArrowUpRight className="size-3.5" />
          </p>
          <p className="font-display text-lg leading-none font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-[10px] tracking-[0.14em] text-white/45 uppercase">Founder · Kalapak</p>
        </div>
      </a>

      <p
        data-hero
        className="pointer-events-none absolute right-5 bottom-4 z-10 hidden font-display text-[clamp(4rem,14vw,9rem)] leading-none font-extrabold tracking-[-0.06em] text-white/[0.06] select-none md:block lg:right-10"
      >
        KV
      </p>
    </section>
  );
}
