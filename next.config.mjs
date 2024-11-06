/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  // optimizeCss: false,
  // enableBabelRuntime: true,
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
      {
        protocol: "https",
        hostname: "source.unsplash.com", // Added this line
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Added this line
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nomeo.fr", // Added this line
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
