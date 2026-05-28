"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-primary-black min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Soft Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(165,32,32,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-12 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-off-white tracking-tighter mb-8 leading-none">
              Let&apos;s Build.
            </h1>
            <p className="text-soft-gray text-xl font-light max-w-md leading-relaxed mb-16">
              Whether you are looking to build a new digital identity or craft an immersive experience, we are ready.
            </p>
            
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-soft-gray/50 uppercase tracking-[0.2em] text-xs font-bold mb-2">Email</h3>
                <a href="mailto:hello@thrdwrld.media" className="text-off-white text-xl hover:text-primary-red transition-colors duration-300 cursor-none">hello@thrdwrld.media</a>
              </div>
              <div>
                <h3 className="text-soft-gray/50 uppercase tracking-[0.2em] text-xs font-bold mb-2">Location</h3>
                <p className="text-off-white text-xl">Global / Remote</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-4 relative group">
                <input type="text" className="bg-transparent border-b border-soft-gray/20 text-off-white py-4 focus:outline-none focus:border-primary-red transition-colors duration-500 placeholder:text-soft-gray/40 text-xl md:text-2xl font-light" placeholder="What is your name?" />
              </div>
              <div className="flex flex-col gap-4 relative group">
                <input type="email" className="bg-transparent border-b border-soft-gray/20 text-off-white py-4 focus:outline-none focus:border-primary-red transition-colors duration-500 placeholder:text-soft-gray/40 text-xl md:text-2xl font-light" placeholder="What is your email?" />
              </div>
              <div className="flex flex-col gap-4 relative group">
                <textarea rows={3} className="bg-transparent border-b border-soft-gray/20 text-off-white py-4 focus:outline-none focus:border-primary-red transition-colors duration-500 resize-none placeholder:text-soft-gray/40 text-xl md:text-2xl font-light" placeholder="Tell us about your project..." />
              </div>
              <div className="mt-8">
                <button type="submit" className="group flex items-center justify-center px-12 py-5 bg-off-white text-primary-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(242,241,239,0.1)] cursor-none">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 pt-32 border-t border-soft-gray/10 grid grid-cols-1 md:grid-cols-2 gap-24"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-off-white tracking-tight mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-xl font-bold text-off-white mb-3 tracking-tight">What is your typical engagement size?</h4>
                <p className="text-soft-gray font-light leading-relaxed">We partner with brands on premium projects starting at $50k, ensuring we can dedicate the resources necessary to deliver the holistic, cinematic quality we are known for.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-off-white mb-3 tracking-tight">How long do projects typically take?</h4>
                <p className="text-soft-gray font-light leading-relaxed">A standard visual identity and web experience timeline runs 8-12 weeks from initial strategy to final deployment. Timeline scales with complexity.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start justify-center bg-off-white/[0.02] p-12 rounded-[2rem] border border-soft-gray/10">
            <h2 className="text-3xl font-display font-bold text-off-white tracking-tight mb-4">Prefer to talk directly?</h2>
            <p className="text-soft-gray font-light mb-10 max-w-sm leading-relaxed">Skip the form and book a direct introductory call with our creative directors to discuss your vision.</p>
            <button className="px-10 py-5 border border-soft-gray/30 text-off-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-off-white hover:text-primary-black transition-colors duration-500 cursor-none w-full md:w-auto text-center">
              Book a Calendar Slot
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
