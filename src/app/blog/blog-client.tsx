"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type BlogPostSummary = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogClient({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[120px] rounded-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] blur-[120px] rounded-full"
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Back */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 border-b border-border/60 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-secondary/40 text-xs font-mono font-semibold tracking-widest uppercase text-primary">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BLOG</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
            Thoughts, experiments, and things I&apos;m learning while building.
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Technical write-ups on full-stack architecture, AI integrations, systems engineering, and developer insights.
          </p>
        </motion.div>

        {/* Existing Verified Blog Posts */}
        {posts.length > 0 && (
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground font-mono">
              Published Articles
            </div>

            <div className="space-y-4">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <Card className="border-border/80 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-lg hover:-translate-y-0.5">
                      <CardContent className="p-6 sm:p-7 space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {formatDate(post.metadata.publishedAt)}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {readTime(post.wordCount)} min read
                          </span>
                          {post.metadata.tags && post.metadata.tags.length > 0 && (
                            <>
                              <span>•</span>
                              <div className="flex flex-wrap gap-1.5">
                                {post.metadata.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-[10px] font-mono uppercase px-2 py-0"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex items-baseline justify-between gap-4">
                          <h2 className="font-display font-semibold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                            {post.metadata.title}
                          </h2>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                          {post.metadata.summary}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon / Starter Layout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="pt-4"
        >
          <Card className="border-border/70 border-dashed bg-secondary/15 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono text-xs font-medium uppercase tracking-wider px-2.5 py-0.5 bg-primary/10 text-primary border-primary/30"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-foreground/90 font-medium">
                  Articles on software engineering, full-stack development, AI, projects, and things I learn along the way.
                </p>
                <p className="text-xs text-muted-foreground">
                  Writing and publishing technical deep dives soon.
                </p>
              </div>

              <Link href="/newsletter" className="shrink-0 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2 text-xs font-medium border-border/80">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Join Newsletter</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
