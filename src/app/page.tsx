import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex-col gap-[50px] row-start-2 items-center sm:items-start">
        <h1 className="text-[500%]">Touhou Kart</h1>
        <h2 className="text-[300%]  py-10">Mario Kart DS Romhack featuring many Touhou characters and tracks!</h2>
        <h3 className="text-[100%]">Development starting soon!</h3>
      </main>
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
        <div>
          <h1 className="text-[80%] text-[#AAAAAA] text-center">Touhou Kart is a fan-made modification of the video game Mario Kart DS. Mario Kart DS and all associated trademarks, characters, and assets are the sole property of Nintendo Co., Ltd. This project is not endorsed by or affiliated with Nintendo in any manner.</h1>
          <br/>
          <h1 className="text-[80%] text-[#AAAAAA] text-center">The Touhou Project and all associated characters, settings, and lore are the creation and property of Team Shanghai Alice (ZUN). Touhou Kart is a fan-made work created for non-commercial purposes and is not endorsed by or affiliated with Team Shanghai Alice (ZUN).</h1>
          <br/>
          <h1 className="text-[80%] text-[#AAAAAA] text-center">Please understand that Touhou Kart is a non-commercial, fan-made project developed by a fan for entertainment purposes only. No profit is being made from this project. Touhou Kart requires users to possess a legally obtained copy of Mario Kart DS for the Nintendo DS. This project is intended for personal use only.</h1>
          <br/>
        </div>
      </footer>
    </div>
  );
}
