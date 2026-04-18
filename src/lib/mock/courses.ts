import type { Course } from "@/lib/types";

export const COURSES: Course[] = [
  {
    id: "io-1",
    title: "Industrial Economics I: Firms and Innovation",
    shortTitle: "Firms & innovation",
    accent: "#1E3A5F",
  },
  {
    id: "io-2",
    title: "Industrial Economics II: Pricing and Decisions",
    shortTitle: "Pricing & decisions",
    accent: "#3D5A80",
  },
  {
    id: "io-3",
    title: "Industrial Economics III: Market Structure and Competition Policy",
    shortTitle: "Structure & policy",
    accent: "#5C6770",
  },
  {
    id: "io-4",
    title: "Industrial Economics IV: Games and Strategies",
    shortTitle: "Games & strategies",
    accent: "#8B6F47",
  },
];

export function courseById(id: string) {
  return COURSES.find((c) => c.id === id);
}
