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
  metadataBase: new URL("https://dimsumfazbila.vercel.app"),

  title: {
    default: "Dimsum Fazbila | Premium Homemade Dimsum",
    template: "%s | Dimsum Fazbila",
  },

  description:
    "Dimsum premium homemade dengan kualitas terbaik. Fresh • Homemade • Premium Quality. Order sekarang via WhatsApp atau Shopee.",

  keywords: [
    "dimsum",
    "dimsum premium",
    "dimsum homemade",
    "dimsum enak",
    "dimsum fazbila",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Dimsum Fazbila | Premium Homemade Dimsum",
    description:
      "Fresh • Homemade • Premium Quality. Order sekarang via WhatsApp atau Shopee.",
    url: "https://dimsumfazbila.vercel.app",
    siteName: "Dimsum Fazbila",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dimsum Fazbila Premium Homemade",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dimsum Fazbila | Premium Homemade Dimsum",
    description:
      "Fresh • Homemade • Premium Quality. Order sekarang via WhatsApp.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
