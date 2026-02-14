import { FadeIn } from "@/components/ui/FadeIn";
import { ArchitectureBlock } from "@/components/ui/ArchitectureBlock";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { MetricsStrip } from "@/components/ui/MetricsStrip";
import { caseStudies } from "@/data/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Case Studies"
            title="Production-oriented AI case studies"
            description="Structured engineering narratives with architecture flow, quantified outcomes, and implementation links."
          />
        </FadeIn>

        <div className="space-y-5">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} delay={0.04 * index}>
              <article className="rounded-xl border border-border/85 bg-slate-950/35 px-4 py-4 transition-all duration-300 hover:border-cyan-300/35 hover:bg-slate-950/55 md:px-5 md:py-5">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                      {study.title}
                    </h3>
                    <LinkButton href={study.github} external>
                      GitHub
                    </LinkButton>
                  </div>

                  <p className="border-l-2 border-cyan-300/45 pl-3 text-sm leading-relaxed text-slate-300">
                    {study.problemStatement}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Architecture Flow</p>
                    <ArchitectureBlock steps={study.architectureFlow} />
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Quantifiable Results</p>
                    <div className="rounded-xl border border-cyan-300/20 bg-slate-900/50 p-3 backdrop-blur-sm">
                      <MetricsStrip
                        metrics={study.quantifiableResults.map((item) => ({ label: item.metric, value: item.value }))}
                        columns={2}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}