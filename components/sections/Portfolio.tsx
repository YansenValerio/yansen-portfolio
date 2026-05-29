"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { fadeUp, viewportConfig } from "@/lib/animations";
import PortfolioCarousel from "./PortfolioCarousel";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-28 text-center md:px-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-gray-300" />
          <span className="text-[11px] font-inter uppercase tracking-[0.3em] text-gray-400">
            Selected Work
          </span>
          <span className="h-px w-8 bg-gray-300" />
        </div>

        <h2 className="max-w-3xl text-4xl font-bold font-inter text-dark leading-[1.1] md:text-6xl">
          Designs that speak,
          <br />
          <span className="text-brand">experiences</span> that last.
        </h2>

        <p className="mt-7 max-w-xl text-base font-inter leading-relaxed text-gray-400">
          A curated glimpse into recent work — crafted with intent, built for
          impact, and shaped by a deep care for detail.
        </p>
      </motion.div>

      {/* Scroll-driven horizontal carousel — full bleed, no padding */}
      <PortfolioCarousel items={portfolio} />

    </section>
  );
}
