"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import text from "../Components/text.json";
import { fadeUp } from "../Components/animations";

const page = () => {
  const getParagraphById = (id) =>
    text.find((item) => item.id === id)?.paragraph;

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back to Home */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-10"
        >
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Cards — seedhi list */}
        <div className="flex flex-col gap-6">
          {[
            { id: 5, title: "Web Development" },
            { id: 6, title: "App Development" },
            { id: 7, title: "Data Science" },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full glass rounded-2xl p-6 sm:p-8 hover:glow-border transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-(--maincolor) mb-3">{s.title}</h3>
              <p className="text-sm sm:text-xl leading-relaxed text-(--text-muted)">
                {getParagraphById(s.id)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default page;