import React from "react";
import { getBlogPosts } from "@/lib/mdx";
import BlogClient, { BlogPostSummary } from "./blog-client";

export const metadata = {
  title: "Blog | Abhishek Kumar Singh",
  description: "Thoughts, experiments, and things I'm learning while building.",
};

export default function BlogPage() {
  const posts: BlogPostSummary[] = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => ({
      slug: post.slug,
      metadata: post.metadata,
      wordCount: post.content.trim().split(/\s+/).length,
    }));

  return <BlogClient posts={posts} />;
}
