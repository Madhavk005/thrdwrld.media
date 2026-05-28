"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: isVisible ? 1 : 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:bottom-10 md:right-10 z-[100] pointer-events-auto"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <Link 
        href="/contact"
        className="group relative flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-off-white/[0.03] backdrop-blur-2xl border border-soft-gray/20 rounded-full overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.8)] hover:bg-off-white/[0.08] hover:border-soft-gray/40 transition-all duration-700 ease-[0.16,1,0.3,1] cursor-none"
      >
        {/* Soft glowing ambient hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-red/10 via-transparent to-primary-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.16,1,0.3,1]" />
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse shadow-[0_0_10px_rgba(165,32,32,0.8)]" />
          <span className="text-off-white text-xs md:text-sm uppercase tracking-widest font-bold">Start a Project</span>
        </div>
      </Link>
    </motion.div>
  );
}
