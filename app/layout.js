import "@/app/_styles/globals.css";
import "@/public/assets/css/animate.css";
import "@/public/assets/css/tailwind.css";
import Head from "next/head";
import Link from "next/link";
import "lineicons/web-font/lineicons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Inter } from "next/font/google"; // Example import for custom fonts
import DebugBanner from "./_components/DebugBanner";

// Example of using a Google Font
const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / Interlink",
    default: "Acceuil / Interlink",
  },
  description: "Interlink.mr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import des styles CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/2.0/lineicons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* <div className="w-full h-5 bg-orange-200 flex items-center justify-center z-50 absolute p-2">
          <h1 className="text-primary">
            Le site est actuellement en développement.
          </h1>
        </div> */}

        <Navbar />
        <main>{children}</main>
        <Footer />
        <DebugBanner />
      </body>
    </html>
  );
}
