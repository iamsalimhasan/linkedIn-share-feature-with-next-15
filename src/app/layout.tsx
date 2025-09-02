import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "XperThrivr - Empowering Individuals",
  description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
  openGraph: {
    title: "XperThrivr - Empowering Individuals",
    description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "XperThrivr Profile",
      },
    ],
    type: "website",
    siteName: "XperThrivr",
  },
  twitter: {
    card: "summary_large_image",
    title: "XperThrivr - Empowering Individuals",
    description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
