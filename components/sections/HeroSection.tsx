"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { navLinks, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-14 pt-7 md:pb-20 md:pt-10">
      <Container>
        <nav className="mb-14 flex items-center justify-between border-b border-border/70 pb-4 md:mb-20">
          <p className="font-[var(--font-space-grotesk)] text-xs font-bold tracking-[0.28em] text-slate-200">OM JAIN · AI SYSTEMS LAB</p>
          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">IIT Kharagpur · 2023–2027</p>

          <h1 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            Engineering Intelligent Systems from First Principles.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            I design and ship AI systems with strong architectural reasoning, measured performance, and
            research-to-production discipline across LLM, vision, and forecasting workflows.
          </p>

          <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-slate-700/60 md:w-80">
            <motion.div
              className="h-full bg-accent-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="#case-studies" variant="primary">
              View Case Studies
            </LinkButton>
            <LinkButton href={socialLinks.resume} external>
              Download Resume
            </LinkButton>
            <LinkButton href={socialLinks.github} external>
              GitHub
            </LinkButton>
            <LinkButton href={socialLinks.linkedin} external>
              LinkedIn
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}