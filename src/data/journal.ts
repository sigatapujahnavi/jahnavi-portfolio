import type { JournalEntry } from "@/types/site";

const linkedin = "https://www.linkedin.com/posts/jahnavi-sigatapu-b203292a2_";

export const journal: JournalEntry[] = [
  {
    slug: "youtube",
    doodle: "video",
    topic: "Infrastructure",
    date: "Dec 2025",
    origin: "Prompted by client work",
    question: "My phone struggles with 128 GB. How does YouTube store videos from the entire world?",
    why: "I was working on an education platform whose client wanted to restrict video replays to control bandwidth. If even a small platform worries about that, how does YouTube allow unlimited uploads and unlimited views?",
    investigated: [
      "How much storage a platform like YouTube needs. Estimates put it at exabyte scale, which means millions of terabytes.",
      "What really happens when you switch a video from 360p to 720p to 1080p.",
      "Why Google's global infrastructure, and not the app, is what makes it possible.",
    ],
    learned: [
      "Changing quality does not improve one video. The same video is stored in several qualities.",
      "A single 10 GB video, stored in multiple qualities, can take tens of gigabytes. Multiply that by millions of videos in many locations.",
      "I had misunderstood quality switching for years.",
    ],
    takeaway:
      "Storage and bandwidth are product decisions as much as technical ones. A limit on video replays is the small version of a problem YouTube solves with enormous infrastructure.",
    post: `${linkedin}my-phone-struggles-with-128gb-but-youtube-activity-7407465221587578880-v6Nv`,
  },
  {
    slug: "cobol",
    doodle: "bank",
    topic: "Systems",
    date: "Dec 2025",
    origin: "Pure curiosity",
    question: "Everyone talks about Java and Python. So why are banks still running on COBOL?",
    why: "UPI apps look modern, banking apps feel fast, and everything looks cloud-native. I wanted to know what sits underneath, where the real work happens somewhere you never see.",
    investigated: [
      "What a mainframe really is: a mission-critical system built to handle millions of transactions, never lose data, and run for decades.",
      "Why banks that were processing millions of transactions before Java, Python or the cloud existed still trust the same core.",
      "What a UPI payment actually touches, from the interface down to the ledger.",
    ],
    learned: [
      "COBOL was built for business and money: exact decimal calculations, deterministic behaviour, stability and easy auditing.",
      "The interface can be Java, Kotlin or React and the APIs can be modern, but when money moves, COBOL programs on mainframes update the ledgers.",
      "Banks choose mainframes for guaranteed correctness, not for speed.",
    ],
    takeaway:
      "Frontends change fast. Cores never rush. Sometimes the strongest technology is the one that never fails.",
    post: `${linkedin}cobol-mainframes-bankingsystems-activity-7411081575854952448-shGb`,
  },
  {
    slug: "onion",
    doodle: "layers",
    topic: "Privacy",
    date: "Jun 2026",
    origin: "Pure curiosity",
    question: "What does a website ending in .onion actually mean?",
    why: "I noticed one while watching the film Hide & Seek. I had only ever heard the dark web as a movie word, and assumed it was untraceable and criminal. Then I started reading and realised I had misunderstood quite a lot.",
    investigated: [
      "The three layers of the internet: the surface web, the deep web and the dark web.",
      "A small timeline: Onion Routing proposed in 1995, Tor released publicly in 2002, the Tor Project established in 2006.",
      "How traffic passes through multiple encrypted relays instead of travelling straight to a site.",
    ],
    learned: [
      "Each relay only knows where the data came from and where it goes next, never the complete path.",
      "The dark web was not originally made for criminals. It began as a way to protect the communication of intelligence officers.",
      "Journalists, researchers, activists and whistleblowers use these tools too, and developers can host their own .onion sites.",
    ],
    takeaway:
      "Privacy can be an engineering property of how traffic is routed. Behind a small .onion address sits nearly thirty years of privacy engineering.",
    post: `${linkedin}darkweb-cybersecurity-tor-activity-7474656938425794560-imtM`,
  },
  {
    slug: "agents",
    doodle: "agent",
    topic: "AI",
    date: "May to Jun 2026",
    origin: "Related to SmartHire",
    question: "What is the difference between automation, an AI pipeline and an AI agent?",
    why: "An interviewer asked me. I knew all three terms and still could not explain them clearly. That moment showed me how often we use these words interchangeably when they solve very different problems.",
    investigated: [
      "How the three terms differ, and how I could show it in one simple visual.",
      "Everyday agents already in our pockets: a phone that notices moisture in its charging port, warns you and protects itself without being asked.",
      "Where my own work sits, in SmartHire.",
    ],
    learned: [
      "Not every smart system is an AI agent. Sometimes it is just well-designed automation.",
      "An agent perceives, decides and acts on its own. Phone sensors have been doing small versions of that, quietly, for years.",
    ],
    takeaway:
      "Precise vocabulary changes how you design. Before calling something an agent I now ask what it senses, what it decides, and what it does on its own.",
    post: `${linkedin}systemdesign-ai-aiagents-activity-7477584153685897216-wMiv`,
  },
  {
    slug: "gui",
    doodle: "window",
    topic: "Human-computer interaction",
    date: "Jul 2026",
    origin: "Pure curiosity",
    question: "Why can a three-year-old use a smartphone?",
    why: "While reading about operating systems I reached a small topic, the graphical user interface. The definition was simple, but one question stopped me: what did people do before it?",
    investigated: [
      "What computing looked like with no icons, windows or mouse, only typed commands.",
      "What one small typing mistake meant when nothing was forgiving.",
    ],
    learned: [
      "Using a computer was mainly for people who knew the commands. The GUI removed one barrier, touchscreens another, and AI is now removing more.",
      "People did not suddenly become smarter. Technology became simpler.",
    ],
    takeaway:
      "The best inventions make people feel capable, not just machines smarter. A good question for any app flow: which barrier does this remove?",
    post: `${linkedin}gui-operatingsystems-technology-activity-7486081382469754880-CZGX`,
  },
  {
    slug: "notifications",
    doodle: "bell",
    topic: "Mobile",
    date: "Production work",
    origin: "From production work at Cyepro",
    question:
      "When an app is closed, how does a notification still find it, and how does a tap know where to go?",
    why: "Push notifications and background location tracking were part of a production app I worked on. Delivering a message and landing the user on the right screen turned out to be two separate problems.",
    investigated: [
      "How Firebase Cloud Messaging treats an app that is in the foreground, in the background, or fully closed.",
      "How different kinds of notification should each navigate to their own screen.",
      "How deep-linking schemes carry a person from outside the app to a specific place inside it.",
      "How background location tracking keeps running while the app is not on screen.",
    ],
    learned: [
      "The same push message behaves differently depending on the state of the app, so each state has to be handled on purpose.",
      "Opening from a closed app and opening from the background are different entry points that both have to end on the right screen.",
      "A notification, a link and an ordinary tap should all lead to consistent destinations.",
    ],
    takeaway: "A notification is only half a feature. The other half is where the tap lands.",
  },
];
