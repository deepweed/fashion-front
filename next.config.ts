import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        port: "",
        pathname: "/proholod-storage/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:4200/uploads/:path*",
      },
      {
        source: "/images/:path*",
        destination: "https://storage.yandexcloud.net/proholod-storage/:path*",
      },
    ];
  },
};

export default nextConfig;
