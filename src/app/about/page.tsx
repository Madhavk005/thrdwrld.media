"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-primary-black min-h-screen pt-32">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-off-white tracking-tighter mb-6 leading-none">
              Culture
            </h1>
            <p className="text-soft-gray text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              We are a next-generation creative collective composed of digital engineers, motion designers, and brand strategists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6"
            >
              <h2 className="text-3xl md:text-5xl text-off-white font-display font-bold mb-8 leading-tight tracking-tight">
                Not a traditional agency. <br/> Not a template studio.
              </h2>
              <div className="w-16 h-[1px] bg-soft-gray/20 mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 flex flex-col gap-6 text-soft-gray text-lg md:text-xl font-light leading-relaxed"
            >
              <p>
                We believe that the best brands don&apos;t just market to their audience; they participate in culture. Our approach combines cinematic storytelling with premium digital experiences.
              </p>
              <p>
                THRDWRLD MEDIA is fundamentally designed for the internet. We bridge the gap between high-end aesthetic design and scalable digital architecture—ensuring your brand doesn&apos;t just look expensive, but functions flawlessly.
              </p>
            </motion.div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative mt-20 md:mt-32 shadow-[0_10px_50px_rgba(0,0,0,0.3)]"
          >
             <Image src="/assets/thrdwrldArtboard-2.png" alt="Office Culture" fill className="object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 pt-32 border-t border-soft-gray/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-off-white tracking-tight">The Collective</h2>
              <p className="text-soft-gray text-xl font-light max-w-md">Engineers, artists, and strategists building the next iteration of the web.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Julian Rossi", role: "Creative Director" },
                { name: "Amara Singh", role: "Lead Engineer" },
                { name: "David Chen", role: "Motion Designer" }
              ].map((member) => (
                <div key={member.name} className="group relative">
                  <div className="w-full aspect-[3/4] bg-off-white/[0.02] rounded-[2rem] overflow-hidden mb-6 relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                     {/* Placeholder for real team images */}
                     <div className="w-full h-full bg-soft-gray/5" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-off-white mb-1">{member.name}</h3>
                  <p className="text-primary-red uppercase tracking-widest text-[10px] font-bold">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
