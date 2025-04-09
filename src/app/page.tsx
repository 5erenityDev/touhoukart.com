import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-end mr-[-10px] gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 text-center">
        <div className="bg-[#9E5357] border-solid  border-[#330D22] border-[10px] pr-[500px]">
          <h2 className="text-[200%]  py-10">Mario Kart DS Romhack featuring many Touhou characters and tracks!</h2>
          <h2 className="text-[200%]  py-10">Development starting soon!</h2>
          <h2 className="text-[200%]  py-10">Follow SerenityDev on <a className = "underline text-[#222222]" href="https://x.com/Serenity_Dev">Twitter</a> or <a className = "underline text-[#3794E5]" href="https://bsky.app/profile/serenitydev.net">Bluesky</a> to stay updated!</h2>
        </div>
        <br/>
        <div className="bg-[#9E5357] border-solid  border-[#330D22] border-[10px] pr-[500px]">
          <h2 className="text-[200%]  py-10">Many planned custom tracks and mechanics!</h2>
          <Image src="/images/renders/misty_lake.jpg" alt="Misty Lake from Touhou as a MKDS course" style={{ width: '80%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/>
          <h3 className="text-[100%]  py-10">Misty Lake track</h3>
        </div>
        <br/>
        <div className="bg-[#9E5357] border-solid  border-[#330D22] border-[10px] pr-[500px]">
          <h2 className="text-[200%]  py-10">Planned Characters:</h2>
          <ul className="text-[250%] text-left">
            <li className="py-10">Reimu Hakurei</li>
            <li className="py-10">Sanae Kochiya</li>
            <li className="py-10">Marisa Kirosame</li>
            <li className="py-10">Yukari Yakumo</li>
            <li className="py-10">Sakuya Izayoi</li>
            <li className="py-10">Cirno</li>
            <li className="py-10">Yuyuko Saigyouji</li>
            <li className="py-10">Fujiwara No Mokou</li>
            <li className="py-10">Junko</li>
            <li className="py-10">Yoshika Miyako</li>
            <li className="py-10">Satori Komeji</li>
            <li className="py-10">Shinki</li>
          </ul>
          <br/>
          <br/>
          <br/>
        </div>
      </main>

    </div>
  );
}
