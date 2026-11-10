"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % site.heroLines.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black px-5 pb-16 pt-28 md:px-10 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="mb-10 min-h-[7.5rem] md:mb-14 md:min-h-[10rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(1.6rem,4.2vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.02em] uppercase"
            >
              <p>{site.heroLines[index][0]}</p>
              <p className="text-white/70">{site.heroLines[index][1]}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.2rem,12vw,9.5rem)] leading-[0.9] font-semibold tracking-[-0.04em]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-sm text-sm leading-relaxed text-white/65 md:justify-self-end md:text-right md:text-base"
          >
            {site.heroSub}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
