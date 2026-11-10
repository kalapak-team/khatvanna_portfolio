import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    id: "kalapak",
    number: "01",
    title: "Kalapak Code Team",
    tagline: "Founder-led developer collective",
    description:
      "An IT-focused team I founded to ship modern web and mobile work — coordinating planning, architecture guidance, UI/UX improvements, and collaborative delivery.",
    role: "Founder & Team Leader",
    technologies: ["Web", "Mobile", "React", "Laravel", "Flutter", "Team Ops"],
    href: "https://www.kalapak-team.space",
    github: "https://github.com/kalapak-team",
    image: "/images/project-kalapak.jpg",
    accent: "#48d1cc",
  },
  {
    id: "portfolio",
    number: "02",
    title: "Khat Vanna Portfolio",
    tagline: "Personal brand & CV experience",
    description:
      "A cinematic Next.js portfolio that presents education, experience, skills, and leadership with motion-driven storytelling and production-ready performance.",
    role: "Designer & Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    image: "/images/project-portfolio.jpg",
    accent: "#7dd3fc",
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full-Stack Web Builds",
    tagline: "Laravel · React · PostgreSQL",
    description:
      "End-to-end web application work spanning PHP/Laravel backends, React interfaces, relational databases, and deployment across Vercel, Netlify, Render, and Railway.",
    role: "Full-Stack Developer",
    technologies: ["Laravel", "PHP", "React", "MySQL", "PostgreSQL"],
    image: "/images/project-fullstack.jpg",
    accent: "#a5b4fc",
  },
  {
    id: "mobile",
    number: "04",
    title: "Cross-Platform Mobile",
    tagline: "Flutter product experiences",
    description:
      "Mobile-focused builds with Flutter — emphasizing clean UI, practical architecture, and shipping experiences that feel native across platforms.",
    role: "Mobile Developer",
    technologies: ["Flutter", "Dart", "UI/UX", "API Integration"],
    image: "/images/project-mobile.jpg",
    accent: "#67e8f9",
  },
];
