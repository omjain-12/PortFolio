import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Achievements"
            title="Performance highlights"
            description="Competitive programming, academics, and product-focused execution milestones."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, idx) => (
              <li
                key={item}
                className="glass-surface rounded-lg px-4 py-4 text-sm leading-relaxed text-slate-200 transition-all duration-300 hover:shadow-glow"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-slate-400">0{idx + 1}</p>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}