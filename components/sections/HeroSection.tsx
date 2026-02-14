"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { navLinks, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-14 pt-7 md:pb-20 md:pt-10">
      <Container>
        <nav className="mb-14 flex items-center justify-between rounded-xl border border-border/70 bg-slate-900/45 px-4 py-3 backdrop-blur-md md:mb-20 md:px-6">
          <p className="font-[var(--font-space-grotesk)] text-xs font-bold tracking-[0.28em] text-slate-200">OM JAIN</p>
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
          className="max-w-4xl"
        >
          <motion.h1
            className="font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, letterSpacing: "-0.03em" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.7 }}
          >
            Om Jain
          </motion.h1>
          <p className="mt-5 text-base text-slate-300 sm:text-lg md:text-2xl">
            AI Engineer | Deep Learning &amp; LLM Systems
          </p>

          <p className="mt-5 font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Engineering Intelligence. Designing Scalable Systems.
          </p>

          <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-slate-700/60 md:w-72">
            <motion.div
              className="h-full bg-accent-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.15, ease: "easeOut", delay: 0.2 }}
            />
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            I build reliable AI systems that move from experimental notebooks to product-ready infrastructure. My work
            combines architecture depth, model rigor, and engineering discipline for measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary">
              View Projects
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