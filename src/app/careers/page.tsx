"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";

const positions = [
  { title: "Senior Motion Designer", type: "Full-Time", location: "Remote / Global" },
  { title: "Creative Developer", type: "Full-Time", location: "Remote / Global" },
  { title: "Art Director", type: "Contract", location: "Remote / Global" },
];

export default function CareersPage() {
  return (
    <main className="bg-primary-black min-h-screen pt-32">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-off-white tracking-tighter mb-6 leading-none">
              Careers
            </h1>
            <p className="text-soft-gray text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              Join a collective of digital engineers and visual storytellers.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-soft-gray/10">
            {positions.map((pos, index) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-soft-gray/10 hover:border-soft-gray/30 transition-colors duration-500 cursor-none relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-off-white tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">{pos.title}</h3>
                  <div className="flex items-center gap-4 text-soft-gray text-sm md:text-base font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 ease-out">
                    <span>{pos.type}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    <span>{pos.location}</span>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 opacity-0 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out hidden md:block relative z-10">
                   <span className="text-primary-red uppercase tracking-widest text-xs font-bold">Apply Now</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
