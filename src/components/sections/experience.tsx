"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Download,
  ExternalLink,
  Calendar,
  Building2,
  Sparkles,
  Award,
  Trophy,
} from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { SKILLS, SkillNames } from "@/data/constants";
import { cn } from "@/lib/utils";

const QUICKINTELL_SKILLS: SkillNames[] = [
  SkillNames.REACT,
  SkillNames.NEXTJS,
  SkillNames.NODEJS,
  SkillNames.FASTAPI,
  SkillNames.POSTGRES,
  SkillNames.MONGODB,
];

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Subtle ambient lighting to provide depth while keeping background 3D keyboard readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/[0.025] blur-[120px] rounded-full"
      />

      <div className="w-full relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          id="experience"
          title="Experience & Education"
          desc="My professional software engineering role and academic foundation."
          className="relative mb-10 md:mb-14"
        />

        <div className="space-y-10 pointer-events-auto">
          {/* ==================================================
              1. EXPERIENCE SUBSECTION
              ================================================== */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-primary/10 text-primary">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-primary font-mono">
                Experience
              </h3>
            </div>

            {/* Polished Experience Card with subtle vertical timeline indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Card
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border/80",
                  "bg-card/75 dark:bg-card/65 backdrop-blur-xl",
                  "transition-all duration-300 shadow-md hover:shadow-xl hover:border-primary/40",
                  "hover:-translate-y-0.5"
                )}
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-transparent opacity-75" />

                <CardContent className="p-6 sm:p-8 space-y-5">
                  {/* Header: Role, Company & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/50">
                    <div className="space-y-1">
                      <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-foreground">
                        Full Stack Developer Intern
                      </h4>
                      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground/90">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span>QuickIntell</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs font-medium py-1 px-3 bg-secondary/80 text-foreground border border-border/60"
                      >
                        <Calendar className="w-3 h-3 mr-1 text-muted-foreground inline" />
                        6 Months — Internship
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                    Developed and maintained full-stack applications, contributing to
                    frontend, backend, API development, database integration, debugging,
                    and deployment in a production-oriented environment.
                  </p>

                  {/* Technology Badges */}
                  <div className="pt-2 space-y-2.5">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-mono">
                      Technologies & Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {QUICKINTELL_SKILLS.map((skillName) => {
                        const skill = SKILLS[skillName];
                        if (!skill) return null;
                        return (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="gap-2 py-1.5 px-3 text-xs font-medium bg-secondary/40 hover:bg-secondary/70 border-border/70 text-foreground transition-colors"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={skill.icon}
                              alt={skill.label}
                              className="w-3.5 h-3.5 object-contain opacity-90"
                              loading="lazy"
                            />
                            <span>{skill.label}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* ==================================================
              2. EDUCATION SUBSECTION
              ================================================== */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-primary/10 text-primary">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-primary font-mono">
                Education
              </h3>
            </div>

            {/* Education Cards Stack */}
            <div className="space-y-4">
              {/* Card 1: VIT Chennai */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              >
                <Card
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-border/80",
                    "bg-card/75 dark:bg-card/65 backdrop-blur-xl",
                    "transition-all duration-300 shadow-md hover:shadow-xl hover:border-primary/40",
                    "hover:-translate-y-0.5"
                  )}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-transparent opacity-75" />

                  <CardContent className="p-6 sm:p-8 space-y-5">
                    {/* Header: Degree, Institution, Duration & CGPA */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border/50">
                      <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-foreground">
                          B.Tech — Electronics and Computer Engineering
                        </h4>
                        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground/90">
                          <Building2 className="w-4 h-4 text-muted-foreground" />
                          <span>VIT Chennai</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs font-medium py-1 px-3 bg-secondary/80 text-foreground border border-border/60"
                        >
                          <Calendar className="w-3 h-3 mr-1 text-muted-foreground inline" />
                          2024–2028
                        </Badge>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          <span>8.8/10 CGPA</span>
                        </div>
                      </div>
                    </div>

                    {/* Academic Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                      Pursuing a B.Tech in Electronics and Computer Engineering with a focus on
                      software engineering, full-stack development, data structures and algorithms,
                      databases, and computer science fundamentals.
                    </p>

                    {/* Academic Focus Areas */}
                    <div className="pt-2 space-y-2.5">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-mono">
                        Focus Areas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Full-Stack Development",
                          "Database Systems",
                          "Object-Oriented Programming",
                          "Operating Systems",
                          "Computer Networks",
                        ].map((area) => (
                          <Badge
                            key={area}
                            variant="outline"
                            className="py-1 px-3 text-xs font-medium bg-secondary/40 hover:bg-secondary/70 border-border/70 text-foreground transition-colors"
                          >
                            <span>{area}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2: Lucknow Public College */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              >
                <Card
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-border/80",
                    "bg-card/75 dark:bg-card/65 backdrop-blur-xl",
                    "transition-all duration-300 shadow-md hover:shadow-xl hover:border-primary/40",
                    "hover:-translate-y-0.5"
                  )}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-transparent opacity-60" />

                  <CardContent className="p-6 sm:p-8 space-y-5">
                    {/* Header: Institution, Level & Academic Result */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border/50">
                      <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-foreground">
                          Lucknow Public College
                        </h4>
                        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-muted-foreground">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span>School Education</span>
                        </div>
                      </div>

                      <div className="flex items-center shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary font-mono">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          <span>96%</span>
                        </div>
                      </div>
                    </div>

                    {/* School Leadership Roles */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/80 dark:bg-secondary/60 border border-border/80 text-foreground text-xs font-mono font-semibold tracking-wider uppercase shadow-sm">
                        <Award className="w-3.5 h-3.5 text-primary" />
                        <span>HEAD BOY</span>
                      </span>
                      <span className="text-border select-none hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/80 dark:bg-secondary/60 border border-border/80 text-foreground text-xs font-mono font-semibold tracking-wider uppercase shadow-sm">
                        <Trophy className="w-3.5 h-3.5 text-primary" />
                        <span>SPORTS CAPTAIN</span>
                      </span>
                    </div>

                    {/* Academic & Leadership Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                      Completed school education with a strong academic record, graduating with 96%, while serving as Head Boy and Sports Captain.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* ==================================================
              3. RESUME ACTIONS
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="pt-4 border-t border-border/60"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card/50 dark:bg-card/40 backdrop-blur-md rounded-2xl border border-border/70 p-5 sm:p-6">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-foreground font-display">
                  Curriculum Vitae
                </h4>
                <p className="text-xs text-muted-foreground">
                  View or download a full summary of my technical background, projects, and leadership.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Primary: View Resume in browser */}
                <a
                  href="/Abhishek_Kumar_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                  aria-label="View Abhishek Kumar Singh's Resume in a new browser tab"
                >
                  <Button className="w-full sm:w-auto gap-2 font-medium px-5 shadow-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Resume</span>
                  </Button>
                </a>

                {/* Secondary: Download Resume */}
                <a
                  href="/Abhishek_Kumar_Singh_Resume.pdf"
                  download="Abhishek_Kumar_Singh_Resume.pdf"
                  className="flex-1 sm:flex-none"
                  aria-label="Download Abhishek Kumar Singh's Resume as PDF"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto gap-2 font-medium px-5 border-border/80 bg-background/60 hover:bg-secondary/60 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
