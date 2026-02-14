import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="section-divider py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-slate-400 md:flex-row md:items-end">
          <p>© 2025 Om Jain.</p>
          <div className="space-y-1 text-xs tracking-[0.08em] text-slate-500 md:text-right">
            <p className="uppercase">AI Systems Portfolio</p>
            <p>Built with Next.js &amp; Tailwind</p>
            <p>Designed &amp; Engineered by Om Jain</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}