"use client";

import React from "react";
import { motion } from "framer-motion";

const ART_GALLERY = [
  { id: 1, title: "TRADITIONAL PORTRAITURE", type: "Professional Portrait Artist", color: "from-amber-700/20 to-orange-900/20" },
  { id: 2, title: "SOLO ACOUSTIC", type: "Guitarist", color: "from-blue-900/20 to-indigo-950/20" },
  { id: 3, title: "DIGITAL EXPRESSION", type: "Experimental Art", color: "from-zinc-100/10 to-transparent" },
];

export default function Art() {
  return (
    <section id="art" className="relative w-full bg-background py-24 md:py-32">
      <div className="container-custom">
        <div className="text-left mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase mb-6">
            Creative Pursuits
          </h2>
          <p className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter max-w-3xl leading-tight">
            Combining Engineering <span className="italic font-serif text-white/40">Logic</span> with Artistic <span className="text-white/40">Passion.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {ART_GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className={`group relative h-[60vh] md:h-[70vh] overflow-hidden rounded-[32px] bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/10 transition-all`}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:bg-black/20 group-hover:backdrop-blur-0 transition-all duration-700" />
              
              <div className="absolute bottom-10 left-10 text-left z-10">
                <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4 block">
                  {item.type}
                </span>
                <h3 className="text-3xl font-black text-white tracking-tighter leading-none h-9 overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                    {item.title}
                  </span>
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full text-white/40">
                    {item.title}
                  </span>
                </h3>
              </div>
              
              {/* Visual patterns */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="flex gap-2 mb-4">
                   {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [12, 40, 12] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-white rounded-full" 
                    />
                   ))}
                </div>
                <div className="h-px w-32 bg-white/20" />
              </div>

              <div className="absolute top-10 right-10 text-[10px] font-bold text-white/5 uppercase tracking-[0.5em] origin-right rotate-90">
                  CREATIVE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
