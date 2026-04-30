import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Massimo Furness — Selected Work",
  description:
    "Builder of tools for learning, markets, and play. Selected work by Massimo Furness.",
  metadataBase: new URL("https://massimofurness.com"),
  openGraph: {
    title: "Massimo Furness — Selected Work",
    description: "Builder of tools for learning, markets, and play.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
