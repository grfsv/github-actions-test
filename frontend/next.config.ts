import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Settings for single page app
  output: "export", // Depends on how we deploy the app
  // Proxy API calls in case of SPA.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:8080/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
