"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Identity",
    desc: "We develop foundational visual systems, logomarks, and comprehensive brand guidelines engineered for digital scale."
  },
  {
    title: "Motion Design",
    desc: "From 3D product renders to 2D UI animations, we bring static brands to life through cinematic motion graphics."
  },
  {
    title: "Creative Strategy",
    desc: "We provide high-level visual direction and strategic positioning for premium product launches and campaigns."
  },
  {
    title: "Web Experiences",
    desc: "We build high-performance, production-ready websites focused on deep interaction, performance, and modern aesthetics."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-48 bg-primary-black relative border-t border-soft-gray/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs md:text-sm text-primary-red uppercase tracking-[0.4em] font-medium mb-4">02 / Expertise</h2>
            <p className="text-3xl md:text-5xl text-off-white font-display tracking-tight max-w-2xl leading-tight">
              Systems designed to command attention.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col border-t border-soft-gray/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-soft-gray/10 hover:border-soft-gray/30 transition-colors duration-500 cursor-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-24 w-full">
                <h3 className="text-4xl md:text-6xl font-display font-bold text-off-white tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-out md:w-1/3">{service.title}</h3>
                <p className="text-soft-gray text-lg md:text-xl leading-relaxed font-light max-w-xl group-hover:text-off-white transition-colors duration-500">{service.desc}</p>
              </div>
              <div className="relative z-10 mt-8 md:mt-0 opacity-0 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out hidden md:block">
                <span className="text-primary-red uppercase tracking-widest text-sm font-bold">Explore</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
