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
  title: "Touhou Kart",
  description: "Mario Kart DS Romhack featuring many touhou characters and tracks! ",
  keywords: ['indie games', 'game development', 'romhack', 'mario kart ds', 'touhou', 'touhou kart', 'bald kaguya', 'serenitydev', "serenity dev", "serenity_dev"],
  themeColor: '#04010A',
  icons: {
    icon:'/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    type: 'website',
    title: 'Touhou Kart',
    description: "Mario Kart DS Romhack featuring many touhou characters and tracks! ",
    locale: 'en_US',
    url: 'https://www.wretchedrose.com/',
    images: [
      {
        url: '/images/site/kaguya-bald.png',
        width: 2086, // Optional: Specify width
        height: 2086, // Optional: Specify height
        alt: 'THINNING!!!!', // Optional: Specify alt text
      },
    ],
    
  },
  twitter: {
    card: 'summary', // Or 'summary', 'app', 'player'
    title: 'Touhou Kart',
    description: "Mario Kart DS Romhack featuring many touhou characters and tracks! ",
    site: '@Serenity_Dev', // Optional: Your website's Twitter handle
    creator: '@Serenity_Dev', // Optional: The creator's Twitter handle
    images: [
      {
        url: '/images/site/kaguya-bald.png',
        width: 2086, // Optional: Specify width
        height: 2086, // Optional: Specify height
        alt: 'THINNING!!!!', // Optional: Specify alt text
      },
    ],
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
