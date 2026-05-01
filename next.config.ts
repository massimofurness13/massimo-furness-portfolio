import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin Turbopack to this project's directory. Without it, Next.js can pick
// up an unrelated lockfile in a parent directory and resolve modules from
// the wrong root, breaking Tailwind resolution.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Static export: build emits ./out/ as plain HTML+CSS+JS. Hosted on a
// CDN it has no cold starts. Required for next/image: unoptimized=true
// (the optimization API needs a server we no longer have).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
