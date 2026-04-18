"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { COURSES } from "@/lib/mock/courses";
import { mockReport } from "@/lib/mock/review";
import type { CourseId } from "@/lib/types";

type Step = "submit" | "scanning" | "report" | "publish";

export function ReviewFlow() {
  const [courseId, setCourseId] = useState<CourseId>("io-4");
  const [draft, setDraft] = useState(
    "在四人寝室中，公共区域的清洁成本由个人承担，收益却由大家共享。若缺乏约束，容易出现搭便车……",
  );
  const [step, setStep] = useState<Step>("submit");
  const [published, setPublished] = useState(false);

  const report = useMemo(() => mockReport(draft), [draft]);

  const startScan = () => {
    setPublished(false);
    setStep("scanning");
    window.setTimeout(() => setStep("report"), 2200);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-wood)]">
          AI review
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--color-navy)]">AI 审核中心</h1>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
          模拟人机协同：学生提交 → AI 扫描 → 报告单 → 教授终审发布。流程为前端演示，不保存真实数据。
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <Card>
          <label className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">所属课程</label>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value as CourseId)}
            className="mt-2 w-full rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-wood)]"
          >
            {COURSES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          <label className="mt-6 block text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
            学生提交条目
          </label>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={6}
            className="mt-2 w-full rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-3 py-2 text-sm leading-relaxed outline-none focus:border-[color:var(--color-wood)]"
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={startScan}
              disabled={step === "scanning"}
              className="rounded-sm bg-[color:var(--color-navy)] px-5 py-2 text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              提交并进入 AI 扫描
            </button>
            {step !== "submit" ? (
              <button
                type="button"
                onClick={() => {
                  setStep("submit");
                  setPublished(false);
                }}
                className="rounded-sm border border-[color:var(--color-border)] px-5 py-2 text-sm text-[color:var(--color-carbon)] transition hover:bg-[color:var(--color-surface)]"
              >
                重置流程
              </button>
            ) : null}
          </div>
        </Card>

        <AnimatePresence>
          {step === "scanning" ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <p className="text-sm font-medium text-[color:var(--color-navy)]">AI 扫描中</p>
                <p className="mt-1 text-xs text-[color:var(--color-muted)]">语义对齐 · 事实一致性 · 引用规范（演示）</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                  <motion.div
                    className="h-full rounded-full bg-[color:var(--color-wood)]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </Card>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {step === "report" || step === "publish" ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <Card>
              <h2 className="font-serif text-2xl text-[color:var(--color-navy)]">AI 反馈报告单</h2>
              <p className="mt-1 text-xs text-[color:var(--color-muted)]">
                课程：{COURSES.find((c) => c.id === courseId)?.title}
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">学术度</p>
                  <p className="mt-2 font-serif text-4xl text-[color:var(--color-navy)]">{report.academicScore}</p>
                  <p className="mt-1 text-xs text-[color:var(--color-muted)]">满分 100 · 概念与论证严谨性</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">有趣度</p>
                  <p className="mt-2 font-serif text-4xl text-[color:var(--color-navy)]">{report.interestScore}</p>
                  <p className="mt-1 text-xs text-[color:var(--color-muted)]">满分 100 · 叙事与情境代入</p>
                </div>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[color:var(--color-carbon)]">{report.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-carbon)]">
                {report.risks.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[color:var(--color-border)] pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setStep("publish");
                    setPublished(true);
                  }}
                  className="w-full rounded-sm bg-[color:var(--color-wood)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
                >
                  教授终审发布
                </button>
                {published ? (
                  <p className="mt-4 text-sm text-[color:var(--color-navy)]">
                    已模拟发布：该条目将标注为「终审通过」并进入版本库（演示）。
                  </p>
                ) : null}
              </div>
            </Card>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
