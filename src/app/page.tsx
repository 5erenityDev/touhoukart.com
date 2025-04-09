import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex-col gap-[50px] row-start-2 items-center sm:items-start">
        <Image
            aria-hidden
            src="/images/site/TouhouKartLogo.png"
            alt="Touhou Kart"
            style={{ width: '80%', height: 'auto' , display: 'block', margin: 'auto'}}
            width={1200}
            height={295}
        />
        <h2 className="text-[200%]  py-10">Mario Kart DS Romhack featuring many Touhou characters and tracks!</h2>
        <Image src="/images/renders/misty_lake.jpg" alt="Misty Lake from Touhou as a MKDS course" style={{ width: '80%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/>
        <h3 className="text-[100%]">Development starting soon!</h3>
      </main>

    </div>
  );
}
