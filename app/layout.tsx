"use client";

import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import { Poppins, Outfit } from "next/font/google";
import { useState } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

// export const metadata: Metadata = {
//   title: "Amir Sarani",
//   description: "Amir Protofilio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href="/icon.webp" type="image/x-icon" /> */}
      </head>
      <body className={`${poppins.variable} ${outfit.variable} antialiased`}>
        <head>
          <link
            rel="icon"
            type="image/png"
            href="%PUBLIC_URL%/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="%PUBLIC_URL%/favicon.svg"
          />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="%PUBLIC_URL%/apple-touch-icon.png"
          />
          <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        </head>
        <Header />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
