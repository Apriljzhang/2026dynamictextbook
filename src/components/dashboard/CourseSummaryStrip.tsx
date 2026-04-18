"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { COURSES } from "@/lib/mock/courses";
import type { CourseProgress } from "@/lib/types";

export function CourseSummaryStrip({ progress }: { progress: CourseProgress[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      <Card className="p-0">
        <div className="border-b border-[color:var(--color-border)] px-6 py-4">
          <h2 className="font-serif text-xl text-[color:var(--color-navy)]">四门课程进度摘要</h2>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            与知识图谱同一内容域：覆盖率、学生贡献与 AI 初审通过率为模拟指标。
          </p>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => {
            const p = progress.find((x) => x.courseId === c.id)!;
            return (
              <div
                key={c.id}
                className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 py-4"
              >
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: c.accent }}
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-medium text-[color:var(--color-carbon)]">{c.shortTitle}</p>
                    <p className="mt-1 text-xs leading-snug text-[color:var(--color-muted)]">{c.title}</p>
                  </div>
                </div>
                <dl className="mt-4 space-y-2 text-xs text-[color:var(--color-carbon)]">
                  <div className="flex justify-between gap-2">
                    <dt className="text-[color:var(--color-muted)]">知识点覆盖</dt>
                    <dd className="font-medium tabular-nums">{p.coveragePct}%</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[color:var(--color-muted)]">学生贡献</dt>
                    <dd className="font-medium tabular-nums">{p.studentEntries}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[color:var(--color-muted)]">AI 通过率</dt>
                    <dd className="font-medium tabular-nums">{p.aiPassRate}%</dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
}
