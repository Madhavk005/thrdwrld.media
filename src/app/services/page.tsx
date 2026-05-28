"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";

const services = [
  {
    title: "Brand Identity",
    desc: "We develop foundational visual systems, logomarks, and comprehensive brand guidelines engineered for digital scale.",
  },
  {
    title: "Motion Design",
    desc: "From 3D product renders to 2D UI animations, we bring static brands to life through cinematic motion graphics.",
  },
  {
    title: "Creative Strategy",
    desc: "We provide high-level visual direction and strategic positioning for premium product launches and campaigns.",
  },
  {
    title: "Web Experiences",
    desc: "We build high-performance, production-ready websites focused on deep interaction, performance, and modern aesthetics.",
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-primary-black min-h-screen pt-32">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-off-white tracking-tighter mb-6 leading-none">
              Expertise
            </h1>
            <p className="text-soft-gray text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              We build scalable digital systems and cinematic experiences designed to command attention and drive engagement.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-soft-gray/10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-24 border-b border-soft-gray/10 hover:border-soft-gray/30 transition-colors duration-500 cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-24 w-full">
                  <h3 className="text-5xl md:text-7xl font-display font-bold text-off-white tracking-tighter group-hover:translate-x-6 transition-transform duration-500 ease-out md:w-1/3">{service.title}</h3>
                  <p className="text-soft-gray text-xl md:text-2xl leading-relaxed font-light max-w-xl group-hover:text-off-white transition-colors duration-500">{service.desc}</p>
                </div>
                <div className="relative z-10 mt-8 md:mt-0 opacity-0 md:-translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out hidden md:block">
                  <span className="text-primary-red uppercase tracking-[0.2em] text-sm font-bold">Explore</span>
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
