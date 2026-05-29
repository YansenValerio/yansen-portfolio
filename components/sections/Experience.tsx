"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { staggerContainer, fadeUp, slideLeft, viewportConfig } from "@/lib/animations";
import { workExperiences, achievements } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-3xl md:text-4xl font-bold font-inter text-dark leading-tight max-w-md"
          >
            Journey So Far,<br />Built with Purpose.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportConfig}
            className="text-sm text-gray-400 font-inter max-w-sm leading-relaxed"
          >
            A curated look at projects, leadership roles, and community work that have shaped my path in tech and beyond.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gray-100" />

          <div className="flex flex-col gap-0">
            {workExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-0 pb-14 last:pb-0 group"
              >
                {/* Left: period + type */}
                <div className="md:w-[200px] md:pr-10 flex-shrink-0 pt-1">
                  <p className="text-xs font-inter font-medium text-brand tracking-wide">
                    {exp.period}
                  </p>
                  <p className="text-xs font-inter text-gray-300 mt-0.5">{exp.type}</p>
                </div>

                {/* Dot on the line */}
                <div className="hidden md:flex absolute left-[200px] top-[6px] -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.3, delay: idx * 0.12 }}
                    className="w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-white"
                  />
                </div>

                {/* Right: content card */}
                <div className="md:pl-12 flex-1">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="bg-lavender rounded-2xl p-6 cursor-default"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold font-inter text-dark text-base leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-inter text-brand/70 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-[11px] font-inter text-gray-400 border border-gray-200 rounded-full px-3 py-1 flex-shrink-0 bg-white whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-sm font-inter text-gray-500 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-inter font-medium text-brand bg-brand/8 rounded-full px-3 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements sub-section */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportConfig}
            className="mb-10"
          >
            <p className="text-brand text-xs font-inter font-medium tracking-widest uppercase mb-3">
              Achievements & Honors
            </p>
            <h3 className="text-2xl md:text-3xl font-bold font-inter text-dark leading-tight max-w-md">
              Wins that fueled the journey.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-lavender rounded-2xl p-6 flex gap-5 items-start cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <FiAward className="w-6 h-6 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-xs font-inter font-bold text-brand tracking-wide uppercase">
                      {item.rank}
                    </p>
                    <span className="text-[11px] font-inter text-gray-400">{item.year}</span>
                  </div>
                  <h4 className="font-bold font-inter text-dark text-sm leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-inter text-gray-500 leading-relaxed">
                    {item.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
