import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "forkify-api.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;
