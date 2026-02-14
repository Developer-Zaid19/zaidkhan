import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) mt-24">

      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-(--maincolor)">
              Zaid Khan
            </h2>
            <p className="mt-3 text-sm text-(--text)/70 leading-relaxed">
              Full Stack Developer building scalable web and mobile
              applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm ">
              <li className="hover:text-(--maincolor)"><Link href="/">Home</Link></li>
              <li className="hover:text-(--maincolor)"><Link href="/about">About</Link></li>
              <li className="hover:text-(--maincolor)"><Link href="/Technologies">Skills</Link></li>
              <li className="hover:text-(--maincolor)"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a
              href="mailto:developerzaid26@gmail.com"
              className="text-blue-500 
               underline hover:opacity-80 text-lg block"
            >
              developerzaid26@gmail.com
            </a></li>
              <li>Location: <span className="block text-5xl font-bold tracking-wide w-fit h-fit mx-auto md:mx-0 bg-clip-text bg-linear-to-br hover:bg-linear-to-bl from-(--kesari) via-(--text) to-(--hara) text-transparent">India</span></li>
              <li>
                <h3 className="font-semibold text-xl" >Social</h3>
                <a
                  href="https://github.com/Developer-Zaid19"
                  target="_blank"
                  className="hover:text-(--maincolor) transition"
                >
                  GitHub
                </a>            
                <a
                  href="https://www.linkedin.com/in/developer-zaid29"
                  target="_blank"
                  className="hover:text-(--maincolor) transition block"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-(--border) text-center text-sm text-(--text)/60"> Made with Love by
          © {new Date().getFullYear()} ZaidKhan. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
