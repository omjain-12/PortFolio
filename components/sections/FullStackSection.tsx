import { FadeIn } from "@/components/ui/FadeIn";
import { ArchitectureBlock } from "@/components/ui/ArchitectureBlock";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { MetricsStrip } from "@/components/ui/MetricsStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { infrastructureProjects } from "@/data/portfolio";

export function FullStackSection() {
  return (
    <section id="infrastructure" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Infrastructure"
            title="Infrastructure & API Engineering"
            description="Robust backend architectures and real-time data streaming pipelines designed to support scalable applications."
          />
        </FadeIn>

        <div className="space-y-4">
          {infrastructureProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.04 * index}>
              <article className="rounded-xl border border-border/85 bg-slate-950/30 px-4 py-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-950/50 md:px-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-slate-100 md:text-xl">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <LinkButton href={project.github} external>
                        GitHub
                      </LinkButton>
                      {project.liveLink ? (
                        <LinkButton href={project.liveLink} external variant="ghost">
                          Live Demo
                        </LinkButton>
                      ) : null}
                    </div>
                  </div>

                  <p className="border-l-2 border-cyan-300/45 pl-3 text-sm leading-relaxed text-slate-300">
                    {project.problemStatement}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Architecture Flow</p>
                    <ArchitectureBlock steps={project.architectureFlow} />
                  </div>

                  <div className="rounded-xl border border-cyan-300/20 bg-slate-900/45 p-3 backdrop-blur-sm">
                    <MetricsStrip
                      metrics={project.quantifiableResults.map((item) => ({ label: item.metric, value: item.value }))}
                      columns={3}
                    />
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