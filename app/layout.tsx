import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";
import { NavigationSidebar } from "@/lib/sv";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All For One",
  description: "All For One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeInit />
        <div className="grid grid-cols-12 p-4 gap-4">
          <div className="col-span-12 md:col-span-2">
            <NavigationSidebar />
          </div>
          <div className="col-span-12 md:col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
