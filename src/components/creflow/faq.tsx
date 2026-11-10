"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { brand } from "@/data/brand";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
            Answers To Your Common Questions
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#666]">
            Find clear answers about our services, process, timelines, and how we help businesses
            create impactful digital experiences.
          </p>
          <div className="mt-10 border border-[#e8e8e8] p-6">
            <p className="font-display text-lg font-semibold">Still Have Questions?</p>
            <p className="mt-2 text-sm text-[#666]">
              Reach out today and our expert team will get back to you with answers within
              twenty-four hours.
            </p>
            <a href="#contact" className="link-plus mt-5">
              Get in Touch +
            </a>
          </div>
        </div>

        <div className="divide-y divide-[#ececec] border-y border-[#ececec]">
          {brand.faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium md:text-lg">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-[#666]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
