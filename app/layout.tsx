import type { Metadata } from "next";
import { Bebas_Neue, Work_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baba Farid Roofing",
  description: "Single-page roofing website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
