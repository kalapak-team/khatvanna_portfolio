"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { brand } from "@/data/brand";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-5 pt-24 pb-10 text-white md:px-10 md:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <p className="mb-4 text-xs tracking-[0.14em] uppercase">/ CTA</p>
        <h2 className="font-display text-[clamp(2.4rem,8vw,5rem)] leading-[0.95] font-semibold tracking-[-0.04em] uppercase">
          Let&apos;s build your
          <br />
          brand.
        </h2>
        <p className="mt-5 text-white/70">Ready to launch your next big digital project?</p>
        <a href={`mailto:${brand.email}`} className="link-plus mt-8 text-white">
          Get in Touch +
        </a>
      </div>

      <div className="relative z-10 mt-16 overflow-hidden">
        <div className="animate-marquee-fast flex w-max gap-3 md:gap-4">
          {[...Array(2)].flatMap((_, loop) =>
            [brand.heroImage, ...brand.gallery, brand.reelImage, brand.impactImage].map(
              (src, i) => (
                <div
                  key={`${loop}-${src}-${i}`}
                  className="relative h-40 w-[220px] shrink-0 md:h-52 md:w-[280px]"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="280px" />
                </div>
              ),
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <footer id="contact" className="bg-black px-5 pt-20 pb-0 text-white md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display max-w-3xl text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold tracking-[-0.03em]">
          Stay Ahead of the Competition with Real-Time Automation Insights
        </h2>
        <form onSubmit={onSubmit} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="min-w-0 flex-1 bg-[#1a1a1a] px-4 py-3 text-sm outline-none placeholder:text-white/35"
          />
          <button
            type="submit"
            className="bg-white px-5 py-3 text-sm font-semibold tracking-wide text-black uppercase underline underline-offset-4"
          >
            Subscribe +
          </button>
        </form>
        {status === "ok" && (
          <p className="mt-3 text-sm text-white/60">Thank you! Your submission has been received!</p>
        )}

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2 text-sm">
            {brand.nav.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                className={`block hover:opacity-70 ${i === 0 ? "text-[#ff4d4d]" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm text-white/80">
            {["Changelog", "Style Guide", "Licenses", "Instructions", "404"].map((l) => (
              <a key={l} href="#" className="block hover:opacity-70">
                {l}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-xs tracking-[0.12em] text-white/55 uppercase">
            <a href="https://github.com/kalapak-team" className="block hover:text-white">
              Github
            </a>
            <a href="https://www.linkedin.com/in/vanna-khat" className="block hover:text-white">
              Linkedin
            </a>
            <a href="https://www.kalapak-team.space" className="block hover:text-white">
              Website
            </a>
          </div>
          <div className="space-y-2 text-xs tracking-[0.12em] text-white/55 uppercase">
            <a href={`mailto:${brand.email}`} className="block hover:text-white">
              {brand.email}
            </a>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="block hover:text-white">
              {brand.phone}
            </a>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
          </div>
        </div>

        <p className="font-display mt-16 text-center text-[clamp(3rem,16vw,12rem)] leading-[0.85] font-semibold tracking-[-0.06em]">
          {brand.wordmark}
        </p>
      </div>

      <div className="mt-6 border-t border-white/10 py-4 text-[10px] tracking-[0.12em] text-white/45 uppercase md:text-xs">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <span>Powered by Next.js · Designed for {brand.name}</span>
          <a href="#home" className="hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
