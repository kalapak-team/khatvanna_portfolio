"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/brand";

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-price]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="pricing" ref={ref} className="bg-[#0a0a0a] px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p data-price className="mb-3 text-center text-xs tracking-[0.14em] uppercase">
          / Pricing
        </p>
        <h2
          data-price
          className="font-display mb-14 text-center text-[clamp(2.2rem,6vw,4rem)] font-semibold tracking-[-0.04em]"
        >
          OUR <span className="gradient-text-light">PRICING</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {brand.pricing.map((plan) => (
            <article
              key={plan.name}
              data-price
              className={`flex flex-col rounded-md bg-[#161616] p-6 transition duration-500 hover:-translate-y-2 hover:bg-[#1d1d1d] md:p-8 ${
                plan.popular ? "ring-1 ring-white/30" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                {plan.popular && (
                  <span className="rounded bg-white/15 px-2 py-0.5 text-[10px] tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mb-8 text-sm leading-relaxed text-white/55">{plan.desc}</p>
              <p className="font-display text-4xl font-semibold tracking-tight">
                {plan.price}{" "}
                <span className="text-base font-normal text-white/50">/ Project</span>
              </p>
              <div className="my-6 h-px bg-white/10" />
              <p className="mb-4 text-[11px] tracking-[0.12em] text-white/45 uppercase">
                Key Features:
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                {brand.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
