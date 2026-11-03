import { cn } from "@/lib/utils";
import { ZONE_IDS, ZONES } from "@/lib/book/zones";
import { useBookStore } from "@/lib/book/store";
import type { ZoneId } from "@/lib/book/types";

export function ZonePicker({ compact = false }: { compact?: boolean }) {
  const zone = useBookStore((s) => s.zone);
  const setZone = useBookStore((s) => s.setZone);
  const info = ZONES[zone];

  return (
    <div className={cn("flex flex-col", compact ? "gap-3" : "gap-5")}>
      <div className="flex flex-wrap gap-1.5">
        {ZONE_IDS.map((id) => (
          <ZoneChip
            key={id}
            id={id}
            selected={id === zone}
            onSelect={setZone}
            compact={compact}
          />
        ))}
      </div>
      {!compact ? (
        <div className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]">
          <p className="font-display text-sm font-medium tracking-wide text-tomato">
            {info.label}
            <span className="ml-2 text-muted">Winter min {info.tempRange}</span>
          </p>
          <p className="mt-2 font-display text-xl font-medium text-ink">
            {info.seasonDays}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            {info.regions}
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Fact label="Last spring frost" value={info.lastFrost} />
            <Fact label="First fall frost" value={info.firstFrost} />
            <Fact label="Start seeds indoors" value={info.startIndoors} />
            <Fact label="Transplant outdoors" value={info.transplant} />
            <Fact label="Harvest" value={info.harvest} />
            <Fact label="Varieties that finish" value={info.varietyAdvice} />
          </dl>
          <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft">
            {info.notes}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function ZoneChip({
  id,
  selected,
  onSelect,
  compact,
}: {
  id: ZoneId;
  selected: boolean;
  onSelect: (id: ZoneId) => void;
  compact: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={cn(
        "min-h-11 min-w-11 rounded-md px-2.5 font-display text-sm font-medium tabular-nums transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.96]",
        compact ? "min-h-10 min-w-10 text-xs" : "min-h-11",
        selected
          ? "bg-tomato text-paper"
          : "bg-paper-deep text-ink-soft hover:bg-line hover:text-ink",
      )}
    >
      {id}
    </button>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-wide text-muted uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-snug text-ink">{value}</dd>
    </div>
  );
}
