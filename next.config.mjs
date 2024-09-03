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
        protocol: "https",
        hostname: "priv-web-nomeo-prod.apnl.ws", // Added this line
      },
    ],
  },
};
export default nextConfig;
