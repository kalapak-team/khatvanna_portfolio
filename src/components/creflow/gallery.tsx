"use client";

import Image from "next/image";
import { useRef } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";

gsap.registerPlugin(ScrollTrigger);

export function GalleryStrip() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-gal]");
      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          {
            y: 80,
            opacity: 0,
            scale: i === 1 ? 0.75 : 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: i === 1 ? 0.82 : 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 70%" },
            delay: i * 0.1,
          },
        );
      });

      gsap.to(panels[0], {
        xPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.to(panels[2], {
        xPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.to(panels[1], {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-[#0a0a0a] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-[1400px] items-end justify-center gap-3 md:gap-5">
        <div data-gal className="relative aspect-[3/4] w-[32%] overflow-hidden will-change-transform">
          <Image src={brand.gallery[0]} alt="" fill className="object-cover" sizes="32vw" />
        </div>
        <div
          data-gal
          className="relative aspect-[3/4] w-[22%] self-center overflow-hidden will-change-transform"
        >
          <Image src={brand.gallery[1]} alt="" fill className="object-cover" sizes="22vw" />
        </div>
        <div data-gal className="relative aspect-[3/4] w-[32%] overflow-hidden will-change-transform">
          <Image src={brand.gallery[2]} alt="" fill className="object-cover" sizes="32vw" />
        </div>
      </div>
    </section>
  );
}

export function Reel() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-reel]",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );

      gsap.fromTo(
        "[data-reel-media]",
        { scale: 1.15, clipPath: "inset(12% 8% 12% 8%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-black px-5 py-16 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2
            data-reel
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-[-0.03em]"
          >
            {brand.reelTitle}
          </h2>
          <p data-reel className="text-xs tracking-[0.08em] text-white/50 uppercase">
            / From 2013
          </p>
        </div>

        <div data-reel className="relative aspect-[16/8] overflow-hidden">
          <div data-reel-media className="absolute inset-0 will-change-transform">
            <Image src={brand.reelImage} alt="Reel" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute top-5 right-5 flex items-center gap-2 text-sm font-medium">
            <span className="relative inline-flex h-4 w-6">
              <span className="absolute left-0 h-3.5 w-3.5 rounded-full border border-white" />
              <span className="absolute left-2.5 h-3.5 w-3.5 rounded-full bg-white" />
            </span>
            {brand.short}
          </div>
          <button
            type="button"
            className="group absolute inset-0 flex items-center justify-center gap-4"
            aria-label="Play reel"
          >
            <span className="font-display text-xl tracking-[0.2em] uppercase transition group-hover:translate-x-1 md:text-3xl">
              Play
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 transition duration-500 group-hover:scale-110 md:h-20 md:w-20">
              <Play className="ml-1 fill-white" size={22} />
            </span>
            <span className="font-display text-xl tracking-[0.2em] uppercase transition group-hover:-translate-x-1 md:text-3xl">
              Reel
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
