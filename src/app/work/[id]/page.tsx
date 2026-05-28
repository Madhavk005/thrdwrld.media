"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen bg-primary-black text-off-white flex items-center justify-center">
      <h1 className="text-4xl font-display font-light">Project Not Found</h1>
    </div>
  );

  return (
    <main className="bg-primary-black min-h-screen">
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-end pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
             initial={{ scale: 1.05 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
             className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-primary-red uppercase tracking-[0.3em] text-sm font-bold mb-6"
          >
            {project.category}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-9xl font-display font-bold text-off-white tracking-tighter"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      <section className="py-24 md:py-48 bg-primary-black relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
            <div className="md:col-span-4 flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-soft-gray/50 uppercase tracking-widest text-xs font-bold mb-3">Client</h3>
                <p className="text-off-white text-xl font-light">{project.client}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <h3 className="text-soft-gray/50 uppercase tracking-widest text-xs font-bold mb-3">Year</h3>
                <p className="text-off-white text-xl font-light">{project.year}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h3 className="text-soft-gray/50 uppercase tracking-widest text-xs font-bold mb-6">Results</h3>
                <div className="flex flex-col gap-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <p className="text-4xl font-display font-bold text-off-white tracking-tight">{m.value}</p>
                      <p className="text-soft-gray text-sm font-light">{m.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl font-display text-off-white mb-8 tracking-tight font-bold">The Challenge</h2>
                <p className="text-soft-gray text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl font-display text-off-white mb-8 tracking-tight font-bold">The Solution</h2>
                <p className="text-soft-gray text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                  {project.solution}
                </p>
              </motion.div>

              {/* Cinematic Full Width Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden rounded-[2rem] md:rounded-[3rem] mt-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                 <Image src={project.image} alt={project.title} fill className="object-cover" />
                 <div className="absolute inset-0 bg-primary-red/5 mix-blend-overlay" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
