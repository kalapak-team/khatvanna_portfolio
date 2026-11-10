"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelectorAll("[data-reveal]"),
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black px-5 py-24 md:px-10 md:py-36"
    >
      <p
        data-reveal
        className="pointer-events-none absolute top-1/2 left-3 hidden origin-left -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.35em] text-white/45 uppercase md:left-6 md:block lg:text-xs"
      >
        {site.introSide}
      </p>

      <div className="mx-auto grid max-w-[1100px] gap-10 md:gap-14">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
          <p data-reveal className="pt-1 text-sm text-white/50">
            {site.introLabel}
          </p>
          <div data-reveal className="space-y-5 text-[15px] leading-[1.75] text-white/80 md:text-base md:leading-[1.8]">
            {site.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div data-reveal className="relative aspect-[16/8] w-full overflow-hidden border border-white/20">
          <Image
            src="/images/vanna-portrait.jpg"
            alt={site.name}
            fill
            className="object-cover object-[center_20%] grayscale"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>

        <div data-reveal className="flex items-end justify-end text-right">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/55">{site.folio}</p>
            <p className="font-display text-[clamp(3.5rem,14vw,8rem)] leading-none font-semibold tracking-[-0.04em]">
              {site.version}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
