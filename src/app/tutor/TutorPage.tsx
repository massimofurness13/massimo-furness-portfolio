"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Lang = "en" | "es";

const WHATSAPP_NUMBER = "447361281737";

const COPY = {
  en: {
    eyebrow: "PRIVATE TUITION · JERSEY & ONLINE",
    name: "Massimo Furness",
    tagline: "Maths & English tutor",
    intro: [
      "I'm Massimo — a British primary school teacher with six years of classroom experience across London and international schools. I tutor children one-to-one in maths and English, both in person and online.",
      "Maths is my specialism. I work fluently within the White Rose Maths scheme — the same scheme used by many UK and international primary schools — so the work fits seamlessly with what your child is doing in class.",
      "I'm also a native English speaker. Whether your child needs to catch up, get ahead, or build confidence speaking and writing proper English, I can help.",
    ],
    teach: {
      heading: "What I teach",
      items: [
        { title: "Maths", detail: "Year 1–6 · White Rose scheme · arithmetic, reasoning, problem-solving" },
        { title: "English", detail: "Reading, writing, grammar, comprehension, spoken confidence" },
        { title: "Native English speaker", detail: "UK-trained · proper accent, idiom and usage" },
        { title: "In-person or online", detail: "One-to-one sessions tailored to your child" },
      ],
    },
    videoHeading: "What my pupils say",
    videoComing: "Video coming soon",
    ctaPrimary: "Message me on WhatsApp",
    ctaSub: "I'll reply personally within a day. Tell me your child's year group and what you'd like to work on.",
    waMessage: "Hi Massimo, I saw your tutor page and would like to ask about tuition for my child.",
    footer: "© Massimo Furness · Private tuition enquiries",
    langSwitch: "EN",
    otherLangFull: "Español",
  },
  es: {
    eyebrow: "CLASES PARTICULARES · JERSEY Y ONLINE",
    name: "Massimo Furness",
    tagline: "Profesor de matemáticas e inglés",
    intro: [
      "Soy Massimo — profesor británico de primaria con seis años de experiencia en colegios de Londres y colegios internacionales. Doy clases particulares de matemáticas e inglés, en persona y en línea, adaptadas al nivel de cada niño.",
      "Las matemáticas son mi especialidad. Trabajo con fluidez el método White Rose Maths — el mismo que utilizan muchos colegios británicos e internacionales — para que las clases encajen perfectamente con lo que su hijo o hija está aprendiendo en el colegio.",
      "Como hablante nativo de inglés, también ayudo a los niños a hablar y escribir un inglés correcto y natural — desde ponerse al día hasta tomar la delantera y ganar confianza.",
    ],
    teach: {
      heading: "Qué enseño",
      items: [
        { title: "Matemáticas", detail: "Year 1–6 · método White Rose · cálculo, razonamiento, resolución de problemas" },
        { title: "Inglés", detail: "Lectura, escritura, gramática, comprensión y expresión oral" },
        { title: "Hablante nativo", detail: "Formación británica · acento, expresiones y uso reales" },
        { title: "Presencial u online", detail: "Clases individuales adaptadas a tu hijo o hija" },
      ],
    },
    videoHeading: "Lo que dicen mis alumnos",
    videoComing: "Vídeo próximamente",
    ctaPrimary: "Escríbeme por WhatsApp",
    ctaSub: "Te respondo personalmente en menos de 24 horas. Cuéntame en qué curso está tu hijo o hija y qué te gustaría trabajar.",
    waMessage: "Hola Massimo, vi tu página de tutorías y me gustaría preguntar sobre clases para mi hijo o hija.",
    footer: "© Massimo Furness · Consultas de clases particulares",
    langSwitch: "ES",
    otherLangFull: "English",
  },
} as const;

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

  // Keep <html lang> in sync so screen readers + browser tools pronounce correctly.
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
              style={{ transform: lang === "en" ? "translateX(0%)" : "translateX(100%)" }}
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
        <header className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center mb-12 lg:mb-16">
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
            <h1 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.02] text-ink">
              <span className="italic">{t.name.split(" ")[0]}</span>{" "}
              <span>{t.name.split(" ").slice(1).join(" ")}.</span>
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-ink/85">
              {t.tagline}
            </p>
          </div>
        </header>

        {/* Primary CTA — high on the page so parents who skim still see it */}
        <a
          href={waLink(t.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-accent text-paper px-6 py-4 font-mono text-[12px] tracking-[0.2em] uppercase hover:bg-accent-soft transition-colors duration-200 mb-4"
        >
          <span aria-hidden className="text-base leading-none">↗</span>
          {t.ctaPrimary}
        </a>
        <p className="text-ink-muted text-[14px] leading-relaxed max-w-[58ch] mb-16 lg:mb-20">
          {t.ctaSub}
        </p>

        {/* Intro */}
        <section className="flex flex-col gap-5 mb-16 lg:mb-20">
          {t.intro.map((para, i) => (
            <p
              key={i}
              className="text-ink text-[17px] sm:text-[18px] leading-[1.6] max-w-[64ch]"
            >
              {para}
            </p>
          ))}
        </section>

        {/* What I teach */}
        <section className="mb-16 lg:mb-20">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] mb-6 lg:mb-8 text-ink">
            <span className="italic">{t.teach.heading.split(" ")[0]}</span>{" "}
            {t.teach.heading.split(" ").slice(1).join(" ")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-6">
            {t.teach.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-1.5">
                <span className="font-serif text-[1.3rem] leading-tight text-ink">
                  {item.title}
                </span>
                <span className="text-ink-muted text-[14.5px] leading-[1.55]">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video placeholder */}
        <section className="mb-16 lg:mb-20">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] mb-6 lg:mb-8 text-ink">
            <span className="italic">{t.videoHeading.split(" ")[0]}</span>{" "}
            {t.videoHeading.split(" ").slice(1).join(" ")}
          </h2>
          <div className="relative aspect-video border border-rule bg-paper-deep flex flex-col items-center justify-center text-center gap-2">
            <span aria-hidden className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint">
              ▶
            </span>
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-muted">
              {t.videoComing}
            </span>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-rule pt-12 flex flex-col items-start gap-5">
          <a
            href={waLink(t.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-paper px-6 py-4 font-mono text-[12px] tracking-[0.2em] uppercase hover:bg-accent-soft transition-colors duration-200"
          >
            <span aria-hidden className="text-base leading-none">↗</span>
            {t.ctaPrimary}
          </a>
          <p className="text-ink-muted text-[14px] leading-relaxed max-w-[58ch]">
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
