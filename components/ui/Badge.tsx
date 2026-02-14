type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-md border border-border/90 bg-slate-900/45 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-200">
      {children}
    </span>
  );
}