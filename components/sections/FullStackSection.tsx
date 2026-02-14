import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Built MERN applications with clean API-first architecture.",
  "Designed and shipped 25+ REST APIs with robust validation.",
  "Implemented JWT-based authentication and role-safe access controls.",
  "Maintained backend latency under 200ms for key endpoints.",
  "Containerized deployments using Docker for reproducible environments.",
];

export function FullStackSection() {
  return (
    <section id="engineering" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Full Stack Engineering"
            title="Systems that bridge model intelligence and product reliability"
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="rounded-lg border border-border/80 bg-slate-900/40 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}