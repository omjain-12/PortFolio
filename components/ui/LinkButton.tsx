import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function LinkButton({ href, children, variant = "secondary", external = false }: LinkButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentVia/70";

  let variantClass = "";

  if (variant === "primary") {
    variantClass = "bg-accent-gradient text-white shadow-lg shadow-orange-500/20 hover:brightness-110";
  } else if (variant === "ghost") {
    variantClass = "border border-transparent bg-transparent text-slate-300 hover:border-border hover:text-slate-100";
  } else {
    variantClass = "border border-border bg-slate-900/50 text-slate-100 hover:border-orange-300/50 hover:bg-slate-900/80";
  }

  return (
    <Link
      href={href}
      className={`${baseClass} ${variantClass}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}