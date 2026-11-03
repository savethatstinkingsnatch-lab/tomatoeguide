import { useState } from "react";
import { COMPANIONS } from "@/lib/book/companions";
import { cn } from "@/lib/utils";

export function CompanionsPanel() {
  const [tab, setTab] = useState<"help" | "avoid">("help");
  const list = COMPANIONS.filter((c) => c.kind === tab);

  return (
    <div>
      <div className="flex gap-1 rounded-lg bg-paper-deep p-1">
        <TabButton active={tab === "help"} onClick={() => setTab("help")}>
          Plant with tomatoes
        </TabButton>
        <TabButton active={tab === "avoid"} onClick={() => setTab("avoid")}>
          Keep apart
        </TabButton>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {list.map((plant) => (
          <article
            key={plant.id}
            className="flex flex-col overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]"
          >
            {plant.image ? (
              <img
                src={plant.image}
                alt=""
                className="art h-36 w-full object-cover"
              />
            ) : (
              <div className="flex h-20 items-end bg-paper-deep px-5 py-4">
                <span className="font-display text-3xl text-sage/40">
                  {plant.name[0]}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="text-xs font-medium tracking-wide text-tomato uppercase">
                {plant.role}
              </p>
              <h3 className="font-display text-xl font-medium text-ink">
                {plant.name}
              </h3>
              <p className="text-sm italic text-muted">{plant.latin}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{plant.why}</p>
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-medium">In the bed. </span>
                {plant.how}
              </p>
              <p className="mt-auto border-t border-line pt-3 text-xs leading-relaxed text-muted">
                {plant.evidence}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 flex-1 rounded-md px-3 font-display text-sm font-medium transition-colors duration-150",
        active ? "bg-raised text-ink shadow-[var(--shadow-border)]" : "text-ink-soft",
      )}
    >
      {children}
    </button>
  );
}
