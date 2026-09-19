"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Mail, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/ace-input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    // UI-only submission — no external network requests or API keys
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/[0.03] blur-[140px] rounded-full"
      />

      <div className="w-full max-w-xl mx-auto space-y-8 relative z-10">
        {/* Back Link */}
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

        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Card className="border-border/80 bg-card/80 dark:bg-[#0c1017]/90 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            <CardContent className="p-8 sm:p-12 space-y-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
                        Stay in the loop.
                      </h1>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Occasional updates on what I&apos;m building, learning, and exploring.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="space-y-2">
                        <label
                          htmlFor="newsletter-email"
                          className="text-xs uppercase font-mono font-medium text-muted-foreground tracking-wider block"
                        >
                          Email Address
                        </label>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            id="newsletter-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (error) setError(null);
                            }}
                            aria-invalid={!!error}
                            aria-describedby={error ? "email-error" : undefined}
                            className={cn(
                              "h-11 px-4 text-sm bg-secondary/30 border-border/80 rounded-xl focus-visible:ring-primary",
                              error && "border-destructive focus-visible:ring-destructive"
                            )}
                            disabled={isSubmitting}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11 px-6 font-medium gap-2 shrink-0 rounded-xl shadow-sm"
                          >
                            <span>Subscribe</span>
                            <Send className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                        {error && (
                          <p id="email-error" className="text-xs text-destructive font-mono pt-1">
                            {error}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground/80 font-mono pt-1">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span>No spam, zero marketing noise. Unsubscribe at any time.</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-6 py-4 text-center sm:text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto sm:mx-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-foreground">
                        You&apos;re on the list.
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        I&apos;ll keep you posted.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      <Link href="/">
                        <Button className="w-full sm:w-auto font-medium">
                          Return to Portfolio
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEmail("");
                          setIsSubmitted(false);
                        }}
                        className="w-full sm:w-auto font-medium border-border/80"
                      >
                        Subscribe another email
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
