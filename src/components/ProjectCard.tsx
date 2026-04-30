import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.url !== "#";
  const Tag = isLive ? "a" : "div";

  return (
    <article className="group/card">
      <Tag
        {...(isLive
          ? {
              href: project.url,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        className={`block ${isLive ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="relative overflow-hidden bg-paper-deep aspect-[16/10] border border-rule">
          {/* status pill */}
          <span
            className={`absolute z-10 top-3 left-3 font-mono text-[9.5px] tracking-[0.22em] uppercase px-2 py-1 backdrop-blur-sm ${
              project.status === "In progress"
                ? "bg-accent/15 text-accent"
                : project.status === "Public"
                  ? "bg-paper/85 text-ink"
                  : "bg-paper/85 text-ink-muted"
            }`}
          >
            {project.status}
          </span>

          {/* index */}
          <span className="absolute z-10 top-3 right-3 font-mono text-[9.5px] tracking-[0.22em] uppercase text-ink-muted bg-paper/85 px-2 py-1 backdrop-blur-sm">
            № {project.index}
          </span>

          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover/card:scale-[1.025]"
          />

          {/* hover paper overlay (very subtle) */}
          <span
            aria-hidden
            className="absolute inset-0 bg-ink/0 group-hover/card:bg-ink/[0.03] transition-colors duration-500"
          />
        </div>

        <div className="pt-6 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-[clamp(1.65rem,2.6vw,2.05rem)] leading-[1.05] text-ink">
              <span className="relative inline-block">
                {project.title}
                {isLive && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-accent origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out"
                  />
                )}
              </span>
              {isLive && (
                <span
                  aria-hidden
                  className="ml-2 inline-block translate-y-[-0.2em] text-[0.5em] text-ink-faint group-hover/card:text-accent transition-colors duration-300"
                >
                  ↗
                </span>
              )}
            </h3>
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint shrink-0 pt-1">
              {project.year}
            </span>
          </div>

          <p className="text-ink-muted text-[15px] leading-[1.55] max-w-[58ch]">
            {project.blurb}
          </p>

          <ul className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-ink-muted border border-rule px-2 py-[3px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Tag>
    </article>
  );
}
