import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ZonePicker } from "@/components/book/zone-picker";
import { useBookStore } from "@/lib/book/store";

export const Route = createFileRoute("/")({ component: Cover });

function Cover() {
  const zone = useBookStore((s) => s.zone);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="mx-auto grid min-h-dvh max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <section className="order-2 flex flex-col justify-center px-6 py-10 sm:px-10 lg:order-1 lg:px-14 lg:py-12">
          <div className="stagger-in max-w-md">
            <p className="text-xs font-medium tracking-widest text-tomato uppercase">
              A garden companion
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] font-medium tracking-tight text-ink sm:text-6xl">
              The Tomato Book
            </h1>
            <p className="mt-3 font-display text-lg text-ink-soft">
              by Jessica McIntosh
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              From seed tray to frost — how to grow tomatoes, pick the fruit,
              save the seed, and plant the neighbors that earn their keep.
            </p>
            <p className="mt-4 text-sm text-muted">
              Eleven chapters. USDA zones 3–11. Your season, your dates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book/$slug"
                params={{ slug: "begin" }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-tomato px-5 font-display text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Begin reading
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                to="/book"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-paper-deep px-5 font-display text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Contents
              </Link>
            </div>
          </div>
          <div className="mt-12 max-w-md">
            <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">
              Set your USDA zone
              <span className="ml-2 normal-case">currently {zone}</span>
            </p>
            <ZonePicker compact />
          </div>
        </section>
        <section className="relative order-1 h-64 sm:h-80 lg:order-2 lg:h-auto lg:min-h-dvh">
          <img
            src="/images/cover.jpg"
            alt="Ripe heirloom tomatoes on the vine in late-afternoon garden light"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </section>
      </div>
    </div>
  );
}
