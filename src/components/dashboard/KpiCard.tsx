"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import type { KpiMetric } from "@/lib/types";

export function KpiCard({
  metric,
  index,
}: {
  metric: KpiMetric;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 * index }}
    >
      <Card className="h-full">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
          {metric.label}
        </p>
        <p className="mt-4 font-serif text-4xl text-[color:var(--color-navy)]">{metric.value}</p>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-carbon)]">{metric.hint}</p>
        {metric.trend ? (
          <p className="mt-4 text-xs text-[color:var(--color-wood)]">{metric.trend}</p>
        ) : null}
      </Card>
    </motion.div>
  );
}
