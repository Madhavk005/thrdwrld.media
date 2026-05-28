"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link href={`/work/${project.id}`} className="block cursor-none group">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-off-white/[0.02] shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
      >
        <motion.div 
          className="absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
          style={{ y: yImage }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:blur-sm opacity-80 group-hover:opacity-100"
          />
        </motion.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-primary-black/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-1000 ease-[0.16,1,0.3,1]" />
        
        {/* Hover Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] ease-[0.16,1,0.3,1]" />

        {/* Content */}
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
      </motion.div>
    </Link>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-64 bg-primary-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <h2 className="text-xs md:text-sm text-primary-red uppercase tracking-[0.4em] font-medium mb-6">03 / Archive</h2>
            <p className="text-4xl md:text-6xl text-off-white font-display tracking-tight max-w-2xl leading-none">
              A cinematic gallery of digital experiences.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
