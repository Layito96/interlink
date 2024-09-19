/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms-interlink.onrender.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "192.168.1.55",
      },
      {
        protocol: "https",
        hostname: "priv-web-nomeo-prod.apnl.ws", // Added this line
      },
    ],
  },
};
export default nextConfig;
