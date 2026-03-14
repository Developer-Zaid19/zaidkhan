// hey claude this is technologies page code

"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";


export default function Skills() {

  const router = Router

  const tech = [
    { name: "HTML / CSS", urll: "htmlcss" },
    { name: "JavaScript", urll: "javascript" },
    { name: "React.js", urll: "reactjs" },
    { name: "Next.js", urll: "nectjs" },
    { name: "Tailwind CSS", urll: "tailwindcss" },
    { name: "Kotlin", urll: "kotlin" },
    { name: "Git & GitHub", urll: "git-github" },
    { name: "JetPack Compose", urll: "jpc" },
    { name: "Python", urll: "python" },
    { name: "Numpy", urll: "numpy" },
    { name: "Pandas", urll: "pandas" },
    { name: "Matplotlib", urll: "matplotlib" },
    { name: "Mongo DB", urll: "mongodb" },
    { name: "My Sql", urll: "mysql" },
    { name: "Flask", urll: "flaskpy" },
    { name: "React Native", urll: "reactnative" },
    { name: "CrossPlatform & Native Apps", urll: "cporna" },
    { name: "AnalyticsPanel", urll: "apanel" },
    { name: "Prediction Model", urll: "predmodel" },
    { name: "C/C++", urll: "ccpp" },
    { name: "", urll: "predmodel" },

  ]

  return (
    <main className="">
      <section>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 sm:px-6 lg:px-16 py-16"
        >
          <div className="flex justify-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-(--text) to-(--maincolor) bg-clip-text text-transparent md:h-14">
              Which Technologies I use
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Web Dev */}
            <div className="border-2 border-(--border) rounded-2xl p-6 space-y-4 hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl font-bold text-(--maincolor) text-center">
                Web Development
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-(--text)">
                <li>Next.js (SEO-friendly, fast websites)</li>
                <li>Express.js (REST APIs)</li>
                <li>MongoDB & MySQL</li>
                <li>Authentication & CRUD systems</li>
                <li>Management systems</li>
              </ul>
            </div>

            {/* App Dev */}
            <div className="border-2 border-(--border) rounded-2xl p-6 space-y-4 hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl font-bold text-(--maincolor) text-center">
                App Development
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-(--text)">
                <li>CrossPlatform & Android Native</li>
                <li>React Native</li>
                <li>Kotlin (Android Native)</li>
                <li>System APIs</li>
                <li>Modern Technologies</li>
              </ul>
            </div>

            {/* Other */}
            <div className="border-2 border-(--border) rounded-2xl p-6 space-y-4 hover:shadow-xl transition">
              <h3 className="text-2xl sm:text-3xl font-bold text-(--maincolor) text-center">
                Other Services
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-(--text)">
                <li>Web & PlayStore Hosting</li>
                <li>App-Website Integration</li>
                <li>Analytics Panel & ML Models</li>
                <li>Git & Version Control</li>
                <li>Domain Setup</li>
              </ul>
            </div>
          </div>
          <div className='mt-10 sm:mt-20 flex items-center justify-center '>
            <button className="bg-(--maincolor) rounded-2xl text-(--bgcolor) font-bold p-3 text-sm w-[60vw] md:w-[40vw]"
            >
              <Link
                href="/contact"
                className="mx-auto"
              >
                Start Project
              </Link>
            </button>
          </div>

        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-14 text-center">
          What Means of These{" "}
          <span className="text-(--maincolor)">Technologies</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tech
            .filter((t) => t.name !== "")
            .map((tech, i) => (
              <div
                key={i}
                className="bg-white/5 border border-(--maincolor)/30 rounded-2xl p-6
          text-center text-sm sm:text-base font-semibold
          shadow-[0_0_20px_rgba(34,197,94,0.25)]
          hover:scale-105 hover:bg-(--maincolor)/10
          transition-all duration-300"
              >
                {tech.name}
              </div>
            ))}
        </div>
      </section>
    </main>

  );
}
