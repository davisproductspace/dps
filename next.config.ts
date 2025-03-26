import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  webpack(config: Configuration) {
    // Find the existing rule handling SVGs
    const fileLoaderRule = config.module?.rules?.find((rule) =>
      typeof rule === "object" &&
      rule !== null &&
      "test" in rule &&
      rule.test instanceof RegExp &&
      rule.test.test(".svg")
    );

    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      (fileLoaderRule as any).exclude = /\.svg$/;
    }

    // Add SVGR loader
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
