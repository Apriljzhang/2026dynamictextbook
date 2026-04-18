"use client";

import { motion } from "framer-motion";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { CourseSummaryStrip } from "@/components/dashboard/CourseSummaryStrip";
import { kpiMetrics, courseProgress } from "@/lib/mock/dashboard";

export function DashboardClient() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-wood)]">
          Dashboard
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--color-navy)] md:text-5xl">
          项目概览
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
          以四门《产业经济学》课程为内容域，串联动态教材、知识图谱与 AI
          协同审核流程。以下指标为演示数据，用于高保真原型评审。
        </p>
      </motion.div>

      <motion.div className="mt-12 grid gap-6 md:grid-cols-3">
        {kpiMetrics.map((m, i) => (
          <KpiCard key={m.id} metric={m} index={i} />
        ))}
      </motion.div>

      <div className="mt-10">
        <CourseSummaryStrip progress={courseProgress} />
      </div>
    </div>
  );
}
