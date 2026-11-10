"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth);

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
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden bg-black">
      <div className="px-5 pt-16 pb-8 md:px-10 md:pt-24">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none font-semibold tracking-[-0.04em]">
            Selected
            <br />
            Work
          </h2>
        </div>
      </div>

      <div ref={trackRef} className="flex w-max will-change-transform">
        {site.projects.map((project) => (
          <article
            key={project.id}
            className="flex w-[min(86vw,520px)] shrink-0 flex-col border-r border-white/15 px-5 py-8 md:w-[560px] md:px-8"
          >
            <div className="relative mb-8 aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="560px"
              />
            </div>
            <h3 className="font-display mb-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {project.title}
            </h3>
            <p className="mb-10 max-w-sm text-sm leading-relaxed text-white/70">
              {project.description}
            </p>
            <a href={project.href} className="underline-link mt-auto self-end">
              explore project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
