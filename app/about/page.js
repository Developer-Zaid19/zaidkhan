"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-linear-to-t from-(--maincolor) to-(--bgcolor) py-[10vh]">
      <div className='bg-linear-to-l from-(--bgfcolor) to-(--bgcolor) mx-auto min-h-[80vh] w-[95vw] rounded-4xl drope '>


        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <section className="mt-20 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full">
              <Image
                src="/android.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-(--maincolor)">Who I Am</h2>
            <p className="mt-4 max-w-xl text-(--text) leading-relaxed">
              <span className="font-semibold">I'm Zaid</span>, a Full Stack <span className="font-semibold">Web Developer</span> and <span className="font-semibold">Android App Developer</span>. I build modern, full-stack Software applications that are <span className="font-semibold">fast, scalable,</span> and actually <span className="font-semibold">usable</span>.
            </p>
          </motion.div>
        </section>







<section>
  <div className="w-full flex justify-center py-20">
      <div className="flex flex-col items-center">

        {/* TOP BOX */}
        <div className="px-6 py-3 rounded-xl text-white font-semibold shadow-md">
          TECH STACK
        </div>

        {/* vertical line */}
        <div className="w-[2px] h-10 bg-gray-400"></div>

        {/* horizontal line */}
        <div className="w-[900px] h-[2px] bg-gray-400"></div>

        {/* branches */}
        <div className="mt-5 flex w-[800px] justify-between">

          {/* ANDROID */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-20 bg-gray-400"></div>
            <div className="px-4 py-2  text-white rounded-lg text-sm">
              <Image
              src={"/webdevelopment.png"}
              alt="code image"
              width={200}
              height={200}
              />
              <p className="text-2xl font-bold">Web Development</p>
            </div>
          </div>

          {/* WEB */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-20 bg-gray-400"></div>
            <div className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              <Image
              src={"/appdevelopment.png"}
              alt="code image"
              width={100}
              height={100}
              />
              <p className="text-2xl font-bold">Android app Development</p>
            </div>
          </div>

          {/* LOREM */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-20 bg-gray-400"></div>
            <div className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              LOREM IPSUM
            </div>
          </div>

        </div>
      </div>
    </div>
</section>









        <section>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5"
          >
            <div className='flex w-full justify-center'>            
            <h2 className="text-6xl font-bold  bg-linear-to-r from-(--text) to-(--maincolor) bg-clip-text text-transparent">What I Actually Work With</h2>
            </div>
            <div className='border-2 border-(--border) rounded-2xl p-5 w-[30vw] space-y-3.5'>                          
            <h3 className="text-3xl font-bold text-(--maincolor) py-2.5 text-center">Web Development</h3>
            <p className="px-4">
              <ul className="list-disc text-md">
                <li>{"Next.js (SEO-friendly, fast websites)"}</li>
                <li>{"Express.js (REST APIs)"}</li>
                <li>{"MongoDB & MySQL"}</li>
                <li>{"Authentication & CRUD systems"}</li>
                <li>{"Blog & content management systems"}</li>
              </ul>
            </p>
            </div>

          </motion.div>
        </section>
      </div>
    </main>
  );
}


