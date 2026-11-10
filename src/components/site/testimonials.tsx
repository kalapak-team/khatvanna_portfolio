"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = site.testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % site.testimonials.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 md:px-10 md:py-32">
      <div className="pointer-events-none absolute top-10 right-[8%] font-display text-[28vw] leading-none font-semibold text-white/[0.04] select-none">
        %
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-3 text-sm text-white/55">{site.clientsLabel}</p>
          <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            {site.clientsSub}
          </p>
          <div className="mt-12">
            <p className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-none font-semibold tracking-[-0.04em]">
              {site.satisfaction}
            </p>
            <p className="mt-2 text-sm text-white/60">{site.satisfactionLabel}</p>
          </div>
        </div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/25 bg-black/40 p-6 backdrop-blur-sm md:p-8"
            >
              <p className="mb-8 text-sm leading-relaxed text-white/85 md:text-base">
                “{item.quote}”
              </p>
              <footer>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-white/50">{item.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex gap-2">
            {site.testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
