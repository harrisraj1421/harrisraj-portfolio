"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Art from "@/components/Art";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

export default function Home() {
  const scrollyRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollyRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative min-h-screen w-full bg-background selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero / Scrollytelling Section */}
      <div id="home" ref={scrollyRef} className="relative h-[500vh] w-full">
        <ScrollyCanvas scrollProgress={scrollYProgress} />
      </div>

      {/* Main Content Sections with Smoke Background */}
      <section className="relative w-full bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SmokeBackground smokeColor="#3B82F6" opacity={0.6} density={60} />
        </div>

        <div className="relative z-10">
          <About />
          
          <div id="projects">
            <Projects />
          </div>

          <Skills />
          
          <Art />
          
          <Contact />
          
          <Footer />
        </div>
      </section>
      
      {/* Scroll indicator for hero */}
      <div className="fixed bottom-10 left-10 z-30 hidden sm:flex flex-col items-center gap-4 opacity-30">
        <div className="h-16 w-px bg-white/20" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden">
          <span className="block animate-scroll-text text-white">SCROLL TO DISCOVER</span>
        </span>
      </div>

    </main>
  );
}
