import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/inicio", destination: "/" },
      { source: "/sobre-mi", destination: "/" },
      { source: "/servicios", destination: "/" },
      { source: "/ubicacion", destination: "/" },
    ];
  },
};

export default nextConfig;
