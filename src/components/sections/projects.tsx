"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Sparkles,
  Package,
  Compass,
  FileText,
  Layers,
  ArrowUpRight,
  BarChart3,
  Workflow,
  Home,
  KeyRound,
  Trophy,
  Gamepad2,
  Music,
  Calculator,
  ArrowRight,
  Medal,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import projects, { Project } from "@/data/projects";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Distinct visual themes for preview headers
const PROJECT_THEMES: Record<
  string,
  {
    gradient: string;
    borderGlow: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }
> = {
  // Featured Projects
  unifetch: {
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/40",
    icon: Package,
    accentColor: "text-blue-400",
  },
  getplaced: {
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/40",
    icon: Sparkles,
    accentColor: "text-emerald-400",
  },
  quantlab: {
    gradient: "from-cyan-600/20 via-sky-500/10 to-transparent",
    borderGlow: "hover:border-cyan-500/40",
    icon: BarChart3,
    accentColor: "text-cyan-400",
  },
  medextract: {
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    borderGlow: "hover:border-purple-500/40",
    icon: FileText,
    accentColor: "text-purple-400",
  },
  cityflow: {
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    borderGlow: "hover:border-amber-500/40",
    icon: Compass,
    accentColor: "text-amber-400",
  },
  "aec-coordination": {
    gradient: "from-rose-600/20 via-red-500/10 to-transparent",
    borderGlow: "hover:border-rose-500/40",
    icon: Workflow,
    accentColor: "text-rose-400",
  },

  // Other Projects
  "property-post-maker": {
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    borderGlow: "hover:border-violet-500/40",
    icon: Home,
    accentColor: "text-violet-400",
  },
  "react-password-generator": {
    gradient: "from-emerald-600/20 via-green-500/10 to-transparent",
    borderGlow: "hover:border-emerald-500/40",
    icon: KeyRound,
    accentColor: "text-emerald-400",
  },
  "cric-stat": {
    gradient: "from-yellow-600/20 via-amber-500/10 to-transparent",
    borderGlow: "hover:border-yellow-500/40",
    icon: Trophy,
    accentColor: "text-yellow-400",
  },
  "cricket-game": {
    gradient: "from-orange-600/20 via-red-500/10 to-transparent",
    borderGlow: "hover:border-orange-500/40",
    icon: Gamepad2,
    accentColor: "text-orange-400",
  },
  "spotify-clone": {
    gradient: "from-teal-600/20 via-emerald-500/10 to-transparent",
    borderGlow: "hover:border-teal-500/40",
    icon: Music,
    accentColor: "text-teal-400",
  },
  calculator: {
    gradient: "from-indigo-600/20 via-blue-500/10 to-transparent",
    borderGlow: "hover:border-indigo-500/40",
    icon: Calculator,
    accentColor: "text-indigo-400",
  },
};

