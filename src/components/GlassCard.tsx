"use client";

import { motion } from "framer-motion";
import { useRef, useCallback, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  hoverEffect?: boolean;
  delay?: number;
  animateInView?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  contentClassName = "",
  hoverEffect = true,
  delay = 0,
  animateInView = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  }, []);

  const animationProps = animateInView
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay },
      }
    : {};

  return (
    <motion.div
      ref={cardRef}
      {...animationProps}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 overflow-hidden ${
        hoverEffect
          ? "hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.04)]"
          : ""
      } ${className}`}
    >
      {/* Top border glow line on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Spotlight effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(320px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255, 255, 255, 0.06), transparent 65%)`,
        }}
      />

      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </motion.div>
  );
}
