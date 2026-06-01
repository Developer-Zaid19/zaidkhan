"use client";
import { motion } from "framer-motion";
import { templates } from "./homeData";

export default function DemoSection() {
  return (
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
            Want something similar? Let&apos;s build yours!
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
            Let&apos;s Build Your <span className="gradient-text">Website</span>
          </h3>
          <p className="text-(--text-muted) text-sm max-w-md mx-auto mb-7 leading-relaxed">
            Restaurant, store, institute, portfolio — I build fast, modern websites for every business. WhatsApp me and let&apos;s get started!
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
  );
}
