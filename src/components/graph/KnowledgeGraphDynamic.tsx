"use client";

import dynamic from "next/dynamic";

const KnowledgeGraphView = dynamic(() => import("@/components/graph/KnowledgeGraphView"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-6xl px-6 py-24 text-sm text-[color:var(--color-muted)]">知识图谱加载中…</div>
  ),
});

export function KnowledgeGraphDynamic() {
  return <KnowledgeGraphView />;
}
