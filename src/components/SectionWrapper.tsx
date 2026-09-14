"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  coordinate?: string;
}

export default function SectionWrapper({ children, id, className = "", coordinate }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen py-16 md:py-28 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center z-10 ${className}`}
    >
      {coordinate && (
        <span className="absolute top-8 right-8 font-mono text-xs text-neutral-500 tracking-widest uppercase opacity-40 select-none">
          {coordinate}
        </span>
      )}
      {children}
    </section>
  );
}
