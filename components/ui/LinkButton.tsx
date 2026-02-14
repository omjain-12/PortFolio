import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function LinkButton({ href, children, variant = "secondary", external = false }: LinkButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentFrom/70";

  const variantClass =
    variant === "primary"
      ? "bg-accent-gradient text-white shadow-lg shadow-orange-500/20 hover:opacity-95"
      : "border border-border bg-slate-900/50 text-slate-100 hover:border-slate-500";

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