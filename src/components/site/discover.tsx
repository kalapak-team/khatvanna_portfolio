"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

function StarGraphic({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + Math.cos((angle * Math.PI) / 180) * 180}
            y2={200 + Math.sin((angle * Math.PI) / 180) * 180}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx="200" cy="200" r="10" fill="currentColor" />
      <polygon points="200,28 206,42 194,42" fill="currentColor" />
      <polygon points="200,372 206,358 194,358" fill="currentColor" />
      <polygon points="372,200 358,206 358,194" fill="currentColor" />
      <polygon points="28,200 42,206 42,194" fill="currentColor" />
    </svg>
  );
}

export function Discover() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-discover-text]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
      gsap.fromTo(
        "[data-star]",
        { rotate: -25, scale: 0.85, opacity: 0 },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="grid min-h-[70vh] md:grid-cols-2">
      <div className="flex flex-col justify-center bg-black px-8 py-20 md:px-14 md:py-28">
        <p
          data-discover-text
          className="font-display max-w-md text-[clamp(1.5rem,3vw,2.35rem)] leading-[1.25] font-medium tracking-[-0.02em]"
        >
          {site.discover}
        </p>
        <a href="#work" className="underline-link mt-10 w-fit">
          view all project
        </a>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden bg-white text-black">
        <StarGraphic
          data-star=""
          className="h-[70%] w-[70%] max-w-[420px] -translate-x-[8%]"
        />
      </div>
    </section>
  );
}

export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-statement]",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-white px-6 py-24 text-black"
    >
      <div className="relative z-10 max-w-3xl text-center">
        <p
          data-statement
          className="font-display text-[clamp(1.6rem,4vw,2.75rem)] leading-[1.25] font-semibold tracking-[-0.03em]"
        >
          {site.statement}
        </p>
      </div>
      <StarGraphic className="pointer-events-none absolute bottom-[-10%] left-1/2 h-[55vw] w-[55vw] max-h-[520px] max-w-[520px] -translate-x-1/2 text-black/10" />
    </section>
  );
}
