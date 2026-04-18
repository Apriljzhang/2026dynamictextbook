import Link from "next/link";

const nav = [
  { href: "/", label: "概览" },
  { href: "/knowledge-graph", label: "知识图谱" },
  { href: "/textbook-demo", label: "动态教材" },
  { href: "/ai-review", label: "AI 审核" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-tight text-[color:var(--color-navy)]">
            教育改革项目
          </p>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
            产业经济学 · 动态教材与知识图谱演示原型
          </p>
        </div>
        <nav className="flex flex-wrap gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-[color:var(--color-carbon)] transition hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