type TabFilter = "featured" | "other" | "all";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<TabFilter>("featured");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const displayedProjects =
    activeTab === "featured"
      ? featuredProjects
      : activeTab === "other"
      ? otherProjects
      : projects;

  return (
    <SectionWrapper
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Subtle ambient lighting layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[400px] bg-primary/[0.025] blur-[120px] rounded-full"
      />

      <div className="w-full relative z-10 space-y-10">
        {/* Clean Redesigned Projects Header: Clear hierarchy, no viewport takeover */}
        <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Subtle dark radial glow/contrast backdrop to cleanly separate foreground text from 3D keyboard */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-20 -inset-y-12 bg-background/90 dark:bg-background/92 blur-3xl rounded-[36px] -z-10"
          />

          {/* Title: reduced to ~72–84px on desktop, bold modern contrast, no excessive viewport takeover */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] tracking-tight leading-none text-foreground drop-shadow-sm">
            Projects
          </h2>

          {/* Description: controlled max-width, never clipped, clear vertical spacing */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal max-w-xl mx-auto">
            A selection of applications, platforms, and systems I&apos;ve built.
          </p>

          {/* Filter Control: compact segmented control, sits below description with clean vertical spacing */}
          <div className="mt-6 sm:mt-8 w-fit mx-auto inline-flex items-center p-1 rounded-full bg-background/85 dark:bg-card/75 border border-border/80 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setActiveTab("featured")}
              className={cn(
                "relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 sm:gap-2",
                activeTab === "featured"
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <span>Featured</span>
              <span
                className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded-full leading-none",
                  activeTab === "featured"
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {featuredProjects.length}
              </span>
            </button>

            {/* Segment divider */}
            <div className="h-4 w-px bg-border/60 my-auto" />

            <button
              onClick={() => setActiveTab("other")}
              className={cn(
                "relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 sm:gap-2",
                activeTab === "other"
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <span>Other Projects</span>
              <span
                className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded-full leading-none",
                  activeTab === "other"
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {otherProjects.length}
              </span>
            </button>

            {/* Segment divider */}
            <div className="h-4 w-px bg-border/60 my-auto" />

            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 sm:gap-2",
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <span>All</span>
              <span
                className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded-full leading-none",
                  activeTab === "all"
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {projects.length}
              </span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pointer-events-auto"
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to switch tabs if on Featured */}
        {activeTab === "featured" && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                setActiveTab("other");
                window.scrollTo({
                  top: document.getElementById("projects")?.offsetTop || 0,
                  behavior: "smooth",
                });
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-card/60 hover:bg-secondary/40 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 shadow-sm"
            >
              <span>View Other Projects & Tools ({otherProjects.length})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const theme = PROJECT_THEMES[project.id] || {
    gradient: "from-primary/10 via-secondary/10 to-transparent",
    borderGlow: "hover:border-primary/40",
    icon: Layers,
    accentColor: "text-primary",
  };
  const IconComponent = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className="h-full flex"
    >
      <Card
        className={cn(
          "group relative flex flex-col justify-between w-full overflow-hidden rounded-2xl border border-border/80",
          "bg-card/75 dark:bg-card/65 backdrop-blur-xl",
          "transition-all duration-300 shadow-md hover:shadow-xl",
          "hover:-translate-y-1",
          theme.borderGlow
        )}
      >
        <div>
          {/* 1. PROJECT PREVIEW HEADER: Tasteful abstract gradient canvas */}
          <div
            className={cn(
              "relative h-44 sm:h-48 w-full overflow-hidden border-b border-border/50",
              "bg-gradient-to-br",
              theme.gradient,
              "bg-secondary/20 flex flex-col justify-between p-5"
            )}
          >
            {/* Subtle grid pattern texture */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none"
            />

            {/* Top Bar: Category badge and Featured indicator */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <Badge
                variant="secondary"
                className="font-mono text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 bg-background/70 backdrop-blur-md text-foreground/90 border border-border/60"
              >
                {project.category}
              </Badge>

              {project.featured && (
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-primary/10 text-primary border-primary/30 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Featured</span>
                </Badge>
              )}
            </div>

            {/* Bottom Emblem & Title Preview */}
            <div className="relative z-10 flex items-end justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-3 rounded-xl bg-background/80 backdrop-blur-md border border-border/70 shadow-sm",
                    "group-hover:scale-110 transition-transform duration-300",
                    theme.accentColor
                  )}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Quick external indicator if live exists */}
              {project.live && (
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-muted-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
              )}
            </div>
          </div>

          {/* 2. CARD CONTENT */}
          <CardContent className="p-6 space-y-5">
            {/* Prominent Hackathon / Project Achievement Badge if defined */}
            {project.achievement && (
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-300/15 dark:bg-slate-700/30 border border-slate-300/40 dark:border-slate-600/50 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm">
                <Medal className="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0" />
                <span>{project.achievement}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed font-normal min-h-[40px]">
              {project.description}
            </p>

            {/* Key Capabilities Chips */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-mono">
                  Key Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-secondary/50 text-foreground/80 border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture & Stack Badges */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-mono">
                Architecture & Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs font-normal py-1 px-2.5 bg-secondary/30 hover:bg-secondary/60 text-foreground border-border/70 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </div>

        {/* 3. DIRECT ACTION BUTTONS (Visible directly on card, no modal required) */}
        <div className="p-6 pt-0 border-t border-border/40 mt-auto flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex-1 sm:flex-none"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto gap-2 text-xs font-medium border-border/80 bg-background/50 hover:bg-secondary/60 transition-all duration-200"
              >
                <SiGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="flex-1 sm:flex-none"
            >
              <Button
                size="sm"
                className="w-full sm:w-auto gap-2 text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          )}

          {/* Clean note if no external links exist */}
          {!project.github && !project.live && (
            <span className="text-xs font-mono text-muted-foreground italic py-1.5">
              {project.id === "cityflow" ? "Transit operations engine" : "Web application"}
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
