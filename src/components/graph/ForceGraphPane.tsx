"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { COURSES } from "@/lib/mock/courses";
import { graphLinks, graphNodeDetails, graphNodes, defaultDetailForNode } from "@/lib/mock/graph";
import type { GraphNodeDetail } from "@/lib/types";
import type { CourseId } from "@/lib/types";

function colorForCourse(courseId: CourseId) {
  return COURSES.find((c) => c.id === courseId)?.accent ?? "#2C2C2C";
}

export function ForceGraphPane({
  onSelect,
}: {
  onSelect: (detail: GraphNodeDetail) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 560 });

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setDims({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    setDims({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  const data = useMemo(
    () => ({
      nodes: graphNodes.map((n) => ({ ...n })),
      links: graphLinks.map((l) => ({ ...l })),
    }),
    [],
  );

  const handleClick = useCallback(
    (node: { id?: string | number }) => {
      const id = String(node.id ?? "");
      const detail = graphNodeDetails[id] ?? defaultDetailForNode(id);
      onSelect(detail);
    },
    [onSelect],
  );

  return (
    <div ref={hostRef} className="relative h-[min(70vh,640px)] w-full min-h-[420px]">
      <ForceGraph2D
        width={dims.w}
        height={dims.h}
        graphData={data}
        backgroundColor="transparent"
        linkColor={() => "rgba(44,44,44,0.18)"}
        linkWidth={1.2}
        nodeLabel="label"
        nodeRelSize={6}
        nodeColor={(n: { courseId?: CourseId }) => colorForCourse(n.courseId ?? "io-1")}
        onNodeClick={handleClick}
        cooldownTicks={120}
        onEngineStop={() => {
          // graph settles
        }}
      />
    </div>
  );
}
