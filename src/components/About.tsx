"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  Heart,
  Globe,
  Network,
  Trophy,
  GitBranch,
  Cpu,
  Layers,
  Terminal,
  Code2,
  Sparkles,
  Laptop,
} from "lucide-react";
import { profile } from "@/data";

const interestIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Network: <Network className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Trophy: <Trophy className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  GitBranch: <GitBranch className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Cpu: <Cpu className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Layers: <Layers className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Terminal: <Terminal className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Code2: <Code2 className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  Laptop: <Laptop className="w-6 h-6 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
};

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = Math.max(1, target / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const paragraphs =
    profile.aboutParagraphs && profile.aboutParagraphs.length > 0
      ? profile.aboutParagraphs
      : [profile.bio];

  const stats =
    profile.stats && profile.stats.length > 0
      ? profile.stats
      : [
          { label: "Years Exp.", value: 1, suffix: "+" },
          { label: "DSA Solved", value: 400, suffix: "+" },
          { label: "LeetCode Rating", value: 1717, suffix: "" },
        ];

  const interests =
    profile.interests && profile.interests.length > 0
      ? profile.interests
      : [
          { name: "Web Development", icon: "Globe" },
          { name: "System Design", icon: "Network" },
          { name: "Competitive Coding", icon: "Trophy" },
          { name: "Open Source", icon: "GitBranch" },
        ];

  return (
    <SectionWrapper id="about" coordinate="01 / ABOUT">
      <div className="flex items-center gap-8 mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold whitespace-nowrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="glow-text">About</span> Me
        </motion.h2>
        <div className="h-px grow bg-linear-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg text-neutral-300 mb-6 leading-relaxed"
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-6 sm:gap-10 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-18 h-18 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05),inset_0_0_15px_rgba(255,255,255,0.02)] hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-all">
                    <span className="font-heading text-2xl font-bold text-white">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix || ""}
                      />
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest font-mono text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart
                className="text-white filter drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                size={20}
              />
              <h3 className="text-xl font-heading font-semibold">
                Interests & Passions
              </h3>
            </div>

            <div className="relative grid grid-cols-2 gap-6 py-4">
              {interests.map((interest, i) => {
                const iconElement = interestIconMap[interest.icon] || (
                  <span className="text-2xl">{interest.icon}</span>
                );

                return (
                  <motion.div
                    key={interest.name}
                    className="relative z-10 flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl cursor-default transition-all hover:border-white/25 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.6 + i * 0.15,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      {iconElement}
                    </div>
                    <span className="text-xs text-neutral-300 font-medium text-center">
                      {interest.name}
                    </span>
                  </motion.div>
                );
              })}

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 300 200"
                preserveAspectRatio="none"
              >
                <line
                  x1="75"
                  y1="50"
                  x2="225"
                  y2="50"
                  className="constellation-line"
                />
                <line
                  x1="75"
                  y1="150"
                  x2="225"
                  y2="150"
                  className="constellation-line"
                />
                <line
                  x1="75"
                  y1="50"
                  x2="75"
                  y2="150"
                  className="constellation-line"
                />
                <line
                  x1="225"
                  y1="50"
                  x2="225"
                  y2="150"
                  className="constellation-line"
                />
                <line
                  x1="75"
                  y1="50"
                  x2="225"
                  y2="150"
                  className="constellation-line"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
