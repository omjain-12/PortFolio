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
            eyebrow="Contact"
            title="If you&apos;re building ambitious AI systems, let&apos;s collaborate."
            description="Open to AI/ML internships focused on real engineering impact."
          />

          <div className="mt-2 flex flex-wrap gap-3">
            <LinkButton href={socialLinks.email} variant="primary">
              Email
            </LinkButton>
            <LinkButton href={socialLinks.linkedin} external>
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