import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Industry MLOps skills matrix"
            description="Production-focused capabilities across model development, infrastructure, and data engineering workflows."
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={0.05 * index}>
              <article className="rounded-xl border border-border/80 bg-slate-950/35 p-5">
                <h3 className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-border/35 pb-2 last:border-none last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}