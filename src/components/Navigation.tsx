"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isScrolled ? "py-4 bg-primary-black/80 backdrop-blur-xl border-b border-soft-gray/10" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
          <Link href="/" className="text-xl md:text-2xl font-display font-bold tracking-tight text-off-white hover:text-primary-red transition-colors duration-300">
            THRDWRLD<span className="text-primary-red">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${
                    isActive ? "text-primary-red" : "text-off-white/70 hover:text-off-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-off-white text-primary-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary-red hover:text-off-white transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }} 
              className="block w-6 h-[2px] transition-transform"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#ffffff" }} 
              className="block w-6 h-[2px] transition-opacity"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }} 
              className="block w-6 h-[2px] transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-4xl font-display uppercase tracking-widest font-bold ${
                      isActive ? "text-primary-red" : "text-off-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                href="/contact" 
                className="mt-8 px-8 py-4 bg-off-white text-primary-black text-sm font-bold uppercase tracking-widest rounded-full"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
