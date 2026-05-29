"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: name */}
        <div className="flex items-center">
          <span className="text-white font-bold text-sm tracking-wide font-inter">
            {personalInfo.fullName}
          </span>
        </div>

        {/* Center: copyright + location */}
        <p className="text-xs font-inter text-gray-500 text-center">
          © 2025 · Crafted with care in {personalInfo.location}
        </p>

        {/* Right: back-to-top */}
        <motion.a
          href="#hero"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xs font-inter text-gray-500 hover:text-white transition-colors"
        >
          Back to top <FiArrowUp className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </footer>
  );
}
