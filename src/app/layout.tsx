import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

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
    url: 'https://www.touhoukart.com/',
    images: [
      {
        url: '/images/site/kaguya-bald.jpg',
        width: 500, // Optional: Specify width
        height: 500, // Optional: Specify height
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
        url: '/images/site/kaguya-bald.jpg',
        width: 500, // Optional: Specify width
        height: 500, // Optional: Specify height
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
        className={`antialiased text-1xl font-helvetica`}
      >
        <div className = "min-h-screen bg-[url(/images/site/CheckerBackground.png)] bg-[auto_5vw]">
          <div className = "flex-grow bg-[#131116] mx-[0] lg:mx-[5vw]">
            {children}
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.serenitydev.net/mods/mkds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Parent Site
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://bsky.app/profile/serenitydev.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Dev's Bluesky
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://x.com/Serenity_Dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Dev's Twitter
              </a>
              <br/>
              <br/>
              <div>
                <h1 className="text-[80%] text-[#AAAAAA] text-center">Touhou Kart is a fan-made modification of the video game Mario Kart DS. Mario Kart DS and all associated trademarks, characters, and assets are the sole property of Nintendo Co., Ltd. This project is not endorsed by or affiliated with Nintendo in any manner.</h1>
                <br/>
                <h1 className="text-[80%] text-[#AAAAAA] text-center">The Touhou Project and all associated characters, settings, and lore are the creation and property of Team Shanghai Alice (ZUN). Touhou Kart is a fan-made work created for non-commercial purposes and is not endorsed by or affiliated with Team Shanghai Alice (ZUN).</h1>
                <br/>
                <h1 className="text-[80%] text-[#AAAAAA] text-center">Please understand that Touhou Kart is a non-commercial, fan-made project developed for entertainment purposes only. No profit is being made from this project. Touhou Kart requires users to possess a legally obtained copy of Mario Kart DS for the Nintendo DS. This project is intended for personal use only.</h1>
                <br/>
              </div>
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
