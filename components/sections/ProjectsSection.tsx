import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-divider section-shell">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="AI Projects"
            title="High-impact AI systems"
            description="Core projects across LLM infrastructure, generative modeling, image restoration, and sequence forecasting."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.05 * index}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border/85 bg-panel-gradient shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                <div className="relative border-b border-border/70 p-3">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    width={680}
                    height={360}
                    className="h-44 w-full rounded-xl border border-border/70 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-3 rounded-xl bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent-gradient" />
                      <span>{point}</span>
                    </li>
                  ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton href={project.github} external>
                      GitHub
                    </LinkButton>
                    <LinkButton href={project.demo} external variant="ghost">
                      Live Demo
                    </LinkButton>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-8 rounded-xl border border-border/70 bg-slate-900/40 px-5 py-4 text-sm text-slate-300">
          Note: project thumbnails and demo links are placeholders for design preview and can be replaced with live
          deployment screenshots.
        </FadeIn>
      </Container>
    </section>
  );
}