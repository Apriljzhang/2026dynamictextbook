"use client";

import type { Perspective } from "@/lib/types";

export function PerspectiveToggle({
  value,
  onChange,
}: {
  value: Perspective;
  onChange: (p: Perspective) => void;
}) {
  return (
    <div
      className="inline-flex rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-1"
      role="group"
      aria-label="视角切换"
    >
      <button
        type="button"
        aria-pressed={value === "teacher"}
        onClick={() => onChange("teacher")}
        className={`rounded-sm px-4 py-2 text-sm transition ${
          value === "teacher"
            ? "bg-[color:var(--color-bg)] text-[color:var(--color-navy)] shadow-sm"
            : "text-[color:var(--color-muted)] hover:text-[color:var(--color-carbon)]"
        }`}
      >
        教师标准视角
      </button>
      <button
        type="button"
        aria-pressed={value === "student"}
        onClick={() => onChange("student")}
        className={`rounded-sm px-4 py-2 text-sm transition ${
          value === "student"
            ? "bg-[color:var(--color-bg)] text-[color:var(--color-navy)] shadow-sm"
            : "text-[color:var(--color-muted)] hover:text-[color:var(--color-carbon)]"
        }`}
      >
        学生生活化视角
      </button>
    </div>
  );
}
