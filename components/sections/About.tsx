"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiLaravel,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Carousel from "@/components/ui/Carousel";

const Lanyard3D = dynamic(() => import("@/components/ui/Lanyard3D"), { ssr: false });

const focusAreas = ["Product Design", "Web Development", "Brand Identity"];

const techStacks = [
  { id: 1, title: "Next.js", description: "React Framework", icon: <SiNextdotjs className="h-[36px] w-[36px]" style={{ color: "#000000" }} /> },
  { id: 2, title: "HTML", description: "Markup", icon: <SiHtml5 className="h-[36px] w-[36px]" style={{ color: "#E34F26" }} /> },
  { id: 3, title: "CSS", description: "Styling", icon: <FaCss3Alt className="h-[36px] w-[36px]" style={{ color: "#1572B6" }} /> },
  { id: 4, title: "Tailwind", description: "Utility CSS", icon: <SiTailwindcss className="h-[36px] w-[36px]" style={{ color: "#06B6D4" }} /> },
  { id: 5, title: "Laravel", description: "PHP Framework", icon: <SiLaravel className="h-[36px] w-[36px]" style={{ color: "#FF2D20" }} /> },
  { id: 6, title: "JavaScript", description: "Language", icon: <SiJavascript className="h-[36px] w-[36px]" style={{ color: "#F7DF1E" }} /> },
  { id: 7, title: "React Native", description: "Mobile", icon: <SiReact className="h-[36px] w-[36px]" style={{ color: "#61DAFB" }} /> },
  { id: 8, title: "PostgreSQL", description: "Database", icon: <SiPostgresql className="h-[36px] w-[36px]" style={{ color: "#4169E1" }} /> },
  { id: 9, title: "MySQL", description: "Database", icon: <SiMysql className="h-[36px] w-[36px]" style={{ color: "#4479A1" }} /> },
  { id: 10, title: "PHP", description: "Backend Language", icon: <SiPhp className="h-[36px] w-[36px]" style={{ color: "#777BB4" }} /> },
  { id: 11, title: "TypeScript", description: "Language", icon: <SiTypescript className="h-[36px] w-[36px]" style={{ color: "#3178C6" }} /> },
  { id: 12, title: "Python", description: "Language", icon: <SiPython className="h-[36px] w-[36px]" style={{ color: "#3776AB" }} /> },
];

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[760px]">

        {/* Left: Lanyard 3D — fully contained within section, strap hangs from top of section */}
        <div className="relative w-full md:w-1/2 min-h-[760px] bg-white">
          <Lanyard3D position={[0, -1.5, 14]} gravity={[0, -40, 0]} fov={18} transparent />
        </div>

        {/* Right: Content with rounded-rectangle background */}
        <div className="w-full md:w-1/2 bg-white flex items-center px-8 md:px-14 py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-[#F4F3FF] rounded-3xl px-10 py-12 w-full"
          >
            {/* Status row: profession + available badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between gap-4 mb-5 flex-wrap"
            >
              <p className="text-brand text-xs font-inter font-medium tracking-widest uppercase">
                {personalInfo.profession}
              </p>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="text-[11px] font-inter font-medium text-gray-600">
                  {personalInfo.status}
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold font-inter text-dark leading-tight mb-5"
            >
              Design with Intent.<br />
              Create for Impact.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 font-inter text-sm leading-relaxed mb-7"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Focus areas */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="text-[11px] font-inter font-medium text-brand bg-white border border-brand/15 rounded-full px-3 py-1"
                >
                  {area}
                </span>
              ))}
            </motion.div>

            {/* Tech Stack Carousel */}
            <motion.div variants={fadeUp} className="mb-8 pb-8 border-b border-brand/10 flex justify-center">
              <Carousel
                items={techStacks}
                baseWidth={360}
                autoplay
                autoplayDelay={2500}
                pauseOnHover
                loop
                round={false}
              />
            </motion.div>

            {/* CTA + location row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between gap-4 flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "#7b6fff" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand text-white font-inter font-medium text-sm rounded-full px-7 py-3"
              >
                Let&apos;s Collaborate <span>→</span>
              </motion.a>
              <div className="flex items-center gap-1.5 text-xs font-inter text-gray-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {personalInfo.location}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
