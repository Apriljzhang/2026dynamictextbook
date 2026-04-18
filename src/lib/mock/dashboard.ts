import type { CourseProgress, KpiMetric } from "@/lib/types";
import { COURSES } from "@/lib/mock/courses";

export const kpiMetrics: KpiMetric[] = [
  {
    id: "coverage",
    label: "全库知识点覆盖率（四门课合计）",
    value: "78%",
    hint: "基于教研大纲与图谱对齐度估算",
    trend: "+4.2% 本月",
  },
  {
    id: "contributions",
    label: "学生贡献条目",
    value: "1,284",
    hint: "含案例、注释与思考题补充",
    trend: "+126 本周",
  },
  {
    id: "ai-pass",
    label: "AI 初审通过率",
    value: "62%",
    hint: "进入教授终审队列前的自动筛选",
    trend: "稳定",
  },
];

export const courseProgress: CourseProgress[] = COURSES.map((c, i) => {
  const bases = [
    { coverage: 82, entries: 312, pass: 64 },
    { coverage: 74, entries: 288, pass: 59 },
    { coverage: 71, entries: 265, pass: 61 },
    { coverage: 85, entries: 419, pass: 65 },
  ][i];
  return {
    courseId: c.id,
    coveragePct: bases.coverage,
    studentEntries: bases.entries,
    aiPassRate: bases.pass,
  };
});
