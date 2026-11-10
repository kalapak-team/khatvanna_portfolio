import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">
            {profile.name}
          </p>
          <p className="mt-2 max-w-md text-sm text-[var(--muted)]">
            Computer Science Student · Developer · Founder — Kalapak Code Team
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          <a
            className="hover:text-[var(--foreground)]"
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-[var(--foreground)]"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-[var(--foreground)]"
            href={`mailto:${profile.contact.email}`}
          >
            Email
          </a>
          <a
            className="hover:text-[var(--foreground)]"
            href={profile.contact.website}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-xs text-[var(--muted)] sm:px-8">
        © {new Date().getFullYear()} Khat Vanna. All rights reserved.
      </div>
    </footer>
  );
}
