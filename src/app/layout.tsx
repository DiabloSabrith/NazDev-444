import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Circles from "@/components/circles-anim/circles-anim"
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NazDev",
  icons:"/img/mainLogo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
            rel="stylesheet"/>

    </head>
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
    </body>
    </html>
  );
}
