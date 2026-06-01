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
