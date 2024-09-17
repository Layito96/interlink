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
      {/* <head>
        
      </head> */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
