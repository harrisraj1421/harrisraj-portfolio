"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative z-20 w-full bg-transparent py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-[120px]" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            PROFILE & STRENGTHS
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight max-w-3xl">
            Computer Science Engineering Student <span className="text-white/40 italic font-serif">building real-world solutions.</span>
          </h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 font-light text-white/60 text-lg leading-relaxed">
            <p>
              I am a final-year CS Engineering student at Meenakshi Sundararajan Engineering College, driven by a passion for technical excellence and creative expression. I focus on building practical, high-impact tech applications.
            </p>
            <p>
              My unique blend of technical and artistic skills—from professional portrait artistry to blockchain development—allows me to approach problem-solving with both logic and creative intuition.
            </p>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-16">
             <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-10">Academic Journey</h3>
             <div className="space-y-12">
                <div>
                   <h4 className="text-xl md:text-2xl font-bold text-white">B.E Computer Science Engineering</h4>
                   <p className="text-white/50 font-light mt-1">Meenakshi Sundararajan Engineering College</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-lg font-bold text-white">Higher Secondary (12th)</h4>
                      <p className="text-white/50 font-light mt-1 text-sm uppercase tracking-widest">Kendriya Vidyalaya — Pass</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-lg font-bold text-white">Secondary (10th)</h4>
                      <p className="text-white/50 font-light mt-1 text-sm uppercase tracking-widest">Kendriya Vidyalaya — Pass</p>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-16">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-3">Location</span>
              <span className="text-white text-base font-medium">Chennai, India</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-3">Approach</span>
              <span className="text-white text-base font-medium">Problem-Solving</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-3">Adaptability</span>
              <span className="text-white text-base font-medium">Quick Learner</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-3">Interests</span>
              <span className="text-white text-base font-medium">Guitarist & Artist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
}
