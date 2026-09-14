"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Code2 } from "lucide-react";
import { profile } from "@/data";

const domain =
  typeof window === "undefined"
    ? "ashukumar"
    : window.location.hostname.replace(/^www\./, "");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Works", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandName = profile.firstName ? `${domain}` : "ashukrv.in";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-black/75"
      } backdrop-blur-xl border-b border-white/10`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-mono font-bold text-xl text-white tracking-widest hover:opacity-85 transition-opacity"
        >
          <Code2 className="text-white text-sm filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span>{brandName}</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-transform duration-300 origin-center ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-transform duration-300 origin-center ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Progress track */}
      <div className="h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-linear-to-r from-white to-neutral-500 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-15 bottom-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 text-2xl font-bold text-neutral-300 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
