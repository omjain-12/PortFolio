import { Badge } from "@/components/ui/Badge";
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
            title="Technical capabilities"
            description="A balanced stack across model development, deployment systems, and software engineering fundamentals."
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={0.05 * index}>
              <article className="glass-surface rounded-xl p-5 transition-all duration-300 hover:shadow-cardHover">
                <h3 className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}