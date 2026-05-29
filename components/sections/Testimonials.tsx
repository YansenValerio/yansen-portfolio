"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { slideLeft, viewportConfig } from "@/lib/animations";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDir: number) => {
    setDirection(newDir);
    setActiveIndex((i) => (i + newDir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-dark py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-5xl md:text-6xl font-black font-inter text-white uppercase leading-[0.9] mb-6">
            WHAT OUR<br />CLIENT SAYS
          </h2>
          <p className="text-gray-500 font-inter max-w-xs text-sm leading-relaxed">
            From branding to web design, our work has helped businesses stand out with creativity and vision.
          </p>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-400 ${i === activeIndex ? "bg-brand w-8" : "bg-white/20 w-2"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right - Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewportConfig}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden min-h-[420px] flex">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col w-full"
              >
                <p className="text-brand text-xs font-inter uppercase tracking-widest mb-5">
                  An Outstanding Experience
                </p>
                <p className="text-white/90 font-inter leading-relaxed text-base mb-7">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-7">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image src={current.avatar} alt={current.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold font-inter text-sm">{current.name}</p>
                      <p className="text-gray-500 font-inter text-xs">{current.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => paginate(-1)}
                      className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 text-white flex items-center justify-center transition-colors text-sm border border-white/10"
                    >
                      ←
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => paginate(1)}
                      className="w-9 h-9 rounded-full bg-brand hover:bg-brand-light text-white flex items-center justify-center transition-colors text-sm"
                    >
                      →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
