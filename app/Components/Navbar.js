"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navlinks = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Skills",   href: "#skills" },
  { name: "Blogs",    href: "#blogs" },
  { name: "Demos",    href: "#demos" },
  { name: "Contact",  href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("home");

  // Scrolled state for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = ["home", "about", "skills", "blogs", "demos",  "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    // smooth scroll to section
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(2,6,23,0.85)] backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-lg bg-[var(--maincolor)] flex items-center justify-center text-[var(--bgcolor)] font-bold text-sm shadow-[0_0_20px_var(--mainglow)] group-hover:shadow-[0_0_30px_var(--mainglow-strong)] transition-all duration-300">
            ZK
          </div>
          <span className="text-lg font-bold text-[var(--text)] hidden sm:block group-hover:text-[var(--maincolor)] transition-colors duration-300">
            Zaid Khan
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navlinks.map((l) => (
            <li key={l.name}>
              <button
                onClick={() => handleNavClick(l.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === l.href.replace("#", "")
                    ? "text-[var(--maincolor)] bg-[var(--mainglow)]"
                    : "text-[var(--text-muted)] hover:text-[var(--maincolor)] hover:bg-[var(--mainglow)]"
                }`}
              >
                {l.name}
                {active === l.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--maincolor)]" />
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-[var(--maincolor)] text-[var(--bgcolor)] hover:shadow-[0_0_20px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[var(--maincolor)] p-2 rounded-lg hover:bg-[var(--mainglow)] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col gap-1 bg-[rgba(2,6,23,0.95)] border-t border-[var(--border)]">
          {navlinks.map((l) => (
            <button
              key={l.name}
              onClick={() => handleNavClick(l.href)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === l.href.replace("#", "")
                  ? "text-[var(--maincolor)] bg-[var(--mainglow)]"
                  : "text-[var(--text-muted)] hover:text-[var(--maincolor)] hover:bg-[var(--mainglow)]"
              }`}
            >
              {l.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-4 py-3 rounded-lg bg-[var(--maincolor)] text-[var(--bgcolor)] font-semibold text-sm text-center hover:shadow-[0_0_20px_var(--mainglow-strong)] transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;