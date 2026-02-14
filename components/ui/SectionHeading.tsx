type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 space-y-3 md:mb-12">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400/90">{eyebrow}</p>
      ) : null}
      <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{description}</p> : null}
    </header>
  );
}