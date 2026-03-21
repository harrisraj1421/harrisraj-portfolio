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
    <section id="art" className="relative w-full bg-background px-6 py-32 md:px-24">
      <div className="max-w-screen-xl mx-auto text-left mb-24">
        <h2 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">
          Creative Pursuits
        </h2>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter max-w-2xl leading-tight">
          Combining Engineering <span className="italic font-serif opacity-80 decoration-white/20 underline">Logic</span> with Artistic <span className="opacity-80">Passion.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ART_GALLERY.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1 }}
            className={`group relative h-[70vh] overflow-hidden rounded-3xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/20 transition-all`}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-700" />
            
            <div className="absolute bottom-10 left-10 text-left">
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 block">
                {item.type}
              </span>
              <h3 className="text-3xl font-bold text-white tracking-tight leading-none overflow-hidden h-9">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                  {item.title}
                </span>
                <span className="block transition-transform duration-500 group-hover:-translate-y-full text-white/60">
                  {item.title}
                </span>
              </h3>
            </div>
            
            {/* Visual placeholder patterns reflecting traditional art and music */}
            <div className="absolute inset-x-0 top-1/2 flex flex-col items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity space-y-4">
              <div className="flex gap-2">
                 {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-12 w-1 bg-white" style={{ opacity: Math.random() }} />
                 ))}
              </div>
              <div className="h-0.5 w-64 bg-white/20" />
            </div>

            <div className="absolute top-10 right-10 text-[10px] font-bold text-white/10 uppercase tracking-[0.5em] origin-right rotate-90">
                CREATIVE SOUL
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
