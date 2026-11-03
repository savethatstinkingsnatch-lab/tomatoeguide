import { MONTHS, PHASE_LABEL, ZONES } from "@/lib/book/zones";
import { useBookStore } from "@/lib/book/store";
import { cn } from "@/lib/utils";

export function SeasonCalendar() {
  const zone = useBookStore((s) => s.zone);
  const info = ZONES[zone];

  return (
    <div className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            Season at a glance
          </p>
          <h3 className="mt-1 font-display text-lg font-medium text-ink">
            Zone {zone} tomato year
          </h3>
        </div>
        <p className="max-w-xs text-right text-sm text-ink-soft">
          {info.harvestAdvice}
        </p>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-1.5 sm:grid-cols-6 lg:grid-cols-12">
        {MONTHS.map((month, i) => {
          const phase = info.months[i];
          const style = PHASE_LABEL[phase];
          return (
            <div
              key={month}
              className={cn(
                "month-cell flex min-h-16 flex-col items-center justify-center rounded-md px-1 py-2 text-center",
                style.className,
              )}
            >
              <span className="font-display text-xs font-medium">{month}</span>
              <span className="mt-1 text-xs leading-tight opacity-90">
                {style.label}
              </span>
            </div>
          );
        })}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        {Object.entries(PHASE_LABEL).map(([key, value]) => (
          <li key={key} className="flex items-center gap-2">
            <span
              className={cn("size-2.5 rounded-sm", value.className)}
              aria-hidden
            />
            {value.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
