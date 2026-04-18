import type { CourseId } from "@/lib/types";

export interface TextbookSection {
  title: string;
  paragraphs: string[];
  studentCase?: {
    title: string;
    body: string;
  };
}

export const textbookByCourse: Record<CourseId, { label: string; teacher: TextbookSection; student: TextbookSection }> = {
  "io-1": {
    label: "《产业经济学一：企业与创新》",
    teacher: {
      title: "企业 R&D 与专利制度",
      paragraphs: [
        "企业在不完全竞争环境中通过研发投入获取技术优势；专利提供临时独占权以补偿创新固定成本。",
        "分析框架强调动态激励、知识溢出与专利宽度、长度之间的权衡。",
      ],
      studentCase: {
        title: "校园科创赛",
        body: "把「专利池」想成小组作业分工：每个人都想署名第一作者，但合并交付才拿奖——这就是协调与独占之间的张力。",
      },
    },
    student: {
      title: "把「研发 + 专利」讲成生活版",
      paragraphs: [
        "你可以把研发当成「先烧钱做装备」：谁先做出更好用的功能，谁就能在短期内卖得贵一点。",
        "专利不是永久无敌，而是「限时 buff」：到期后大家都能抄，行业才会继续卷下一轮。",
      ],
      studentCase: {
        title: "校园科创赛",
        body: "把「专利池」想成小组作业分工：每个人都想署名第一作者，但合并交付才拿奖——这就是协调与独占之间的张力。",
      },
    },
  },
  "io-2": {
    label: "《产业经济学二：定价与决策》",
    teacher: {
      title: "价格歧视与福利",
      paragraphs: [
        "三级价格歧视要求可观察分组与防止套利；二级价格歧视通过菜单揭示私人信息。",
        "在反垄断语境下，支配企业的歧视性定价可能构成排他性滥用。",
      ],
    },
    student: {
      title: "定价就像「分层会员」",
      paragraphs: [
        "同一杯咖啡，早鸟券、学生价、会员价——不是随机打折，而是在猜：谁更需要、谁更愿意付。",
        "平台不让低价券转卖，是在堵「套利」：否则分层就失效了。",
      ],
    },
  },
  "io-3": {
    label: "《产业经济学三：市场结构与竞争政策》",
    teacher: {
      title: "集中度与并购审查",
      paragraphs: [
        "HHI 对市场份额平方赋权，强调头部企业权重；常与 CRn 指标互为补充。",
        "结构性推定并非终局，需结合进入、买方势力与创新动态。",
      ],
    },
    student: {
      title: "把「集中度」看成班级排名",
      paragraphs: [
        "如果前几名分数加起来特别高，全班分数差距就会很大——市场也是类似：头部越大，HHI 越高。",
        "并购不是「变大就不好」，而是要看会不会让后来者更难进来。",
      ],
    },
  },
  "io-4": {
    label: "《产业经济学四：博弈与策略》",
    teacher: {
      title: "（请使用动态教材页的完整讲义视图）",
      paragraphs: [
        "该课程的完整讲义已拆分为多节，请在「动态教材」中选择《产业经济学四》查看目录与全文结构。",
      ],
    },
    student: {
      title: "（同上）",
      paragraphs: ["选择《产业经济学四》即可浏览与学生视角讲义。"],
    },
  },
};
