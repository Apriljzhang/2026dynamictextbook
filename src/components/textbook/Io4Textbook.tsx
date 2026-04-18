"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { IO4_SOURCE, io4LectureSections } from "@/lib/content/io4-lecture-notes";
import { PerspectiveToggle } from "@/components/textbook/PerspectiveToggle";
import type { Perspective } from "@/lib/types";

export function Io4Textbook() {
  const [perspective, setPerspective] = useState<Perspective>("teacher");
  const [sectionId, setSectionId] = useState(io4LectureSections[0]?.id ?? "io4-ch1");

  const section = useMemo(
    () => io4LectureSections.find((s) => s.id === sectionId) ?? io4LectureSections[0],
    [sectionId],
  );

  const active = perspective === "teacher" ? section.teacher : section.student;

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:items-start">
      <nav className="lg:sticky lg:top-28">
        <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">Contents</p>
        <ul className="mt-3 space-y-1 border-l border-[color:var(--color-border)] pl-3">
          {io4LectureSections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setSectionId(s.id)}
                className={`w-full rounded-sm px-2 py-2 text-left text-sm transition ${
                  s.id === sectionId
                    ? "bg-[color:var(--color-surface)] text-[color:var(--color-navy)]"
                    : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-carbon)]"
                }`}
              >
                <span className="tabular-nums text-xs text-[color:var(--color-wood)]">{s.n}.</span>
                <span className="ml-1 leading-snug">{s.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 py-3 text-sm text-[color:var(--color-carbon)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--color-muted)]">Assigned textbook</p>
          <p className="mt-1 font-medium text-[color:var(--color-navy)]">{IO4_SOURCE.courseTitle}</p>
          <p className="mt-1 text-sm text-[color:var(--color-carbon)]">{IO4_SOURCE.bookTitleEn}</p>
          <p className="mt-1 text-xs text-[color:var(--color-muted)]">
            {IO4_SOURCE.authors} · {IO4_SOURCE.publisher} · {IO4_SOURCE.year}
          </p>
          <p className="mt-1 text-xs text-[color:var(--color-muted)]">
            {IO4_SOURCE.moduleCode} · {IO4_SOURCE.moduleTitleEn}
          </p>
          <p className="mt-2 text-xs text-[color:var(--color-muted)]">File: {IO4_SOURCE.fileName}</p>
          <a
            href={IO4_SOURCE.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-sm text-[color:var(--color-navy)] underline decoration-[color:var(--color-wood)] underline-offset-4 hover:opacity-80"
          >
            Google Drive (if available)
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <PerspectiveToggle value={perspective} onChange={setPerspective} />
          <p className="text-xs text-[color:var(--color-muted)]">
            Current:{" "}
            <span className="text-[color:var(--color-carbon)]">
              {section.titleEn} · {section.title}
            </span>
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={`${section.id}-${perspective}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 md:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--color-wood)]">
              Section {section.n}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-[color:var(--color-navy)] md:text-3xl">{section.title}</h2>
            <p className="mt-2 text-sm italic text-[color:var(--color-muted)]">{section.titleEn}</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[color:var(--color-carbon)]">
              {active.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {section.studentCase ? (
              <motion.div
                layout
                initial={false}
                animate={{
                  borderColor:
                    perspective === "student" ? "var(--color-wood)" : "rgba(44,44,44,0.12)",
                  backgroundColor:
                    perspective === "student" ? "rgba(139, 111, 71, 0.08)" : "transparent",
                }}
                transition={{ duration: 0.35 }}
                className="mt-10 rounded-sm border px-5 py-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-wood)]">
                  Student contribution
                </p>
                <p className="mt-2 font-medium text-[color:var(--color-carbon)]">{section.studentCase.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-carbon)]">
                  {section.studentCase.body}
                </p>
              </motion.div>
            ) : null}
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
