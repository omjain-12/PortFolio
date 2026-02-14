import { FadeIn } from "@/components/ui/FadeIn";
import { ArchitectureBlock } from "@/components/ui/ArchitectureBlock";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { caseStudies } from "@/data/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Case Studies"
            title="Engineered AI projects"
            description="Compact technical snapshots with architecture flow and headline outcomes."
          />
        </FadeIn>

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} delay={0.04 * index}>
              <article className="rounded-xl border border-border/85 bg-slate-950/35 px-4 py-4 transition-all duration-300 hover:border-cyan-300/35 hover:bg-slate-950/55 md:px-5">
                <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_180px] md:gap-6">
                  <div className="space-y-3">
                    <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-300">{study.summaryLine}</p>
                    <ArchitectureBlock steps={study.architectureFlow} />

                    <div className="flex flex-wrap gap-2 pt-1">
                      <LinkButton href={study.github} external>
                        GitHub
                      </LinkButton>
                      <LinkButton href={study.caseStudy} external variant="ghost">
                        Case Study
                      </LinkButton>
                    </div>
                  </div>

                  <aside className="rounded-lg border border-cyan-300/30 bg-slate-900/65 px-4 py-4 text-center md:text-left">
                    <p className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-none tracking-tight text-slate-50">
                      {study.primaryMetric}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cyan-200/90">{study.metricCaption}</p>
                  </aside>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}