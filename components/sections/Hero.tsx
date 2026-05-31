"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import TypingAnimation from "@/components/ui/TypingAnimation";

const professionRoles = [
  "Product Designer",
  "Web Developer",
  "Data Engineer",
  "UI/UX Specialist",
  "Creative Director",
];

const badges = [
  { label: "UI/UX Designer", pos: "top-[38%] left-[5%]", delay: 1.6 },
  { label: "Brand Identity Design", pos: "top-[28%] right-[5%]", delay: 1.8 },
  { label: "Development", pos: "top-[55%] left-[3%]", delay: 2.0 },
  { label: "Product Design", pos: "top-[50%] right-[4%]", delay: 2.2 },
];

const COLOR_PRESETS = [
  { hex: "#2a1a6e", label: "Violet" },
  { hex: "#1a3a6e", label: "Navy" },
  { hex: "#0f4c75", label: "Ocean" },
  { hex: "#1a6e3a", label: "Forest" },
  { hex: "#6e1a1a", label: "Crimson" },
  { hex: "#6e3d1a", label: "Ember" },
  { hex: "#1a5a6e", label: "Teal" },
  { hex: "#5a1a6e", label: "Amethyst" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [bgColor, setBgColor] = useState("#2a1a6e");
  const [showPicker, setShowPicker] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${bgColor} 0%, #060410 70%, #000 100%)`,
        transition: "background 0.6s ease",
      }}
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* ── 1. HEADLINE (appears first) ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center pt-28 md:pt-32 px-4 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-sm md:text-base font-inter font-light tracking-[0.25em] uppercase mb-3"
        >
          Hello i&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-7xl font-inter font-bold tracking-tight leading-none mb-3"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-fraunces italic text-5xl md:text-8xl text-white/85 leading-tight">
            <TypingAnimation
              words={professionRoles}
              typingSpeed={90}
              deletingSpeed={50}
              pauseDuration={2200}
            />
          </p>
        </motion.div>
      </motion.div>

      {/* ── 2. HERO PHOTO (rises from bottom after headline) ── */}
      <motion.div
        className="absolute bottom-0 z-10 h-[56vh] md:h-[70vh]"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/Untitled.png"
          alt="Product Designer"
          className="max-w-none h-[62vh] md:h-[78vh] object-contain"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </motion.div>

      {/* ── 3. FLOATING SKILL BADGES (appear after photo) ── */}
      {badges.map((badge) => (
        <motion.div
          key={badge.label}
          className={`absolute z-20 hidden md:block ${badge.pos}`}
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: badge.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay * 0.3,
            }}
          >
            <div className="bg-black/55 backdrop-blur-lg border border-white/15 rounded-full px-5 py-2.5 text-white text-sm font-inter select-none hover:border-white/40 hover:bg-white/10 transition-all duration-300">
              {badge.label}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ── 4. CTA BUTTONS — centered horizontally, above photo ── */}
      <motion.div
        className="absolute bottom-10 md:bottom-14 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#7b6fff" }}
          whileTap={{ scale: 0.97 }}
          className="bg-brand text-white rounded-full px-6 py-3 text-sm font-medium font-inter whitespace-nowrap shadow-lg shadow-brand/20"
          style={{ transition: "background-color 0.2s" }}
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Collaborate With Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.97 }}
          className="border border-white/60 text-white rounded-full px-6 py-3 text-sm font-medium font-inter whitespace-nowrap backdrop-blur-sm"
          onClick={() =>
            document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Discover My Works
        </motion.button>
      </motion.div>


      {/* Scroll indicator — bottom left */}
      <motion.div
        className="absolute bottom-10 left-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-white/40 transition-colors"
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <p className="text-white/50 text-[10px] text-center font-inter leading-tight">
            Scroll
            <br />
            Down
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }}
      />

      {/* ── Color Picker ── */}
      <div className="absolute top-6 right-6 z-30 flex flex-col items-end gap-2">
        {/* Trigger button */}
        <motion.button
          onClick={() => setShowPicker((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center gap-2 rounded-full px-3.5 py-2 border border-white/15 backdrop-blur-md bg-black/50 text-white/70 hover:text-white hover:border-white/30 transition-colors duration-200 text-xs font-inter select-none"
          aria-label="Change background color"
        >
          {/* Live color dot */}
          <span
            className="w-3.5 h-3.5 rounded-full ring-1 ring-white/20 flex-shrink-0"
            style={{ backgroundColor: bgColor, transition: "background-color 0.4s ease" }}
          />
          <span>Theme</span>
          <motion.svg
            animate={{ rotate: showPicker ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            className="opacity-60"
          >
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>

        {/* Picker panel */}
        <AnimatePresence>
          {showPicker && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/15 backdrop-blur-xl bg-black/60 p-4 w-52 shadow-2xl shadow-black/50"
            >
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-inter mb-3">
                Background
              </p>

              {/* Preset swatches */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {COLOR_PRESETS.map((preset) => (
                  <motion.button
                    key={preset.hex}
                    onClick={() => setBgColor(preset.hex)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    title={preset.label}
                    className="relative w-9 h-9 rounded-xl overflow-hidden focus:outline-none"
                    style={{ backgroundColor: preset.hex }}
                  >
                    <AnimatePresence>
                      {bgColor === preset.hex && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 mb-3" />

              {/* Custom color input */}
              <div className="flex items-center gap-2.5">
                <label
                  htmlFor="hero-color-custom"
                  className="relative w-9 h-9 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 ring-1 ring-white/15 hover:ring-white/35 transition-all"
                  style={{ backgroundColor: bgColor }}
                >
                  <input
                    id="hero-color-custom"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  />
                </label>
                <div className="flex-1 min-w-0">
                  <p className="text-white/35 text-[9px] uppercase tracking-widest font-inter mb-0.5">Custom</p>
                  <p className="text-white/70 text-xs font-mono tracking-wider">{bgColor.toUpperCase()}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
