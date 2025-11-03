import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? "/VotoData" : undefined,
  assetPrefix: isGitHubPages ? "/VotoData/" : undefined,
};

export default nextConfig;
