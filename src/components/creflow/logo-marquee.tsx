"use client";

import { brand } from "@/data/brand";

export function LogoMarquee() {
  const items = [...brand.logos, ...brand.logos];

  return (
    <section className="overflow-hidden border-b border-[#eee] bg-white py-8">
      <div className="fade-edge relative">
        <div className="animate-marquee flex w-max gap-14 px-6">
          {items.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="font-display text-lg font-semibold tracking-tight text-[#9a9a9a] whitespace-nowrap md:text-xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
