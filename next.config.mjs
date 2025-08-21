/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // static export for GitHub Pages
  trailingSlash: true,     // ensures proper folder structure
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["@untitledui/icons"],
  },
};

export default nextConfig;
