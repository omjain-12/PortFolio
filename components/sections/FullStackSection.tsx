import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringItems } from "@/data/portfolio";

export function FullStackSection() {
  return (
    <section id="engineering" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Full Stack Engineering"
            title="System engineering beyond model training"
            description="Real-time products, robust APIs, and deployment-ready backend systems built with reliability-first design."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="grid gap-4 lg:grid-cols-5">
            {engineeringItems.map((item) => (
              <article
                key={item.title}
                className="glass-surface rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <h3 className="font-[var(--font-space-grotesk)] text-base font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                <p className="mt-4 rounded-md border border-border/80 bg-slate-950/45 px-3 py-2 text-xs text-orange-200">
                  {item.metric}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}