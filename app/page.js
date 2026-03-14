"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import text from "./Components/text.json";
import { useState, useEffect } from "react";

// ── Data ────────────────────────────────────────────────
const socialLinks = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/developer-zaid29", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/Developer-Zaid19", label: "GitHub" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/LucknowiiDeveloper", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/dvlprzaid/", label: "Instagram" },
];

const services = [
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

const techList = [
  "HTML / CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS",
  "Kotlin", "Git & GitHub", "JetPack Compose", "Python", "Numpy",
  "Pandas", "Matplotlib", "Mongo DB", "My Sql", "Flask",
  "React Native", "CrossPlatform & Native Apps", "AnalyticsPanel",
  "Prediction Model", "C/C++",
];

const techCategories = [
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
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};


const templates = [
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

// ── Component ────────────────────────────────────────────
export default function Home() {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const submithandle = async (formData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (!result.success) {
      alert("We are trying to reply faster");
    } else {
      alert("I will contact you soon!");
      reset();
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://devzaidbackend.onrender.com/api/content/blogs",
          { cache: "no-store" }
        );
        if (!res.ok) { setError(true); return; }
        const data = await res.json();
        // sirf latest 3 blogs
        setBlogs(data.slice(0, 3));
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const getParagraphById = (id) => text.find((item) => item.id === id)?.paragraph;

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">

        {/* Radial spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.07),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-28 pb-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* ── LEFT ── */}
            <motion.div
              className="max-w-xl text-center lg:text-left order-2 lg:order-1"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            >
              {/* eyebrow */}
              <motion.p variants={fadeUp} className="sec-label mb-3">
                ✦ Available for Freelance
              </motion.p>

              {/* greeting */}
              <motion.p variants={fadeUp} className="text-(--text-muted) text-base mb-1">
                Hello, It's Me
              </motion.p>

              {/* name */}
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold my-3 leading-tight">
                Zaid Khan
              </motion.h1>

              {/* title */}
              <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl mb-4 font-medium text-(--text-muted)">
                And I'm a{" "}
                <span className="text-(--maincolor) gradient-text">Software Developer</span>
              </motion.h2>

              {/* desc */}
              <motion.p variants={fadeUp} className="text-(--text-muted) mb-7 leading-relaxed text-sm sm:text-base">
                I help startups & small businesses build fast, modern systems
                that convert visitors into customers.
              </motion.p>

              {/* Social Icons */}
              <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-3 mb-7">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={item.href}
                    aria-label={item.label}
                    className="w-10 h-10 border border-(--border) rounded-xl flex items-center justify-center text-(--text-muted) hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.08)] hover:shadow-[0_0_12px_var(--mainglow)] hover:scale-110 transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-7 py-3 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300 text-center w-full sm:w-auto"
                >
                  Free Consultation →
                </a>
                <a
                  href="#skills"
                  className="px-7 py-3 rounded-xl border border-(--border) text-(--text-muted) font-medium text-sm hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] transition-all duration-300 text-center w-full sm:w-auto"
                >
                  View Skills
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="mt-10 flex gap-8 justify-center lg:justify-start">
                {[
                  { num: "2+", label: "Years Exp." },
                  { num: "15+", label: "Projects" },
                  { num: "3", label: "Domains" },
                ].map((s, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-(--maincolor) glow-text">{s.num}</div>
                    <div className="text-xs text-(--text-muted) mt-0.5 tracking-wide">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>


            {/* ── RIGHT: Hexagon Image — original structure preserved ── */}
            <motion.div
              className="relative flex justify-center order-1 lg:order-2 shrink-0"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Outer slow spinning ring */}
              <div
                className="absolute rounded-full border border-(--border) opacity-60 animate-spin pointer-events-none"
                style={{ inset: "-24px", animationDuration: "22s" }}
              />
              {/* Inner dashed ring */}
              <div
                className="absolute rounded-full border border-dashed border-(--border) opacity-30 pointer-events-none"
                style={{ inset: "-8px" }}
              />

              {/* Hexagon — exact same as original, just glow upgraded */}
              <div
                className="w-72 h-72 sm:w-96 sm:h-96 bg-linear-to-b from-(--maincolor) to-(--bgfcolor) flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.35)] float pulse-glow"
                style={{
                  clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                {/* image — exact same as original */}
                <img
                  src="/zaidkhan.png"
                  alt="profile"
                  className="mt-16 object-cover w-56 sm:w-fit"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-5 bg-(--bgcolor) border border-(--border) rounded-xl px-3 py-2 shadow-[0_0_20px_var(--mainglow)]">
                <span className="text-[10px] text-(--text-muted) block">Status</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--maincolor) animate-pulse shadow-[0_0_6px_var(--maincolor)]" />
                  <span className="text-xs font-semibold text-(--maincolor)">Open to Work</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          2. WHO I AM
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.15),transparent_70%)]" />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-2 border-(--border) shadow-[0_0_40px_var(--mainglow)]">
                <Image
                  src="/zaidkhanwhoi.png"
                  alt="Profile"
                  fill
                  className="object-cover transform -scale-x-100"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full border border-(--border) opacity-50" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="sec-label mb-3">Who I Am</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the Web,{" "}
              <span className="gradient-text">One Line at a Time</span>
            </h2>
            <p className="text-(--text-muted) leading-relaxed text-base sm:text-lg">
              <span className="font-semibold text-(--text)">I'm Zaid</span>, a Full Stack{" "}
              <span className="font-semibold text-(--maincolor)">Web Developer</span> and{" "}
              <span className="font-semibold text-(--maincolor)">App Developer</span> (CrossPlatform/AndroidNative).
              I build modern, scalable software with{" "}
              <span className="font-semibold text-(--maincolor)">Data Analytics</span> and prediction systems.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "20+", label: "Tech Skills" },
                { num: "∞", label: "Curiosity" },
                { num: "100%", label: "Dedication" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-(--maincolor)">{s.num}</div>
                  <div className="text-xs text-(--text-muted) mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* ════════════════════════════════════════
          3. SERVICES / TECH STACK
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="sec-label mb-3">What I Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:glow-border group transition-all duration-300"
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-(--maincolor) mb-3">{s.title}</h3>
                <p className="text-sm text-(--text-muted) leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-(--mainglow) text-(--mainsoft) font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          4. ABOUT — MY STORY
      ════════════════════════════════════════ */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="sec-label mb-3">My Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Story</span>
            </h2>
          </motion.div>

          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass rounded-2xl p-8 sm:p-12 mb-8"
          >
            <p className="text-base sm:text-lg text-(--text-muted) leading-relaxed">
              {getParagraphById(1)}
            </p>
          </motion.div>

          <div className="divider my-12" />

          {/* 0 to Hero */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="gradient-text">0 to HERO</span>
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-base sm:text-lg text-(--text-muted) leading-relaxed">
                {getParagraphById(3)}
              </p>
              <p className="text-base sm:text-lg text-(--text-muted) leading-relaxed">
                {getParagraphById(4)}
              </p>
            </div>
          </motion.div>

          <div className="divider my-12" />

          {/* My Skills */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { id: 5, title: "Web Development", align: "" },
              { id: 6, title: "App Development", align: "md:ml-auto" },
              { id: 7, title: "Data Science", align: "" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full md:w-[72%] ${s.align} glass rounded-2xl p-6 sm:p-8 hover:glow-border transition-all duration-300`}
              >
                <h3 className="text-xl font-bold text-(--maincolor) mb-3">{s.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-(--text-muted)">
                  {getParagraphById(s.id)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Start Any Project →
            </a>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════
          5. TECHNOLOGIES
      ════════════════════════════════════════ */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="sec-label mb-3">Tech Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
          </motion.div>

          {/* 3 category cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {techCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 hover:glow-border transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-(--maincolor) mb-5 text-center">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-(--text-muted)">
                      <span className="text-(--maincolor) mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tech tags grid */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-center mb-8">
              Full <span className="text-(--maincolor)">Tech List</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {techList.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="glass rounded-xl px-4 py-3 text-center text-xs sm:text-sm font-medium text-(--text-muted) hover:text-(--maincolor) hover:glow-border hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Start Project →
            </a>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════
          6. BLOG SECTION
      ════════════════════════════════════════ */}

      <section id="blogs" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
          >
            <div>
              <p className="sec-label mb-3">From My Desk</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Latest <span className="gradient-text">Blogs</span>
              </h2>
              <p className="text-(--text-muted) text-sm mt-3 max-w-md leading-relaxed">
                Simple, beginner-friendly articles about programming and tech — without the unnecessary theory.
              </p>
            </div>

            <a
              href="https://developerzaid.vercel.app/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] transition-all duration-300 self-start sm:self-auto"
            >
              View All Blogs →
            </a>
          </motion.div>

          {/* ── Loading state ── */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 animate-pulse space-y-4"
                >
                  <div className="h-3 w-1/3 bg-[rgba(34,197,94,0.1)] rounded-full" />
                  <div className="h-5 w-3/4 bg-[rgba(34,197,94,0.08)] rounded-full" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-[rgba(255,255,255,0.04)] rounded-full" />
                    <div className="h-3 w-5/6 bg-[rgba(255,255,255,0.04)] rounded-full" />
                    <div className="h-3 w-4/6 bg-[rgba(255,255,255,0.04)] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Error state ── */}
          {!loading && error && (
            <div className="glass rounded-2xl p-10 text-center">
              <p className="text-2xl mb-3">📡</p>
              <p className="text-(--text-muted) text-sm">
                Could not load blogs right now.{" "}
                <a
                  href="https://developerzaid.vercel.app/blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--maincolor) underline hover:opacity-80"
                >
                  Visit blog site directly →
                </a>
              </p>
            </div>
          )}

          {/* ── Blog Cards ── */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 flex flex-col justify-between group hover:glow-border transition-all duration-300"
                >
                  {/* Top */}
                  <div>
                    {/* Blog number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-(--mainsoft) tracking-widest">
                        BLOG #{String(i + 1).padStart(2, "0")}
                      </span>
                      {blog.date && (
                        <span className="text-xs text-(--text-muted)">{blog.date}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-(--text) mb-3 leading-snug group-hover:text-(--maincolor) transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-(--text-muted) leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-6 pt-4 border-t border-(--border) flex items-center justify-between">
                    <span className="text-xs text-(--text-muted)">📖 Read article</span>
                    <a
                      href={`https://developerzaid.vercel.app/blogs/${blog.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-(--maincolor) hover:glow-text hover:underline transition-all duration-300 flex items-center gap-1"
                    >
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ── Empty state ── */}
          {!loading && !error && blogs.length === 0 && (
            <div className="glass rounded-2xl p-10 text-center">
              <p className="text-2xl mb-3">✍️</p>
              <p className="text-(--text-muted) text-sm">No blogs yet. Coming soon!</p>
            </div>
          )}

          {/* ── Bottom CTA ── */}
          {!loading && !error && blogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="https://developerzaid.vercel.app/blogs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
              >
                Read All Blogs →
              </a>
            </motion.div>
          )}

        </div>
      </section>

      {/* ════════════════════════════════════════
          7. Demo section
      ════════════════════════════════════════ */}

      <section id="demos" className="py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="sec-label mb-3">What I Can Build</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Demo <span className="gradient-text">Templates</span>
            </h2>
            <p className="text-(--text-muted) text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Real websites built for local businesses — restaurants, stores, institutes.
              Want something similar? Let's build yours!
            </p>
          </motion.div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-300"
              >

                {/* ── Preview Image ── */}
                <div className="relative overflow-hidden h-52 bg-[rgba(34,197,94,0.04)]">

                  {/* Placeholder — jab tak screenshot nahi lagaate */}
                   {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[rgba(34,197,94,0.08)] to-[rgba(2,6,23,0.8)]">
                    <span className="text-6xl">{t.emoji}</span>
                    <span className="text-xs text-(--text-muted) tracking-widest uppercase">
                      Preview
                    </span>
                  </div> */}

                  {/* Real screenshot — uncomment karo jab image laga lo */}
                  
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                /> 
               

                  {/* Live badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-(--bgcolor) border border-(--border) rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--maincolor) animate-pulse" />
                    <span className="text-[10px] font-semibold text-(--maincolor)">Live</span>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-6">

                  <h3 className="text-lg font-bold text-(--text) mb-2 group-hover:text-(--maincolor) transition-colors duration-300">
                    {t.title}
                  </h3>

                  <p className="text-sm text-(--text-muted) leading-relaxed mb-4">
                    {t.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {t.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.08)] text-(--mainsoft) font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={t.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] hover:shadow-[0_0_15px_var(--mainglow)] transition-all duration-300 group"
                  >
                    <span>View Live Site</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass rounded-2xl px-8 py-10"
          >
            <p className="text-(--text-muted) text-sm mb-2 sec-label">Want one for your business?</p>
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Your <span className="gradient-text">Website</span>
            </h3>
            <p className="text-(--text-muted) text-sm max-w-md mx-auto mb-7 leading-relaxed">
              Restaurant, store, institute, portfolio — I build fast, modern websites for every business. WhatsApp me and let's get started!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Get Your Website →
            </a>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          8. CONTACT
      ════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="sec-label mb-3">Let's Work Together</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left — Info */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="glass rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Contact <span className="text-(--maincolor)">Me</span>
                </h3>
                <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed mb-8">
                  Need{" "}
                  <span className="text-(--maincolor) font-semibold">Professional</span> help with website,
                  app development, or data projects? Email me at{" "}
                  <a href="mailto:developerzaid26@gmail.com" className="text-blue-400 underline hover:opacity-80">
                    developerzaid26@gmail.com
                  </a>{" "}
                  or fill this form. I build scalable, fast, modern solutions for real-world{" "}
                  <span className="text-(--maincolor) font-semibold">Problems</span>.
                </p>

                {/* Info cards */}
                <div className="space-y-3">
                  {[
                    { icon: "📧", label: "Email", val: "developerzaid26@gmail.com", href: "mailto:developerzaid26@gmail.com" },
                    { icon: "📍", label: "Location", val: "Lucknow, India", href: null },
                    { icon: "💬", label: "WhatsApp", val: "+91 9044337110", href: "https://wa.me/919044337110" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-(--mainglow) border border-(--border) hover:border-(--border-hover) transition-all">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <div className="text-xs text-(--text-muted) uppercase tracking-widest">{c.label}</div>
                        {c.href
                          ? <a href={c.href} className="text-sm font-medium text-(--text) hover:text-(--maincolor) transition-colors">{c.val}</a>
                          : <span className="text-sm font-medium text-(--text)">{c.val}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="mailto:developerzaid26@gmail.com"
                  className="flex-1 py-3 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm text-center hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
                >
                  📧 Email Me
                </a>
                <a
                  href="https://wa.me/919044337110?text=Hi%20I%20want%20a%20website%20like%20this"
                  className="flex-1 py-3 rounded-xl border-2 border-(--maincolor) text-(--maincolor) font-bold text-sm text-center hover:bg-(--mainglow) hover:scale-105 transition-all duration-300"
                >
                  💬 WhatsApp Me
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit(submithandle)}>

                <div>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 3, message: "Min 3 characters" },
                      maxLength: { value: 15, message: "Max 15 characters" },
                    })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      minLength: { value: 5, message: "Min 5 characters" },
                      maxLength: { value: 50, message: "Max 50 characters" },
                    })}
                    type="email"
                    placeholder="Email or Phone"
                    className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 5, message: "Min 5 characters" },
                      maxLength: { value: 500, message: "Max 500 characters" },
                    })}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border border-(--border) rounded-xl px-5 py-3.5 outline-none focus:border-(--maincolor) focus:shadow-[0_0_15px_var(--mainglow)] transition-all placeholder:text-(--text-muted) text-(--text) text-sm resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.message.message}</p>}
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm bg-(--maincolor) text-(--bgcolor) hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}