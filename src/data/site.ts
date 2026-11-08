import type { Link } from "@/types/site";

export const site = {
  name: "Jahnavi Sigatapu",
  role: "Software engineer",
  title: "The Curious Engineer.",
  intro:
    "I explore systems, investigate solutions, and turn the right ideas into working products.",
  signature:
    "I don't just ask how to build something. I ask why this solution, what alternatives exist, and how to make it work better.",
  tagline: "Explore deeply. Engineer thoughtfully. Build meaningfully.",
  closing: "Still curious. Still building. Always exploring.",
  quote: "The more I learn, the more interesting the unanswered questions become.",
  email: "sigatapujahnavi77@gmail.com",
  phone: "+91 76618 73924",
  phoneHref: "tel:+917661873924",
  location: "Thiruvananthapuram, India",
  coordinates: "8.5241° N, 76.9366° E",
  currentRole: "Project Engineer, C-DAC",
  currentFocus: "Backend on ERSS, Dial 112",
  resume: "/Jahnavi-Sigatapu-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/jahnavi-sigatapu-b203292a2/",
  github: "https://github.com/sigatapujahnavi",
  description:
    "Jahnavi Sigatapu is a curious, research-driven software engineer across React Native, full-stack web, backend systems and AI applications. Shipped apps to the Play Store and App Store, built SmartHire, and investigates why a solution before building it.",
} as const;

export const socials: Link[] = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Resume", href: site.resume },
];

export const nav: Link[] = [
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Field Notes", href: "/journal" },
  { label: "Journey", href: "/journey" },
  { label: "Toolkit", href: "/toolkit" },
  { label: "About", href: "/about" },
];

export const pillars = [
  { index: "01", label: "Mobile systems", doodle: "phone", href: "/work?filter=mobile" },
  { index: "02", label: "Full-stack products", doodle: "laptop", href: "/work?filter=web" },
  { index: "03", label: "AI & automation", doodle: "agent", href: "/work/smarthire" },
  { index: "04", label: "Technical research", doodle: "magnifier", href: "/journal" },
] as const;

export const proof = [
  { value: "1.3+", label: "years in production" },
  { value: "6", label: "live apps led at Technoji" },
  { value: "40+", label: "modules in Cyepro" },
  { value: "250+", label: "LeetCode problems, C++" },
] as const;
