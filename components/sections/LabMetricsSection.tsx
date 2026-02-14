import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { labMetrics } from "@/data/portfolio";

export function LabMetricsSection() {
  return (
    <section className="section-divider section-shell">
      <Container>
        <FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {labMetrics.map((metric) => (
              <article key={metric.label} className="rounded-xl border border-border/80 bg-slate-950/35 px-4 py-5">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
                <p className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold leading-tight tracking-tight text-slate-100 md:text-3xl">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}