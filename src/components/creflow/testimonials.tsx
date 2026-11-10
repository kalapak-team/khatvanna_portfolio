"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { brand } from "@/data/brand";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = brand.testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % brand.testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-black px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-3 text-center text-xs tracking-[0.12em] uppercase">/ Clients Says</p>
        <h2 className="font-display mb-12 text-center text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em]">
          Clients Says
        </h2>

        <AnimatePresence mode="wait">
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden border border-white/20 md:grid-cols-2"
          >
            <div className="relative min-h-[320px]">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center bg-white p-8 text-black md:p-12">
              <p className="mb-6 flex items-center gap-2 font-semibold">
                <span className="text-lg">✱</span> {item.company}
              </p>
              <p className="font-display text-[clamp(1.2rem,2.4vw,1.75rem)] leading-[1.35] font-semibold tracking-[-0.02em]">
                “{item.quote}”
              </p>
              <div className="mt-10">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#777]">{item.role}</p>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {brand.testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-7 rounded-full ${i === index ? "bg-white" : "bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
