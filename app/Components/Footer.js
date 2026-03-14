import React from "react";

const footerLinks = [
  { name: "Home",    href: "#home" },
  { name: "About",   href: "#about" },
  { name: "Skills",  href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub",   href: "https://github.com/Developer-Zaid19",             icon: "GH" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/developer-zaid29",    icon: "LI" },
  { name: "Instagram",href: "https://www.instagram.com/dvlprzaid/",            icon: "IG" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--border)] overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--maincolor)] flex items-center justify-center text-[var(--bgcolor)] font-bold text-sm shadow-[0_0_20px_var(--mainglow)]">
                ZK
              </div>
              <span className="text-xl font-bold text-[var(--maincolor)]">Zaid Khan</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Full Stack Developer building scalable web & mobile applications with modern technologies.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--text-muted)] hover:border-[var(--maincolor)] hover:text-[var(--maincolor)] hover:shadow-[0_0_12px_var(--mainglow)] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-[var(--maincolor)] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--maincolor)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[var(--border)] group-hover:bg-[var(--maincolor)] group-hover:w-6 transition-all duration-300" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-[var(--maincolor)] mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-[var(--text-muted)] block text-xs uppercase tracking-widest mb-1">Email</span>
                <a
                  href="mailto:developerzaid26@gmail.com"
                  className="text-[var(--text)] hover:text-[var(--maincolor)] transition-colors duration-300 break-all"
                >
                  developerzaid26@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)] block text-xs uppercase tracking-widest mb-1">Location</span>
                <span className="text-4xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-[var(--kesari)] via-[var(--text)] to-[var(--hara)]">
                  India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
          <span>Made with <span className="text-red-400">♥</span> by Zaid Khan</span>
          <span>© {new Date().getFullYear()} ZaidKhan. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}