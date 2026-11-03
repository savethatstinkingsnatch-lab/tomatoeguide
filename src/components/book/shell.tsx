import { useEffect, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { TableOfContents } from "./toc";
import { ZonePicker } from "./zone-picker";
import { CHAPTERS } from "@/lib/book/chapters";
import { useBookStore } from "@/lib/book/store";

export function BookShell() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const slug = pathname.startsWith("/book/")
    ? pathname.slice("/book/".length)
    : undefined;
  const chapter = CHAPTERS.find((c) => c.slug === slug);
  const zone = useBookStore((s) => s.zone);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={open ? "Close contents" : "Open contents"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
          <Link
            to="/"
            className="font-display text-base font-medium tracking-tight text-ink"
          >
            The Tomato Book
          </Link>
          <span className="hidden truncate text-sm text-muted sm:block">
            {chapter ? chapter.title : "Contents"}
          </span>
          <span className="ml-auto rounded-md bg-paper-deep px-2.5 py-1 font-display text-xs font-medium tabular-nums text-sage">
            Zone {zone}
          </span>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/30"
            aria-label="Close contents"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute top-0 left-0 flex h-full w-80 max-w-[88vw] flex-col gap-6 overflow-y-auto bg-paper p-5 shadow-[var(--shadow-border)]">
            <TableOfContents current={slug} onNavigate={() => setOpen(false)} />
            <div>
              <p className="mb-2 px-1 text-xs font-medium tracking-wide text-muted uppercase">
                Your zone
              </p>
              <ZonePicker compact />
            </div>
          </aside>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[16.5rem_minmax(0,1fr)]">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] overflow-y-auto border-r border-line p-6 lg:block">
          <TableOfContents current={slug} />
          <div className="mt-8">
            <p className="mb-2 px-1 text-xs font-medium tracking-wide text-muted uppercase">
              Your zone
            </p>
            <ZonePicker compact />
          </div>
        </aside>
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
