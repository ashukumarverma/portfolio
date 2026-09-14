"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import {
  Award,
  Code2,
  Database,
  Layout,
  Terminal,
  ExternalLink,
  Trophy,
} from "lucide-react";
import { skills, certifications, achievements } from "@/data";

export default function Skills() {
  const [skillCategory, setSkillCategory] = useState<
    "all" | "languages" | "frameworks" | "tools" | "subjects"
  >("all");
  const [activeRightTab, setActiveRightTab] = useState<
    "certifications" | "achievements"
  >("certifications");

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code2 className="w-4 h-4 text-white" />,
    frameworks: <Layout className="w-4 h-4 text-white" />,
    tools: <Terminal className="w-4 h-4 text-white" />,
    subjects: <Database className="w-4 h-4 text-white" />,
  };

  const allSkills = [
    ...skills.languages.map((s) => ({ ...s, category: "languages" })),
    ...skills.frameworks.map((s) => ({ ...s, category: "frameworks" })),
    ...skills.tools.map((s) => ({ ...s, category: "tools" })),
    ...skills.subjects.map((s) => ({
      name: s,
      level: "core",
      category: "subjects",
    })),
  ];

  const filteredSkills =
    skillCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === skillCategory);

  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-8 mb-16">
        <div className="h-px grow bg-linear-to-l from-white/20 to-transparent" />
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold whitespace-nowrap"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Skills & <span className="text-gradient">Recognition</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Technical Skills */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-semibold text-neutral-300">
              Technical Arsenal
            </h3>
            <span className="text-xs text-neutral-400 font-mono">
              {filteredSkills.length} Technologies
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(
              [
                { id: "all", label: "All" },
                { id: "languages", label: "Languages" },
                { id: "frameworks", label: "Frameworks" },
                { id: "tools", label: "Tools & DBs" },
                { id: "subjects", label: "Core CS" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSkillCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  skillCategory === cat.id
                    ? "bg-white text-black font-semibold shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    : "bg-white/5 text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div layout className="flex flex-wrap gap-3">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900/70 border border-white/10 rounded-xl backdrop-blur-md cursor-default transition-all duration-300 hover:border-white/40 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    {categoryIcons[skill.category] || (
                      <Code2 className="w-4 h-4 text-white" />
                    )}
                  </span>
                  <span className="font-medium text-white text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Certifications & Achievements */}
        <div>
          {/* Tab Switcher */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setActiveRightTab("certifications")}
              className={`flex items-center gap-2 pb-2 text-lg font-heading font-semibold border-b-2 transition-colors cursor-pointer ${
                activeRightTab === "certifications"
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Award className="w-5 h-5" />
              Certifications ({certifications.length})
            </button>
            <span className="text-neutral-600 pb-2">/</span>
            <button
              onClick={() => setActiveRightTab("achievements")}
              className={`flex items-center gap-2 pb-2 text-lg font-heading font-semibold border-b-2 transition-colors cursor-pointer ${
                activeRightTab === "achievements"
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Trophy className="w-5 h-5" />
              Achievements ({achievements.length})
            </button>
          </div>

          <motion.div
            key={activeRightTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4 max-h-120 overflow-y-auto pr-2"
          >
            {activeRightTab === "certifications"
              ? certifications.map((cert, index) => (
                  <GlassCard
                    key={cert.title + index}
                    animateInView={false}
                    className="shrink-0 p-5!"
                    contentClassName="flex items-start justify-between gap-4 w-full"
                  >
                    <div className="flex items-start gap-4 grow min-w-0">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-white mt-0.5 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="grow min-w-0">
                        <h4 className="text-base font-heading font-semibold text-white leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-1">
                          {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
                        </p>
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {cert.skills.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                        aria-label={`View certificate for ${cert.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </GlassCard>
                ))
              : achievements.map((item, index) => (
                  <GlassCard
                    key={item.title + index}
                    animateInView={false}
                    className="shrink-0 p-5!"
                    contentClassName="flex items-start justify-between gap-4 w-full"
                  >
                    <div className="flex items-start gap-4 grow min-w-0">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-white mt-0.5 shrink-0">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div className="grow min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-heading font-semibold text-white">
                            {item.title}
                          </h4>
                          {item.category && (
                            <span className="text-[10px] font-mono text-neutral-300 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full">
                              {item.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400 mt-1">
                          {item.description}
                        </p>
                        {(item.year || item.date) && (
                          <p className="text-[11px] font-mono text-neutral-500 mt-1.5">
                            {item.year || item.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                        aria-label={`View link for ${item.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </GlassCard>
                ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
