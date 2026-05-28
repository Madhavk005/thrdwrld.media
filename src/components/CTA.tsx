"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-primary-black border-t border-soft-gray/10">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-[100%] bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold text-off-white tracking-tighter mb-8 leading-tight">
            Ready to build something <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-off-white to-soft-gray/50">unforgettable?</span>
          </h2>
          <p className="text-base md:text-xl text-soft-gray font-light mb-12 max-w-xl leading-relaxed">
            Let&apos;s engineer a digital experience that commands attention and shapes your brand&apos;s future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-off-white text-primary-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary-red hover:text-off-white transition-all duration-500 ease-[0.16,1,0.3,1] shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_40px_rgba(165,32,32,0.4)] cursor-none"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
