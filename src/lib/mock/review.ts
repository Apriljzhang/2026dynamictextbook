import type { ReviewReport } from "@/lib/types";

export function mockReport(seed: string): ReviewReport {
  const h = seed.length * 17;
  const academicScore = 72 + (h % 18);
  const interestScore = 64 + ((h * 3) % 22);
  return {
    academicScore,
    interestScore,
    summary:
      "Overall alignment with learning goals is good and concepts are cited correctly. The everyday example helps intuition, but add one traceable reference or data point to support the claim.",
    risks: [
      "Some terms differ from the textbook (3rd ed.); align definitions for consistency.",
      "The example is far from policy context; add one short industry illustration.",
    ],
  };
}
