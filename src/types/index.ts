export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
};

export type EducationItem = {
  id: string;
  school: string;
  program: string;
  period: string;
  details?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
};

export type ProjectItem = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  href?: string;
  github?: string;
  image: string;
  accent: string;
};

export type NavLink = {
  href: string;
  label: string;
};
