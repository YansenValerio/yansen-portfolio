"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/types";

interface Props {
  items: PortfolioItem[];
}

interface SlideProps {
  item: PortfolioItem;
  isActive: boolean;
}

function PortfolioSlide({ item, isActive }: SlideProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const total = item.images.length;
  const isMobile = item.number === "05";
  const imgW = isMobile ? "w-[260px] md:w-[300px]" : "w-[380px] md:w-[440px]";
  const imgAspect = isMobile ? "aspect-[3/4]" : "aspect-video";
  const imgSizes = isMobile ? "300px" : "440px";

  const prev = () => setImgIndex((i) => (i - 1 + total) % total);
  const next = () => setImgIndex((i) => (i + 1) % total);

  // Reset image index when slide becomes inactive
  useEffect(() => {
    if (!isActive) setImgIndex(0);
  }, [isActive]);

  return (
    <div className="relative flex h-screen w-screen flex-shrink-0 items-center justify-center px-16 md:px-24">
      {/* number watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-bold font-inter leading-none text-gray-100"
        style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
      >
        {item.number}
      </span>

      {/* content */}
      <div className="relative z-10 flex w-full max-w-5xl items-center gap-16 md:gap-24">
        {/* image slider */}
        <div className="group flex flex-col items-center flex-shrink-0">
          <motion.div
            animate={{
              scale: isActive ? 1 : 0.88,
              opacity: isActive ? 1 : 0.35,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${imgW} ${imgAspect} rounded-2xl overflow-hidden shadow-2xl`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={item.images[imgIndex]}
                  alt={`${item.title} mockup ${imgIndex + 1}`}
                  fill
                  sizes={imgSizes}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* number badge */}
            <div className="absolute top-3 left-3 z-10 text-[10px] font-mono text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
              {item.number}
            </div>

            {/* prev / next arrows — appear on hover */}
            {isActive && total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={14} className="text-dark" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={14} className="text-dark" />
                </button>
              </>
            )}
          </motion.div>

          {/* image dots */}
          {isActive && total > 1 && (
            <div className="flex items-center gap-1.5 mt-4">
              {item.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === imgIndex
                      ? "w-5 h-1.5 bg-brand"
                      : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}        </div>

        {/* text + CTA */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col max-w-md"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-inter mb-5">
                {item.number} / {String(5).padStart(2, "0")}
              </p>
              <h3 className="text-4xl md:text-5xl font-bold font-inter text-dark leading-tight mb-6">
                {item.title}
              </h3>
              <p className="text-gray-400 font-inter text-base leading-relaxed mb-8">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-200 rounded-full text-xs px-4 py-1.5 text-gray-500 font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-dark px-6 py-3 text-sm font-inter font-medium text-white transition-all duration-300 hover:bg-brand hover:gap-3"
                >
                  View Project
                  <ArrowUpRight size={15} />
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PortfolioCarousel({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(items.length - 1) * vw]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(
      0,
      Math.min(items.length - 1, Math.round(v * (items.length - 1)))
    );
    setActiveIndex(idx);
  });

  return (
    <div ref={scrollRef} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* focal glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-brand-light/8 blur-3xl" />
        </div>

        {/* Desktop: horizontal slide strip */}
        <div className="hidden md:block absolute inset-0">
          <motion.div
            className="absolute inset-0 flex"
            style={{ x, width: `${items.length * 100}vw` }}
          >
            {items.map((item, i) => (
              <PortfolioSlide key={item.number} item={item} isActive={i === activeIndex} />
            ))}
          </motion.div>

          {/* progress dots */}
          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-10 bg-brand" : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* scroll progress line */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-gray-100">
            <motion.div
              className="h-full bg-brand/50"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        {/* Mobile: horizontal scroll-snap */}
        <div className="md:hidden h-full flex items-center">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-4 w-full scrollbar-hide">
            {items.map((item) => (
              <div
                key={item.number}
                className="snap-center shrink-0 w-[75vw] first:ml-[12.5vw] last:mr-[12.5vw]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-inter mb-3 text-center">
                  {item.title}
                </p>
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="75vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                    {item.number}
                  </div>
                </div>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mt-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-200 rounded-full text-[11px] px-3 py-1 text-gray-500 font-inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-inter font-medium text-white"
                  >
                    View Project <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
