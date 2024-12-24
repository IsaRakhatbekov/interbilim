"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "../global/_reset.scss";
import "../global/global.scss";
import { BrowserRouter } from "react-router-dom";

const averia = localFont({
  src: [
    {
      path: "../global/fonts/AveriaGruesaLibre-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/AveriaGruesaLibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-averia",
});

const inter = localFont({
  src: [
    {
      path: "../global/fonts/Inter18pt-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const oswald = localFont({
  src: [
    {
      path: "../global/fonts/Oswald-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Oswald-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Oswald-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/Oswald-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-oswald",
});

const zenMaru = localFont({
  src: [
    {
      path: "../global/fonts/ZenMaruGothic-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/ZenMaruGothic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-zenMaru",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${averia.variable} ${inter.variable} ${oswald.variable} ${zenMaru.variable}`}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </body>
    </html>
  );
}
