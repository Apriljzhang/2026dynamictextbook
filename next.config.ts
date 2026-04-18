import type { NextConfig } from "next";

/** Set for GitHub Pages project site, e.g. /2026dynamictextbook — must match repo name. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
