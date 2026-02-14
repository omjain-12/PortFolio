import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Achievements" title="Performance and leadership highlights" />
        </FadeIn>

        <FadeIn delay={0.06}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => (
              <li key={item} className="rounded-lg border border-border/80 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}