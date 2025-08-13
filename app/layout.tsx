import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { generateNoFlashThemeScript } from "@/lib/theme";
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
  metadataBase: new URL("https://codypero.com"),
  alternates: { canonical: "/" },
  title: "Cody Pero — Portfolio",
  description: "Software engineer portfolio and resume of Cody Pero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: generateNoFlashThemeScript() }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-base-100 text-base-content overflow-x-hidden antialiased`}
      >
        <Link
          href="#content"
          className="btn btn-sm btn-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]"
        >
          Skip to content
        </Link>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
