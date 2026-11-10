"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="service"
      ref={sectionRef}
      className="relative bg-black px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex items-center gap-3 md:mb-16">
          <span className="h-2 w-2 rounded-full border border-white/80" />
          <span className="text-sm">Expertise</span>
          <span className="h-px flex-1 bg-white/25" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm text-white/70">Scope :</p>
            <div className="flex max-w-[240px] flex-wrap gap-2">
              {site.scope.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-8 md:space-y-12">
            {site.services.map((service, i) => (
              <article
                key={service.id}
                data-service-card
                className="relative aspect-[16/10] overflow-hidden border border-white/15 md:aspect-[16/9]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    active === i ? "scale-100 grayscale-0" : "scale-105 grayscale"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
                <h3 className="absolute top-5 left-5 font-display text-[clamp(1.4rem,3.5vw,3rem)] font-semibold tracking-[-0.02em] uppercase md:top-8 md:left-8">
                  {service.title}
                </h3>
                <p className="absolute right-5 bottom-5 max-w-[260px] text-right text-xs leading-relaxed text-white/85 md:right-8 md:bottom-8 md:max-w-xs md:text-sm">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
