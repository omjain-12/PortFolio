import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-divider py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="AI Projects"
            title="Applied machine learning systems"
            description="Selected projects across LLM infrastructure, sequence modeling, and computer vision."
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.04 * index}>
              <article className="group h-full rounded-xl border border-border/90 bg-panel/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accentFrom to-accentTo" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-medium text-orange-300 transition-colors hover:text-orange-200"
                >
                  View GitHub Repository
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}