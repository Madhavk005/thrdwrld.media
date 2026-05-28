"use client";

import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/CTA";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-primary-black min-h-screen pt-32">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <h1 className="text-6xl md:text-9xl font-display font-bold text-off-white tracking-tighter mb-8 leading-none">
              Archive
            </h1>
            <p className="text-soft-gray text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              A cinematic gallery of digital experiences and visual systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 cursor-none ${
                  activeCategory === cat
                    ? "bg-off-white text-primary-black"
                    : "bg-off-white/[0.02] border border-soft-gray/20 text-soft-gray hover:text-off-white hover:border-soft-gray/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <Link href={`/work/${project.id}`} className="block group cursor-none">
                    <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-off-white/[0.02] shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:blur-sm opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  
                  {/* Cinematic overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-primary-black/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-1000 ease-[0.16,1,0.3,1]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] ease-[0.16,1,0.3,1]" />

                  <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="overflow-hidden">
                        <p className="text-primary-red uppercase tracking-[0.3em] text-xs font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100">
                          {project.category}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-off-white/10 backdrop-blur-xl border border-off-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[0.16,1,0.3,1]">
                        <span className="text-off-white text-lg">↗</span>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-off-white translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16,1,0.3,1] tracking-tighter">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
