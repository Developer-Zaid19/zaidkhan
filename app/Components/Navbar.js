"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navlinkes = [
  { name: "Portfolio", href: "/" },
  { name: "Skills", href: "/Technologies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-(--maincolor)">
          ZK
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {navlinkes.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="font-semibold hover:text-(--maincolor) transition"
            >
              {l.name}
            </Link>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-(--maincolor)"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 text-slate-300 bg-black">
          {navlinkes.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="font-semibold hover:text-(--maincolor) transition"
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
