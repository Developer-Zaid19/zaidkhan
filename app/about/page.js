// hey claude this is about page code
"use client"
import React from 'react'
import text from "../Components/text.json"
import { motion } from "framer-motion";
import Link from 'next/link';

const Page = () => {

  const getParagraphById = (id) =>
    text.find((item) => item.id === id)?.paragraph;

  return (
    <main className="overflow-hidden">

      {/* My Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-(--maincolor)"
        >
          My Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg text-(--text) max-w-3xl mx-auto"
        >
          {getParagraphById(1)}
        </motion.p>
      </section>

      <div className="bg-gray-600 opacity-40 w-full h-px"></div>

      {/* 
      hey claude this comment for you i tell you dont remove or uncomment the comment
      I Faced
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-(--maincolor)"
          >
            I Faced
          </motion.h2>

          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }} className="text-base sm:text-lg leading-relaxed text-(--text)">
            {getParagraphById(2)}
          </motion.p>
        </div>
      </section> */}

      <div className="bg-gray-600 opacity-40 w-full h-px"></div>

      {/* 0 to Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-(--maincolor)"
        >
          0 to HERO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }} className="text-base sm:text-lg leading-relaxed mb-6 text-(--text)">
          {getParagraphById(3)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }} className="text-base sm:text-lg leading-relaxed text-(--text)">
          {getParagraphById(4)}
        </motion.p>
      </section>

      <div className="bg-gray-600 opacity-40 w-full h-px"></div>

      {/* My Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-(--maincolor)"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col gap-12">

          {/* Web Dev */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
           className="w-full md:w-[70%] border-2 border-(--border) rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-(--maincolor)">
              Web Development
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-(--text)">
              {getParagraphById(5)}
            </p>
          </motion.div>

          {/* App Dev */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
           className="w-full md:w-[70%] md:ml-auto border-2 border-(--border) rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-(--maincolor)">
              App Development
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-(--text) ">
              {getParagraphById(6)}
            </p>
          </motion.div>

          {/* Data Science */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
           className="w-full md:w-[70%] border-2 border-(--border) rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-(--maincolor)">
              Data Science
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-(--text)">
              {getParagraphById(7)}
            </p>
          </motion.div>

        </div>
         <div className='mt-15 sm:mt-20 flex items-center justify-center '>
          <button className="bg-(--maincolor) rounded-2xl text-(--bgcolor) font-bold p-3 text-sm w-[60vw] md:w-[40vw]"          
              >
                <Link
                href="/contact"
                className="mx-auto"
                >
                Start Any Project
                </Link>
              </button>
        </div>
      </section>
    </main>
  )
}

export default Page
