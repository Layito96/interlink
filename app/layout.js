import "@/app/_styles/globals.css";
export const metadata = {
  title: "Interlink",
  description: "Interlink.mr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
