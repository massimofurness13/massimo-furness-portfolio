"use client";

import Image from "next/image";
import { useEffect, useState, type SVGProps } from "react";

type Lang = "en" | "es";

const WHATSAPP_NUMBER = "447361281737";

type Offer = { title: string; detail: string };

type Copy = {
  eyebrow: string;
  name: string;
  tagline: string;
  intro: string;
  ctaPrimary: string;
  ctaScarcity: string;
  offerHeading: string;
  offers: Offer[];
  testimonialsHeading: string;
  testimonialsPlaceholder: string;
  footer: string;
  waMessage: string;
};

const COPY: Record<Lang, Copy> = {
  en: {
    eyebrow: "PRIVATE ONLINE TUITION",
    name: "Mr Furness",
    tagline: "Maths & English tutor",
    intro:
      "Hello — I'm Mr Furness. I've taught primary children for six years, in London and in international schools. I now tutor online, one-to-one.",
    ctaPrimary: "Book a trial lesson now",
    ctaScarcity: "Limited spaces — first come, first served.",
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
        title: "Progress tracking",
        detail:
          "I keep data on every lesson and use it to find the gaps — then turn those gaps into targets for the next session.",
      },
      {
        title: "An email to you after every lesson",
        detail:
          "A short note from me: what we covered, how it went, and what comes next.",
      },
    ],
    testimonialsHeading: "What my pupils say",
    testimonialsPlaceholder: "Testimonial",
    footer: "© Mr Furness · Private tuition enquiries",
    waMessage:
      "Hi Mr Furness, I saw your tutor page and would like to book a trial lesson for my child.",
  },
  es: {
    eyebrow: "CLASES PARTICULARES ONLINE",
    name: "Mr Furness",
    tagline: "Profesor de matemáticas e inglés",
    intro:
      "Hola — soy Mr Furness. He enseñado primaria durante seis años, en colegios de Londres e internacionales. Ahora doy clases particulares online, uno a uno.",
    ctaPrimary: "Reserva una clase de prueba",
    ctaScarcity: "Plazas limitadas — por orden de llegada.",
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
        title: "Seguimiento de progreso",
        detail:
          "Guardo datos de cada clase y los uso para identificar las lagunas — y convertirlas en objetivos para la siguiente sesión.",
      },
      {
        title: "Un email para ti después de cada clase",
        detail:
          "Una nota breve: qué hemos hecho, cómo ha ido y qué viene después.",
      },
    ],
    testimonialsHeading: "Lo que dicen mis alumnos",
    testimonialsPlaceholder: "Testimonio",
    footer: "© Mr Furness · Consultas de clases particulares",
    waMessage:
      "Hola Mr Furness, vi tu página de tutorías y me gustaría reservar una clase de prueba para mi hijo o hija.",
  },
};

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------- icons (custom inline line drawings) ----------------- */

const iconBase: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconClipboard() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <rect x="9" y="7" width="22" height="27" rx="1.5" />
      <rect x="15" y="4" width="10" height="5" rx="1" />
      <line x1="13" y1="15" x2="27" y2="15" />
      <line x1="13" y1="20" x2="27" y2="20" />
      <line x1="13" y1="25" x2="23" y2="25" />
      <circle cx="13" cy="29" r="1.5" fill="var(--color-accent)" stroke="none" />
      <line x1="17" y1="29" x2="27" y2="29" />
    </svg>
  );
}

function IconSchool() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <path d="M20 6 L34 14 L34 34 L6 34 L6 14 Z" />
      <line x1="6" y1="14" x2="34" y2="14" />
      <rect x="16" y="22" width="8" height="12" />
      <line x1="20" y1="22" x2="20" y2="34" />
      <path d="M20 6 L20 11" stroke="var(--color-accent)" />
      <path d="M17 9 L23 9" stroke="var(--color-accent)" />
    </svg>
  );
}

