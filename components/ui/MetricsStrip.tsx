type Metric = {
  label: string;
  value: string;
};

type MetricsStripProps = {
  metrics: Metric[];
  columns?: 2 | 3;
};

export function MetricsStrip({ metrics, columns = 3 }: MetricsStripProps) {
  const gridClass = columns === 2 ? "grid gap-2 sm:grid-cols-2" : "grid gap-2 sm:grid-cols-3";

  return (
    <div className={gridClass}>
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-lg border border-border/70 bg-slate-950/45 px-3 py-3">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
          <p className="mt-1 font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-cyan-300 md:text-xl">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}