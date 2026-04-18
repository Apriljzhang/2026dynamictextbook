export type CourseId = "io-1" | "io-2" | "io-3" | "io-4";

export interface Course {
  id: CourseId;
  title: string;
  shortTitle: string;
  accent: string;
}

export interface CrossLink {
  targetCourseId: CourseId;
  relation: string;
  unitLabel: string;
}

export interface GraphNodeDetail {
  id: string;
  label: string;
  courseId: CourseId;
  summary: string;
  crossLinks: CrossLink[];
}

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  hint: string;
  trend?: string;
}

export interface CourseProgress {
  courseId: CourseId;
  coveragePct: number;
  studentEntries: number;
  aiPassRate: number;
}

export type Perspective = "teacher" | "student";

export interface ReviewReport {
  academicScore: number;
  interestScore: number;
  summary: string;
  risks: string[];
}
