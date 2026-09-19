import React from "react";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return {
    title: `${post.metadata.title} | Abhishek Kumar Singh`,
    description: post.metadata.summary,
  };
}

function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr: string) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const components = {
  h1: (props: any) => (
    <h1
      className="font-display text-2xl md:text-3xl leading-[1.15] mt-12 mb-5 text-foreground font-bold tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-display text-xl md:text-2xl leading-[1.2] mt-10 mb-4 text-foreground font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-display text-lg md:text-xl leading-[1.25] mt-8 mb-3 text-foreground font-semibold"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-base text-muted-foreground leading-relaxed my-4 font-normal"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside pl-6 space-y-2 text-muted-foreground my-4 text-base" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside pl-6 space-y-2 text-muted-foreground my-4 text-base" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  code: (props: any) => (
    <code
      className="px-1.5 py-0.5 rounded bg-secondary text-foreground text-xs font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="p-4 rounded-xl bg-secondary/50 border border-border/80 overflow-x-auto my-6 text-sm font-mono"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const readTime = estimateReadTime(post.content);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative py-16 px-4 sm:px-6 lg:px-8">
      <ScrollProgress className="top-0 fixed" />

      <article className="max-w-3xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-border/60 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              {formatDate(post.metadata.publishedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min read
            </span>
            {post.metadata.author && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {post.metadata.author}
                </span>
              </>
            )}
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.12]">
            {post.metadata.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {post.metadata.summary}
          </p>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.metadata.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs uppercase px-2.5 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Article Body */}
        <main className="prose prose-invert max-w-none text-muted-foreground">
          <MDXRemote source={post.content} components={components} />
        </main>
      </article>
    </div>
  );
}
