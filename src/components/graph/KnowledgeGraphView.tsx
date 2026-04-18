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
          交互式知识图谱
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
          节点按四门《产业经济学》课程着色；拖拽画布平移，滚轮缩放。点击节点查看与其它课程单元的跨课程链接（演示数据）。
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
            <p className="font-serif text-lg text-[color:var(--color-navy)]">点击节点</p>
            <p className="mt-3 leading-relaxed">
              在左侧力导向图中选择概念，以查看该知识点在四门课程中的关联单元与关系类型。
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
