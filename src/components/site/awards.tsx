"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Awards() {
  const ref = useRef<HTMLElement>(null);
  const [yearIndex, setYearIndex] = useState(2);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-award-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 60%" },
        },
      );
      gsap.fromTo(
        "[data-award-fade]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <h2
          data-award-fade
          className="font-display mb-16 text-center text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight font-semibold tracking-[-0.02em] md:mb-24"
        >
          {site.awardsTitle[0]}
          <br />
          {site.awardsTitle[1]}
        </h2>

        <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">
          <div
            data-award-line
            className="absolute top-1/2 right-0 left-0 h-px origin-center bg-white/80"
          />

          <p
            data-award-fade
            className="absolute top-[calc(50%-2.2rem)] left-0 hidden text-xs tracking-[0.12em] uppercase md:block"
          >
            {site.awardsLeft}
          </p>
          <p
            data-award-fade
            className="absolute top-[calc(50%-2.2rem)] right-0 hidden text-right text-xs tracking-[0.12em] uppercase md:block"
          >
            {site.awardsRight}
          </p>

          <div
            data-award-fade
            className="relative z-10 aspect-[3/4] w-[min(58vw,280px)] overflow-hidden border border-white/20 md:w-[320px]"
          >
            <Image
              src="/images/project-kalapak.jpg"
              alt="Award highlight"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>

          <p
            data-award-fade
            className="absolute right-0 bottom-8 max-w-[140px] text-right text-xs text-white/40 md:bottom-12"
          >
            {site.awardLabels[yearIndex % site.awardLabels.length]}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {site.years.map((year, i) => (
            <button
              key={year}
              type="button"
              onClick={() => setYearIndex(i)}
              className={`font-display text-lg tracking-wide transition-opacity md:text-xl ${
                yearIndex === i ? "opacity-100" : "opacity-35 hover:opacity-70"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
