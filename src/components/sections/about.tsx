"use client";

import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Briefcase,
  Users,
  Trophy,
  Award,
  Sparkles,
  Layers,
  Bot,
  Terminal,
  Database,
  ShieldCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LEADERSHIP } from "@/data/constants";

interface StatHighlight {
  id: string;
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAT_HIGHLIGHTS: StatHighlight[] = [
  {
    id: "cgpa",
    value: "8.8/10",
    label: "Current CGPA",
    icon: GraduationCap,
  },
  {
    id: "role",
    value: "Full Stack",
    label: "Developer Intern",
    icon: Briefcase,
  },
  {
    id: "students",
    value: "438+",
    label: "Students Represented",
    icon: Users,
  },
  {
    id: "sports",
    value: "4",
    label: "Major Sports Events",
    icon: Trophy,
  },
  {
    id: "team",
    value: "37",
    label: "Team Members Led",
    icon: Award,
  },
];

const FOCUS_AREAS = [
  { label: "Full-Stack Development", icon: Layers },
  { label: "AI-Powered Applications", icon: Bot },
  { label: "Software Engineering", icon: Terminal },
  { label: "Data-Driven Systems", icon: Database },
];

const LEADERSHIP_ICONS: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Users,
  2: ShieldCheck,
  3: Trophy,
  4: Award,
};

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex w-full min-h-screen flex-col justify-center py-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* 1. Header */}
      <SectionHeader
        id="about"
        title="About Me"
        desc="Engineering background, hands-on software development, and student leadership."
        className="relative mb-12 md:mb-16"
      />

      {/* Main Container */}
      <div className="flex flex-col gap-12 lg:gap-16 pointer-events-auto">
        {/* Top Story & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {/* Quick Status Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant="outline"
                className="bg-primary/5 text-foreground/90 border-border/80 py-1.5 px-3.5 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                B.Tech in Electronics and Computer Engineering (ECM) • VIT Chennai (2024–2028)
              </Badge>
              <Badge
                variant="secondary"
                className="py-1.5 px-3.5 text-xs sm:text-sm font-medium font-mono"
              >
                Full Stack Developer Intern @ QuickIntell
              </Badge>
            </div>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
              <p className="text-foreground font-medium">
                I&apos;m an Electronics and Computer Engineering student at VIT Chennai
                and a Full Stack Developer Intern at QuickIntell, focused on building
                practical, user-centered software and AI-powered applications.
              </p>

              <p>
                I enjoy working across the stack—from designing responsive interfaces
                and developing APIs to integrating databases, external services, and AI
                systems. I am particularly interested in Artificial Intelligence,
                intelligent software systems, data-driven applications, and solving
                real-world problems through technology.
              </p>

              <p>
                Alongside my professional experience, I have built projects such as{" "}
                <span className="text-foreground font-medium">UniFetch</span>,{" "}
                <span className="text-foreground font-medium">GetPlaced</span>,{" "}
                <span className="text-foreground font-medium">CityFlow</span>, and{" "}
                <span className="text-foreground font-medium">MedExtract</span>, which have
                given me hands-on experience with full-stack development, AI integration,
                real-time systems, spatial analysis, and application architecture.
              </p>

              <p>
                I also serve as a Programme Representative at VIT Chennai, representing
                around 438 students, and have taken on other student leadership
                responsibilities. These experiences have strengthened my communication,
                teamwork, coordination, and leadership skills.
              </p>

              <p className="pt-1">
                I am currently looking to deepen my software engineering skills while
                exploring research-oriented opportunities in Computer Science, AI,
                Cybernetics, and Engineering.
              </p>
            </div>
          </motion.div>

          {/* Focus Areas Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold px-1">
              Core Technical Focus
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {FOCUS_AREAS.map((focus) => {
                const IconComponent = focus.icon;
                return (
                  <div
                    key={focus.label}
                    className={cn(
                      "flex items-center gap-3.5 p-4 rounded-xl",
                      "bg-card/60 backdrop-blur-md border border-border/80 text-foreground",
                      "transition-all duration-200 hover:bg-card/90 hover:border-primary/30"
                    )}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{focus.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 2. Small Impact Highlights: verified metrics + Smart AI Hackathon Achievement */}
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold px-1">
            Verified Highlights & Metrics
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
            {/* 🏆 PREMIER ACHIEVEMENT CARD: Smart AI Hackathon Winner (Team Leader) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-1 md:col-span-2 lg:col-span-6 h-full"
            >
              <Card
                className={cn(
                  "relative flex flex-col justify-between h-full overflow-hidden rounded-2xl p-5 sm:p-6",
                  "border border-amber-500/35 dark:border-amber-500/30",
                  "bg-gradient-to-br from-amber-500/[0.10] via-amber-500/[0.03] to-card/85 dark:to-card/75 backdrop-blur-xl",
                  "transition-all duration-300 shadow-md hover:shadow-xl hover:border-amber-500/50 hover:-translate-y-0.5",
                  "group"
                )}
              >
                {/* Subtle warm atmospheric glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl"
                />

                <div className="relative z-10 space-y-3">
                  {/* Top row: Trophy icon + Recognition Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Trophy className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                      🏆 HACKATHON
                    </span>
                  </div>

                  {/* Title & Subtitle: Immediate visual hierarchy */}
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-foreground tracking-tight uppercase">
                      WINNER
                    </h4>
                    <div className="text-sm sm:text-base font-semibold text-foreground/90 tracking-tight">
                      Smart AI Hackathon
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground font-mono pt-0.5">
                      <span>VIT Chennai</span>
                      <span className="opacity-40">·</span>
                      <span className="px-2 py-0.5 rounded-md bg-secondary/80 text-foreground font-semibold border border-border/60">
                        Team Leader
                      </span>
                    </div>
                  </div>

                  {/* Achievement Result & Contribution Statement */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed">
                      Secured second position among 119 teams.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal">
                      Led the team through ideation, development, coordination, integration and final presentation.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Existing 5 Verified Metrics */}
            {STAT_HIGHLIGHTS.map((stat, idx) => {
              const IconComponent = stat.icon;
              const desktopColSpan =
                idx < 2 ? "lg:col-span-3" : "lg:col-span-4";
              const tabletColSpan =
                idx === 4 ? "md:col-span-2" : "md:col-span-1";

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (idx + 1) * 0.05 }}
                  className={cn(
                    "col-span-1 h-full",
                    tabletColSpan,
                    desktopColSpan
                  )}
                >
                  <Card
                    className={cn(
                      "border-border/80 bg-card/60 backdrop-blur-md h-full rounded-2xl",
                      "transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:-translate-y-0.5"
                    )}
                  >
                    <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full gap-4">
                      <div className="flex items-center justify-between text-muted-foreground">
                        <div className="p-2 rounded-lg bg-secondary/60 text-foreground border border-border/60">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Leadership & Positions Subsection */}
        <div id="leadership" className="scroll-mt-24 pt-6 border-t border-border/60 flex flex-col gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground">
              Leadership & Positions
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Roles, responsibilities, student governance, and large-scale event execution.
            </p>
          </div>

          {/* Cards Grid: 2 columns on desktop, 1 column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {LEADERSHIP.map((pos, index) => {
              const IconComponent = LEADERSHIP_ICONS[pos.id] || Users;
              return (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <Card
                    className={cn(
                      "group relative flex flex-col justify-between h-full border-border/80 bg-card/60 backdrop-blur-md rounded-xl p-5 sm:p-6",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/90 hover:shadow-md",
                      pos.highlightBadge && "border-amber-500/30 bg-amber-500/[0.02]"
                    )}
                  >
                    <div className="space-y-3">
                      {/* Highlight Badge if present (e.g. SELECTED TWICE) */}
                      {pos.highlightBadge && (
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-500 dark:text-amber-300 text-xs font-bold font-mono tracking-wider shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                            <span>{pos.highlightBadge}</span>
                          </span>
                        </div>
                      )}

                      {/* Role and Organization */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <h4 className="font-display font-semibold text-lg sm:text-xl text-foreground tracking-tight uppercase">
                            {pos.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{pos.organization}</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-lg bg-secondary/60 text-foreground border border-border/60 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Concise 1-2 sentence description explaining responsibilities & actions */}
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal">
                        {pos.description}
                      </p>
                    </div>

                    {/* Footer: Metrics and Certificate link */}
                    <div className="mt-5 pt-3 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      {pos.metrics && pos.metrics.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {pos.metrics.map((metric) => (
                            <Badge
                              key={metric}
                              variant="secondary"
                              className="text-[11px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 bg-secondary/80 text-foreground border border-border/60"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <div />
                      )}

                      {pos.certificateUrl && (
                        <a
                          href={pos.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 group/cert inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-primary/35 bg-primary/10 hover:bg-primary/20 hover:border-primary/60 text-foreground transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <Award className="w-3.5 h-3.5 text-primary group-hover/cert:scale-110 transition-transform duration-200" />
                          <span>View Certificate</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-primary/80 group-hover/cert:text-primary group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform duration-200" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
