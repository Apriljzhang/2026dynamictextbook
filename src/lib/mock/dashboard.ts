import type { CourseProgress, KpiMetric } from "@/lib/types";
import { COURSES } from "@/lib/mock/courses";

export const kpiMetrics: KpiMetric[] = [
  {
    id: "coverage",
    label: "Knowledge coverage (all four courses)",
    value: "78%",
    hint: "Estimated alignment between the knowledge graph and the syllabus.",
    trend: "+4.2% this month",
  },
  {
    id: "contributions",
    label: "Student contributions",
    value: "1,284",
    hint: "Cases, notes, and study questions added by students.",
    trend: "+126 this week",
  },
  {
    id: "ai-pass",
    label: "AI pre-screen pass rate",
    value: "62%",
    hint: "Share of submissions cleared before faculty review.",
    trend: "Stable",
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
