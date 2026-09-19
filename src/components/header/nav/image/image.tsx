"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Terminal,
  ExternalLink,
  Code2,
  Briefcase,
  Layers,
  GraduationCap,
  BookOpen,
  Mail,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionPreviewData {
  badge: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  accent: string;
  path: string;
}

const PREVIEWS: Record<number, SectionPreviewData> = {
  0: {
    badge: "ENGINEER & BUILDER",
    badgeIcon: Sparkles,
    title: "Abhishek Kumar Singh",
    subtitle: "Software Engineer | Full-Stack Developer",
    description:
      "Building production-grade web applications, AI-powered systems, and quantitative software tools with modern full-stack architectures.",
    tags: ["React", "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Supabase"],
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    accent: "text-blue-400",
    path: "~",
  },
  1: {
    badge: "BACKGROUND & ACADEMICS",
    badgeIcon: GraduationCap,
    title: "About Abhishek",
    subtitle: "Electronics and Computer Engineering",
    description:
      "B.Tech 2024–2028 at VIT Chennai with 8.8/10 CGPA. Focused on scalable architecture, software engineering, and data-driven systems.",
    tags: ["VIT Chennai", "CGPA 8.8/10", "Full-Stack Intern", "ECM 2024-2028"],
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
    accent: "text-cyan-400",
    path: "~/about",
  },
  2: {
    badge: "PROFESSIONAL TRACK",
    badgeIcon: Briefcase,
    title: "Experience & Education",
    subtitle: "Full Stack Developer Intern @ QuickIntell",
    description:
      "Developing and maintaining production-oriented web applications, robust REST APIs, database schemas, and cloud deployment pipelines.",
    tags: ["QuickIntell", "Production APIs", "Database Schema", "VIT Chennai"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
    path: "~/experience",
  },
  3: {
    badge: "ENGINEERING SYSTEMS",
    badgeIcon: Layers,
    title: "Featured Projects",
    subtitle: "Full-Stack & Systems Platforms",
    description:
      "Production-ready platforms including UniFetch, GetPlaced, QuantLab, MedExtract, CityFlow, and AEC Coordination Intelligence System.",
    tags: ["UniFetch", "GetPlaced", "QuantLab", "MedExtract", "CityFlow", "AEC"],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    accent: "text-amber-400",
    path: "~/projects",
  },
  4: {
    badge: "TECHNICAL CAPABILITIES",
    badgeIcon: Code2,
    title: "Tech Stack",
    subtitle: "Languages, Frameworks & Infra",
    description:
      "Production-tested technical skills across React, Next.js, Node.js, FastAPI, PostgreSQL, Supabase, Java, Python, and Docker.",
    tags: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL", "Docker"],
    gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
    accent: "text-purple-400",
    path: "~/skills",
  },
  5: {
    badge: "COMMUNITY & IMPACT",
    badgeIcon: UserCheck,
    title: "Leadership & Activities",
    subtitle: "Programme & Discipline Representative",
    description:
      "Represented 438+ students at VIT Chennai; organized major university sports and cultural events for 1,000+ participants.",
    tags: ["Programme Rep", "438+ Students", "Sports Rep", "Management Lead"],
    gradient: "from-rose-600/20 via-red-500/10 to-transparent",
    accent: "text-rose-400",
    path: "~/leadership",
  },
  6: {
    badge: "PUBLICATIONS & JOURNAL",
    badgeIcon: BookOpen,
    title: "Engineering Blog",
    subtitle: "Thoughts, Experiments & Learnings",
    description:
      "Articles and notes on software engineering, full-stack development, AI, system design, and lessons learned while building.",
    tags: ["Software Engineering", "AI Systems", "Full-Stack", "Architecture"],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    path: "~/blog",
  },
  7: {
    badge: "GET IN TOUCH",
    badgeIcon: Mail,
    title: "Let's Connect",
    subtitle: "Open for Opportunities & Collaborations",
    description:
      "Feel free to reach out for software engineering roles, full-stack projects, technical discussions, or collaborations.",
    tags: ["abhishek.k.singhs01@gmail.com", "LinkedIn", "GitHub", "LeetCode"],
    gradient: "from-sky-600/20 via-indigo-500/10 to-transparent",
    accent: "text-sky-400",
    path: "~/contact",
  },
};

interface NavPreviewProps {
  selectedIndex: number;
}

const NavPreview: React.FC<NavPreviewProps> = ({ selectedIndex }) => {
  const data = PREVIEWS[selectedIndex] || PREVIEWS[0];
  const BadgeIcon = data.badgeIcon;

  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-[420px] shrink-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "relative w-full rounded-2xl border border-border/80 overflow-hidden",
            "bg-card/85 backdrop-blur-2xl shadow-2xl shadow-black/40"
          )}
        >
          {/* Top Window Chrome Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-600/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/80">
              <Terminal className="w-3 h-3" />
              <span>abhishek.dev/{data.path}</span>
            </div>

            <div className="w-8" />
          </div>

          {/* Card Preview Body with Ambient Accent Gradient */}
          <div className={cn("relative p-6 bg-gradient-to-br", data.gradient)}>
            {/* Subtle grid pattern */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none"
            />

            <div className="relative z-10 space-y-4">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-background/80 text-foreground/90 border border-border/70 shadow-sm">
                <BadgeIcon className={cn("w-3 h-3", data.accent)} />
                <span>{data.badge}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="text-xl font-display font-bold tracking-tight text-foreground">
                  {data.title}
                </h4>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  {data.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                {data.description}
              </p>

              {/* Capability / Context Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/50 text-foreground/80 border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Watermark / Status */}
              <div className="pt-3 mt-1 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground/70">
                <span>Abhishek Kumar Singh</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Portfolio
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NavPreview;
