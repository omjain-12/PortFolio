import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Skills" title="Core technical stack" />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={0.05 * index}>
              <article className="rounded-lg border border-border/90 bg-slate-900/45 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-300">{group.title}</h3>
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