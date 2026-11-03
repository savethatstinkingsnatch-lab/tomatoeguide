import { Link } from "@tanstack/react-router";
import { CHAPTERS } from "@/lib/book/chapters";
import { useBookStore } from "@/lib/book/store";
import { cn } from "@/lib/utils";

export function TableOfContents({
  current,
  onNavigate,
}: {
  current?: string;
  onNavigate?: () => void;
}) {
  const read = useBookStore((s) => s.read);

  return (
    <nav aria-label="Chapters">
      <p className="px-1 text-xs font-medium tracking-wide text-muted uppercase">
        Contents
      </p>
      <ol className="mt-3 flex flex-col gap-0.5">
        <li>
          <Link
            to="/book"
            onClick={onNavigate}
            className={cn(
              "flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-150",
              current === undefined
                ? "bg-paper-deep text-ink"
                : "text-ink-soft hover:bg-paper-deep/70 hover:text-ink",
            )}
          >
            The book
          </Link>
        </li>
        {CHAPTERS.map((ch) => {
          const done = read.includes(ch.slug);
          const active = current === ch.slug;
          return (
            <li key={ch.slug}>
              <Link
                to="/book/$slug"
                params={{ slug: ch.slug }}
                onClick={onNavigate}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-150",
                  active
                    ? "bg-paper-deep text-ink"
                    : "text-ink-soft hover:bg-paper-deep/70 hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "w-6 font-display text-xs tabular-nums",
                    active ? "text-tomato" : "text-muted",
                  )}
                >
                  {ch.number}
                </span>
                <span className="flex-1 leading-snug">{ch.title}</span>
                {done ? (
                  <span className="size-1.5 rounded-full bg-tomato" aria-hidden />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
