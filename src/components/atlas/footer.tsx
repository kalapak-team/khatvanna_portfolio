"use client";

import { FormEvent, useState } from "react";
import { atlas } from "@/data/atlas";
import { Media } from "./media";

export function Cta() {
  const imgs = atlas.ctaImages;
  return (
    <section className="relative overflow-hidden bg-[#111] px-5 pt-24 pb-10 text-white md:px-10 md:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:radial-gradient(#fff_0.55px,transparent_0.55px)] [background-size:3px_3px]" />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <p className="mb-4 text-xs tracking-[0.14em] uppercase">/ CTA</p>
        <h2 className="font-display text-[clamp(2.4rem,8vw,5rem)] leading-[0.95] font-semibold tracking-[-0.04em] uppercase">
          Let&apos;s build your
          <br />
          <span className="text-[var(--accent)]">brand.</span>
        </h2>
        <p className="mt-5 text-white/65">Ready to launch your next digital experience?</p>
        <a href={`mailto:${atlas.email}`} className="link-line mt-8">
          Get in Touch +
        </a>
      </div>
      <div className="relative z-10 mt-16 overflow-hidden">
        <div className="animate-marquee-fast flex w-max gap-3 md:gap-4">
          {[0, 1].flatMap((loop) =>
            imgs.map((src, i) => (
              <Media
                key={`${loop}-${i}`}
                src={src}
                alt=""
                pos={src.includes("portrait") ? "center 22%" : "center"}
                className="h-40 w-[220px] shrink-0 md:h-52 md:w-[280px]"
                sizes="280px"
              />
            )),
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [ok, setOk] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(true);
    e.currentTarget.reset();
  };

  return (
    <footer id="contact" className="bg-black px-5 pt-20 text-white md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-2 text-sm text-white/45">Est. 2023</p>
        <p className="max-w-2xl text-sm leading-relaxed text-white/75 md:text-[15px]">{atlas.bio}</p>
        <div className="mt-6 space-y-1 text-sm">
          <a href={`mailto:${atlas.email}`} className="block hover:text-[var(--accent)]">
            {atlas.email}
          </a>
          <a
            href={`tel:${atlas.phone.replace(/\s/g, "")}`}
            className="block hover:text-[var(--accent)]"
          >
            {atlas.phone}
          </a>
        </div>

        <form onSubmit={onSubmit} className="mt-12 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="min-w-0 flex-1 border border-white/10 bg-[#161616] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]/50"
          />
          <button
            type="submit"
            className="bg-[var(--accent)] px-5 py-3 text-sm font-semibold tracking-wide text-black uppercase"
          >
            Subscribe +
          </button>
        </form>
        {ok && <p className="mt-3 text-sm text-white/60">Thank you! Your submission has been received.</p>}

        <div className="mt-14 flex flex-wrap gap-8 text-xs tracking-[0.14em] uppercase">
          {atlas.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-[var(--accent)]">
              {n.label}
            </a>
          ))}
        </div>

        <p className="font-display mt-16 text-center text-[clamp(3rem,16vw,11rem)] leading-[0.85] font-semibold tracking-[-0.06em]">
          {atlas.wordmark}
        </p>
      </div>
      <div className="mt-6 border-t border-white/10 py-4 text-[10px] tracking-[0.12em] text-white/40 uppercase md:text-xs">
        <div className="mx-auto flex max-w-[1400px] justify-between gap-4">
          <span>KV Atlas · Portfolio</span>
          <a href="#home" className="hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
