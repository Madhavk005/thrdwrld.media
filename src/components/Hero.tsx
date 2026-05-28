"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(12px)"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-primary-black"
    >
      {/* Calm Ambient Background */}
      <motion.div 
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{ y: yBg }}
      >
        <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-primary-red/10 blur-[120px] animate-[pulse_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-supporting-maroon/15 blur-[120px] animate-[pulse_20s_ease-in-out_infinite_reverse]" />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText, filter: blurValue }}
        className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center w-full mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="px-5 py-2 border border-soft-gray/20 rounded-full backdrop-blur-xl bg-off-white/[0.02] text-xs uppercase tracking-[0.3em] font-medium text-off-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            A Creative Media House
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-off-white via-off-white/90 to-soft-gray/60 mb-8"
        >
          THRDWRLD <br/> MEDIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-soft-gray text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-12"
        >
          We engineer digital identities, cinematic motion, and high-performance web experiences that command attention.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="/work" 
            className="group flex items-center justify-center px-10 py-4 bg-off-white text-primary-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(242,241,239,0.1)]"
          >
            View Our Work
          </Link>
          <Link 
            href="/contact" 
            className="group flex items-center justify-center px-10 py-4 bg-transparent border border-soft-gray/30 text-off-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-off-white/5 transition-colors duration-300"
          >
            Work With Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
