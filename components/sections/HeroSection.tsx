"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { navLinks, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-12 pt-5 md:pb-20 md:pt-10">
      <Container>
        <nav className="mb-14 flex items-center justify-between border-b border-border/70 pb-4 md:mb-20">
          <p className="font-[var(--font-space-grotesk)] text-xs font-bold tracking-[0.28em] text-slate-200">OM JAIN · AI SYSTEMS ENGINEER</p>
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
          className="grid max-w-6xl items-center gap-12 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/85">AI Systems Engineer · IIT Kharagpur · 2023–2027</p>
            {/* <p className="text-xs uppercase tracking-[0.2em] text-slate-400">IIT KHARAGPUR · 2023–2027</p> */}

            <h1 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Engineering Intelligent Systems for Production.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              I design and deploy measurable, scalable AI pipelines — from model architecture to API serving. My
              focus is building robust systems that perform under real-world constraints.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-400">5+ AI Systems · 20M+ Parameters · &lt;200ms Latency</p>

            <div className="mt-8 h-1 w-72 overflow-hidden rounded-full bg-slate-700/60 md:w-96">
              <motion.div
                className="h-full bg-accent-gradient"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton href="#case-studies" variant="primary">
                Explore Case Studies
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
          </div>

          <div className="mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-md">
            <div className="relative rounded-3xl border border-accentFrom/30 bg-slate-900/40 p-2 shadow-glow">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-accent-gradient opacity-10 blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/DP.png"
                  alt="Om Jain"
                  fill
                  sizes="(max-width: 640px) 17rem, (max-width: 1024px) 24rem, 28rem"
                  className="scale-110 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}