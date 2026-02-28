import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  // Only use basePath in production (for GitHub Pages)
  ...(isDev ? {} : { basePath: "/portfolio" }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
