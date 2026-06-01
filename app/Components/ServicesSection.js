"use client";
import { motion } from "framer-motion";
import { services } from "./homeData";
import { fadeUp } from "./animations";

export default function ServicesSection() {
  return (
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
  );
}
