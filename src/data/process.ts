import type { ProcessStep } from "@/types/site";

export const processSteps: ProcessStep[] = [
  {
    title: "Question",
    ask: "What problem is this feature really solving?",
    meaning:
      "I start by refusing the first framing. A feature request is usually a symptom, so I ask what the person is actually trying to get done.",
    example: {
      where: "Zunozyra",
      text: "An order is not finished when someone pays. How does it become a shipment that is picked up, tracked and delivered?",
      href: "/work/zunozyra-b-tea",
    },
  },
  {
    title: "Research",
    ask: "How does this work internally, and how do other products solve it?",
    meaning:
      "I read how the technology works under the hood and how real products handle the same problem, before choosing anything.",
    example: {
      where: "LandsTime",
      text: "Google Maps, geolocation, i18next and Google Translate each got studied on their own before any of them went into the app.",
      href: "/work/landstime",
    },
  },
  {
    title: "Compare",
    ask: "Why was this solution built, and what else could work?",
    meaning:
      "I put the options side by side: reliability, fit, cost of changing my mind. The popular choice is a candidate, not a default.",
    example: {
      where: "LandsTime",
      text: "Interface text and dynamic content are different problems, so they got different tools: i18next for one, Google Translate for the other.",
      href: "/work/landstime",
    },
  },
  {
    title: "Experiment",
    ask: "Can I make it work even when the obvious route is closed?",
    meaning:
      "When the standard path is unavailable I look for another one and test it with a small proof before committing.",
    example: {
      where: "iOS builds",
      text: "No MacBook, no problem: I built iOS IPA files from a Lenovo laptop using EAS cloud builds.",
      href: "/thinking#no-mac",
    },
  },
  {
    title: "Implement",
    ask: "How do I build it so it behaves well in the real world?",
    meaning:
      "With the choice made, I build it properly, including the small integration details that people only notice when they are wrong.",
    example: {
      where: "Cyepro",
      text: "Notifications that open the right screen, and custom deep-linking schemes for moving between the app and other flows.",
      href: "/work/cyepro",
    },
  },
  {
    title: "Validate",
    ask: "How do I know it works, and how will I find out when it does not?",
    meaning:
      "Shipping is not the end of the question. I want crash visibility in production and checks that run without me.",
    example: {
      where: "Cyepro",
      text: "Firebase Crashlytics for crash monitoring, and an initiative to bring Maestro, Detox and Appium automation into the codebase.",
      href: "/work/cyepro",
    },
  },
  {
    title: "Improve",
    ask: "How can the next version be better than this one?",
    meaning:
      "Every answer produces a better question. I keep a way to improve what is live without making people wait.",
    example: {
      where: "Cyepro",
      text: "Over-the-air updates with expo-updates, so a production improvement reaches users without a new store submission.",
      href: "/work/cyepro",
    },
  },
];

export const questions = [
  "How does this technology work internally?",
  "Why was this particular solution developed?",
  "What alternatives are available?",
  "Which approach is more reliable?",
  "How do other products solve the same problem?",
  "Can I integrate something better?",
  "Can I make it work even when the obvious approach is unavailable?",
];

export const investigations = [
  {
    id: "shiprocket",
    where: "Zunozyra",
    href: "/work/zunozyra-b-tea",
    title: "How does an order become a shipment?",
    body: [
      "Zunozyra needed shipment and delivery, not just a checkout. Instead of inventing a courier workflow, I investigated Shiprocket, a platform that connects sellers with courier partners, and fitted it to the order flow.",
      "The lesson I kept: look for the system that already solves the hard part, and spend your time on the fit.",
    ],
    margin: "pickup, tracking, delivery",
  },
  {
    id: "landstime",
    where: "LandsTime",
    href: "/work/landstime",
    title: "Two languages of the same app.",
    body: [
      "Location-based discovery and multilingual support looked like one feature and were really several. I explored Google Maps and geolocation for where things are, i18next for the text that ships with the app, and Google Translate for text that arrives as data.",
      "Each tool was chosen for the kind of text or place it handles, not because it was the first result.",
    ],
    margin: "static vs dynamic",
  },
  {
    id: "notifications",
    where: "Cyepro",
    href: "/journal#notifications",
    title: "A tap should know where to go.",
    body: [
      "Sending a push notification is the easy half. I investigated how different notification mechanisms should navigate to their own screens, and paired that with custom deep-linking schemes.",
      "The question I wrote down: what happens in each state of the app, and does the person always land somewhere sensible?",
    ],
    margin: "foreground · background · closed",
  },
  {
    id: "no-mac",
    where: "iOS delivery",
    href: "/work/cyepro",
    title: "iOS without a MacBook.",
    body: [
      "The usual route to an iOS build is a Mac. I do not own one. So I looked for another route and found EAS cloud builds, which let me produce iOS IPA files from a Lenovo laptop.",
      "It is a small story with a big habit inside it: when the obvious approach is unavailable, find the real constraint and design around it.",
    ],
    margin: "Lenovo → EAS cloud → IPA",
  },
  {
    id: "smarthire",
    where: "SmartHire",
    href: "/work/smarthire",
    title: "From curiosity about agents to a working one.",
    body: [
      "I kept reading about AI agents, LLMs and semantic matching until the questions had a shape I could build: a job search that wakes up on its own and judges roles by meaning, not keywords.",
      "That became SmartHire, running on a schedule in production.",
    ],
    margin: "explore → build → ship",
  },
];
