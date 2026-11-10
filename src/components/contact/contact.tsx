"use client";

import { ArrowUpRight, Code2, Link2, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading } from "@/components/animations/reveal";
import { MagneticLink } from "@/components/animations/magnetic";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s
              <br />
              build something.
            </>
          }
          description="Have a project, opportunity, or idea? Let's connect."
        />

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap gap-3">
            <MagneticLink
              href={`mailto:${profile.contact.email}`}
              data-cursor="Email"
            >
              <Mail size={16} /> Email Me
            </MagneticLink>
            <MagneticLink
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              data-cursor="LinkedIn"
            >
              <Link2 size={16} /> LinkedIn
            </MagneticLink>
            <MagneticLink
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              data-cursor="GitHub"
            >
              <Code2 size={16} /> GitHub
            </MagneticLink>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: profile.contact.email,
              href: `mailto:${profile.contact.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: profile.contact.phone,
              href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
            },
            {
              icon: Code2,
              label: "GitHub",
              value: "kalapak-team",
              href: profile.contact.github,
            },
            {
              icon: ArrowUpRight,
              label: "Website",
              value: "kalapak-team.space",
              href: profile.contact.website,
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={0.08 * i}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]/50"
                data-cursor={item.label}
              >
                <item.icon size={16} className="text-[var(--accent)]" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-2 break-all text-sm font-medium">{item.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
