"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { navLinks, socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-16 pt-10 md:pb-20 md:pt-12">
      <Container>
        <nav className="mb-16 flex items-center justify-between">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-300">OM JAIN</p>
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
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl">Om Jain</h1>
          <p className="mt-4 text-lg text-slate-300 md:text-2xl">AI Engineer | Deep Learning &amp; LLM Systems</p>

          <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-slate-700/60">
            <motion.div
              className="h-full bg-accent-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
            />
          </div>

          <p className="mt-7 text-base leading-relaxed text-slate-300 md:text-lg">
            I build intelligent systems from first principles.
            <br />
            From architecture design to deployment, I engineer practical AI that is measurable, scalable, and reliable.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary">
              View Projects
            </LinkButton>
            <LinkButton href={socialLinks.resume}>Download Resume</LinkButton>
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