function IconHomework() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <rect x="8" y="6" width="20" height="26" rx="1.5" />
      <line x1="12" y1="13" x2="24" y2="13" />
      <line x1="12" y1="18" x2="24" y2="18" />
      <line x1="12" y1="23" x2="20" y2="23" />
      <path
        d="M22 25 L30 17 L33 20 L25 28 L22 31 L22 25 Z"
        fill="var(--color-paper)"
      />
      <path d="M28 19 L31 22" stroke="var(--color-accent)" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <line x1="7" y1="33" x2="33" y2="33" />
      <line x1="7" y1="33" x2="7" y2="9" />
      <rect x="12" y="24" width="4" height="9" />
      <rect x="19" y="18" width="4" height="15" />
      <rect x="26" y="12" width="4" height="21" fill="var(--color-accent)" fillOpacity="0.18" />
      <circle cx="28" cy="9" r="2" fill="var(--color-accent)" stroke="none" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <rect x="6" y="11" width="28" height="20" rx="1.5" />
      <path d="M6 13 L20 24 L34 13" />
      <circle cx="33" cy="11" r="2.5" fill="var(--color-accent)" stroke="none" />
    </svg>
  );
}

/* ---------------- flag icons for the language toggle ---------------- */

function FlagUK({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 36"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <clipPath id="uk-flag-clip">
        <rect width="60" height="36" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="36" fill="#012169" />
        <path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" strokeWidth="7" />
        <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="3" />
        <path d="M30,0 V36 M0,18 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 36"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <rect width="60" height="9" fill="#AA151B" />
      <rect y="9" width="60" height="18" fill="#F1BF00" />
      <rect y="27" width="60" height="9" fill="#AA151B" />
    </svg>
  );
}

const OFFER_ICONS = [
  IconClipboard,
  IconSchool,
  IconHomework,
  IconChart,
  IconEnvelope,
];

/* ---------------- WhatsApp CTA ---------------- */

function WhatsAppCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="flex justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 py-4 sm:py-4 rounded-full shadow-[0_8px_24px_-10px_rgba(37,211,102,0.55)] hover:bg-[#1ebe5d] active:bg-[#1ebe5d] transition-colors duration-200 font-medium text-[16px] sm:text-[16px] tracking-[0.01em] min-h-[52px] w-full max-w-[22rem] sm:w-auto"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-white shrink-0"
        >
          <path d="M16 .5C7.453.5.5 7.453.5 16c0 2.825.74 5.59 2.146 8.028L0 32l8.197-2.625A15.43 15.43 0 0 0 16 31.5c8.547 0 15.5-6.953 15.5-15.5S24.547.5 16 .5Zm0 28.25a13.18 13.18 0 0 1-6.717-1.842l-.482-.286-4.866 1.558 1.581-4.74-.314-.5A13.21 13.21 0 0 1 2.75 16C2.75 8.693 8.693 2.75 16 2.75c7.307 0 13.25 5.943 13.25 13.25S23.307 28.75 16 28.75Zm7.272-9.92c-.398-.2-2.358-1.165-2.722-1.297-.365-.133-.63-.2-.895.2-.265.398-1.025 1.297-1.258 1.563-.232.265-.464.298-.862.099-.398-.199-1.682-.62-3.205-1.977-1.184-1.056-1.983-2.359-2.215-2.758-.232-.398-.025-.614.174-.812.18-.18.398-.464.597-.696.2-.232.265-.398.398-.663.132-.265.066-.498-.033-.696-.099-.199-.895-2.157-1.226-2.952-.323-.775-.65-.67-.895-.683-.232-.012-.498-.014-.762-.014-.265 0-.696.099-1.06.498-.365.398-1.392 1.36-1.392 3.318 0 1.957 1.425 3.847 1.624 4.112.199.265 2.804 4.282 6.794 6.005.95.41 1.69.655 2.267.84.953.302 1.82.26 2.504.158.764-.114 2.358-.964 2.69-1.895.332-.93.332-1.728.232-1.895-.099-.166-.365-.265-.762-.464Z" />
        </svg>
        {label}
      </a>
    </div>
  );
}

/* ---------------- Page ---------------- */

