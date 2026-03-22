"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const response = await fetch("https://formspree.io/f/mqeyokqy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setTimeout(() => {
          onClose();
          setFormState("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Overlay Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto w-full max-w-xl rounded-[32px] md:rounded-[48px] border border-white/5 bg-[#0a0a0a]/95 p-8 md:p-16 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto"
            >


            <button
              onClick={onClose}
              className="absolute right-8 top-8 rounded-full bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>

            {formState !== "success" ? (
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">
                  Quick Message
                </h2>
                <p className="mt-4 font-light text-white/40 text-sm md:text-base">
                  {formState === "error" ? (
                    <span className="text-red-400">Oops! Something went wrong. Please try again or email me directly.</span>
                  ) : (
                    "Fill out the form below and I'll get back to you within 24 hours."
                  )}
                </p>

                <form onSubmit={handleSubmit} className="mt-10 md:mt-12 space-y-5 md:space-y-6 text-left">

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 focus:border-white/20 focus:outline-none transition-colors resize-none"
                      placeholder="I'd like to talk about..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={formState === "submitting"}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-5 font-bold uppercase tracking-widest text-[10px] text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {formState === "submitting" ? (
                      "SENDING..."
                    ) : (
                      <>
                        SEND MESSAGE <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (

              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={64} className="text-white mb-6" />
                <h2 className="text-3xl font-bold text-white tracking-tighter">MESSAGE SENT!</h2>
                <p className="mt-4 text-white/40">Thank you for reaching out. I'll be in touch soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>

  );
}
