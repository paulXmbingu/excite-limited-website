/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export for GitHub Pages
  images: { unoptimized: true }, // disable image optimization
  experimental: {
    optimizePackageImports: ["@untitledui/icons"],
  },
};

export default nextConfig;
