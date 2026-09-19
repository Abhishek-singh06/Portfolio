"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { usePreloader } from "../preloader";
import ScrollDownIcon from "../scroll-down-icon";
import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Subtle ambient radial background glow to frame hero content without noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-[calc(100dvh-5rem)]">
          {/* Left Column: Personal Identity & Actions */}
          <div className="lg:col-span-7 z-[2] flex flex-col justify-center pointer-events-auto">
            {!isLoading && (
              <div className="flex flex-col gap-5 sm:gap-6 text-left">
                {/* 1. Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-secondary/40 backdrop-blur-sm text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ECM Student • Full-Stack Developer • AI Enthusiast</span>
                  </div>
                </motion.div>

                {/* 2. Controlled Typography Name */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="space-y-1"
                >
                  <h1 className="font-display font-bold tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3.25rem,5.2vw,5.5rem)] leading-[1.08]">
                    Abhishek
                    <span className="block text-foreground/90">Kumar Singh</span>
                  </h1>
                </motion.div>

                {/* 3. Role Title */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/85 tracking-tight">
                    Software Engineer | Full-Stack Developer
                  </h2>
                </motion.div>

                {/* 4. Supporting Description (2-3 lines, authentic & concise) */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
                >
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
                    Electronics and Computer Engineering student at VIT Chennai, building
                    practical full-stack applications and AI-powered systems with a focus on
                    solving real-world problems.
                  </p>
                </motion.div>

                {/* 5. Primary Actions & Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
                  className="flex flex-col gap-4 pt-1"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Primary Button */}
                    <Link href="#projects">
                      <Button
                        size="lg"
                        className="gap-2 font-medium px-6 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <span>View My Work</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>

                    {/* Secondary Button: View Resume */}
                    <a
                      href="/Abhishek_Kumar_Singh_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/resume"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 font-medium px-5 border-border/90 bg-background/60 backdrop-blur-sm hover:bg-secondary/70 hover:border-primary/60 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4 text-primary" />
                        <span>View Resume</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/resume:text-foreground group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5 transition-transform duration-200" />
                      </Button>
                    </a>

                    {/* Connect Text Link */}
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                    >
                      <span>Let&apos;s Connect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Clean Social Links with unified secondary style */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs uppercase font-semibold text-muted-foreground/80 tracking-wider mr-1 font-mono">
                      Profiles
                    </span>
                    <a
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/90 hover:border-primary/60 bg-secondary/40 hover:bg-secondary/80 text-xs font-medium text-foreground/90 hover:text-foreground transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                    <a
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/90 hover:border-primary/60 bg-secondary/40 hover:bg-secondary/80 text-xs font-medium text-foreground/90 hover:text-foreground transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      <SiLinkedin className="w-3.5 h-3.5 text-blue-500" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                    <a
                      href={config.social.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LeetCode Profile"
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/90 hover:border-primary/60 bg-secondary/40 hover:bg-secondary/80 text-xs font-medium text-foreground/90 hover:text-foreground transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    >
                      <SiLeetcode className="w-3.5 h-3.5 text-amber-500" />
                      <span>LeetCode</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.div>

                {/* 6. Key Highlights / Credentials Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.6, ease: "easeOut" }}
                  className="pt-4 mt-2 border-t border-border/60 max-w-xl"
                >
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-mono mb-2.5">
                    Key Highlights
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {/* Card 1: 8.8/10 Current CGPA */}
                    <div className="group relative p-3.5 rounded-xl border border-border/75 bg-card/60 dark:bg-card/45 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/85 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between">
                      <div className="p-1.5 w-fit rounded-lg bg-primary/10 text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-xl sm:text-2xl text-foreground tracking-tight leading-none">
                          8.8/10
                        </div>
                        <div className="text-xs text-muted-foreground font-medium mt-1">
                          Current CGPA
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Full Stack Intern @ QuickIntell */}
                    <div className="group relative p-3.5 rounded-xl border border-border/75 bg-card/60 dark:bg-card/45 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/85 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between">
                      <div className="p-1.5 w-fit rounded-lg bg-primary/10 text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm sm:text-base text-foreground tracking-tight leading-tight">
                          Full Stack Intern
                        </div>
                        <div className="text-xs text-muted-foreground font-medium mt-1">
                          @ <span className="text-foreground font-semibold">QuickIntell</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: 438+ Students Represented */}
                    <div className="group relative p-3.5 rounded-xl border border-border/75 bg-card/60 dark:bg-card/45 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/85 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between">
                      <div className="p-1.5 w-fit rounded-lg bg-primary/10 text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display font-extrabold text-xl sm:text-2xl text-foreground tracking-tight leading-none">
                          438+
                        </div>
                        <div className="text-xs text-muted-foreground font-medium mt-1">
                          Students Represented
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Right Column: Dedicated Space for 3D Spline Keyboard */}
          <div className="lg:col-span-5 h-full w-full pointer-events-none" />
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
