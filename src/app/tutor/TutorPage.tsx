"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Lang = "en" | "es";

const WHATSAPP_NUMBER = "447361281737";

type Offer = { title: string; detail: string };

type Copy = {
  eyebrow: string;
  name: string;
  tagline: string;
  intro: string;
  credentials: string[];
  ctaPrimary: string;
  ctaSub: string;
  offerHeading: string;
  offers: Offer[];
  videoHeading: string;
  videoComing: string;
  footer: string;
  waMessage: string;
};

const COPY: Record<Lang, Copy> = {
  en: {
    eyebrow: "PRIVATE ONLINE TUITION",
    name: "Massimo Furness",
    tagline: "Maths & English tutor",
    intro:
      "Hi — I'm Massimo. I've taught primary children for six years, in London and in international schools. I now tutor online, one-to-one.",
    credentials: [
      "English instruction by a native speaker",
      "White Rose Maths expert",
      "6 years primary teaching · London & international",
      "Online · Year 1–6",
    ],
    ctaPrimary: "Message me on WhatsApp",
    ctaSub: "Tell me about your child.",
    offerHeading: "What I offer",
    offers: [
      {
        title: "Individualised lesson plans",
        detail:
          "Engineered specifically around your child's gaps and where they're trying to get to.",
      },
      {
        title: "Matched to their school",
        detail:
          "Same methods, same curriculum, same content. When a test is coming, we've already revised what matters.",
      },
      {
        title: "Weekly homework",
        detail:
          "Set after every lesson to keep the momentum going between sessions.",
      },
      {
        title: "Engagement tracking",
        detail:
          "I watch what lands, what doesn't, and what we need to come back to next week.",
      },
      {
        title: "An email to you after every lesson",
        detail:
          "A short note from me: what we covered, how it went, and what comes next.",
      },
    ],
    videoHeading: "What my pupils say",
    videoComing: "Video coming soon",
    footer: "© Massimo Furness · Private tuition enquiries",
    waMessage:
      "Hi Massimo, I saw your tutor page and would like to ask about tuition for my child.",
  },
  es: {
    eyebrow: "CLASES PARTICULARES ONLINE",
    name: "Massimo Furness",
    tagline: "Profesor de matemáticas e inglés",
    intro:
      "Hola — soy Massimo. He enseñado primaria durante seis años, en colegios de Londres e internacionales. Ahora doy clases particulares online, uno a uno.",
    credentials: [
      "Inglés enseñado por un nativo",
      "Experto en White Rose Maths",
      "6 años enseñando primaria · Londres y colegios internacionales",
      "Online · Year 1–6",
    ],
    ctaPrimary: "Escríbeme por WhatsApp",
    ctaSub: "Cuéntame sobre tu hijo o hija.",
    offerHeading: "Lo que ofrezco",
    offers: [
      {
        title: "Planes de clase individualizados",
        detail:
          "Diseñados específicamente sobre las lagunas de tu hijo o hija y a dónde quiere llegar.",
      },
      {
        title: "En sintonía con su colegio",
        detail:
          "Mismos métodos, mismo currículo, mismos contenidos. Cuando se acerca un examen, ya hemos repasado lo que importa.",
      },
      {
        title: "Deberes semanales",
        detail:
          "Después de cada clase, para mantener el ritmo entre sesiones.",
      },
      {
        title: "Seguimiento de su atención",
        detail:
          "Observo qué entienden, qué se les escapa y qué hay que repasar la semana siguiente.",
      },
      {
        title: "Un email para ti después de cada clase",
        detail:
          "Una nota breve: qué hemos hecho, cómo ha ido y qué viene después.",
      },
    ],
    videoHeading: "Lo que dicen mis alumnos",
    videoComing: "Vídeo próximamente",
    footer: "© Massimo Furness · Consultas de clases particulares",
    waMessage:
      "Hola Massimo, vi tu página de tutorías y me gustaría preguntar sobre clases para mi hijo o hija.",
  },
};

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function TutorPage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLang = (navigator.language || "en").toLowerCase();
      if (browserLang.startsWith("es")) setLang("es");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    return () => {
      document.documentElement.setAttribute("lang", "en");
    };
  }, [lang]);

  const t = COPY[lang];

  return (
    <main className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Language toggle */}
        <div className="flex items-center justify-end mb-10 lg:mb-12">
          <div
            role="group"
            aria-label="Language"
            className="relative inline-flex items-center border border-rule bg-paper-deep/60 backdrop-blur-sm font-mono text-[10.5px] tracking-[0.22em] uppercase"
          >
            <span
              aria-hidden
              className="absolute top-0 bottom-0 w-[50%] bg-accent/20 border border-accent/40 transition-transform duration-300 ease-out"
              style={{
                transform: lang === "en" ? "translateX(0%)" : "translateX(100%)",
              }}
            />
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`relative z-10 px-4 py-2 transition-colors ${
                lang === "en" ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              className={`relative z-10 px-4 py-2 transition-colors ${
                lang === "es" ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Hero */}
        <header className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center mb-10 lg:mb-12">
          <div className="shrink-0 overflow-hidden rounded-full border border-rule w-32 h-32 sm:w-44 sm:h-44 bg-paper-deep">
            <Image
              src="/tutor/photo.svg"
              alt={`${t.name} portrait`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-muted">
              {t.eyebrow}
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.02] text-ink">
              <span className="italic">{t.name.split(" ")[0]}</span>{" "}
              <span>{t.name.split(" ").slice(1).join(" ")}.</span>
            </h1>
            <p className="font-serif italic text-2xl sm:text-[1.75rem] text-ink/85 leading-tight">
              {t.tagline}
            </p>
          </div>
        </header>

        {/* Personal intro — one short paragraph, warmer */}
        <p className="text-ink text-[17px] sm:text-[18px] leading-[1.55] max-w-[60ch] mb-10 lg:mb-12">
          {t.intro}
        </p>

        {/* Credential flexes — punchy bullets */}
        <ul className="flex flex-col gap-2.5 mb-10 lg:mb-14">
          {t.credentials.map((c) => (
            <li key={c} className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0 translate-y-[-3px]"
              />
              <span className="text-ink text-[16px] leading-[1.5]">{c}</span>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <a
          href={waLink(t.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-accent text-paper px-6 py-4 font-mono text-[12px] tracking-[0.2em] uppercase hover:bg-accent-soft transition-colors duration-200 mb-3"
        >
          <span aria-hidden className="text-base leading-none">↗</span>
          {t.ctaPrimary}
        </a>
        <p className="font-serif italic text-ink/80 text-[17px] mb-16 lg:mb-20">
          {t.ctaSub}
        </p>

        {/* What I offer — the meaty bullet list */}
        <section className="mb-16 lg:mb-20">
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.4rem)] mb-8 lg:mb-10 text-ink">
            <span className="italic">{t.offerHeading.split(" ")[0]}</span>{" "}
            {t.offerHeading.split(" ").slice(1).join(" ")}
          </h2>
          <ol className="flex flex-col">
            {t.offers.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7 py-6 border-t border-rule last:border-b"
              >
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-serif text-[1.45rem] leading-tight text-ink">
                    {item.title}
                  </span>
                  <span className="text-ink-muted text-[15.5px] leading-[1.55] max-w-[58ch]">
                    {item.detail}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Video placeholder */}
        <section className="mb-16 lg:mb-20">
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.4rem)] mb-6 lg:mb-8 text-ink">
            <span className="italic">{t.videoHeading.split(" ")[0]}</span>{" "}
            {t.videoHeading.split(" ").slice(1).join(" ")}
          </h2>
          <div className="relative aspect-video border border-rule bg-paper-deep flex flex-col items-center justify-center text-center gap-2">
            <span
              aria-hidden
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint"
            >
              ▶
            </span>
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-muted">
              {t.videoComing}
            </span>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-rule pt-12 flex flex-col items-start gap-3">
          <a
            href={waLink(t.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-paper px-6 py-4 font-mono text-[12px] tracking-[0.2em] uppercase hover:bg-accent-soft transition-colors duration-200"
          >
            <span aria-hidden className="text-base leading-none">↗</span>
            {t.ctaPrimary}
          </a>
          <p className="font-serif italic text-ink/80 text-[17px]">
            {t.ctaSub}
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-rule font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint">
          {t.footer}
        </footer>
      </div>
    </main>
  );
}
