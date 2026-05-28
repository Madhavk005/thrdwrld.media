"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">1. Information We Collect</h2>
            <p>At THRDWRLD MEDIA, we are committed to protecting your privacy. We collect information you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, company details, and project vision.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">2. How We Use Your Information</h2>
            <p>We use the information we collect to communicate with you about your project inquiries, deliver premium digital experiences, and send updates regarding our services. We do not sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">3. Data Security</h2>
            <p>We implement industry-standard digital security measures to protect your personal information. Our platforms are designed with secure architecture to prevent unauthorized access, alteration, or destruction of your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-off-white mb-4 tracking-tight">4. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy or how your data is handled, please contact us at <a href="mailto:privacy@thrdwrld.media" className="text-primary-red hover:text-off-white transition-colors">privacy@thrdwrld.media</a>.</p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
