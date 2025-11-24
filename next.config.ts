import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["s3.berlstore.com"], // tambahkan host eksternal
  },
};

export default nextConfig;
