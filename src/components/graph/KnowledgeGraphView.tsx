"use client";

import { useState } from "react";
import { COURSES } from "@/lib/mock/courses";
import { NodeDetailPanel } from "@/components/graph/NodeDetailPanel";
import { ForceGraphPane } from "@/components/graph/ForceGraphPane";
import type { GraphNodeDetail } from "@/lib/types";

export default function KnowledgeGraphView() {
  const [selected, setSelected] = useState<GraphNodeDetail | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-wood)]">
          Knowledge graph
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--color-navy)]">
          Interactive knowledge graph
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
          Nodes are coloured by course. Drag the canvas, scroll to zoom, and click a node for cross-course links (mock data).
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-4 text-xs text-[color:var(--color-muted)]">
        {COURSES.map((c) => (
          <span key={c.id} className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
            {c.shortTitle}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-0 overflow-hidden rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] lg:grid-cols-[1fr_340px]">
        <div className="min-h-[420px] p-2">
          <ForceGraphPane onSelect={setSelected} />
        </div>
        {selected ? (
          <NodeDetailPanel detail={selected} onClose={() => setSelected(null)} />
        ) : (
          <aside className="hidden flex-col justify-center border-l border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 text-sm text-[color:var(--color-muted)] lg:flex">
            <p className="font-serif text-lg text-[color:var(--color-navy)]">Select a node</p>
            <p className="mt-3 leading-relaxed">
              Click a concept in the force-directed graph to see how it links to units in the four courses.
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
