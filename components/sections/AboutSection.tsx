import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Research-driven engineering for production AI systems"
            description="IIT Kharagpur (2023-2027) | CGPA 8.33"
          />
        </FadeIn>

        <FadeIn delay={0.06} className="max-w-3xl">
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            I focus on Transformers, retrieval-augmented systems, and scalable AI pipelines that stay robust under
            real-world constraints. My approach is implementation-first: I build core model components from scratch,
            validate behavior empirically, and iterate with a research-to-production mindset.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}