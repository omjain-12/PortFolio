import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Research depth with product-level execution"
            description="IIT Kharagpur (2023–2027) | Focus: Transformers, RAG pipelines, and optimization-first AI engineering"
          />
        </FadeIn>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn delay={0.04} className="space-y-5">
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              I specialize in building AI systems where model architecture and infrastructure design are equally
              important. My core work spans Transformer design, retrieval-augmented generation, and end-to-end
              pipelines that are production-conscious from day one.
            </p>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              I focus on measurable outcomes: lower latency, higher retrieval precision, and reproducible experiments.
              From prototyping to deployment, I optimize systems for reliability, observability, and scale with a
              strong research-to-production mindset.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "Transformer internals and efficient decoding",
                "RAG orchestration with robust context selection",
                "Model optimization and inference acceleration",
                "Production AI pipelines with quality gates",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-border/80 bg-slate-900/45 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="glass-surface rounded-2xl p-4 shadow-card">
            <Image
              src="/placeholders/about-lab.svg"
              alt="AI systems architecture placeholder"
              width={760}
              height={520}
              className="h-auto w-full rounded-xl border border-border/70"
              priority
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}