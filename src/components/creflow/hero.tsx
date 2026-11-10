"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";
import { SplitChars } from "./reveal";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const tl = gsap.timeline({ delay: 1.1 });

      tl.fromTo(
        "[data-hero-img]",
        { scale: 1.25, opacity: 0.4 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
        0,
      )
        .fromTo(
          "[data-hero]",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
          0.25,
        );

      gsap.to("[data-hero-img]", {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-title]", {
        yPercent: -35,
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
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-img className="absolute inset-[-14%] will-change-transform">
          <Image
            src={brand.heroImage}
            alt={brand.name}
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50" />
      </div>

      <p
        data-hero
        className="absolute top-28 left-4 origin-left -rotate-90 text-[10px] tracking-[0.28em] text-white/70 uppercase md:left-6"
      >
        {brand.based}
      </p>

      <p
        data-hero
        className="absolute top-28 right-4 origin-right rotate-90 text-[10px] tracking-[0.28em] text-white/70 uppercase md:right-6"
      >
        {brand.socialVertical}
      </p>

      <div
        data-hero
        className="absolute top-[28%] right-5 hidden text-right text-[11px] leading-6 tracking-[0.14em] uppercase md:block md:right-10"
      >
        {brand.servicesHero.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>

      <p
        data-hero
        className="absolute top-[34%] left-5 max-w-[220px] text-sm leading-relaxed text-white/85 md:left-16 md:max-w-[260px]"
      >
        {brand.tagline}
      </p>

      <a
        data-hero
        href="#contact"
        className="group absolute bottom-28 left-5 z-10 flex w-[230px] items-center gap-3 border border-white/15 bg-black/55 p-2.5 backdrop-blur-md transition duration-500 hover:bg-black/80 md:bottom-32 md:left-10"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden">
          <Image
            src={brand.founder.image}
            alt={brand.founder.name}
            fill
            className="object-cover grayscale transition duration-700 group-hover:scale-110"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-sm font-medium">
            Contact Us{" "}
            <ArrowUpRight
              size={14}
              className="transition duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </p>
          <p className="mt-1 text-[11px] tracking-wide uppercase">{brand.founder.name}</p>
          <p className="text-[11px] text-white/55">{brand.founder.role}</p>
        </div>
      </a>

      <h1
        data-hero-title
        className="font-display absolute right-4 bottom-8 text-[clamp(3.8rem,16vw,11rem)] leading-[0.85] font-semibold tracking-[-0.05em] will-change-transform md:right-10 md:bottom-10"
      >
        <SplitChars text={brand.wordmark} />
      </h1>
    </section>
  );
}
