"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-primary-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10rem] md:text-[20rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-off-white to-soft-gray/10 leading-none tracking-tighter"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-soft-gray text-xl md:text-2xl font-light mb-12 max-w-lg"
        >
          The page you are looking for has been moved into the archive or no longer exists.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/" 
            className="px-10 py-4 bg-off-white text-primary-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(242,241,239,0.1)] cursor-none"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
