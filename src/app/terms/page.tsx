"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="bg-primary-black min-h-screen pt-32 pb-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-off-white tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="text-soft-gray text-sm tracking-widest uppercase font-bold">Last Updated: May 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 text-soft-gray font-light text-lg leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
            <p>By accessing or using the THRDWRLD MEDIA website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">2. Intellectual Property</h2>
            <p>All content, designs, cinematic assets, code, and visual identities created by THRDWRLD MEDIA remain our intellectual property until final payment is received and explicit transfer of rights is completed as per specific project contracts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">3. Project Engagement</h2>
            <p>Project scopes, timelines, and deliverables are defined in individual Statements of Work (SOW). THRDWRLD MEDIA reserves the right to adjust timelines based on client feedback cycles and scope modifications.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">4. Limitation of Liability</h2>
            <p>THRDWRLD MEDIA shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital products or services.</p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
