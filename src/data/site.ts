export const site = {
  name: "Khat Vanna",
  folio: "(KV_FOLIO)",
  version: "V1.0",
  email: "khatvanna2005@gmail.com",
  phone: "092 745 117",
  est: "Est. 2023",
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#work", label: "Work" },
  ],
  heroLines: [
    ["CREATIVE WORKS,", "THOUGHTFUL EXPERIENCES."],
    ["DESIGNING WITH INTENTION,", "CREATING WITH PURPOSE."],
    ["WHERE IDEAS TAKE", "FORM THROUGH CODE."],
  ],
  heroSub: "Building ideas into meaningful digital experiences.",
  introLabel: "Intro",
  introSide: "DESIGNING IDEAS INTO MEANINGFUL EXPERIENCES.",
  introTitleTail: "Meaningful Experiences.",
  intro: [
    "I'm a Computer Science student and full-stack developer focused on creating thoughtful digital experiences that balance creativity, clarity, and purpose. I enjoy turning ideas into meaningful products that not only look good, but also work beautifully.",
    "My approach combines strategic thinking with a strong eye for detail, allowing me to explore ideas, simplify complex problems, and create experiences that feel intuitive and engaging. From concept to final execution, I aim to bring clarity and character to every project I work on.",
  ],
  scope: ["Web Design", "Ui", "Development", "Prototype", "Wireframe"],
  services: [
    {
      id: "1",
      title: "1. UI / UX Designer",
      description:
        "Creating intuitive and engaging digital experiences through thoughtful interface and user experience design.",
      image: "/images/project-portfolio.jpg",
    },
    {
      id: "2",
      title: "2. Web design",
      description:
        "Designing modern, responsive websites that balance visual impact, usability, and clear communication.",
      image: "/images/project-fullstack.jpg",
    },
    {
      id: "3",
      title: "3. Full-stack development",
      description:
        "Building distinctive digital products with React, Next.js, Laravel, and Flutter — from concept to deployment.",
      image: "/images/project-kalapak.jpg",
    },
    {
      id: "4",
      title: "4. Motion design",
      description:
        "Bringing ideas to life through purposeful motion, animation, and interactive visual experiences.",
      image: "/images/project-mobile.jpg",
    },
  ],
  projects: [
    {
      id: "kalapak",
      title: "Kalapak",
      description:
        "Brand identity and digital experience designed to give a bold developer collective a distinctive and memorable presence.",
      image: "/images/project-kalapak.jpg",
      href: "https://www.kalapak-team.space",
    },
    {
      id: "portfolio",
      title: "KV Folio",
      description:
        "A refined personal platform helping communicate ideas through thoughtful design, motion, and strategy.",
      image: "/images/project-portfolio.jpg",
      href: "#work",
    },
    {
      id: "fullstack",
      title: "Web Builds",
      description:
        "A contemporary stack of Laravel and React applications crafted for clarity, character, and consistency.",
      image: "/images/project-fullstack.jpg",
      href: "#work",
    },
    {
      id: "mobile",
      title: "Mobile Lab",
      description:
        "Digital product design created to transform complex requirements into simple and engaging mobile experiences.",
      image: "/images/project-mobile.jpg",
      href: "#work",
    },
    {
      id: "leadership",
      title: "Northline",
      description:
        "Creative direction focused on building a confident team presence across digital platforms and campaigns.",
      image: "/images/vanna-portrait-alt.jpg",
      href: "#work",
    },
    {
      id: "studio",
      title: "Morveus",
      description:
        "Identity and digital experience designed for collaborative studio work with distinctive presence.",
      image: "/images/vanna-portrait.jpg",
      href: "#work",
    },
  ],
  discover:
    "Discover a curated collection of brands, digital experiences, and creative work.",
  statement: "Each project is a chance to learn, experiment and push my limits.",
  awardsTitle: ["Crafting Impact:", "Awards Recognition"],
  awardsLeft: "THOUGHTFUL DESIGN. BOLD IDEAS.",
  awardsRight: "A MULTIDISCIPLINARY DEVELOPER.",
  years: ["2023", "2024", "2025", "2026"],
  awardLabels: [
    "CSS Design Awards Winner",
    "FWA Site of the Day",
    "Webby Awards Nominee",
    "Creative Excellence Award",
  ],
  testimonials: [
    {
      name: "Prum Chansamedy",
      role: "Professor · Norton University",
      quote:
        "Working with Vanna was incredibly smooth. Every technical decision felt intentional, and the final result exceeded what we had imagined for the project.",
    },
    {
      name: "Kalapak Member",
      role: "Teammate",
      quote:
        "Vanna brought clarity to our ideas and turned them into a digital experience that feels both refined and effortless. The attention to detail made all the difference.",
    },
    {
      name: "Project Lead",
      role: "Product collaborator",
      quote:
        "From the first concept to the final build, Vanna understood our vision and elevated it into something much more distinctive. A truly thoughtful creative process.",
    },
    {
      name: "Design Partner",
      role: "Brand collaborator",
      quote:
        "What stood out most was Vanna’s ability to balance creativity with purpose. The work looks beautiful, but more importantly, it communicates exactly what it needs to.",
    },
    {
      name: "Client Partner",
      role: "Marketing collaborator",
      quote:
        "Vanna combines strong visual thinking with a deep understanding of digital experiences. The result was a brand presence that finally felt like us.",
    },
  ],
  satisfaction: "98%",
  satisfactionLabel: "Client satisfaction",
  clientsLabel: "What clients say",
  clientsSub:
    "An open view into a focused builder. Structure, rhythm, and emotion — expressed through clarity and control.",
  bio: "Khat Vanna｜Personal portfolio・Full-stack development・Creative digital experiences. Combining thoughtful design, visual storytelling, and technical craftsmanship to create meaningful products for modern brands and teams.",
  social: [
    { label: "Github", href: "https://github.com/kalapak-team" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/vanna-khat" },
    { label: "Website", href: "https://www.kalapak-team.space" },
  ],
  footerLinks: [
    { label: "Style guide", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Instructions", href: "#" },
  ],
} as const;
