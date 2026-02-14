type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400/90">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-300 md:text-base">{description}</p> : null}
    </header>
  );
}