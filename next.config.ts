import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devoteaesthetic.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
