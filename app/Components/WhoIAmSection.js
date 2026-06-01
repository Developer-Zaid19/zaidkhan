"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "./animations";

export default function WhoIAmSection() {
  return (
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
            <span className="font-semibold text-(--text)">I&apos;m Zaid</span>, a Full Stack{" "}
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
  );
}
