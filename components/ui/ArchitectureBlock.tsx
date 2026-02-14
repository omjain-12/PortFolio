type ArchitectureBlockProps = {
  steps: string[];
};

export function ArchitectureBlock({ steps }: ArchitectureBlockProps) {
  return (
    <div className="rounded-xl border border-border/80 bg-slate-950/40 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className="rounded-md border border-cyan-400/30 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 md:text-sm">
              {step}
            </div>
            {index < steps.length - 1 ? <span className="text-cyan-300/90">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}