type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-md border border-border/90 px-2.5 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  );
}