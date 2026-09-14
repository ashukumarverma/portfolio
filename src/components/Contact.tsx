"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { Mail, MapPin } from "lucide-react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data";

export default function Contact() {
  const socialLinks = [
    profile.email
      ? {
          name: "Email",
          href: `mailto:${profile.email}`,
          icon: <Mail size={22} />,
        }
      : null,
    profile.social.linkedin
      ? {
          name: "LinkedIn",
          href: profile.social.linkedin.startsWith("http")
            ? profile.social.linkedin
            : `https://${profile.social.linkedin}`,
          icon: <FiLinkedin size={22} />,
        }
      : null,
    profile.social.github
      ? {
          name: "GitHub",
          href: profile.social.github.startsWith("http")
            ? profile.social.github
            : `https://${profile.social.github}`,
          icon: <FiGithub size={22} />,
        }
      : null,
    profile.social.leetcode
      ? {
          name: "LeetCode",
          href: profile.social.leetcode.startsWith("http")
            ? profile.social.leetcode
            : `https://${profile.social.leetcode}`,
          icon: <SiLeetcode size={20} />,
        }
      : null,
    profile.social.twitter
      ? {
          name: "Twitter",
          href: profile.social.twitter.startsWith("http")
            ? profile.social.twitter
            : `https://${profile.social.twitter}`,
          icon: <FiTwitter size={22} />,
        }
      : null,
  ].filter(Boolean) as { name: string; href: string; icon: React.ReactNode }[];

  return (
    <SectionWrapper id="contact" className="pb-8">
      <div className="flex items-center gap-8 mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold whitespace-nowrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s <span className="text-gradient">Connect</span>
        </motion.h2>
        <div className="h-px grow bg-linear-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center mb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 text-white">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Whether you have an opportunity, a project proposal, or just want
              to connect, feel free to reach out directly.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-3 mb-8 text-neutral-300 font-mono text-sm">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-neutral-500" />
                  <span>{profile.email}</span>
                </a>
              )}

              {profile.location && (
                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin size={16} className="text-neutral-500" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all hover:-translate-y-1 shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard hoverEffect={false} className="p-10!">
              <form
                action={`mailto:${profile.email}`}
                method="POST"
                encType="text/plain"
                className="flex flex-col gap-8"
              >
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-0 border-b border-white/15 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-0 border-b border-white/15 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-0 border-b border-white/15 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white"
                  >
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-10 py-4 bg-white text-black font-semibold rounded-full font-heading text-lg cursor-pointer transition-all self-start shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                >
                  Send Transmission
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <footer className="text-center pt-16 border-t border-white/10 text-neutral-500 text-sm flex flex-col gap-2">
        <p>
          © {new Date().getFullYear()} {profile.displayName || profile.name}.
          All rights reserved.
        </p>
      </footer>
    </SectionWrapper>
  );
}
