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
    label: "Industrial Economics I: Firms and Innovation",
    teacher: {
      title: "R&D and patents",
      paragraphs: [
        "Firms invest in R&D to obtain technological advantage under imperfect competition; patents grant temporary exclusivity to cover fixed innovation costs.",
        "The framework highlights dynamic incentives, spillovers, and the trade-off between patent breadth and length.",
      ],
      studentCase: {
        title: "Campus innovation contest",
        body: "Think of a patent pool like a group project: everyone wants first authorship, but joint delivery wins the prize—coordination versus exclusivity.",
      },
    },
    student: {
      title: "R&D in plain language",
      paragraphs: [
        "R&D is spending now to build a better product later; whoever ships a stronger feature can charge more for a while.",
        "Patents are a timed buff, not permanent invincibility—after expiry, others can imitate and the next race starts.",
      ],
      studentCase: {
        title: "Campus innovation contest",
        body: "Think of a patent pool like a group project: everyone wants first authorship, but joint delivery wins the prize—coordination versus exclusivity.",
      },
    },
  },
  "io-2": {
    label: "Industrial Economics II: Pricing and Decisions",
    teacher: {
      title: "Price discrimination and welfare",
      paragraphs: [
        "Third-degree discrimination needs observable segments and ways to prevent arbitrage; second-degree uses menus to screen private information.",
        "In antitrust, discriminatory pricing by a dominant firm may constitute exclusionary abuse.",
      ],
    },
    student: {
      title: "Pricing like tiered memberships",
      paragraphs: [
        "Same coffee, different coupons—student price, early bird, member price. The firm is guessing who needs the product most and who will pay most.",
        "Platforms block coupon resale to stop arbitrage; otherwise segmentation collapses.",
      ],
    },
  },
  "io-3": {
    label: "Industrial Economics III: Market Structure and Competition Policy",
    teacher: {
      title: "Concentration and merger review",
      paragraphs: [
        "HHI squares market shares to weight leaders; it complements CRn measures.",
        "Structural presumptions are not final—entry, buyer power, and innovation still matter.",
      ],
    },
    student: {
      title: "Concentration as a class rank",
      paragraphs: [
        "If the top students capture most of the total score, inequality is high—similar intuition for HHI in markets.",
        "Mergers are not automatically bad; the question is whether entry becomes harder for others.",
      ],
    },
  },
  "io-4": {
    label: "Industrial Economics IV: Games and Strategies",
    teacher: {
      title: "Use the living textbook view",
      paragraphs: [
        "Full lecture notes are split into sections—select Course IV in this demo to browse the table of contents.",
      ],
    },
    student: {
      title: "Same as above",
      paragraphs: ["Choose Course IV to open the structured notes and student-friendly view."],
    },
  },
};
