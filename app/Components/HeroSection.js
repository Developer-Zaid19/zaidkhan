"use client";
import { motion } from "framer-motion";
import { socialLinks } from "./homeData";
import { fadeUp } from "./animations";

export default function HeroSection() {
  return (
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
              Hello, It&apos;s Me
            </motion.p>
    
            {/* name */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold my-3 leading-tight">
              Zaid Khan
            </motion.h1>
    
            {/* title */}
            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl mb-4 font-medium text-(--text-muted)">
              And I&apos;m a{" "}
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
                  <item.Icon />
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
  );
}
