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
    <section id="skills" className="relative w-full bg-background px-6 py-32 md:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">
              Capabilities & Recognition
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
              A blend of <span className="text-white/40 italic">Logic and Practicality</span> in real-world application.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-32">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-10 group-hover:text-white transition-colors">
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
                    className="text-sm font-light text-white/60 border border-white/10 px-4 py-1.5 rounded-full"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-24 pt-24 border-t border-white/10">
           <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.5em] mb-12">Main Certifications</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div 
                   key={cert.name}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col gap-2"
                >
                   <span className="text-white text-lg font-medium">{cert.name}</span>
                   <span className="text-white/30 text-xs uppercase tracking-widest font-bold">{cert.issuer}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
