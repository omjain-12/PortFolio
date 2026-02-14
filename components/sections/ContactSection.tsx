import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-divider section-shell">
      <Container>
        <FadeIn className="rounded-2xl border border-border/80 bg-slate-950/35 p-6 md:p-8">
          <SectionHeading
            eyebrow="Next Step"
            title="If you&apos;re building serious AI systems, I&apos;d love to contribute."
            description="Currently seeking AI/ML internships focused on scalable, production-grade engineering."
          />

          <div className="mt-2 flex flex-wrap gap-3">
            <LinkButton href={socialLinks.email}>
              Email
            </LinkButton>
            <LinkButton href={socialLinks.linkedin} external variant="primary">
              LinkedIn
            </LinkButton>
            <LinkButton href={socialLinks.github} external>
              GitHub
            </LinkButton>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}