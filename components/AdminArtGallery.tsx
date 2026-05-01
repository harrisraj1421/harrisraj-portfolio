"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Trash2, Plus, ArrowLeft, Loader2, Image as ImageIcon, Tag, Calendar, Type, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = ["Digital Art", "Sketches", "Illustrations", "Concept Art"];

export default function AdminArtGallery() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Digital Art",
    year: new Date().getFullYear().toString(),
    medium: "",
    description: "",
    tags: "",
    imageUrl: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchArt();
  }, []);

  const fetchArt = async () => {
    setLoading(true);
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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const data = new FormData();
      if (selectedFile) data.append("file", selectedFile);
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("year", formData.year);
      data.append("medium", formData.medium);
      data.append("description", formData.description);
      data.append("tags", JSON.stringify(formData.tags.split(",").map(t => t.trim())));
      data.append("imageUrl", formData.imageUrl);

      const res = await fetch("/api/art", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setFormData({
          title: "",
          category: "Digital Art",
          year: new Date().getFullYear().toString(),
          medium: "",
          description: "",
          tags: "",
          imageUrl: ""
        });
        setSelectedFile(null);
        setPreviewUrl(null);
        fetchArt();
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this artwork?")) return;

    try {
      const res = await fetch("/api/art", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchArt();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex justify-between items-end">
          <div className="space-y-4">
             <Link href="/art" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all">
               <ArrowLeft size={14} /> Back to Gallery
             </Link>
             <h1 className="text-5xl font-black tracking-tighter">ARTWORK <span className="text-white/20">MANAGER</span></h1>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10 hidden md:block">
            MUSEUM BACKEND v1.0
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upload Form */}
          <div className="lg:col-span-1 space-y-8">
            <section className="p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-8 backdrop-blur-md">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                <Plus size={14} /> Upload New Piece
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Drag & Drop Area */}
                <div 
                  className={`relative aspect-square rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-4 text-center cursor-pointer ${
                    dragActive ? "border-white bg-white/10" : "border-white/10 hover:border-white/30 bg-white/2"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  {previewUrl ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setPreviewUrl(null); setSelectedFile(null); }}
                        className="absolute top-2 right-2 p-1 bg-black/60 rounded-full hover:bg-black"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                       <Upload size={32} className="mx-auto text-white/20" />
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Drag & Drop or Click to Browse</p>
                    </div>
                  )}
                  <input id="fileInput" type="file" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileSelection(e.target.files[0])} accept="image/*" />
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Type size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      type="text" placeholder="Title" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40"
                      value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <ImageIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40 appearance-none"
                        value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
                      >
                        {CATEGORIES.map(c => <option key={c} value={c} className="bg-black">{c}</option>)}
                      </select>
                    </div>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                      <input 
                        type="text" placeholder="Year" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40"
                        value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <FileText size={14} className="absolute left-4 top-4 text-white/20" />
                    <textarea 
                      placeholder="Medium (e.g. Charcoal on Paper)" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40 h-20"
                      value={formData.medium} onChange={e => setFormData({...formData, medium: e.target.value})}
                    />
                  </div>

                  <div className="relative">
                    <FileText size={14} className="absolute left-4 top-4 text-white/20" />
                    <textarea 
                      placeholder="Description" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40 h-32"
                      value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="relative">
                    <Tag size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      type="text" placeholder="Tags (comma separated)" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-white/40"
                      value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={uploading}
                  className="w-full py-5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-50 transition-all active:scale-95"
                >
                  {uploading ? <Loader2 size={16} className="animate-spin" /> : "Publish to Museum"}
                </button>
              </form>
            </section>
          </div>

          {/* List View */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center px-4">
               <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                 Current Collection ({artworks.length})
               </h2>
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                 Click trash to remove
               </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 size={32} className="animate-spin text-white/10" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artworks.map(art => (
                  <motion.div 
                    key={art.id} 
                    layout
                    className="group relative p-4 bg-white/2 border border-white/5 rounded-[24px] flex gap-6 hover:bg-white/5 transition-all"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
                      <Image src={art.image} alt={art.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                       <span className="text-[8px] font-bold uppercase tracking-widest text-white/20">{art.category}</span>
                       <h3 className="text-lg font-bold truncate">{art.title}</h3>
                       <p className="text-[10px] text-white/40 truncate">{art.medium}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(art.id)}
                      className="opacity-0 group-hover:opacity-100 p-3 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {!loading && artworks.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 text-white/20 space-y-4 border border-dashed border-white/5 rounded-[32px]">
                 <ImageIcon size={48} />
                 <p className="text-sm font-bold uppercase tracking-widest">No artwork in collection</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
