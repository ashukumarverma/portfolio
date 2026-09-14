"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  }, []);

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-base cursor-pointer tracking-wide overflow-hidden transition-all duration-300 select-none";

  const variantClasses =
    variant === "primary"
      ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
      : "bg-white/5 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]";

  const content = (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href} className="inline-block no-underline">{content}</a>;
  }

  return <div onClick={onClick} className="inline-block">{content}</div>;
}
