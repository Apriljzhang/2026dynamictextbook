import type { ReviewReport } from "@/lib/types";

export function mockReport(seed: string): ReviewReport {
  const h = seed.length * 17;
  const academicScore = 72 + (h % 18);
  const interestScore = 64 + ((h * 3) % 22);
  return {
    academicScore,
    interestScore,
    summary:
      "条目与课程目标总体一致，概念引用准确；生活化案例有助于理解，但需补充一条可追溯的文献或数据出处以支撑论断。",
    risks: [
      "部分术语口径与教材第 3 版不一致，建议对齐定义。",
      "案例场景与政策语境距离较远，建议增加一句产业示例。",
    ],
  };
}
