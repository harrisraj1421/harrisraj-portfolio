"use client";

import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "VOTECHAIN",
    category: "BLOCKCHAIN / VOTING SYSTEM",
    description: "Transparent and secure voting platform focusing on integrity and decentralization through tamper-proof blockchain architecture.",
  },
  {
    id: "02",
    title: "CAMPUS HUB",
    category: "FULL-STACK WEB PROJECT",
    description: "Multi-functional campus based platform featuring real-time data handling and responsive UI design for improved student engagement.",
  },
  {
    id: "03",
    title: "WEB EXPERIENCE",
    category: "FRONT-END ARCHITECTURE",
    description: "Multiple web applications built using modern front-end tech, exploring creative logic and practical problem-solving.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 w-full bg-background px-6 py-32 md:px-24">
      <div className="mb-20">
        <h2 className="text-sm font-medium tracking-widest text-white/30 uppercase mb-4">
          Selected Projects (GitHub /harrisraj1421)
        </h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="absolute -right-4 -top-4 text-8xl font-black text-white/[0.02] transition-colors group-hover:text-white/[0.05]">
              {project.id}
            </div>
            
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">
                  {project.category}
                </span>
                <h3 className="mt-2 text-3xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {project.title}
                </h3>
              </div>
              
              <div className="mt-12">
                <p className="text-white/50 font-light leading-relaxed">
                  {project.description}
                </p>
                <a 
                   href="https://github.com/harrisraj1421" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-8 flex items-center gap-2 text-xs font-medium text-white/80 group-hover:text-white transition-colors"
                >
                  VIEW ON GITHUB
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white opacity-0 blur-[80px] transition-opacity group-hover:opacity-10" />
          </motion.div>
        ))}
      </div>

    </section>
  );
}
