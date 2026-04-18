"use client";

import dynamic from "next/dynamic";

const KnowledgeGraphView = dynamic(() => import("@/components/graph/KnowledgeGraphView"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-6xl px-6 py-24 text-sm text-[color:var(--color-muted)]">Loading knowledge graph…</div>
  ),
});

export function KnowledgeGraphDynamic() {
  return <KnowledgeGraphView />;
}
