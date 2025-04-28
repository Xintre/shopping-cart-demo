import "./globals.css";

import { Inconsolata, Playfair_Display } from "next/font/google";

import type { Metadata } from "next";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoowood",
  description: "Zoowood! Wooden accessories for pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inconsolata.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
