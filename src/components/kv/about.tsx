"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const words = profile.headline.split(" ");

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-word]",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.06,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--ink)] px-5 py-28 md:px-10 md:py-36">
      <div className="pointer-events-none absolute top-10 right-10 text-[11px] tracking-[0.2em] text-white/30 uppercase">
        / Statement
      </div>
      <h2 className="mx-auto max-w-[1100px] font-display text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
            <span data-word className="inline-block">
              {w}
            </span>
          </span>
        ))}
      </h2>
    </section>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-about]",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="about" ref={ref} className="bg-[var(--ink-2)] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p data-about className="mb-4 text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase">
            About me
          </p>
          <h2 data-about className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            {profile.about.lead}
          </h2>
          <p data-about className="mt-8 max-w-xl text-[15px] leading-[1.85] text-white/70 md:text-base">
            {profile.about.body}
          </p>
          <div data-about className="mt-10 flex flex-wrap gap-2">
            {["Norton University", "Digital Divide Data", "Kalapak Code Team"].map((t) => (
              <span key={t} className="border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div data-about className="relative aspect-[4/5] overflow-hidden border border-white/10 md:aspect-[5/6]">
          <Image
            src={profile.portraitAlt}
            alt={profile.name}
            fill
            sizes="(max-width:1024px) 100vw, 45vw"
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          <p className="absolute right-4 bottom-4 left-4 text-sm text-white/80">
            {profile.university} · Computer Science
          </p>
        </div>
      </div>
    </section>
  );
}
