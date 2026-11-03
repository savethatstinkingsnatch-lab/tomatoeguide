import type { Block } from "@/lib/book/types";
import { ZonePicker } from "./zone-picker";
import { SeasonCalendar } from "./calendar";
import { CompanionsPanel } from "./companions-panel";
import { VarietiesPanel } from "./varieties-panel";
import { SeedSteps, StorageGuide } from "./seed-panels";
import { useBookStore } from "@/lib/book/store";
import { ZONES } from "@/lib/book/zones";

export function ChapterBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-book flex flex-col gap-6">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  const zone = useBookStore((s) => s.zone);
  const info = ZONES[zone];

  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-ink-soft">{block.text}</p>
      );
    case "h2":
      return (
        <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-xl font-medium text-ink">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-tomato pl-5 font-display text-xl leading-snug font-medium text-ink">
          {block.text}
        </blockquote>
      );
    case "callout": {
      const zoneBody =
        block.tone === "tip" && block.title.includes("harvest window")
          ? `${info.harvestAdvice} ${block.body}`
          : block.body;
      return (
        <aside
          className={
            block.tone === "warn"
              ? "rounded-xl border border-tomato/20 bg-tomato/10 p-5"
              : "rounded-xl bg-sage/10 p-5"
          }
        >
          <p
            className={
              block.tone === "warn"
                ? "text-xs font-medium tracking-wide text-tomato uppercase"
                : "text-xs font-medium tracking-wide text-sage uppercase"
            }
          >
            {block.kicker}
          </p>
          <p className="mt-1 font-display text-lg font-medium text-ink">
            {block.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{zoneBody}</p>
        </aside>
      );
    }
    case "steps":
      return (
        <ol className="flex flex-col gap-4">
          {block.items.map((item, i) => (
            <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4">
              <span className="font-display text-2xl font-medium tabular-nums text-tomato">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "dl":
      return (
        <dl className="flex flex-col divide-y divide-line overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]">
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
              <dt className="font-display font-medium text-ink">{item.term}</dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{item.def}</dd>
            </div>
          ))}
        </dl>
      );
    case "figure":
      return (
        <figure className="overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]">
          <img src={block.src} alt={block.alt} className="art w-full object-cover" />
          <figcaption className="px-5 py-3 text-sm leading-relaxed text-muted">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "zonePanel":
      return <ZonePicker />;
    case "calendar":
      return <SeasonCalendar />;
    case "companions":
      return <CompanionsPanel />;
    case "varieties":
      return <VarietiesPanel />;
    case "seedSteps":
      return <SeedSteps />;
    case "storageGuide":
      return <StorageGuide />;
  }
}
