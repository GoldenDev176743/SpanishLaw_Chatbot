import type { Metadata } from "next";
import { Inter, Oswald, Playpen_Sans, Open_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const playpen_sans = Playpen_Sans({
  subsets: ["latin"],
  variable: "--font-playpen_sans",
  display: "swap",
  adjustFontFallback: false,
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA-LEX",
  description: "Created using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${open_sans.variable} ${playpen_sans.variable}`}
    >
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="fixed inset-0">{children}</main>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
