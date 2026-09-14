"use client";

import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data";

export default function Hero() {
  const firstName =
    profile.firstName || profile.name.split(" ")[0] || profile.name;
  const lastName =
    profile.lastName || profile.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-12 z-10">
      {/* Ambient glow orbs */}
      <div className="absolute top-[15%] left-[25%] w-150 h-150 bg-linear-to-b from-white/5 to-transparent rounded-full blur-[90px] animate-float pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[20%] w-125 h-125 bg-linear-to-b from-neutral-400/5 to-transparent rounded-full blur-[90px] animate-float-reverse pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="text-center z-10 max-w-3xl flex flex-col items-center">
        {profile.status && (
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-white tracking-wider mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-node-pulse" />
            {profile.status}
          </motion.div>
        )}

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold leading-[1.05] tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-white">{firstName}</span>
          {lastName && <span className="block glow-text">{lastName}</span>}
        </motion.h1>

        {/* Orbital ring decoration */}
        <motion.div
          className="w-64 h-64 border border-white/10 rounded-full absolute top-1/2 left-1/2 animate-orbit-spin pointer-events-none -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neutral-400 rounded-full shadow-[0_0_10px_rgba(163,163,163,0.6)]" />
        </motion.div>

        <motion.div
          className="text-xl sm:text-2xl text-neutral-300 mb-6 min-h-10 font-heading font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TypeWriter
            words={
              profile.titles && profile.titles.length > 0
                ? profile.titles
                : [profile.role]
            }
            speed={70}
            deleteSpeed={40}
            pauseTime={2500}
          />
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-neutral-400 max-w-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {profile.tagline || profile.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MagneticButton href="#projects" variant="primary">
            Explore Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Send Transmission
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">
          Scroll to explore
        </span>
        <ArrowDown
          size={16}
          className="text-white filter drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]"
        />
      </motion.div>
    </section>
  );
}
