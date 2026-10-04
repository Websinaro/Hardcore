import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the root selector (localhost:3000) to preview this UI in an iframe.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "Content-Security-Policy", value: "frame-ancestors *" }] }];
  },
};

export default nextConfig;
