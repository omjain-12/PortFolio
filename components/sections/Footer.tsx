import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="section-divider py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-slate-400 md:flex-row md:items-center">
          <p>© 2025 Om Jain.</p>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">AI Systems Lab Portfolio</p>
        </div>
      </Container>
    </footer>
  );
}