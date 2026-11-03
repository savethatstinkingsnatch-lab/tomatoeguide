import { SEED_STEPS, STORAGE_RULES } from "@/lib/book/seed";

export function SeedSteps() {
  return (
    <ol className="flex flex-col gap-4">
      {SEED_STEPS.map((step, i) => (
        <li
          key={step.title}
          className="grid grid-cols-[auto_1fr] gap-4 rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]"
        >
          <span className="font-display text-2xl font-medium tabular-nums text-tomato">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg font-medium text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function StorageGuide() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {STORAGE_RULES.map((rule) => (
        <article
          key={rule.title}
          className="rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]"
        >
          <h3 className="font-display text-lg font-medium text-tomato">
            {rule.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {rule.detail}
          </p>
        </article>
      ))}
    </div>
  );
}
