"use client";

import React from "react";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-2xl border-t border-white/5 px-6 py-20 md:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        
        {/* Left: Branding & Message */}
        <div className="space-y-6 max-w-sm">
          <div className="text-2xl font-bold tracking-tighter text-white">
            B. HARRISRAJ<span className="text-white/20 italic font-serif">.</span>
          </div>
          <p className="text-white/40 text-sm font-light leading-relaxed uppercase tracking-widest">
            Creative Developer & Problem Solver based in Chennai, India. Turning visions into high-performance digital reality.
          </p>
        </div>

        {/* Right: Social & Navigation */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:harrisraj10d@gmail.com" className="text-xs text-white/40 hover:text-white transition-colors">
                  harrisraj10d@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                  LinkedIn <MoveRight size={10} className="inline opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://github.com/harrisraj1421" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                  GitHub <MoveRight size={10} className="inline opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[1px]">Home</a></li>
              <li><a href="#about" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[1px]">About</a></li>
              <li><a href="#projects" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[1px]">Projects</a></li>
              <li><a href="#contact" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[1px]">Contact</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-screen-xl mx-auto h-px w-full bg-white/5 my-12" />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[9px] font-bold tracking-[0.2em] text-white/20 uppercase">
          © 2026 B. HARRISRAJ. ALL RIGHTS RESERVED.
        </div>
        <div className="text-[9px] font-bold tracking-[0.2em] text-white/10 uppercase">
          Built with Next.js • Framer Motion • Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
