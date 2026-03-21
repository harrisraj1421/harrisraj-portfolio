"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Mail, Github, Linkedin, Twitter } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-background px-6 pt-32 pb-48 md:px-24">
      {/* Contact Modal integration */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Resume Banner integration */}
      <div id="resume" className="max-w-screen-xl mx-auto mb-48">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
          className="relative w-full rounded-[40px] bg-white/[0.02] border border-white/10 p-12 md:p-24 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Curious about my full background?
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Download my full CV to see a detailed history of my projects, leadership roles, and technical evolution over the last decade.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/90 transition-all">
                <Download size={16} /> DOWNLOAD RESUME
              </button>
              <a 
                href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-widest text-xs rounded-full border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                <Linkedin size={16} /> LINKEDIN PROFILE
              </a>
            </div>
          </div>
          
          {/* User Profile Image */}
          <div className="relative z-10 h-64 w-64 md:h-96 md:w-96 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="B. Harrisraj Profile" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Main Contact Section */}
      <div id="contact" className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-24 justify-between scroll-mt-32">
        <div className="lg:max-w-2xl">
          <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-4 block">
            Let's Talk
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-12">
            HAVE A VISION FOR THE <span className="italic font-serif text-white/40">FUTURE?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
            <div>
              <h4 className="text-[10px] uppercase font-bold text-white/20 tracking-widest mb-4">Email</h4>
              <a href="mailto:harrisraj10d@gmail.com" className="text-xl md:text-2xl font-light text-white hover:text-white/60 transition-colors">
                harrisraj10d@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold text-white/20 tracking-widest mb-4">Social</h4>
              <div className="flex gap-6 mt-2">
                <a href="https://www.linkedin.com/in/harrisraj-balaji-9a12512a2" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                </a>
                <a href="https://github.com/harrisraj1421" target="_blank" rel="noopener noreferrer">
                  <Github className="text-white/40 hover:text-white cursor-pointer transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-sm flex flex-col justify-end">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
             <Mail className="text-white/40 mb-8" size={32} />
             <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
               I'm always open to discussing blockchain systems, campus platforms, and creative technology collaborations.
             </p>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all active:scale-95"
             >
               Quick Message
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
