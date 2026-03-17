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
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [25, 50, 65, 75, 80, 85, 90, 95, 100],
  },
};

export default nextConfig;
