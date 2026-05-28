"use client";

import { motion } from "framer-motion";

export default function Clients() {
  return (
    <section className="py-24 md:py-32 bg-primary-black relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-center"
        >
           <h3 className="text-soft-gray/50 uppercase tracking-widest text-xs font-bold mb-12">Trusted By Modern Brands</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
             {['Linear', 'Vercel', 'Framer', 'Stripe', 'Raycast'].map((logo) => (
                <span key={logo} className="text-2xl md:text-3xl font-display font-bold text-off-white tracking-tighter">{logo}</span>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
