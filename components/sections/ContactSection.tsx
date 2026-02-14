import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Contact" title="If you&apos;re building serious AI systems, I&apos;d love to contribute." />
        </FadeIn>

        <FadeIn delay={0.05} className="mt-2 flex flex-wrap gap-3">
          <LinkButton href={socialLinks.email}>Email</LinkButton>
          <LinkButton href={socialLinks.github} external>
            GitHub
          </LinkButton>
          <LinkButton href={socialLinks.linkedin} external>
            LinkedIn
          </LinkButton>
        </FadeIn>
      </Container>
    </section>
  );
}