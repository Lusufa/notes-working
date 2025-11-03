import sharp from "sharp";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.externals.push("sharp");
    sharp.cache(false);

    config.module.rules.push({
      test: /\.ttf$/,
      use: ["file-loader"],
    });

    config.cache = {
      type: "filesystem",
      allowCollectingMemory: true,
    };

    return config;
  },
};

export default nextConfig;
