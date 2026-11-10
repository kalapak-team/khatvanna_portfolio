"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tween = gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScroll() * 1.15}`,
            scrub: 1.1,
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
    <section id="projects" ref={sectionRef} className="overflow-hidden bg-white">
      <div className="px-5 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto mb-12 flex max-w-[1400px] items-end justify-between gap-4">
          <h2 className="font-display flex w-full items-end justify-between text-[clamp(2rem,8vw,5.5rem)] leading-none font-semibold tracking-[-0.04em]">
            <span>RECENT</span>
            <span className="pb-2 text-xs font-normal tracking-[0.08em] text-[#9a9a9a]">
              / @25-26
            </span>
            <span>PROJECTS</span>
          </h2>
        </div>
      </div>

      <div ref={trackRef} className="flex w-max gap-6 px-5 pb-24 will-change-transform md:gap-10 md:px-10">
        {brand.projects.map((project, i) => (
          <article
            key={project.title}
            className="w-[min(78vw,520px)] shrink-0 md:w-[560px]"
          >
            <div className="mb-4 flex items-center justify-between text-sm">
              <p className="font-display text-2xl font-semibold md:text-3xl">
                {String(i + 1).padStart(2, "0")} / {String(brand.projects.length).padStart(2, "0")}
              </p>
              <div className="text-right">
                <p className="text-[10px] tracking-[0.14em] text-[#999] uppercase">Industry</p>
                <p className="font-medium">{project.industry}</p>
              </div>
            </div>
            <div className="group relative aspect-[5/6] overflow-hidden bg-[#eee]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="560px"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-wide text-white uppercase opacity-0 transition group-hover:opacity-100">
                View Details
              </span>
            </div>
            <div className="flex items-center justify-between bg-[#ececec] px-4 py-3 text-sm">
              <span className="font-medium">{project.title}</span>
              <span className="text-[#666]">{project.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
