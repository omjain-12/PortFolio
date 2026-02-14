type Metric = {
  label: string;
  value: string;
};

type MetricsStripProps = {
  metrics: Metric[];
};

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-lg border border-border/80 bg-slate-950/35 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
          <p className="mt-2 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-slate-100">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}