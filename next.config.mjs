/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["concrete-ant-selected.ngrok-free.app"],
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
