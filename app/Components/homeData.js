import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

export const socialLinks = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/developer-zaid29", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com/Developer-Zaid19", label: "GitHub" },
  { Icon: FaFacebook, href: "https://www.facebook.com/LucknowiiDeveloper", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/dvlprzaid/", label: "Instagram" },
];

export const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Full-stack web apps with Next.js, Express & MongoDB that are fast, SEO-friendly and scalable.",
    tags: ["Next.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Cross-platform & Android Native apps built with React Native and Kotlin.",
    tags: ["React Native", "Kotlin", "JetPack Compose"],
  },
  {
    icon: "📊",
    title: "Data Science",
    desc: "Analytics dashboards and ML prediction models using Python ecosystem.",
    tags: ["Python", "Pandas", "Matplotlib", "Flask"],
  },
];

export const techList = [
  "HTML / CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS",
  "Kotlin", "Git & GitHub", "JetPack Compose", "Python", "Numpy",
  "Pandas", "Matplotlib", "Mongo DB", "My Sql", "Flask",
  "React Native", "CrossPlatform & Native Apps", "AnalyticsPanel",
  "Prediction Model", "C/C++",
];

export const techCategories = [
  {
    title: "Web Development",
    items: ["Next.js (SEO-friendly, fast websites)", "Express.js (REST APIs)", "MongoDB & MySQL", "Authentication & CRUD systems", "Management systems"],
  },
  {
    title: "App Development",
    items: ["CrossPlatform & Android Native", "React Native", "Kotlin (Android Native)", "System APIs", "Modern Technologies"],
  },
  {
    title: "Other Services",
    items: ["Web & PlayStore Hosting", "App-Website Integration", "Analytics Panel & ML Models", "Git & Version Control", "Domain Setup"],
  },
];

// ── Animation variants ──────────────────────────────────
export const templates = [
  {
    id: 1,
    title: "Restaurant Website",
    desc: "A premium dark-themed restaurant website with menu, about, and WhatsApp ordering.",
    tags: ["HTML", "CSS", "Responsive"],
    image: "/demos/restaurant-demo.png", // apni screenshot yahan lagao
    liveUrl: "https://restaurant-demo-by-zaid.vercel.app/", // apna actual deployed URL yahan lagao
    emoji: "🍽️",
  },
  {
    id: 2,
    title: "Garments Store",
    desc: "A luxury fashion store website with product collection, marquee strip, and contact section.",
    tags: ["HTML", "CSS", "Responsive"],
    image: "/demos/garments-demo.png", // apni screenshot yahan lagao
    liveUrl: "https://garments-demo-by-zaid.vercel.app/", // apna actual deployed URL yahan lagao
    emoji: "👗",
  },
  {
    id: 3,
    title: "Coaching Institute",
    desc: "A professional coaching institute website with courses, results, testimonials, and enquiry form.",
    tags: ["HTML", "CSS", "Responsive"],
    image: "/demos/coaching-demo.png", // apni screenshot yahan lagao
    liveUrl: "https://coaching-demo-by-zaid.vercel.app/", // apna actual deployed URL yahan lagao
    emoji: "🎓",
  },
];

export const project = [
  {
    id: 1,
    title: "MyHadith - Mobile App & Website",
    description: "",
    tags: ["JS", "Cl-Tools", "ReactNative"],
    url: "hadith-webapp-0326",
    image: "/projects/hadith-webapp-1.png"
  },
  {
    id: 2,
    title: "PyGames - Python pygame",
    description: "",
    tags: ["Python", "Pygame", "3 Games"],
    url: "python_games_0126",
    image: "/projects/pygame-bird-1.png"
  },
  {
    id: 3,
    title: "VirtueModel - Django WebAI & Embedding",
    description: "",
    tags: ["Python", "Transformer", "Jarvis"],
    url: "local-ai-studio0526",
    image: "/projects/ai-studio-1.png"
  }
];

export const blogs = [
  {
    id: 1,
    date: "",
    title: "Difference between HDD (Hard Disk Drive) and SSD (Solid State Drive).",
    description: "In a hard disk drive(HDD), the magnetic disk continuously spins, and it has read/write heads that manage the data....",
    url: "difference-between-hdd-(hard-disk-drive)-and-ssd-(solid-state-drive).-2026-02-07-120302"
  },
  {
    id: 2,
    date: "",
    title: "Difference Between Crossplatform and Native applications",
    description: "Cross platform means a same app run in android OS and same in iOS. this technology uses framework....",
    url: "difference-between-crossplatform-and-native-applications--2026-02-10-090441"
  },
  {
    id: 3,
    date: "",
    title: "POWERFUL PROGRAMMING LANGUAGE",
    description: "Python is used for the majority of data operations. Python have Easy to use Libraries and Frameworks To Manipulate Data....",
    url: "powerful-programming-language-2026-03-26-053835"
  }
];
export const notes = [
  {
    id: 1,
    title: "Numpy - Cheatsheet",
    description: "",
    url: "Numpy-Cheatsheet0306",
    image: "/notes/numpy.png"
  },
  {
    id: 2,
    title: "Pandas - Cheatsheet",
    description: "",
    url: "Pandas-Cheatsheet0306",
    image: "/notes/Pandas_logo.svg.png"
  },
  {
    id: 3,
    title: "Quantum Computers - Hardware & Software",
    description: "",
    url: "Quantum_Computers-Hardware_&_Software0306",
    image: "/notes/10349709.png"
  },
  {
    id: 4,
    title: "Nmap - Network Scanning",
    description: "",
    url: "Nmap-Network_Scanning0306",
    image: "/notes/Nmap-practice-lab1.png"
  },
  {
    id: 5,
    title: "React Native - Cheatsheet",
    description: "",
    url: "React_Native-Cheatsheet0306",
    image: "/notes/React-icon.svg.png"
  },
  {
    id: 6,
    title: "Linux Commands - Cheatsheet",
    description: "",
    url: "Linux_Commands-Cheatsheet0306",
    image: "/notes/linux.png"
  }
];