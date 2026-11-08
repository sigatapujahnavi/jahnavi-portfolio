export type Link = {
  label: string;
  href: string;
};

export type Fact = {
  value: string;
  label: string;
};

export type Investigation = {
  question: string;
  body: string;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  kind: string;
  category: "mobile" | "web" | "ai";
  featured?: boolean;
  context: string;
  status: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  facts: Fact[];
  built: string[];
  investigations: Investigation[];
  stack: string[];
  links: Link[];
  note?: Link;
  howItWorks?: "smarthire";
};

export type JournalEntry = {
  slug: string;
  doodle: DoodleName;
  topic: string;
  date: string;
  origin: string;
  question: string;
  why: string;
  investigated: string[];
  learned: string[];
  takeaway: string;
  post?: string;
};

export type ProcessStep = {
  title: string;
  ask: string;
  meaning: string;
  example: { where: string; text: string; href?: string };
};

export type Skill = {
  name: string;
  usedIn?: string[];
};

export type SkillGroup = {
  id: string;
  title: string;
  hand: string;
  skills: Skill[];
};

export type Stop = {
  period: string;
  title: string;
  org: string;
  place: string;
  current?: boolean;
  points: string[];
  shift: string;
};

export type DoodleName =
  | "bulb"
  | "flow"
  | "phone"
  | "pin"
  | "bell"
  | "layers"
  | "bank"
  | "video"
  | "window"
  | "loop"
  | "spark"
  | "laptop"
  | "agent"
  | "book"
  | "magnifier"
  | "brackets";
