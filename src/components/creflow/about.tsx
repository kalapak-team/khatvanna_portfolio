"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";

gsap.registerPlugin(ScrollTrigger);

function parseStat(value: string) {
  const num = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  return { num, suffix };
}

export function About() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-about]",
        { y: 60, opacity: 0, clipPath: "inset(18% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="about" ref={ref} className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[160px_1fr] md:gap-16">
        <p data-about className="text-xs font-semibold tracking-[0.08em] uppercase">
          / About Us
        </p>
        <div>
          <h2
            data-about
            className="font-display max-w-4xl text-[clamp(1.6rem,3.4vw,2.85rem)] leading-[1.2] font-semibold tracking-[-0.03em]"
          >
            {brand.about}
          </h2>
          <p data-about className="mt-5 text-[#8a8a8a]">
            {brand.aboutSub}
          </p>
          <a data-about href="#about" className="link-plus mt-8">
            About Us +
          </a>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-impact]",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const raw = el.dataset.count || "0";
        const { num, suffix } = parseStat(raw);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent =
              num % 1 === 0
                ? `${Math.round(obj.val)}${suffix}`
                : `${obj.val.toFixed(1)}${suffix}`;
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-white px-5 pb-24 md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-[1.05fr_auto_1fr] md:gap-5">
        <div
          data-impact
          className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[520px]"
        >
          <Image
            src={brand.impactImage}
            alt="Impact"
            fill
            className="object-cover scale-110 will-change-transform"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-impact-img
          />
        </div>

        <p className="hidden origin-center -rotate-90 self-center text-xs font-semibold tracking-[0.12em] uppercase md:block">
          / Our Impact
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {brand.stats.map((stat) => (
            <article
              key={stat.label}
              data-impact
              className="flex min-h-[240px] flex-col justify-between bg-[#f3f3f3] p-6 md:min-h-[250px] md:p-8"
            >
              <div>
                <p
                  data-count={stat.value}
                  className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-none font-semibold tracking-[-0.04em]"
                >
                  0
                </p>
                <p className="mt-3 font-medium">{stat.label}</p>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[#666]">{stat.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
