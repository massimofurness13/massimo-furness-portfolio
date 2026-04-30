"use client";

import { useMemo, useState } from "react";
import {
  FILTERS,
  PROJECTS,
  matchesFilter,
  type Tag,
} from "@/data/projects";
import { FilterChips } from "./FilterChips";
import { ProjectCard } from "./ProjectCard";

export function Gallery() {
  const [filter, setFilter] = useState<"All" | Tag>("All");

  const counts = useMemo(() => {
    const out: Record<string, number> = {};
    for (const f of FILTERS) {
      out[f] = PROJECTS.filter((p) => matchesFilter(p, f)).length;
    }
    return out;
  }, []);

  const filtered = useMemo(
    () => PROJECTS.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

  return (
    <section
      id="work"
      className="pt-16 pb-20 lg:pt-24 lg:pb-32 fade-up fade-up-delay-4"
    >
      <header className="flex flex-col gap-8 lg:gap-10 mb-10 lg:mb-14">
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-5">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.4rem)] leading-tight text-ink">
            <span className="italic">Selected</span> Work
          </h2>
          <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint pb-1">
            {String(filtered.length).padStart(2, "0")} of{" "}
            {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-ink-faint shrink-0">
            Filter —
          </span>
          <FilterChips active={filter} onChange={setFilter} counts={counts} />
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className="py-24 text-center font-mono text-[11px] tracking-[0.22em] uppercase text-ink-faint">
          No projects under this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
