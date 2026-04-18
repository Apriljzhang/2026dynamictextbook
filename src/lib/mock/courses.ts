import type { Course } from "@/lib/types";

export const COURSES: Course[] = [
  {
    id: "io-1",
    title: "《产业经济学一：企业与创新》",
    shortTitle: "企业与创新",
    accent: "#1E3A5F",
  },
  {
    id: "io-2",
    title: "《产业经济学二：定价与决策》",
    shortTitle: "定价与决策",
    accent: "#3D5A80",
  },
  {
    id: "io-3",
    title: "《产业经济学三：市场结构与竞争政策》",
    shortTitle: "市场结构与竞争政策",
    accent: "#5C6770",
  },
  {
    id: "io-4",
    title: "《产业经济学四：博弈与策略》",
    shortTitle: "博弈与策略",
    accent: "#8B6F47",
  },
];

export function courseById(id: string) {
  return COURSES.find((c) => c.id === id);
}
