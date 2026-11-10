"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { atlas } from "@/data/atlas";
import { Media } from "./media";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z",
  "M4 8h16v8H4zM8 4h8v16H8z",
  "M12 4a8 8 0 100 16 8 8 0 000-16zm0 4a4 4 0 110 8 4 4 0 010-8z",
  "M3 12h18M12 3v18M5 5l14 14M19 5L5 19",
  "M6 6h12v12H6zM10 2h4v20h-4zM2 10h20v4H2z",
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.fromTo(
        "[data-svc-head]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        },
      );

      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
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
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="services" ref={sectionRef} className="overflow-hidden bg-[#f4f2ed]">
      <div className="px-5 pt-20 md:px-10 md:pt-28">
        <div
          data-svc-head
          className="mx-auto mb-12 flex max-w-[1400px] flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 text-xs tracking-[0.08em] text-[#999]">/ @25 - 26</p>
            <h2 className="font-display text-[clamp(2.4rem,8vw,5.2rem)] leading-none font-semibold tracking-[-0.04em] text-[var(--ink)]">
              OUR <span className="gradient-fade">SERVICES</span>
            </h2>
          </div>
          <a href="#contact" className="link-line mb-2 text-[var(--ink)]">
            Get in Touch +
          </a>
        </div>
      </div>

      <div ref={trackRef} className="flex w-max gap-4 px-5 pb-24 will-change-transform md:gap-5 md:px-10">
        {atlas.services.map((s, i) => (
          <article
            key={s.id}
            className="group flex h-[360px] w-[min(78vw,300px)] shrink-0 flex-col bg-[#7a7a7a] p-5 text-white transition duration-500 hover:bg-[#555] md:h-[420px] md:w-[320px]"
          >
            <p className="text-xs tracking-wide">/ {s.id}</p>
            <div className="flex flex-1 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-14 w-14 transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d={icons[i % icons.length]} />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsMarquee() {
  const items = ["UI/UX design", "Marketing", "Development", "Branding"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-7 text-white">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-display text-4xl font-semibold tracking-tight whitespace-nowrap md:text-6xl ${
              i % 4 === 0 ? "text-white" : "text-white/25"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-price]",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section id="pricing" ref={ref} className="bg-[var(--ink)] px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p data-price className="mb-3 text-center text-xs tracking-[0.14em] uppercase">
          / Pricing
        </p>
        <h2
          data-price
          className="font-display mb-14 text-center text-[clamp(2.2rem,6vw,4rem)] font-semibold tracking-[-0.04em]"
        >
          OUR <span className="text-[var(--accent)]">PRICING</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {atlas.pricing.map((plan) => (
            <article
              key={plan.name}
              data-price
              className={`flex flex-col rounded-md bg-[#161616] p-6 transition duration-500 hover:-translate-y-2 md:p-8 ${
                plan.popular ? "ring-1 ring-[var(--accent)]/50" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                {plan.popular && (
                  <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-[10px] text-[var(--accent)] uppercase">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mb-8 text-sm text-white/55">{plan.desc}</p>
              <p className="font-display text-4xl font-semibold">
                {plan.price} <span className="text-base font-normal text-white/45">/ Project</span>
              </p>
              <div className="my-6 h-px bg-white/10" />
              <p className="mb-4 text-[11px] tracking-[0.12em] text-white/40 uppercase">
                Key Features:
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                {atlas.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase hover:text-[var(--accent)]"
              >
                Get started →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--paper)] px-5 py-20 text-[var(--ink)] md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs tracking-[0.12em] uppercase">/ FAQ</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
            Answers To Your Common Questions
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#666]">
            Clear answers about services, process, timelines, and how we help create impactful
            digital experiences.
          </p>
          <div className="mt-10 border border-black/10 bg-white p-6">
            <p className="font-display text-lg font-semibold">Still Have Questions?</p>
            <p className="mt-2 text-sm text-[#666]">
              Reach out today — we typically reply within twenty-four hours.
            </p>
            <a href={`mailto:${atlas.email}`} className="link-line mt-5 text-[var(--ink)]">
              Contact Support +
            </a>
          </div>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {atlas.faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium md:text-lg">{item.q}</span>
                  <Plus size={18} className={`shrink-0 transition ${isOpen ? "rotate-45" : ""}`} />
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

export function Insights() {
  return (
    <section className="bg-white px-5 py-20 text-[var(--ink)] md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs tracking-[0.12em] uppercase">/ Insights</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em]">
              New Journal
            </h2>
          </div>
          <a href="#contact" className="link-line text-[var(--ink)]">
            Read More Insights +
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {atlas.insights.map((post) => (
            <article key={post.title} className="group overflow-hidden border border-black/8">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Media
                    src={post.image}
                    alt={post.title}
                    pos="center"
                    className="absolute inset-0 h-full w-full"
                    sizes="50vw"
                    zoomOnHover
                  />
                </div>
              <div className="p-6">
                <p className="text-xs tracking-wide text-[#888]">{post.date}</p>
                <h3 className="font-display mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666]">{post.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
