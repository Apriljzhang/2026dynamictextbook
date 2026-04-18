import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_0_rgba(44,44,44,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
