import { varietiesForZone } from "@/lib/book/varieties";
import { useBookStore } from "@/lib/book/store";
import { ZONES } from "@/lib/book/zones";

export function VarietiesPanel() {
  const zone = useBookStore((s) => s.zone);
  const list = varietiesForZone(zone);
  const advice = ZONES[zone].varietyAdvice;

  return (
    <div>
      <p className="mb-4 rounded-lg bg-sage/10 px-4 py-3 text-sm leading-relaxed text-leaf">
        For zone {zone}: {advice}
      </p>
      <div className="overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line text-xs tracking-wide text-muted uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Variety</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">
                Type
              </th>
              <th className="px-4 py-3 font-medium">Days</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">
                Habit
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((v) => (
              <tr key={v.id} className="border-b border-line last:border-0">
                <td className="px-4 py-3">
                  <p className="font-display font-medium text-ink">{v.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    {v.note}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:hidden">
                    {v.type} · {v.habit}
                  </p>
                </td>
                <td className="hidden px-4 py-3 text-ink-soft sm:table-cell">
                  {v.type}
                </td>
                <td className="px-4 py-3 tabular-nums text-ink">{v.days}</td>
                <td className="hidden px-4 py-3 text-ink-soft md:table-cell">
                  {v.habit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
