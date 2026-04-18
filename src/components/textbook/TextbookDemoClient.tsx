"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Io4Textbook } from "@/components/textbook/Io4Textbook";
import { PerspectiveToggle } from "@/components/textbook/PerspectiveToggle";
import { COURSES } from "@/lib/mock/courses";
import { textbookByCourse } from "@/lib/mock/textbook";
import type { CourseId, Perspective } from "@/lib/types";

const defaultCourse: CourseId = "io-4";

export function TextbookDemoClient() {
  const [perspective, setPerspective] = useState<Perspective>("teacher");
  const [courseId, setCourseId] = useState<CourseId>(defaultCourse);

  const pack = textbookByCourse[courseId];
  const active = useMemo(() => {
    if (courseId === "io-4") return null;
    const p = textbookByCourse[courseId];
    return perspective === "teacher" ? p.teacher : p.student;
  }, [courseId, perspective]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-wood)]">
            Living textbook
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--color-navy)]">
            动态教材演示
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {courseId === "io-4"
              ? "《产业经济学四》已挂载完整讲义结构（与 Drive 讲义文件名 Lecture_Notes_for_IE_4__no_exercise_ 对齐）；可切换小节与视角。"
              : "默认亦可切换到《产业经济学四》阅读完整博弈论讲义；其它课程为精简演示段落。"}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <label className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
            预览课程
          </label>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value as CourseId)}
            className="w-full min-w-[240px] rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-3 py-2 text-sm text-[color:var(--color-carbon)] outline-none transition focus:border-[color:var(--color-wood)] lg:w-auto"
          >
            {COURSES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </header>

      {courseId === "io-4" ? (
        <Io4Textbook />
      ) : (
        <>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <PerspectiveToggle value={perspective} onChange={setPerspective} />
            <p className="text-xs text-[color:var(--color-muted)]">
              当前课程：
              <span className="text-[color:var(--color-carbon)]">{pack.label}</span>
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={`${courseId}-${perspective}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 md:p-10"
            >
              <h2 className="font-serif text-3xl text-[color:var(--color-navy)]">{active!.title}</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[color:var(--color-carbon)]">
                {active!.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {active!.studentCase ? (
                <motion.div
                  layout
                  initial={false}
                  animate={{
                    borderColor:
                      perspective === "student" ? "var(--color-wood)" : "rgba(44,44,44,0.12)",
                    backgroundColor:
                      perspective === "student" ? "rgba(139, 111, 71, 0.08)" : "transparent",
                  }}
                  transition={{ duration: 0.35 }}
                  className="mt-10 rounded-sm border px-5 py-4"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-wood)]">
                    学生贡献案例
                  </p>
                  <p className="mt-2 font-medium text-[color:var(--color-carbon)]">{active!.studentCase!.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-carbon)]">
                    {active!.studentCase!.body}
                  </p>
                </motion.div>
              ) : null}
            </motion.article>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
