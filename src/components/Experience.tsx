"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { experience, education, ExperienceItem, EducationItem } from "@/data";

export default function Experience() {
  const ExperienceCard = ({
    item,
    index,
  }: {
    item: ExperienceItem;
    index: number;
  }) => (
    <motion.div
      className="relative pl-14 md:pl-24 mb-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="absolute left-0 md:left-4.75 top-6 w-10 h-10 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 text-white">
        <Briefcase size={18} />
      </div>
      <GlassCard className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-xl font-heading font-bold text-white">
              {item.role}
            </h4>
            {item.type && (
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/10">
                {item.type}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <Calendar size={13} /> {item.duration}
          </span>
        </div>
        <div className="text-base font-semibold text-neutral-300 mb-4">
          {item.company}
        </div>

        {item.responsibilities && item.responsibilities.length > 0 && (
          <ul className="space-y-2 mb-4 text-sm text-neutral-400">
            {item.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2
                  size={15}
                  className="text-neutral-500 mt-0.5 shrink-0"
                />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.div>
  );

  const EducationCard = ({
    item,
    index,
  }: {
    item: EducationItem;
    index: number;
  }) => (
    <motion.div
      className="relative pl-14 md:pl-24 mb-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="absolute left-0 md:left-4.75 top-6 w-10 h-10 bg-black border-2 border-white/80 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10 text-white">
        <GraduationCap size={18} />
      </div>
      <GlassCard className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h4 className="text-xl font-heading font-bold text-white">
            {item.degree}
          </h4>
          <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <Calendar size={13} /> {item.duration}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-base font-semibold text-neutral-300">
            {item.institution}
          </span>
          {item.grade && (
            <span className="text-xs font-mono text-neutral-300 bg-white/10 border border-white/10 px-2 py-0.5 rounded">
              {item.grade}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-neutral-400 leading-relaxed">
            {item.description}
          </p>
        )}
      </GlassCard>
    </motion.div>
  );

  return (
    <SectionWrapper id="experience">
      <div className="flex items-center gap-8 mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold whitespace-nowrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Career <span className="text-gradient">Journey</span>
        </motion.h2>
        <div className="h-px grow bg-linear-to-r from-white/20 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute top-0 bottom-0 left-5 md:left-9.75 w-0.5 bg-linear-to-b from-white via-neutral-500 to-transparent opacity-30 rounded-full" />

        <div className="mb-16">
          <h3 className="font-heading text-xl font-semibold ml-14 md:ml-24 mb-6 text-neutral-300">
            Experience
          </h3>
          {experience.map((exp, idx) => (
            <ExperienceCard key={exp.company + idx} item={exp} index={idx} />
          ))}
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold ml-14 md:ml-24 mb-6 text-neutral-300">
            Education
          </h3>
          {education.map((edu, idx) => (
            <EducationCard
              key={edu.institution + idx}
              item={edu}
              index={idx + experience.length}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
