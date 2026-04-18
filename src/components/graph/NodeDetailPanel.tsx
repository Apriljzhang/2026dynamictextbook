import { COURSES } from "@/lib/mock/courses";
import type { GraphNodeDetail } from "@/lib/types";

export function NodeDetailPanel({
  detail,
  onClose,
}: {
  detail: GraphNodeDetail;
  onClose: () => void;
}) {
  const course = COURSES.find((c) => c.id === detail.courseId);
  return (
    <aside className="flex h-full flex-col border-l border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted)]">Selected node</p>
          <h2 className="mt-2 font-serif text-2xl text-[color:var(--color-navy)]">{detail.label}</h2>
          <p className="mt-2 text-xs text-[color:var(--color-muted)]">{course?.title}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-sm px-2 py-1 text-xs text-[color:var(--color-muted)] transition hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-carbon)]"
        >
          Close
        </button>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-carbon)]">{detail.summary}</p>
      <div className="mt-8">
        <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-wood)]">
          Cross-course links
        </h3>
        <ul className="mt-4 space-y-4">
          {detail.crossLinks.map((link) => {
            const target = COURSES.find((c) => c.id === link.targetCourseId);
            return (
              <li
                key={`${link.targetCourseId}-${link.unitLabel}`}
                className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4"
              >
                <div className="flex items-center justify-between gap-2 text-xs text-[color:var(--color-muted)]">
                  <span>{link.relation}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide"
                    style={{
                      backgroundColor: `${target?.accent}14`,
                      color: target?.accent,
                    }}
                  >
                    {target?.shortTitle}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[color:var(--color-carbon)]">{link.unitLabel}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
