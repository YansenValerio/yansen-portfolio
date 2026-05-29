"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationControls,
} from "framer-motion";

interface LanyardCardProps {
  photoSrc: string;
  name: string;
  role: string;
}

const barHeights = [10, 15, 8, 18, 10, 13, 7, 16, 11, 18, 8, 14, 16, 9, 7, 18, 13, 10, 15, 8, 12, 17, 9, 14, 11];

export default function LanyardCard({ photoSrc, name, role }: LanyardCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperControls = useAnimationControls();

  // 3D tilt values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 150, damping: 22 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), springCfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), springCfg);

  function onMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  // Pendulum swing animation on click
  async function handleClick() {
    await wrapperControls.start({
      rotate: [0, 18, -14, 10, -7, 4, -2, 0],
      transition: { duration: 1.4, ease: "easeOut" },
    });
  }

  return (
    <motion.div
      className="lanyard-wrapper"
      animate={wrapperControls}
      style={{ transformOrigin: "top center", originX: "50%", originY: "0%" }}
      onClick={handleClick}
    >
      {/* ── Metal Clip ── */}
      <svg
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lanyard-clip"
      >
        <rect x="6" y="0" width="16" height="16" rx="3" fill="url(#clipGrad)" stroke="#888" strokeWidth="0.8" />
        <rect x="10" y="3" width="8" height="8" rx="1.5" fill="#999" />
        <line x1="14" y1="16" x2="14" y2="22" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="30" r="7" fill="none" stroke="url(#ringGrad)" strokeWidth="2.2" />
        <path d="M9 26.5 A7 7 0 0 1 19 26.5" fill="none" stroke="#d8d8d8" strokeWidth="1" strokeLinecap="round" />
        <defs>
          <linearGradient id="clipGrad" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e0e0" />
            <stop offset="1" stopColor="#a0a0a0" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="7" y1="23" x2="21" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d0d0d0" />
            <stop offset="1" stopColor="#888" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Lanyard Strap ── */}
      <div className="lanyard-strap">
        <div className="lanyard-strap-bg" />
        <span className="lanyard-strap-text">{name} · Portfolio</span>
      </div>

      {/* ── Card Body with 3D Tilt ── */}
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="lanyard-card"
      >
        {/* Hole punch */}
        <div className="lanyard-hole" />

        {/* Photo */}
        <div className="lanyard-photo-wrapper">
          <img src={photoSrc} alt={name} className="lanyard-photo" />
        </div>

        {/* Name & Role */}
        <div className="lanyard-info">
          <h3 className="lanyard-name font-inter">{name}</h3>
          <p className="lanyard-role font-inter">{role}</p>
        </div>

        {/* Divider + Barcode */}
        <div className="lanyard-barcode">
          <div className="lanyard-barcode-bars">
            {barHeights.map((h, i) => (
              <div key={i} className="lanyard-bar" style={{ height: `${h}px` }} />
            ))}
          </div>
          <span className="lanyard-barcode-num">YV-2025-PRO</span>
        </div>

        {/* Click hint */}
        <p className="lanyard-hint"></p>
      </motion.div>
    </motion.div>
  );
}
