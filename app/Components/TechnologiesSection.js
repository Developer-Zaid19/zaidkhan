"use client";
import { motion } from "framer-motion";
import { techCategories, techList } from "./homeData";
import { fadeUp, scaleIn } from "./animations";
import Link from "next/link";

export default function TechnologiesSection() {
  return (
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
        <Link
        href={"./technologies"}>
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
        </Link>
    
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
  );
}
