function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
        {label}
      </span>
      <span className="font-mono text-[12px] tracking-[0.04em] text-ink">
        {value}
      </span>
    </div>
  );
}

export function Masthead() {
  return (
    <header className="border-b border-rule pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* top imprint band */}
      <div className="fade-up fade-up-delay-1 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] uppercase text-ink-muted mb-12 lg:mb-16">
        <span>Massimo Furness</span>
        <span className="h-px flex-grow max-w-[80px] bg-rule" />
        <span>Portfolio</span>
        <span className="h-px flex-grow max-w-[80px] bg-rule" />
        <span>Edition 01</span>
        <span className="h-px flex-grow max-w-[80px] bg-rule" />
        <span className="hidden sm:inline">MMXXVI</span>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
        <h1 className="col-span-12 lg:col-span-9 font-serif leading-[0.86] tracking-[-0.02em] text-ink fade-up fade-up-delay-2 text-[clamp(4.5rem,15vw,12rem)]">
          <span className="italic block">Massimo</span>
          <span className="block">
            Furness<span className="text-accent">.</span>
          </span>
        </h1>

        <aside className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col flex-wrap gap-x-10 gap-y-6 pb-3 fade-up fade-up-delay-3">
          <Meta label="Year" value="2026" />
          <Meta label="Based" value="Jersey, C.I." />
          <Meta label="Practice" value="Education · Finance · SaaS" />
          <Meta label="Status" value="Selectively available" />
        </aside>
      </div>

      <div className="mt-12 lg:mt-20 grid grid-cols-12 gap-6 lg:gap-10 items-baseline">
        <p className="col-span-12 lg:col-span-9 font-serif italic text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.15] text-ink/95 max-w-[24ch] fade-up fade-up-delay-3">
          Builder of tools for learning, markets,{" "}
          <span className="not-italic">&amp;</span> play.
        </p>
        <p className="col-span-12 lg:col-span-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-ink-muted max-w-[28ch] fade-up fade-up-delay-4">
          A working index of selected projects across education, financial
          systems, geospatial analysis and product. Updated as work ships.
        </p>
      </div>
    </header>
  );
}
