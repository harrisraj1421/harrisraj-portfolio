"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative z-20 w-full bg-transparent py-24 md:py-32">
      {/* Contact Modal integration */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="container-custom">
        {/* Resume Banner integration */}
        <div id="resume" className="mb-32 md:mb-48">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="relative w-full rounded-[48px] bg-white/[0.02] border border-white/5 p-8 sm:p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                Curious about my full background?
              </h2>
              <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10">
                Download my full CV to see a detailed history of my projects, leadership roles, and technical evolution.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white/90 transition-all active:scale-95">
                  <Download size={14} /> DOWNLOAD RESUME
                </button>
                <a 
                  href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-widest text-[10px] rounded-full border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Linkedin size={14} /> LINKEDIN
                </a>
              </div>
            </div>
            
            {/* User Profile Image */}
            <div className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="B. Harrisraj Profile" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Main Contact Section */}
        <div id="contact" className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-between scroll-mt-32">
          <div className="lg:max-w-2xl text-left">
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase mb-6 md:mb-8 block">
              Let's Talk
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight lg:leading-[0.85] mb-10 md:mb-16">
              HAVE A VISION FOR THE <span className="italic font-serif text-white/30">FUTURE?</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 mt-16 md:mt-24">
              <div>
                <h4 className="text-[10px] uppercase font-bold text-white/20 tracking-[0.2em] mb-4">Email</h4>
                <a href="mailto:harrisraj10d@gmail.com" className="text-lg sm:text-xl md:text-2xl font-light text-white hover:text-white/60 transition-colors border-b border-white/10 pb-1 break-words block sm:inline-block">
                  harrisraj10d@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-bold text-white/20 tracking-[0.2em] mb-4">Social</h4>
                <div className="flex gap-8 mt-2">
                  <a href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-white/40 hover:text-white cursor-pointer transition-all hover:scale-110" size={24} />
                  </a>
                  <a href="https://github.com/harrisraj1421" target="_blank" rel="noopener noreferrer">
                    <Github className="text-white/40 hover:text-white cursor-pointer transition-all hover:scale-110" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-sm flex flex-col justify-end mt-16 lg:mt-0">
            <div className="p-8 sm:p-10 md:p-12 rounded-[32px] md:rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-white/10 transition-all">
               <Mail className="text-white/20 mb-8 md:mb-10 group-hover:text-white transition-colors animate-pulse" size={40} />
               <p className="text-white/40 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
                 I'm always open to discussing blockchain systems, campus platforms, and creative technology collaborations.
               </p>
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 md:py-5 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/90 transition-all active:scale-95"
               >
                 Send Quick Message
               </button>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}
