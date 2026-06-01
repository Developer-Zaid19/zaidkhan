"use client";
import { motion } from "framer-motion";
import text from "./text.json";
import { fadeUp, scaleIn } from "./animations";

export default function AboutSection() {
  const getParagraphById = (id) => text.find((item) => item.id === id)?.paragraph;
  return (
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
  );
}
