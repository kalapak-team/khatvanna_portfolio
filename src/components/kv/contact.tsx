"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/animations/magnetic";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--ink-2)] px-5 py-28 md:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_0.6px,transparent_0.6px)] [background-size:4px_4px]" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <p className="mb-4 text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase">Contact</p>
        <h2 className="font-display text-[clamp(3rem,12vw,7.5rem)] leading-[0.88] font-extrabold tracking-[-0.05em]">
          LET&apos;S
          <br />
          BUILD
          <br />
          <span className="text-[var(--accent)]">SOMETHING.</span>
        </h2>
        <p className="mt-8 max-w-md text-white/60">
          Open to collaborations, internships, and meaningful builds. Reach out — I usually reply within a day.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.contact.email}`}
              className="focus-ring inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-[#041414] uppercase"
              data-cursor="Email"
            >
              Email me <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="link-line"
            data-cursor="GitHub"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-line"
            data-cursor="LinkedIn"
          >
            LinkedIn
          </a>
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
    <footer className="border-t border-white/10 bg-black px-5 pt-16 pb-8 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/25 font-display text-lg font-bold">
              KV
            </div>
            <p className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{profile.name}</p>
            <p className="mt-2 text-sm text-white/50">
              Computer Science Student
              <br />
              Full-Stack Developer
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                GitHub
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                LinkedIn
              </a>
              <a href={`mailto:${profile.contact.email}`} className="hover:text-[var(--accent)]">
                Email
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="max-w-md">
            <p className="mb-3 text-[11px] tracking-[0.16em] text-white/40 uppercase">Stay in touch</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="focus-ring min-w-0 flex-1 border border-white/10 bg-[#12141a] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]/50"
              />
              <button
                type="submit"
                className="focus-ring bg-white px-5 py-3 text-[11px] font-semibold tracking-[0.14em] text-black uppercase"
              >
                Subscribe
              </button>
            </div>
            {ok && <p className="mt-3 text-sm text-[var(--accent)]">Thanks — talk soon.</p>}
          </form>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name.toUpperCase()}</p>
          <p>{profile.contact.email}</p>
        </div>
      </div>
    </footer>
  );
}
