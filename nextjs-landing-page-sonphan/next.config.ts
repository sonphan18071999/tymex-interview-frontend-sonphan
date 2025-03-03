import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // true = 308 redirect, false = 307 redirect
      },
    ];
  },
};

export default nextConfig;
