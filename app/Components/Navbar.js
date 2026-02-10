import React from 'react'
import Link from 'next/link';

const navlinkes = [
  { name: "Portfolio", href: "./" },
  { name: "Skilles", href: "./skilles" },
  { name: "About", href: "./about" },
  { name: "Contact", href: "./contact" }
];


const Navbar = () => {
    return (
        <nav className="flex justify-end items-center px-20 py-8">
            
            <ul className="flex gap-8 text-slate-300">
        {navlinkes.map((l) => {

            return (
              <Link
              className='font-semibold'
                key={l.name}
                href={l.href}           
              >
                {l.name}
              </Link>
            );
          })}
            </ul>
        </nav>
    )
}

export default Navbar