// Real pupil quotes — verbatim from the children's own writing.
// All spelling, punctuation, lowercase mr/mister/his, run-ons,
// missing apostrophes and word ordering preserved exactly. Do not
// "fix" these — the raw voice is the whole point.
const TESTIMONIALS: string[] = [
  "Mr Furness  because he is the one of the greatest teachers of the world. his is very cool and modern, his way of learning is super cool, he connects very well with me. He has taught me a lot about a lot of things, and his very funny.",
  "My favourite teacher is Mr. Furness beacuse hes the most chill, fun and nicest teacher ive ever had, he makes classes more fun and enjoyable, if you need something he will give it to you, he helps you when you need it and cares about you.",
  "I feel like this has been one of the best possibly the best year of my school life. The biggest reason our teacher, Mr furness is the best ever teacher he's so nice and the GOAT. Also I feel like I've just enjoyed this year a lot in overall we've played a lot of blooket and it's been fun",
  "A great thing was our teacher, Mr Furness. He was really fun, understood us, and even let us send him memes.",
  "Mr Furness because he is more like a friend than teacher besides he is funny, respectful, kind, caring and the GOAT.",
  "me whenever i needed it.mister furness he is very nice and funny he made 5 grade better and made it funner he put funny videos and let us sent him he showed us ways to learn faster and he is very kind he helped me make great projects he is super chill.",
  "Mr Furness because he is my first male teacher he is very fun and cool,",
];

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

  // Subtle hand-stacked rotations for testimonial cards.
  const cardRotations = ["-2.5deg", "1.8deg", "-1.4deg", "2.4deg", "-2deg"];

  return (
    <main
      // Switch the whole tutor page to a warmer humanist serif + lightly softened axis.
      // overflow-x-clip prevents tilted testimonial cards from causing horizontal scroll on phones.
      className="px-5 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-14 pb-[180px] sm:pb-[160px] overflow-x-clip"
      style={{
        // Override the default body font on this page only.
        ["--font-sans" as never]: "var(--font-fraunces)",
        fontVariationSettings: '"SOFT" 100, "opsz" 14',
        fontFamily: "var(--font-fraunces), Georgia, serif",
      }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Language toggle — flags + labels, larger tap targets */}
        <div className="flex items-center justify-end mb-6 lg:mb-8">
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center gap-1.5 p-1.5 border border-rule bg-paper-deep/70 backdrop-blur-sm rounded-full shadow-[0_2px_8px_-4px_rgba(20,17,13,0.18)]"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[12px] tracking-[0.2em] uppercase transition-colors ${
                lang === "en"
                  ? "bg-accent/20 text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <FlagUK className="w-7 h-[18px] rounded-[3px] shadow-[0_1px_2px_rgba(20,17,13,0.25)] shrink-0" />
              <span>EN</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              aria-label="Español"
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[12px] tracking-[0.2em] uppercase transition-colors ${
                lang === "es"
                  ? "bg-accent/20 text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <FlagES className="w-7 h-[18px] rounded-[3px] shadow-[0_1px_2px_rgba(20,17,13,0.25)] shrink-0" />
              <span>ES</span>
            </button>
          </div>
        </div>

        {/* Hero */}
        <header className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start sm:items-center mb-8 lg:mb-10">
          <div className="shrink-0 overflow-hidden rounded-full border border-rule w-28 h-28 sm:w-44 sm:h-44 bg-paper-deep">
            <Image
              src="/tutor/photo.jpg"
              alt={`${t.name} — portrait`}
              width={1290}
              height={844}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 25%" }}
              priority
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] uppercase text-ink-muted">
              {t.eyebrow}
            </span>
            <h1 className="text-[clamp(2.25rem,8vw,4rem)] leading-[1] text-ink">
              <span className="italic font-medium">{t.name.split(" ")[0]}</span>{" "}
              <span className="font-normal">{t.name.split(" ").slice(1).join(" ")}.</span>
            </h1>
            <p className="italic text-[1.35rem] sm:text-[1.75rem] text-ink/85 leading-tight">
              {t.tagline}
            </p>
          </div>
        </header>

        {/* Personal intro */}
        <p className="text-ink text-[17px] sm:text-[19px] leading-[1.55] max-w-[60ch] mb-10 lg:mb-12">
          {t.intro}
        </p>
      </div>

      {/* What I offer — moved above testimonials so parents see the concrete
          deliverables before the social proof. */}
      <div className="mx-auto max-w-3xl px-0">
        <section className="mb-10 lg:mb-14">
          <h2 className="text-[clamp(1.65rem,6vw,2.5rem)] mb-6 lg:mb-8 text-ink leading-tight">
            <span className="italic font-medium">{t.offerHeading.split(" ")[0]}</span>{" "}
            <span className="font-normal">{t.offerHeading.split(" ").slice(1).join(" ")}</span>
          </h2>
          <ol className="flex flex-col">
            {t.offers.map((item, i) => {
              const Icon = OFFER_ICONS[i] ?? IconClipboard;
              return (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 py-5 sm:py-6 border-t border-rule last:border-b items-start"
                >
                  <span className="text-ink shrink-0 w-9 h-9 sm:w-11 sm:h-11 pt-0.5">
                    <Icon />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[1.2rem] sm:text-[1.5rem] leading-tight text-ink font-medium">
                      {item.title}
                    </span>
                    <span className="text-ink-muted text-[15px] sm:text-[16px] leading-[1.5] max-w-[58ch]">
                      {item.detail}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>

      {/* Testimonial sticky-stack — uses the page's existing horizontal padding */}
      <section className="mb-6 lg:mb-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[clamp(1.65rem,6vw,2.5rem)] mb-6 lg:mb-8 text-ink leading-tight">
            <span className="italic font-medium">{t.testimonialsHeading.split(" ")[0]}</span>{" "}
            <span className="font-normal">{t.testimonialsHeading.split(" ").slice(1).join(" ")}</span>
          </h2>
        </div>

        {/* The stack — uniform paper cards with the kids' own words. */}
        <div className="relative mx-auto max-w-xl">
          {TESTIMONIALS.map((quote, i) => (
            <div
              key={i}
              className="sticky mb-[16vh] last:mb-0 w-full flex justify-center"
              style={{
                top: `calc(12vh + ${i * 5}px)`,
                zIndex: 10 + i,
                transform: `rotate(${cardRotations[i % cardRotations.length]})`,
                transformOrigin: "center top",
              }}
            >
              <figure
                className="bg-[#fffdf8] border border-rule shadow-[0_24px_42px_-22px_rgba(20,17,13,0.42),0_8px_18px_-12px_rgba(20,17,13,0.22)] w-full max-w-[26rem] px-5 py-6 sm:px-7 sm:py-8 relative"
                aria-label={`${t.testimonialsPlaceholder} ${i + 1}`}
              >
                <span
                  aria-hidden
                  className="absolute text-accent italic leading-none select-none"
                  style={{
                    top: "0.25rem",
                    left: "0.75rem",
                    fontSize: "3.75rem",
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="text-ink text-[16px] sm:text-[16.5px] leading-[1.5]"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {quote}
                </blockquote>
                <figcaption className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
                  Pupil · Grade 5
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-0">
        {/* Footer */}
        <footer className="pt-6 border-t border-rule font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-faint text-center">
          {t.footer}
        </footer>
      </div>

      {/* Floating bottom CTA — always visible while scrolling. */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-rule px-4 py-3 sm:py-4"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-paper) 92%, transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          fontFamily: "var(--font-fraunces), Georgia, serif",
        }}
      >
        <div className="mx-auto max-w-md flex flex-col items-center gap-2 sm:gap-2.5">
          <p className="italic text-ink/85 text-center text-[13.5px] sm:text-[14.5px] leading-tight">
            {t.ctaScarcity}
          </p>
          <WhatsAppCTA href={waLink(t.waMessage)} label={t.ctaPrimary} />
        </div>
      </div>
    </main>
  );
}
