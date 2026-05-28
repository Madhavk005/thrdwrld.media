"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Image from "next/image";

const articles = [
  { id: 1, title: "The Future of Cinematic UI in Web Design", category: "Design", date: "Oct 12, 2024", image: "/assets/thrdwrldArtboard-1.png" },
  { id: 2, title: "Engineering Emotion Through Motion", category: "Motion", date: "Sep 28, 2024", image: "/assets/thrdwrldArtboard-2.png" },
  { id: 3, title: "Typography as the Primary Interface", category: "Typography", date: "Sep 15, 2024", image: "/assets/thrdwrldArtboard-3.png" },
];

export default function BlogPage() {
  return (
    <main className="bg-primary-black min-h-screen pt-32 relative">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-off-white tracking-tighter mb-6 leading-none">
              Insights
            </h1>
            <p className="text-soft-gray text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              Thoughts on design, motion, and building the next generation of internet culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col gap-6 cursor-none"
              >
                <div className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-off-white/[0.02]">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03] opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 ease-[0.16,1,0.3,1]" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-red">
                    <span>{article.category}</span>
                    <span className="text-soft-gray/50 font-light">{article.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-off-white leading-tight group-hover:text-primary-red transition-colors duration-500 tracking-tight">{article.title}</h3>
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
