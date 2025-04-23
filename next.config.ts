import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c8okvg9e7ijyn5b8.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
