import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArchitectureBlock } from "@/components/ui/ArchitectureBlock";
import { Container } from "@/components/ui/Container";
import { MetricsStrip } from "@/components/ui/MetricsStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Case Studies"
            title="AI systems engineered with measurable outcomes"
            description="Technical breakdowns focused on architecture, constraints, tradeoffs, and validated performance metrics."
          />
        </FadeIn>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} delay={0.04 * index}>
              <article className="space-y-7 border-l border-border/90 pl-5 md:pl-8">
                <header className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Case Study {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">{study.problemStatement}</p>
                </header>

                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">Architecture</h4>
                    <ArchitectureBlock steps={study.architecture} />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">Key Design Decisions</h4>
                    <ul className="space-y-2 rounded-xl border border-border/80 bg-slate-950/40 p-4">
                      {study.keyDesignDecisions.map((decision) => (
                        <li key={decision} className="text-sm leading-relaxed text-slate-200">
                          - {decision}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">Performance Metrics</h4>
                  <MetricsStrip metrics={study.performanceMetrics} />
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.14em] text-slate-400">Engineering Challenges</h4>
                  <ul className="grid gap-2">
                    {study.engineeringChallenges.map((challenge) => (
                      <li key={challenge} className="text-sm leading-relaxed text-slate-300">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-orange-300 transition-colors hover:text-orange-200"
                >
                  View GitHub Repository
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}