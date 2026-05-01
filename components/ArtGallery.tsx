"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Filter, ArrowLeft, ZoomIn, ZoomOut, Download, Share2, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = ["All", "Digital Art", "Sketches", "Illustrations", "Concept Art"];


export default function ArtGallery() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [selectedArt, setSelectedArt] = useState<any | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const res = await fetch("/api/art");
        const data = await res.json();
        setArtworks(data);
      } catch (error) {
        console.error("Failed to fetch art:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArt();
  }, []);

  const filteredArt = artworks.filter(art => filter === "All" || art.category === filter);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!selectedArt) return;
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans">
      {/* Museum Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <Link 
          href="/" 
          className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="text-xl font-black tracking-[0.2em]">
          MUSEUM <span className="h-1.5 w-1.5 inline-block rounded-full bg-white ml-1" />
        </div>
        <div className="hidden md:flex gap-8">
           {CATEGORIES.map(cat => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                 filter === cat ? "text-white" : "text-white/30 hover:text-white/60"
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            GALLERY <span className="text-white/20 italic font-serif">d'art</span>
          </h1>
          <p className="text-white/40 text-sm md:text-base tracking-[0.3em] uppercase font-bold max-w-xl mx-auto px-6">
            A curated collection of digital expressions and traditional studies.
          </p>
        </motion.div>

        {/* Parallax Background Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </header>

      {/* Filter for Mobile */}
      <div className="md:hidden flex flex-wrap justify-center gap-4 px-6 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-[8px] font-bold uppercase tracking-widest border rounded-full transition-all ${
              filter === cat ? "bg-white text-black border-white" : "border-white/10 text-white/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <main className="container-custom pb-32 min-h-[50vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="animate-spin text-white/20" size={48} />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Curating Exhibition...</p>
          </div>
        ) : filteredArt.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4 opacity-20">
            <h3 className="text-2xl font-bold uppercase tracking-widest">No artwork found</h3>
            <p className="text-xs tracking-[0.2em]">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArt.map((art, idx) => (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative cursor-none"
                  onClick={() => setSelectedArt(art)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                    <Image
                      src={art.image || "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop"}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInHover={{ y: 0, opacity: 1 }}
                        className="space-y-2"
                      >
                        <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/40">
                          {art.category} • {art.year}
                        </span>
                        <h3 className="text-2xl font-black tracking-tight">{art.title}</h3>
                        <p className="text-[10px] text-white/60 uppercase tracking-widest">{art.medium}</p>
                      </motion.div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} className="text-white/40" />
                    </div>
                  </div>

                  {/* Info below card for mobile or subtle hint */}
                  <div className="mt-4 md:hidden">
                    <h3 className="text-sm font-bold tracking-widest uppercase">{art.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Lightbox / Showcase View */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col md:flex-row overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Image Side */}
            <div className="relative flex-1 h-[60vh] md:h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: zoomLevel, opacity: 1 }}
                 className="relative w-full h-full"
                 style={{ 
                   transformOrigin: "center",
                   cursor: zoomLevel > 1 ? "grab" : "zoom-in"
                 }}
                 onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : 1)}
               >
                 <Image
                    src={selectedArt.image}
                    alt={selectedArt.title}
                    fill
                    className="object-contain"
                  />
               </motion.div>

               {/* Zoom Controls */}
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                 <button onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.2))}><ZoomOut size={18} /></button>
                 <div className="w-px h-4 bg-white/10" />
                 <button onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.2))}><ZoomIn size={18} /></button>
               </div>
            </div>

            {/* Info Side */}
            <motion.aside 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-full md:w-[400px] bg-black border-l border-white/5 p-8 md:p-12 flex flex-col justify-between"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
                      Case Study
                    </span>
                    <h2 className="text-4xl font-black tracking-tighter leading-none">
                      {selectedArt.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => { setSelectedArt(null); setZoomLevel(1); }}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 block mb-2">Category</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedArt.category}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 block mb-2">Year</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedArt.year}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 block mb-2">Medium</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{selectedArt.medium}</span>
                  </div>
                </div>

                <div className="space-y-4">
                   <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 block">Description</span>
                   <p className="text-sm text-white/60 leading-relaxed font-light">
                     {selectedArt.description}
                   </p>
                </div>
              </div>

              <div className="pt-12 flex gap-4">
                 <button className="flex-1 py-4 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                   <Download size={14} /> Download HQ
                 </button>
                 <button className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
                   <Share2 size={16} />
                 </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor Hint */}
      {!selectedArt && (
        <motion.div 
          className="fixed pointer-events-none z-[60] w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mix-blend-difference"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y,
            x: "-50%",
            y: "-50%"
          }}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
        >
          <span className="text-[8px] font-bold uppercase tracking-tighter">VIEW</span>
        </motion.div>
      )}

      {/* Global Mouse Tracker for Custom Cursor */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      />
    </div>
  );
}
