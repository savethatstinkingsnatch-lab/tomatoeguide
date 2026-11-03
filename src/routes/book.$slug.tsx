import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  adjacentChapters,
  chapterBySlug,
} from "@/lib/book/chapters";
import { ChapterBody } from "@/components/book/chapter-body";
import { useBookStore } from "@/lib/book/store";
import { ZONES } from "@/lib/book/zones";

export const Route = createFileRoute("/book/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = chapterBySlug(slug);
  const markRead = useBookStore((s) => s.markRead);
  const zone = useBookStore((s) => s.zone);
  const info = ZONES[zone];

  useEffect(() => {
    if (chapter) markRead(chapter.slug);
  }, [chapter, markRead]);

  if (!chapter) {
    return (
      <div className="px-6 py-16 text-center">
        <h1 className="font-display text-2xl font-medium text-ink">
          That chapter is not in this book
        </h1>
        <Link
          to="/book"
          className="mt-4 inline-flex min-h-11 items-center text-tomato"
        >
          Return to contents
        </Link>
      </div>
    );
  }

  const { prev, next } = adjacentChapters(chapter.slug);

  return (
    <article className="pb-16">
      <figure className="relative">
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="h-56 w-full object-cover sm:h-72 lg:h-80"
        />
        <figcaption className="sr-only">{chapter.imageAlt}</figcaption>
      </figure>
      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        <p className="font-display text-xs font-medium tracking-widest text-tomato uppercase">
          Chapter {chapter.number} · {chapter.kicker}
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {chapter.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{chapter.dek}</p>
        <p className="mt-4 rounded-md bg-paper-deep px-3 py-2 text-sm text-ink-soft">
          Zone {zone}: transplant {info.transplant}. Harvest {info.harvest}.
        </p>
        <div className="mt-10">
          <ChapterBody blocks={chapter.blocks} />
        </div>
        <nav
          className="mt-14 flex items-stretch gap-3 border-t border-line pt-8"
          aria-label="Adjacent chapters"
        >
          {prev ? (
            <Link
              to="/book/$slug"
              params={{ slug: prev.slug }}
              className="flex min-h-14 min-w-0 flex-1 items-center gap-2 rounded-md bg-paper-deep px-4 py-3 transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              <ArrowLeft className="size-4 shrink-0 text-tomato" strokeWidth={1.75} />
              <span className="min-w-0">
                <span className="block text-xs text-muted">Previous</span>
                <span className="block truncate font-display text-sm font-medium text-ink">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              to="/book/$slug"
              params={{ slug: next.slug }}
              className="flex min-h-14 min-w-0 flex-1 items-center justify-end gap-2 rounded-md bg-paper-deep px-4 py-3 text-right transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted">Next</span>
                <span className="block truncate font-display text-sm font-medium text-ink">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-tomato" strokeWidth={1.75} />
            </Link>
          ) : (
            <Link
              to="/book"
              className="flex min-h-14 flex-1 items-center justify-end rounded-md bg-tomato px-4 py-3 font-display text-sm font-medium text-paper"
            >
              Back to contents
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
