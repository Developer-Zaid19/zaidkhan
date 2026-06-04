"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { project } from "../Components/homeData"


export default function projectsection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--bgsection)">
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
            <p className="sec-label mb-3">From My Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-(--text-muted) text-sm mt-3 max-w-md leading-relaxed">
                Here, My projects that show my practical work.
            </p>
          </div>
    
          <a
            href={"/project"}            
            className="-0 px-6 py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] transition-all duration-300 self-start sm:self-auto"
          >
            View All Projects →
          </a>
        </motion.div> 


        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.map((t, i) => (
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

              </div>
    
              {/* ── Card Body ── */}
              <div className="p-6">
    
                <h3 className="text-lg font-bold text-(--text) mb-2 group-hover:text-(--maincolor) transition-colors duration-300">
                  {t.title}
                </h3>
    
                <p className="text-sm text-(--text-muted) leading-relaxed mb-4">
                  {t.description}
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
                  // href={t.url}
                  href={`./project/${t.url}`}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-(--border) text-(--text-muted) text-sm font-medium hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(34,197,94,0.05)] hover:shadow-[0_0_15px_var(--mainglow)] transition-all duration-300 group"
                >
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
    
              </div>
            </motion.div>
          ))}
        </div>
    
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/project"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl bg-(--maincolor) text-(--bgcolor) font-bold text-sm hover:shadow-[0_0_30px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              See All projects →
            </a>
          </motion.div>
    
      </div>
    </section>
  );
}
