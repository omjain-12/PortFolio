import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringPhilosophy } from "@/data/portfolio";

export function EngineeringPhilosophySection() {
  return (
    <section id="philosophy" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Engineering Philosophy"
            title="How I build AI systems"
            description="I approach AI engineering as a systems discipline where model quality, infrastructure reliability, and product outcomes are tightly coupled."
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {engineeringPhilosophy.map((item, index) => (
            <FadeIn key={item.title} delay={0.05 * index}>
              <article className="rounded-xl border border-border/80 bg-slate-950/35 p-5">
                <h3 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}