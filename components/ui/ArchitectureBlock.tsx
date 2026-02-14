type ArchitectureBlockProps = {
  steps: string[];
};

export function ArchitectureBlock({ steps }: ArchitectureBlockProps) {
  return (
    <div className="grid gap-2 rounded-xl border border-border/80 bg-slate-950/40 p-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-start gap-3 rounded-md border border-border/60 bg-slate-900/55 p-3">
          <span className="mt-[1px] text-xs font-semibold text-orange-300">{String(index + 1).padStart(2, "0")}</span>
          <p className="text-sm leading-relaxed text-slate-200">{step}</p>
        </div>
      ))}
    </div>
  );
}