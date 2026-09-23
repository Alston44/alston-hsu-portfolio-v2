import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    // 95 is used by the project-card screenshots (ProjectMedia); required to be listed from Next 16.
    qualities: [75, 95],
  },
};

export default nextConfig;
