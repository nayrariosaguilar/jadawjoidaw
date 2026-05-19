import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera las páginas estáticas con un único worker y de forma secuencial.
  // Evita los picos de memoria al prerenderizar las 60+ fichas de producto
  // en entornos con poca RAM (el contenido es estático, no afecta a Vercel).
  experimental: {
    staticGenerationMinPagesPerWorker: 1000,
    staticGenerationMaxConcurrency: 1,
  },
  images: {
    // Fotos de producto servidas desde el CDN de Unsplash.
    // Vercel las optimiza en tiempo de ejecución (no se guardan en el repo).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
