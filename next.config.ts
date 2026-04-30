import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin Turbopack to this project's directory. Without it, Next.js can pick
// up an unrelated lockfile in a parent directory and resolve modules from
// the wrong root, breaking Tailwind resolution.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
