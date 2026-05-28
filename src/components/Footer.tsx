"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer ref={containerRef} className="relative bg-primary-black pt-48 pb-12 overflow-hidden border-t border-soft-gray/5" id="contact">
      {/* Cinematic ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vw] rounded-[100%] bg-primary-red/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-16 md:gap-32">
          <div className="md:w-1/2 flex flex-col gap-10">
            <h3 className="text-3xl md:text-5xl font-display text-off-white leading-tight tracking-tight max-w-lg">
              Let&apos;s build something impossible to ignore.
            </h3>
            <Link 
              href="/contact"
              className="w-fit text-primary-red uppercase tracking-[0.2em] font-medium text-sm hover:text-off-white transition-colors duration-500 cursor-none"
            >
              Start a project →
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
              <div className="flex flex-col gap-6">
                <span className="text-soft-gray/50 text-xs uppercase tracking-[0.3em] font-medium mb-2">Socials</span>
                <a href="#" className="text-off-white/80 hover:text-off-white text-sm uppercase tracking-widest transition-colors duration-500 cursor-none">Instagram</a>
                <a href="#" className="text-off-white/80 hover:text-off-white text-sm uppercase tracking-widest transition-colors duration-500 cursor-none">Twitter (X)</a>
                <a href="#" className="text-off-white/80 hover:text-off-white text-sm uppercase tracking-widest transition-colors duration-500 cursor-none">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-soft-gray/50 text-xs uppercase tracking-[0.3em] font-medium mb-2">Contact</span>
                <a href="mailto:hello@thrdwrld.media" className="text-off-white/80 hover:text-off-white text-sm uppercase tracking-widest transition-colors duration-500 cursor-none">hello@thrdwrld.media</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-soft-gray/50 text-xs uppercase tracking-[0.3em] font-medium mb-2">Newsletter</span>
              <p className="text-off-white/80 text-sm font-light max-w-[240px] mb-2 leading-relaxed">Insights on cinematic design and internet culture, delivered monthly.</p>
              <form className="flex items-end border-b border-soft-gray/30 pb-2 relative group w-full md:w-[240px]" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="bg-transparent text-off-white text-sm focus:outline-none placeholder:text-soft-gray/40 w-full" />
                <button type="submit" className="text-primary-red uppercase tracking-widest text-[10px] font-bold group-hover:text-off-white transition-colors cursor-none ml-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Massive Footer Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="w-full mb-16 flex justify-center overflow-hidden"
        >
          <h2 className="text-[12vw] font-display font-bold text-off-white text-center leading-[0.8] tracking-tighter whitespace-nowrap opacity-90 mix-blend-overlay">
            THRDWRLD
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-soft-gray/10 relative z-20 gap-6">
          <p className="text-soft-gray/40 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} THRDWRLD MEDIA. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-soft-gray/40 text-[10px] uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-off-white transition-colors cursor-none">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-off-white transition-colors cursor-none">Terms of Service</Link>
          </div>
          <div className="text-primary-red/80 text-[10px] uppercase tracking-[0.3em] font-bold">
            Built for the internet.
          </div>
        </div>
      </div>
    </footer>
  );
}
