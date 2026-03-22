"use client";

import React from "react";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-2xl border-t border-white/5 py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
          
          {/* Left: Branding & Message */}
          <div className="space-y-6 max-w-sm">
            <div className="text-2xl font-black tracking-tighter text-white">
              B. HARRISRAJ<span className="text-white/20 italic font-serif">.</span>
            </div>
            <p className="text-white/30 text-sm font-light leading-relaxed uppercase tracking-widest">
              Creative Developer & Problem Solver based in Chennai, India. Turning visions into high-performance digital reality.
            </p>
          </div>

          {/* Right: Social & Navigation */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
            <div className="space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">Inquiries</h5>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:harrisraj10d@gmail.com" className="text-xs text-white/40 hover:text-white transition-all">
                    harrisraj10d@gmail.com
                  </a>
                </li>
                <li className="flex gap-6">
                   <a href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-all">
                      <Linkedin size={18} />
                   </a>
                   <a href="https://github.com/harrisraj1421" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-all">
                       <Github size={18} />
                   </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">Navigation</h5>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                <li><a href="#home" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">Home</a></li>
                <li><a href="#about" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">About</a></li>
                <li><a href="#projects" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">Projects</a></li>
                <li><a href="#skills" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">Skills</a></li>
                <li><a href="#art" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">Art</a></li>
                <li><a href="#contact" className="text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/5 my-16" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase">
            © 2026 B. HARRISRAJ. CRAFTED WITH PRECISION.
          </div>
          <div className="text-[9px] font-bold tracking-[0.2em] text-white/10 uppercase">
            Next.js • Framer Motion • Tailwind CSS
          </div>
        </div>
      </div>
    </footer>

  );
}
