"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function SiteFooter() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!email || !email.includes("@")) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-black">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:gap-20 md:px-10 md:py-24">
        <div>
          <p className="mb-3 text-sm text-white/50">{site.est}</p>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-[15px]">
            {site.bio}
          </p>
          <div className="mt-8 space-y-1 text-sm">
            <a href={`mailto:${site.email}`} className="block hover:opacity-70">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:opacity-70">
              {site.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="underline-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm">Subscribe now!</p>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email here.."
              className="min-w-0 flex-1 border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/40"
            />
            <button
              type="submit"
              className="bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              Submit
            </button>
          </form>
          {status === "ok" && (
            <p className="mt-3 text-sm text-white/70">Thank you! Your submission has been received!</p>
          )}
          {status === "err" && (
            <p className="mt-3 text-sm text-white/70">Oops! Something went wrong while submitting the form.</p>
          )}

          <div className="mt-12 flex flex-wrap gap-6">
            {site.footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="underline-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-5 py-4 text-[10px] tracking-[0.14em] text-black uppercase md:px-10 md:text-xs">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <span>Powered by Next.js</span>
          <span>© 2026 {site.name}. all right reserved</span>
          <span>Created for Khat Vanna</span>
        </div>
      </div>

      <div className="overflow-hidden bg-white px-5 pt-10 pb-6 md:px-10">
        <p className="font-display text-center text-[clamp(2.8rem,14vw,11rem)] leading-[0.85] font-semibold tracking-[-0.05em] text-black">
          {site.name.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
