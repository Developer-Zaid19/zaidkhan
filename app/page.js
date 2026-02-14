"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const sociallinkes = [
  { icon: <FaLinkedin />, href: "httpsL//www.linkedin.com/in/developer-zaid29" },
  { icon: <FaGithub />, href: "https://github.com/Developer-Zaid19" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/LucknowiiDeveloper" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/dvlprzaid/" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div className="max-w-xl text-center lg:text-left order-2 lg:order-1
">
            <p className="text-slate-300 text-lg">Hello, It's Me</p>

            <h1 className="text-4xl sm:text-5xl font-bold my-3">
              Zaid Khan
            </h1>

            <h2 className="text-2xl sm:text-3xl mb-4">
              And I'm a{" "}
              <span className="text-(--maincolor)">
                Software Developer
              </span>
            </h2>

            <p className="text-slate-400 mb-6">
              I help startups & small businesses build fast, modern systems
              that convert visitors into customers.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {sociallinkes.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.href}
                  className="w-10 h-10 border-2 border-(--maincolor) rounded-full flex items-center justify-center hover:bg-(--maincolor) hover:text-black transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-2
">
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 bg-linear-to-b from-(--maincolor) to-(--bgfcolor) flex items-center justify-center shadow-[0_0_40px_#22d3ee]"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              <img
                src="/android.png"
                alt="profile"
                className="w-full h-full object-cover"
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              />
            </div>
          </div>

        </div>
      </section>


      {/* WHO I AM */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div  className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full">
            <Image
              src="/android.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-(--border) rounded-2xl p-6 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-(--maincolor)">
            Who I Am
          </h2>

          <p className="mt-4 text-(--text) leading-relaxed text-base sm:text-lg">
            <span className="font-semibold">I'm Zaid</span>, a Full Stack{" "}
            <span className="font-semibold">Web Developer</span> and{" "}
            <span className="font-semibold">
              App Developer (CrossPlatform/AndroidNative)
            </span>. I build modern, scalable software with{" "}
            <span className="font-semibold">Data Analytics</span> and <span className="font-semibold">prediction systems</span>.
          </p>
        </motion.div>

      </section>


      
      {/* TECH STACK */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

          {/* TOP BOX */}
          <div className="px-6 py-3 font-bold shadow-md bg-clip-text text-transparent text-3xl bg-linear-to-l from-(--maincolor) to-(--text) ">
            TECH STACK
          </div>

          {/* Vertical Line */}
          <div className="w-[2px] h-12 bg-gray-400 hidden md:block"></div>

          {/* Desktop Horizontal Line */}
          <div className="hidden md:block w-full h-[2px] bg-gray-400"></div>

          {/* Branch Container */}
          <div className="w-full mt-10 flex flex-col md:flex-row md:justify-between items-center gap-16 md:gap-0">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center relative">

              {/* vertical connector (desktop only) */}
              <div className="hidden md:block absolute -top-12 w-[2px] h-10 mt-2 bg-gray-400 "></div>

              {/* vertical connector (mobile only) */}
              <div className="hidden w-[2px] h-10 bg-gray-400"></div>

              <div className="px-4 text-center">
                <Image
                  src={"/webdevelopment.png"}
                  className="mx-auto"
                  alt="web"
                  width={200}
                  height={200}
                />
                <p className="text-xl font-bold text-(--mainsoft)">
                  Web Development
                  <br />
                  <span className="text-(--text) text-sm">(Full Stack)</span>
                </p>
              </div>
            </div>


            {/* ITEM 2 */}
            <div className="flex flex-col  items-center relative">

              <div className="hidden md:block yahihai absolute -top-12 w-[2px] h-10 mt-1 ml-6 bg-gray-400 mx-auto"></div>
              <div className="hidden w-[2px] h-10 bg-gray-400"></div>

              <div className="px-4 text-center">
                <Image
                  src={"/appdevelopment.png"}
                  className="ml-17 md:ml-22"
                  alt="app"
                  width={80}
                  height={80}
                />
                <p className="text-xl font-bold text-(--mainsoft) md:ml-3">
                  App Development
                  <br />
                  <span className="text-(--text) text-sm">
                    (Cross Platform / Android Native)
                  </span>
                </p>
              </div>
            </div>


            {/* ITEM 3 */}
            <div className="flex flex-col items-center relative">

              <div className="hidden md:block absolute -top-12 w-[2px] h-10 mt-2 bg-gray-400"></div>
              <div className="hidden w-[2px] h-10 bg-gray-400"></div>

              <div className="px-4 text-center">
                <Image
                  src={"/analyticstv.png"}
                  className="mx-auto"
                  alt="data"
                  width={140}
                  height={140}
                />
                <p className="text-xl font-bold text-(--mainsoft)">
                  Data Science
                  <br />
                  <span className="text-(--text) text-sm">
                    (Data Analytics / Prediction Model)
                  </span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


    </main>
  );
}
