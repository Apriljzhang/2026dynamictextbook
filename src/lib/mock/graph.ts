import type { CourseId, GraphNodeDetail } from "@/lib/types";
import { COURSES } from "@/lib/mock/courses";

export { COURSES };

export interface GraphLink {
  source: string;
  target: string;
  relation?: string;
}

export const graphNodes = [
  { id: "n-rd", label: "R&D incentives", courseId: "io-1" as CourseId },
  { id: "n-patent", label: "Patents & exclusivity", courseId: "io-1" as CourseId },
  { id: "n-scale", label: "Economies of scale", courseId: "io-1" as CourseId },
  { id: "n-pd", label: "Price discrimination", courseId: "io-2" as CourseId },
  { id: "n-two", label: "Two-part tariff", courseId: "io-2" as CourseId },
  { id: "n-mc", label: "Marginal-cost pricing", courseId: "io-2" as CourseId },
  { id: "n-hhi", label: "HHI index", courseId: "io-3" as CourseId },
  { id: "n-cr", label: "Market concentration", courseId: "io-3" as CourseId },
  { id: "n-ant", label: "Antitrust policy", courseId: "io-3" as CourseId },
  { id: "n-gt", label: "Game theory", courseId: "io-4" as CourseId },
  { id: "n-ne", label: "Nash equilibrium", courseId: "io-4" as CourseId },
  { id: "n-pdilemma", label: "Prisoners’ dilemma", courseId: "io-4" as CourseId },
  { id: "n-pub", label: "Public-good game", courseId: "io-4" as CourseId },
];

export const graphLinks: GraphLink[] = [
  { source: "n-rd", target: "n-patent", relation: "Institutions" },
  { source: "n-scale", target: "n-mc", relation: "Cost structure" },
  { source: "n-pd", target: "n-two", relation: "Pricing" },
  { source: "n-cr", target: "n-hhi", relation: "Measurement" },
  { source: "n-ant", target: "n-cr", relation: "Policy focus" },
  { source: "n-gt", target: "n-ne", relation: "Solution concept" },
  { source: "n-pdilemma", target: "n-gt", relation: "Classic model" },
  { source: "n-pub", target: "n-pdilemma", relation: "Similar structure" },
  { source: "n-patent", target: "n-ant", relation: "IP & competition" },
  { source: "n-pd", target: "n-ne", relation: "Strategic interaction" },
  { source: "n-mc", target: "n-ne", relation: "Equilibrium" },
  { source: "n-rd", target: "n-gt", relation: "Innovation races" },
  { source: "n-hhi", target: "n-pd", relation: "Market power" },
];

export const graphNodeDetails: Record<string, GraphNodeDetail> = {
  "n-gt": {
    id: "n-gt",
    label: "Game theory",
    courseId: "io-4",
    summary:
      "The language of strategic interaction and equilibrium in industrial organization: how rational players choose actions when payoffs depend on others’ choices.",
    crossLinks: [
      {
        targetCourseId: "io-1",
        relation: "Extension",
        unitLabel: "Ch. 5 · Innovation races & patent games",
      },
      {
        targetCourseId: "io-2",
        relation: "Application",
        unitLabel: "Ch. 3 · Beliefs and reactions in differentiated pricing",
      },
      {
        targetCourseId: "io-3",
        relation: "Policy",
        unitLabel: "Ch. 7 · Tacit collusion & detection",
      },
    ],
  },
  "n-ne": {
    id: "n-ne",
    label: "Nash equilibrium",
    courseId: "io-4",
    summary:
      "A profile of strategies where no player gains by a unilateral deviation, given others’ strategies—a starting point for incomplete information and repeated games.",
    crossLinks: [
      {
        targetCourseId: "io-2",
        relation: "Parallel",
        unitLabel: "Ch. 4 · Cournot & Bertrand equilibria",
      },
      {
        targetCourseId: "io-3",
        relation: "Empirical",
        unitLabel: "Ch. 6 · Structural models & counterfactuals",
      },
      {
        targetCourseId: "io-1",
        relation: "Example",
        unitLabel: "Ch. 3 · R&D games & patent pools",
      },
    ],
  },
  "n-pub": {
    id: "n-pub",
    label: "Public-good game",
    courseId: "io-4",
    summary:
      "Private costs and shared benefits create free-riding; common in public goods, environment, and team production.",
    crossLinks: [
      {
        targetCourseId: "io-3",
        relation: "Policy map",
        unitLabel: "Ch. 4 · Externalities & regulation",
      },
      {
        targetCourseId: "io-1",
        relation: "Organization",
        unitLabel: "Ch. 6 · Teams & free-riding",
      },
      {
        targetCourseId: "io-2",
        relation: "Mechanism",
        unitLabel: "Ch. 6 · Mechanism design & participation",
      },
    ],
  },
  "n-rd": {
    id: "n-rd",
    label: "R&D incentives",
    courseId: "io-1",
    summary: "How firms invest in innovation under patents, subsidies, and competitive pressure.",
    crossLinks: [
      {
        targetCourseId: "io-4",
        relation: "Strategy",
        unitLabel: "Ch. 2 · Innovation race models",
      },
      {
        targetCourseId: "io-3",
        relation: "Competition",
        unitLabel: "Ch. 5 · Dynamic competition & innovation",
      },
      {
        targetCourseId: "io-2",
        relation: "Value",
        unitLabel: "Ch. 2 · Value capture & pricing",
      },
    ],
  },
  "n-pd": {
    id: "n-pd",
    label: "Price discrimination",
    courseId: "io-2",
    summary:
      "Pricing by observable or revealed willingness to pay; central for welfare and competition assessment.",
    crossLinks: [
      {
        targetCourseId: "io-3",
        relation: "Policy",
        unitLabel: "Ch. 8 · Dominance & price squeeze",
      },
      {
        targetCourseId: "io-4",
        relation: "Information",
        unitLabel: "Ch. 5 · Signalling & screening games",
      },
      {
        targetCourseId: "io-1",
        relation: "Product line",
        unitLabel: "Ch. 4 · Versioning & product lines",
      },
    ],
  },
  "n-hhi": {
    id: "n-hhi",
    label: "HHI index",
    courseId: "io-3",
    summary:
      "Sum of squared market shares; a standard concentration measure in merger review.",
    crossLinks: [
      {
        targetCourseId: "io-2",
        relation: "Link",
        unitLabel: "Ch. 5 · Market power & pricing",
      },
      {
        targetCourseId: "io-4",
        relation: "Structure",
        unitLabel: "Ch. 6 · Entry deterrence",
      },
      {
        targetCourseId: "io-1",
        relation: "Innovation",
        unitLabel: "Ch. 7 · Concentration & incentives",
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
    summary: `${node?.label ?? "This concept"} is a core node in “${course.shortTitle}”. Search the graph for prerequisites and related entries.`,
    crossLinks: COURSES.filter((c) => c.id !== node?.courseId).map((c) => ({
      targetCourseId: c.id,
      relation: "Related",
      unitLabel: "Related unit (example)",
    })),
  };
}
