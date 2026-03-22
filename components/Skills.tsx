"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    skills: ["Java", "SQL", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Node.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL Server"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Excel", "Infosys Springboard"],
  },
];

const CERTIFICATIONS = [
  { name: "Java (Basic)", issuer: "HackerRank" },
  { name: "SQL (Top 10%)", issuer: "TestDome" },
  { name: "Supply Chain Analysis", issuer: "LinkedIn Learning" },
  { name: "Problem Solving & Design", issuer: "AOTS-JEC Programme" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-background py-24 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase mb-6">
              Capabilities & Recognition
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              A blend of <span className="text-white/40 italic font-serif">Logic and Practicality</span> in real-world application.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-32">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group">
              <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-10 group-hover:text-white transition-colors">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05) }}
                    className="text-xs font-medium text-white/40 border border-white/5 bg-white/[0.02] px-4 py-2 rounded-full group-hover:border-white/20 group-hover:text-white transition-all"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-24 pt-24 border-t border-white/5">
           <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-16">Recognition & Certifications</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div 
                   key={cert.name}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col gap-3 group"
                >
                   <span className="text-white text-lg font-bold tracking-tight group-hover:text-white/80 transition-colors leading-snug">{cert.name}</span>
                   <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-black">{cert.issuer}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>

  );
}
