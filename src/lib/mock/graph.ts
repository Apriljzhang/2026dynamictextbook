import type { CourseId, GraphNodeDetail } from "@/lib/types";
import { COURSES } from "@/lib/mock/courses";

export { COURSES };

export interface GraphLink {
  source: string;
  target: string;
  relation?: string;
}

/** Nodes for react-force-graph (flat) */
export const graphNodes = [
  { id: "n-rd", label: "研发激励", courseId: "io-1" as CourseId },
  { id: "n-patent", label: "专利与独占", courseId: "io-1" as CourseId },
  { id: "n-scale", label: "规模经济", courseId: "io-1" as CourseId },
  { id: "n-pd", label: "价格歧视", courseId: "io-2" as CourseId },
  { id: "n-two", label: "两部定价", courseId: "io-2" as CourseId },
  { id: "n-mc", label: "边际成本定价", courseId: "io-2" as CourseId },
  { id: "n-hhi", label: "HHI 指数", courseId: "io-3" as CourseId },
  { id: "n-cr", label: "市场集中度", courseId: "io-3" as CourseId },
  { id: "n-ant", label: "反垄断政策", courseId: "io-3" as CourseId },
  { id: "n-gt", label: "博弈论", courseId: "io-4" as CourseId },
  { id: "n-ne", label: "纳什均衡", courseId: "io-4" as CourseId },
  { id: "n-pdilemma", label: "囚徒困境", courseId: "io-4" as CourseId },
  { id: "n-pub", label: "公共利益博弈", courseId: "io-4" as CourseId },
];

export const graphLinks: GraphLink[] = [
  { source: "n-rd", target: "n-patent", relation: "制度支撑" },
  { source: "n-scale", target: "n-mc", relation: "成本结构" },
  { source: "n-pd", target: "n-two", relation: "定价策略" },
  { source: "n-cr", target: "n-hhi", relation: "测度" },
  { source: "n-ant", target: "n-cr", relation: "政策对象" },
  { source: "n-gt", target: "n-ne", relation: "核心解概念" },
  { source: "n-pdilemma", target: "n-gt", relation: "经典模型" },
  { source: "n-pub", target: "n-pdilemma", relation: "结构相似" },
  { source: "n-patent", target: "n-ant", relation: "知识产权与竞争" },
  { source: "n-pd", target: "n-ne", relation: "策略互动" },
  { source: "n-mc", target: "n-ne", relation: "均衡刻画" },
  { source: "n-rd", target: "n-gt", relation: "创新竞赛" },
  { source: "n-hhi", target: "n-pd", relation: "市场势力与定价权" },
];

export const graphNodeDetails: Record<string, GraphNodeDetail> = {
  "n-gt": {
    id: "n-gt",
    label: "博弈论",
    courseId: "io-4",
    summary:
      "研究理性主体在相互依赖决策中的策略选择与均衡，是产业组织与策略互动的通用语言。",
    crossLinks: [
      {
        targetCourseId: "io-1",
        relation: "延伸",
        unitLabel: "第 5 章 · 创新竞赛与专利博弈",
      },
      {
        targetCourseId: "io-2",
        relation: "应用",
        unitLabel: "第 3 章 · 差异化定价中的信念与反应",
      },
      {
        targetCourseId: "io-3",
        relation: "政策语境",
        unitLabel: "第 7 章 · 合谋与默契协调的识别",
      },
    ],
  },
  "n-ne": {
    id: "n-ne",
    label: "纳什均衡",
    courseId: "io-4",
    summary:
      "在给定对手策略下，每一方都没有动机单方面偏离的策略组合；是后续不完全信息博弈与重复博弈分析的起点。",
    crossLinks: [
      {
        targetCourseId: "io-2",
        relation: "对应",
        unitLabel: "第 4 章 · 伯川德与古诺均衡",
      },
      {
        targetCourseId: "io-3",
        relation: "实证",
        unitLabel: "第 6 章 · 结构模型与反事实",
      },
      {
        targetCourseId: "io-1",
        relation: "案例",
        unitLabel: "第 3 章 · R&D 博弈与专利池",
      },
    ],
  },
  "n-pub": {
    id: "n-pub",
    label: "公共利益博弈",
    courseId: "io-4",
    summary:
      "个体成本与集体收益不对等时的合作难题，常见于公共品、环境与团队生产情境。",
    crossLinks: [
      {
        targetCourseId: "io-3",
        relation: "政策映射",
        unitLabel: "第 4 章 · 外部性与规制工具",
      },
      {
        targetCourseId: "io-1",
        relation: "组织",
        unitLabel: "第 6 章 · 团队激励与搭便车",
      },
      {
        targetCourseId: "io-2",
        relation: "机制",
        unitLabel: "第 6 章 · 机制设计与参与约束",
      },
    ],
  },
  "n-rd": {
    id: "n-rd",
    label: "研发激励",
    courseId: "io-1",
    summary: "企业创新投入强度与制度安排（专利、补贴、竞争）之间的互动关系。",
    crossLinks: [
      {
        targetCourseId: "io-4",
        relation: "策略互动",
        unitLabel: "第 2 章 · 创新竞赛模型",
      },
      {
        targetCourseId: "io-3",
        relation: "竞争效应",
        unitLabel: "第 5 章 · 动态竞争与创新市场",
      },
      {
        targetCourseId: "io-2",
        relation: "价值实现",
        unitLabel: "第 2 章 · 价值捕获与定价",
      },
    ],
  },
  "n-pd": {
    id: "n-pd",
    label: "价格歧视",
    courseId: "io-2",
    summary: "基于可观察特征或推断意愿支付的分组定价，影响福利与竞争评估。",
    crossLinks: [
      {
        targetCourseId: "io-3",
        relation: "政策",
        unitLabel: "第 8 章 · 滥用支配地位与价格挤压",
      },
      {
        targetCourseId: "io-4",
        relation: "信息",
        unitLabel: "第 5 章 · 信号与筛选博弈",
      },
      {
        targetCourseId: "io-1",
        relation: "产品",
        unitLabel: "第 4 章 · 版本化与产品线",
      },
    ],
  },
  "n-hhi": {
    id: "n-hhi",
    label: "HHI 指数",
    courseId: "io-3",
    summary: "以市场份额平方和刻画集中度的常用指标，常用于并购审查门槛参考。",
    crossLinks: [
      {
        targetCourseId: "io-2",
        relation: "联动",
        unitLabel: "第 5 章 · 市场势力测度与定价",
      },
      {
        targetCourseId: "io-4",
        relation: "结构",
        unitLabel: "第 6 章 · 进入威慑与结构效应",
      },
      {
        targetCourseId: "io-1",
        relation: "创新",
        unitLabel: "第 7 章 · 集中度与激励",
      },
    ],
  },
};

export function defaultDetailForNode(id: string): GraphNodeDetail {
  const node = graphNodes.find((n) => n.id === id);
  const course = node ? COURSES.find((c) => c.id === node.courseId)! : COURSES[0];
  return {
    id,
    label: node?.label ?? id,
    courseId: node?.courseId ?? "io-1",
    summary: `${node?.label ?? "该概念"}是「${course.shortTitle}」模块中的基础节点，可在全库检索相关条目与先修关系。`,
    crossLinks: COURSES.filter((c) => c.id !== node?.courseId).map((c) => ({
      targetCourseId: c.id,
      relation: "关联",
      unitLabel: "相关单元（示例）",
    })),
  };
}
