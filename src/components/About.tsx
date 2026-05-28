"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const yText2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-48 bg-primary-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <motion.div 
            style={{ y: yText1 }}
            className="md:col-span-6 flex flex-col justify-center"
          >
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs md:text-sm text-primary-red uppercase tracking-[0.4em] font-medium mb-6">01 / Culture</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-off-white leading-[1.1] tracking-tight mb-8">
                We are a next-generation creative collective.
              </h3>
              <div className="w-16 h-[1px] bg-primary-red" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={{ y: yText2 }}
            className="md:col-span-5 md:col-start-8 flex flex-col gap-8 md:mt-16"
          >
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-xl md:text-2xl font-light text-off-white leading-relaxed tracking-wide"
            >
              We partner with ambitious brands to craft premium visual systems, cinematic motion, and digital experiences that resonate in modern culture.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-soft-gray/80 text-lg md:text-xl font-light leading-relaxed max-w-lg"
            >
              THRDWRLD MEDIA is fundamentally designed for the internet. We bridge the gap between high-end aesthetic design and scalable digital architecture—ensuring your brand doesn&apos;t just look expensive, but functions flawlessly.
            </motion.p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
