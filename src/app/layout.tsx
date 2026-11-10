import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kalapak-team.space"),
  title: {
    default: "Khat Vanna — Computer Science Student & Developer",
    template: "%s · Khat Vanna",
  },
  description:
    "Portfolio of Khat Vanna, a Computer Science student at Norton University and developer focused on modern web and mobile technologies.",
  openGraph: {
    title: "Khat Vanna — Computer Science Student & Developer",
    description:
      "Building modern web and mobile experiences with technology, design, and curiosity.",
    images: [{ url: "/images/vanna-portrait.jpg", width: 800, height: 1000 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--ink)] text-white">{children}</body>
    </html>
  );
}
