import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // ✔ allow images from private IPs (like localhost)
    dangerouslyAllowSVG: true,
    unoptimized: true, // or remove this if you want optimization
  },
};

export default nextConfig;
