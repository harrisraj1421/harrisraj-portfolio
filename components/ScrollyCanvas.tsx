"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

const TOTAL_FRAMES = 120;

interface ScrollyCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map scroll progress to image index
  const frameIndex = useTransform(scrollProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Draw frame on canvas
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      const index = Math.floor(frameIndex.get());
      const currentImage = images[index - 1] || images[0];

      if (currentImage) {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imageWidth = currentImage.width;
        const imageHeight = currentImage.height;

        const ratio = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
        const newWidth = imageWidth * ratio;
        const newHeight = imageHeight * ratio;
        const x = (canvasWidth - newWidth) / 2;
        const y = (canvasHeight - newHeight) / 2;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(currentImage, x, y, newWidth, newHeight);
      }
    };

    render();
    const unsubscribe = frameIndex.on("change", render);

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        render();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images, frameIndex]);

  // Opacity transforms moved here for tighter coupling
  const s1Opacity = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const s2Opacity = useTransform(scrollProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const s3Opacity = useTransform(scrollProgress, [0.65, 0.75, 0.85], [0, 1, 0]);

  const s1Y = useTransform(scrollProgress, [0, 0.25], [0, -50]);
  const s2Y = useTransform(scrollProgress, [0.35, 0.55], [30, -30]);
  const s3Y = useTransform(scrollProgress, [0.65, 0.85], [30, -30]);

  return (
    <div className="sticky top-0 block h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        style={{ width: "100vw", height: "100vh" }}
      />
      
      {/* Overlay Layers Integrated */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center container-custom">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: s1Opacity, y: s1Y }}
          className="flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
            B. HARRISRAJ.
          </h1>
          <p className="mt-4 text-[10px] sm:text-xs md:text-sm font-light text-white/40 uppercase tracking-[0.5em] sm:tracking-[0.8em]">
            Creative Developer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: s2Opacity, y: s2Y }}
          className="absolute left-6 md:left-12 lg:left-24 right-6 md:right-auto max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-white tracking-tight">
            I build digital experiences.
          </h2>
          <div className="mt-6 h-px w-12 bg-white/20 mx-auto md:ml-0 md:mr-auto" />
          <p className="mt-6 text-sm md:text-base font-light text-white/40 leading-relaxed max-w-md mx-auto md:mx-0">
            Creating immersive, high-performance web applications that merge 3D, motion, and interaction.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: s3Opacity, y: s3Y }}
          className="absolute right-6 md:right-12 lg:right-24 left-6 md:left-auto text-center md:text-right max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-white tracking-tight">
            Bridging design and engineering.
          </h2>
          <div className="mt-6 h-px w-12 bg-white/20 mx-auto md:mr-0 md:ml-auto" />
          <p className="mt-6 text-sm md:text-base font-light text-white/40 leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
            Through technical excellence and creative intuition, I turn bold ideas into tangible realities.
          </p>
        </motion.div>
      </div>


      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/20 font-light tracking-widest uppercase text-xs"
          >
            Loading Experience...
          </motion.div>
        </div>
      )}
    </div>
  );
}
