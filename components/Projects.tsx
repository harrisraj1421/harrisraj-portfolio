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
    <section id="projects" className="relative z-20 w-full bg-transparent py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase mb-6">
            Selected Work — GitHub /harrisraj1421
          </h2>
          <div className="h-px w-full bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-4 -top-4 text-8xl font-black text-white/[0.01] transition-colors group-hover:text-white/[0.03]">
                {project.id}
              </div>
              
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold text-white tracking-tighter transition-transform group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                </div>
                
                <div className="mt-12">
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <a 
                     href="https://github.com/harrisraj1421" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="mt-10 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/60 group-hover:text-white transition-all"
                  >
                    EXPLORE ON GITHUB
                    <span className="inline-block transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white opacity-0 blur-[80px] transition-opacity group-hover:opacity-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
