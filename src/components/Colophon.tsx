export function Colophon() {
  return (
    <footer className="border-t border-rule py-10 mt-4">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint">
        <div className="flex flex-col gap-1.5">
          <span className="text-ink-muted">© 2026 Massimo Furness</span>
          <span className="text-ink-faint/80 normal-case tracking-[0.04em] text-[11px] font-sans">
            Set in <span className="font-serif italic text-ink-muted">Instrument Serif</span>{" "}
            &amp; Geist. Made in Jersey.
          </span>
        </div>
        <nav className="flex items-center gap-8">
          <a
            href="https://github.com/massimofurness13"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-ink-muted hover:text-accent transition-colors duration-200"
          >
            GitHub{" "}
            <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
