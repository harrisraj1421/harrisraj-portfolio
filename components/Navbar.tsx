"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Art", href: "/art", target: "_blank" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="relative flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-[0.2em] text-white flex items-center gap-2"
          >
            B. HARRISRAJ<span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target || "_self"}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-all hover:text-white hover:bg-white/10 rounded-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block flex-shrink-0">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95 whitespace-nowrap inline-flex items-center justify-center backdrop-blur-md"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all active:scale-90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.target || "_self"}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="mt-12 flex flex-col items-center gap-4"
              >
                  <span className="text-white/20 text-[10px] uppercase font-bold tracking-[0.5em]">Social</span>
                  <div className="flex gap-8">
                      <a href="https://github.com/harrisraj1421" target="_blank" className="text-white/40 hover:text-white transition-colors">Github</a>
                      <a href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" target="_blank" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
                  </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

