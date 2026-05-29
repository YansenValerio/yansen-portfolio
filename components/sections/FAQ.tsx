"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import { slideLeft, staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-lavender py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left heading */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-5xl md:text-6xl font-black font-inter text-dark uppercase leading-[0.9]">
            DISCOVER<br />FREQUENTLY<br />ASKED<br />QUESTIONS
          </h2>
        </motion.div>

        {/* Right accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col"
        >
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="border-b border-gray-200/80"
            >
              <motion.button
                className="flex justify-between items-center w-full text-left py-5 group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-semibold font-inter text-sm md:text-base transition-colors duration-200 ${openIndex === idx ? "text-brand" : "text-dark group-hover:text-brand"}`}>
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="text-brand text-xl ml-4 flex-shrink-0 font-light"
                >
                  +
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm font-inter leading-relaxed pb-5">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
