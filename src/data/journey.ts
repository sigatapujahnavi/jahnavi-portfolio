import type { Stop } from "@/types/site";

// Newest first: where she works now, then back through earlier roles to the degree.
export const stops: Stop[] = [
  {
    period: "Nov 2026 to now",
    title: "Project Engineer",
    org: "C-DAC",
    place: "Thiruvananthapuram",
    current: true,
    points: [
      "Working on the backend of ERSS, the emergency response system behind Dial 112.",
      "Joined on 2 November 2026.",
    ],
    shift: "Software that has to answer, every time.",
  },
  {
    period: "Jul 2026 to Oct 2026",
    title: "React Native Developer (Full Stack Developer)",
    org: "Cyepro",
    place: "Gachibowli, Hyderabad",
    points: [
      "Developed Cyepro, a B2B Dealer Management System, live on the Play Store and the App Store.",
      "Built 40+ feature modules on React Native and Expo SDK 52, with Firebase, push notifications, background location, deep linking and OTA updates.",
      "Started an initiative to bring end-to-end mobile automation testing into the codebase.",
    ],
    shift: "From building apps to running one at production scale.",
  },
  {
    period: "May 2025 to May 2026",
    title: "Full Stack Developer and Team Lead",
    org: "Technoji Global",
    place: "Visakhapatnam, Andhra Pradesh",
    points: [
      "Led a cross-functional team that delivered 6 live production applications with the MERN stack and React Native, defining scope, assigning tasks and tracking milestones.",
      "Worked directly with clients on requirements, priorities and scope changes.",
      "Designed REST APIs, database schemas and real-time features with WebSockets and Redis.",
      "Took products from requirements to Android APK, iOS IPA and production deployment.",
      "Ran code reviews and supported junior developers across active projects.",
    ],
    shift: "Web first, then mobile, then the integrations that make an app feel complete.",
  },
  {
    period: "2021 to 2025",
    title: "B.Tech, Computer Science and Engineering",
    org: "RGUKT Srikakulam",
    place: "Srikakulam, Andhra Pradesh",
    points: [
      "Graduated with a CGPA of 8.8.",
      "Solved 250+ LeetCode problems in C++ across arrays, strings, trees, graphs, dynamic programming and sliding window.",
      "Built the habit of asking why a solution works before asking whether it passes.",
    ],
    shift: "Where the questions started: data structures first, products later.",
  },
];

export const threads = [
  {
    index: "01",
    title: "Web",
    text: "MERN products first: clinics, commerce, bookings. The foundation of everything after.",
    projects: [
      { label: "Dentoji", href: "/work/dentoji" },
      { label: "Zunozyra & B-Tea", href: "/work/zunozyra-b-tea" },
      { label: "Doctor Appointment", href: "/work/doctor-appointment-booking" },
    ],
  },
  {
    index: "02",
    title: "Mobile",
    text: "React Native and Expo, shipped to both stores, with the details that make an app feel native.",
    projects: [
      { label: "Kroodl", href: "/work/kroodl" },
      { label: "LandsTime", href: "/work/landstime" },
      { label: "Errand Learn Hub", href: "/work/errand-learn-hub" },
      { label: "Cyepro", href: "/work/cyepro" },
    ],
  },
  {
    index: "03",
    title: "Integrations",
    text: "Maps, notifications, DRM video, shipping, language. Each one researched before it went in.",
    projects: [
      { label: "How I investigate", href: "/thinking" },
      { label: "Toolkit", href: "/toolkit" },
    ],
  },
  {
    index: "04",
    title: "AI",
    text: "LLM applications, semantic matching and a scheduled agent, from curiosity into production.",
    projects: [
      { label: "SmartHire", href: "/work/smarthire" },
      { label: "YouTube Video Rating", href: "/work/youtube-video-rating" },
    ],
  },
] as const;

export const milestones = [
  { value: "1.3+", label: "years of production experience" },
  { value: "6", label: "live applications delivered while leading a team at Technoji Global" },
  { value: "2", label: "stores: Play Store and App Store delivery" },
  { value: "40+", label: "feature modules in Cyepro" },
  { value: "250+", label: "LeetCode problems solved in C++" },
  { value: "8.8", label: "CGPA, B.Tech Computer Science and Engineering" },
] as const;
