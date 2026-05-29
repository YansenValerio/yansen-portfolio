"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Outer wrapper: full-width fixed, pointer-events-none agar area di luar pill tetap bisa diklik */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl pointer-events-auto flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-500"
          style={{
            backgroundColor: scrolled ? "rgba(15,15,15,0.97)" : "rgba(15,15,15,0.88)",
            backdropFilter: "blur(16px)",
            borderColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("#hero")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-white font-bold text-base tracking-widest font-inter">
              YANSEN VALERIO
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/60 hover:text-white text-sm transition-colors font-inter relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* CTA — style terang seperti referensi */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.05, backgroundColor: "#e8e8e8" }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-gray-900 rounded-xl px-5 py-2 text-sm font-semibold font-inter transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </motion.nav>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-dark/95 backdrop-blur-xl flex flex-col pt-20 px-8 md:hidden border-l border-white/5"
          >
            <ul className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white text-lg font-inter w-full text-left py-3 hover:pl-2 transition-all duration-200 border-b border-white/5"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick("#contact")}
              className="mt-8 bg-white text-gray-900 rounded-xl px-5 py-3 text-sm font-semibold font-inter"
            >
              Contact Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
