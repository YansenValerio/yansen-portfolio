"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiCompass,
  FiTrendingUp,
  FiBarChart2,
  FiArrowUpRight,
} from "react-icons/fi";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { services } from "@/lib/data";
import type { ReactElement } from "react";

const iconMap: Record<string, ReactElement> = {
  code: <FiCode className="w-6 h-6" />,
  smartphone: <FiSmartphone className="w-6 h-6" />,
  database: <FiDatabase className="w-6 h-6" />,
  compass: <FiCompass className="w-6 h-6" />,
  "trending-up": <FiTrendingUp className="w-6 h-6" />,
  "bar-chart": <FiBarChart2 className="w-6 h-6" />,
};

// Subtle "thrown deck" rotations per index
const rotations = [-3, 2, -2, 3, -2.5, 2.5];

export default function Services() {
  const initialFeaturedIndex = Math.max(
    0,
    services.findIndex((s) => s.featured)
  );
  const [featuredIndex, setFeaturedIndex] = useState<number>(initialFeaturedIndex);

  return (
    <section
      id="services"
      className="bg-lavender py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportConfig}
            className="max-w-xl"
          >
            <p className="text-brand text-xs font-inter font-medium tracking-widest uppercase mb-3">
              What I Build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-dark leading-tight">
              Services Built on Code,
              <br />
              Guided by Strategy.
            </h2>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportConfig}
            whileHover={{ scale: 1.05, backgroundColor: "#7b6fff" }}
            whileTap={{ scale: 0.97 }}
            className="self-start md:self-auto bg-brand text-white rounded-full px-7 py-3 text-sm font-medium font-inter inline-flex items-center gap-2"
          >
            Let&apos;s Collaborate <FiArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Hover-Stack Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, idx) => {
            const isFeatured = idx === featuredIndex;
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial={{ rotate: rot, y: 0, opacity: 0 }}
                whileInView={{ rotate: rot, y: 0, opacity: 1 }}
                viewport={viewportConfig}
                whileHover={{
                  rotate: 0,
                  y: -12,
                  scale: 1.04,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
                onClick={() => setFeaturedIndex(idx)}
                style={{ transformOrigin: "center" }}
                animate={{
                  backgroundColor: isFeatured ? "#5b4fce" : "#ffffff",
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between min-h-[280px] cursor-pointer ${
                  isFeatured
                    ? "text-white shadow-xl shadow-brand/25"
                    : "border border-gray-100/80 shadow-md shadow-black/5"
                }`}
              >
                <div>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      isFeatured ? "bg-white/15" : "bg-brand/8"
                    }`}
                  >
                    <span
                      className={isFeatured ? "text-white" : "text-brand"}
                    >
                      {iconMap[service.icon]}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`font-bold font-inter text-lg mb-3 ${
                      isFeatured ? "text-white" : "text-dark"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed font-inter ${
                      isFeatured ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center justify-between mt-7">
                  <span
                    className={`text-[11px] font-inter font-medium tracking-widest uppercase ${
                      isFeatured ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    Learn More
                  </span>
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                      isFeatured
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-gray-200 text-dark hover:border-brand hover:text-brand"
                    } transition-colors`}
                  >
                    <FiArrowUpRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
