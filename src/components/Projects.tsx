"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/data";
import Image from "next/image";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex items-center gap-8 mb-16">
        <div className="h-px grow bg-linear-to-l from-white/20 to-transparent" />
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold whitespace-nowrap"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const title = project.title || project.name || "Project";
          const codeUrl = project.links?.code;
          const demoUrl =
            project.links?.demo && project.links.demo !== "#"
              ? project.links.demo
              : undefined;
          const fallbackImage =
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

          return (
            <motion.div
              key={project.id || title + index}
              className="flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard
                className="p-0! flex flex-col h-full group"
                hoverEffect={false}
              >
                <div className="relative w-full h-60 overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image || fallbackImage}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Action Overlay */}
                  {(codeUrl || demoUrl) && (
                    <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                      <div className="flex gap-4">
                        {codeUrl && (
                          <a
                            href={codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            aria-label={`GitHub Repository for ${title}`}
                          >
                            <FiGithub size={22} />
                          </a>
                        )}
                        {demoUrl && (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            aria-label={`Live Demo for ${title}`}
                          >
                            <ExternalLink size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {title}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-mono tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
