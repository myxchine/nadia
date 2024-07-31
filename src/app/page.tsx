import { Viewport } from "next";
import Image from "next/image";
export const viewport: Viewport = {
  themeColor: "#1E3226",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-[#1E3226] pt-[60px] md:pt-[88px] md:px-8 px-4 xl:px-24 max-w-[1700px] mx-auto">
      <h1 className="text-transparent absolute">Creative Portfolio</h1>
      <p className="text-transparent absolute">My name is Nadia Shchenikova</p>

      <div className="w-full relative flex flex-col gap-8 md:gap-0">
        <ImageHero />
        <Text />
        <Socials />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="px-4 md:px-0">
      <section className="flex flex-col items-center justify-center max-w-[350px] text-xs md:text-sm w-fit px-6 py-2 bg-[#F1DAAE] rounded-2xl shadow-md shadow-black md:absolute bottom-24 left-0 right-0">
        <h2 className="font-semibold">
          I am passionate about design and all things related to art. I tackle
          problems with a rational mindset, aiming for the simplest and most
          functional solutions. Additionally, I infuse a unique style tailored
          to your preferences.
        </h2>
      </section>
    </div>
  );
}

function ImageHero() {
  return (
    <Image
      src="/hero-main.jpg"
      alt="Nadia"
      width={2000}
      height={1000}
      quality={100}
      priority={true}
      className="w-full px-0 h-auto md:px-6 max-w-[1300px] saturated-image"
    />
  );
}

function Socials() {
  return (
    <div className="flex flex-col gap-4 text-sm font-accent text-[#F1DAAE] md:absolute bottom-0 md:items-end w-full text-left px-4 md:px-0">
      <div className="text-left flex flex-col gap-4">
        <p>IG: _nadiiaa_s</p>

        <p>tiktok: _withlove.n</p>
      </div>
    </div>
  );
}
