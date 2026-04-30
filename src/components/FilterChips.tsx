"use client";

import { FILTERS, type Tag } from "@/data/projects";

type Props = {
  active: "All" | Tag;
  onChange: (filter: "All" | Tag) => void;
  counts: Record<string, number>;
};

export function FilterChips({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2 -mx-2">
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        const count = counts[filter] ?? 0;
        const disabled = count === 0 && filter !== "All";
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            disabled={disabled}
            aria-pressed={isActive}
            className={`group relative px-2.5 py-2 font-mono text-[10.5px] tracking-[0.2em] uppercase transition-colors duration-200 disabled:cursor-not-allowed ${
              isActive
                ? "text-ink"
                : disabled
                  ? "text-ink-faint/50"
                  : "text-ink-faint hover:text-ink"
            }`}
          >
            <span className="inline-flex items-baseline gap-1.5">
              {filter}
              <span
                className={`text-[9px] tabular-nums tracking-normal transition-colors ${
                  isActive ? "text-accent" : "text-ink-faint/70"
                }`}
              >
                {String(count).padStart(2, "0")}
              </span>
            </span>
            <span
              aria-hidden
              className={`absolute left-2.5 right-2.5 -bottom-0.5 h-px transition-all duration-300 ease-out ${
                isActive
                  ? "bg-accent scale-x-100"
                  : "bg-rule scale-x-0 group-hover:scale-x-100"
              } origin-left`}
            />
          </button>
        );
      })}
    </div>
  );
}
