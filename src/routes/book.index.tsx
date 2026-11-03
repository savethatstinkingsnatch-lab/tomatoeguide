import { createFileRoute, Link } from "@tanstack/react-router";
import { CHAPTERS } from "@/lib/book/chapters";
import { useBookStore } from "@/lib/book/store";
import { ZONES } from "@/lib/book/zones";

export const Route = createFileRoute("/book/")({ component: Contents });

function Contents() {
  const zone = useBookStore((s) => s.zone);
  const info = ZONES[zone];
  const read = useBookStore((s) => s.read);

  return (
    <article className="px-5 py-10 sm:px-10 sm:py-14">
      <header className="max-w-2xl">
        <p className="text-xs font-medium tracking-widest text-tomato uppercase">
          Contents
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          From seed to harvest
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          A practical book for one crop. Set your zone, then read in order — or
          skip to companions, seed saving, or the harvest week you are in.
        </p>
        <p className="mt-3 text-sm text-muted">
          You are in {info.label}. Start indoors {info.startIndoors},
          transplant {info.transplant}. Harvest {info.harvest}.
        </p>
      </header>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {CHAPTERS.map((ch) => (
          <li key={ch.slug}>
            <Link
              to="/book/$slug"
              params={{ slug: ch.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)] transition-transform duration-150 ease-out active:scale-[0.99]"
            >
              <img
                src={ch.image}
                alt=""
                className="art h-36 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="font-display text-xs tabular-nums text-tomato">
                  {ch.number}
                  {read.includes(ch.slug) ? (
                    <span className="ml-2 text-muted">Read</span>
                  ) : null}
                </p>
                <h2 className="mt-1 font-display text-xl font-medium text-ink group-hover:text-tomato">
                  {ch.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {ch.dek}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
