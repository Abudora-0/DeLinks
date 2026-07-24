import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "DeLinks - Chop Your Links",
  description: "Shorten your URLs instantly. No signup, no hassle. Custom aliases, free forever.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${archivo.variable} ${grotesk.variable} antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
