import Image from "next/image";
import React from "react";
import Navbar from "./Components/Navbar";
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";


const sociallinkes = [
  { icon: <FaFacebook />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://x.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaLinkedin />, href: "https://linkedin.com" }
];


export default function Home() {
  return (
    <main className="min-h-screen text-white bg-linear-to-t from-(--maincolor) to-(--bgcolor) py-[10vh]">
     <div className='bg-linear-to-l from-(--bgfcolor) to-(--bgcolor) mx-auto h-[80vh] w-[95vw] rounded-4xl drope '>
        {/* Navbar */}
<Navbar />

        {/* Content */}
        <div className="flex justify-between items-center mt-20 px-20 ">

          {/* Left */}
          <div className="max-w-xl">
            <p className="text-slate-300 text-lg">Hello, It's Me</p>

            <h1 className="text-5xl font-bold my-3">
              Zaid Khan
            </h1>

            <h2 className="text-3xl mb-4">
              And I'm a <span className="text-(--maincolor)">Software Developer</span>
            </h2>

            <p className="text-slate-400 mb-6">
             I help startups & small businesses build fast, modern websites that convert visitors into customers.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {sociallinkes.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.href}
                  className="w-10 h-10 border-2 border-(--maincolor) rounded-full flex items-center justify-center cursor-pointer"
                >
                  {item.icon}

                </a>
              ))}
            </div>

            {/* <button className="px-8 py-3 rounded-full bg-(--maincolor) text-slate-900 font-bold">
            Download CV
          </button> */}
          </div>

          {/* Right */}
          <div className="relative">
            <div
              className="w-[380px] h-[380px] bg-linear-to-b from-(--maincolor) to-(--bgfcolor) flex items-center justify-center shadow-[1_1_40px_#22d3ee]"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              <img
                src="/android.png"
                alt="profile"
                className="w-[380px] h-[380px] object-cover"
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

