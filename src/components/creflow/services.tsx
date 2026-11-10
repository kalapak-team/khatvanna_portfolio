"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z",
  "M4 8h16v8H4zM8 4h8v16H8z",
  "M12 4a8 8 0 100 16 8 8 0 000-16zm0 4a4 4 0 110 8 4 4 0 010-8z",
  "M3 12h18M12 3v18M5 5l14 14M19 5L5 19",
  "M6 6h12v12H6zM10 2h4v20h-4zM2 10h20v4H2z",
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.fromTo(
        "[data-service-head]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        },
      );

      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 40);

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const tween = gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScroll()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="services" ref={sectionRef} className="overflow-hidden bg-[#f7f7f7]">
      <div className="px-5 pt-20 md:px-10 md:pt-28">
        <div
          data-service-head
          className="mx-auto mb-12 flex max-w-[1400px] flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 text-xs tracking-[0.08em] text-[#999]">/ @25 - 26</p>
            <h2 className="font-display text-[clamp(2.4rem,8vw,5.5rem)] leading-none font-semibold tracking-[-0.04em]">
              OUR <span className="gradient-text">SERVICES</span>
            </h2>
          </div>
          <a href="#contact" className="link-plus mb-2">
            Get in Touch +
          </a>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex w-max gap-4 px-5 pb-24 will-change-transform md:gap-5 md:px-10"
      >
        {brand.services.map((service, i) => (
          <article
            key={service.id}
            className="group flex h-[360px] w-[min(78vw,300px)] shrink-0 flex-col bg-[#7d7d7d] p-5 text-white transition duration-500 hover:bg-[#555] md:h-[420px] md:w-[320px]"
          >
            <p className="text-xs tracking-wide">/ {service.id}</p>
            <div className="flex flex-1 items-center justify-center py-8">
              <svg
                viewBox="0 0 24 24"
                className="h-14 w-14 transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d={icons[i % icons.length]} />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsMarquee() {
  const items = ["UI/UX design", "Marketing", "Development", "Branding"];
  const row = [...items, ...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-6 text-white">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-display text-4xl font-semibold tracking-tight whitespace-nowrap md:text-6xl ${
              i % 4 === 0 ? "text-white" : "text-white/25"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
