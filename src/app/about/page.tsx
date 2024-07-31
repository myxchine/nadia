import Image from "next/image";

export default function About() {
  return (
    <>
      <AboutIntro />
      <Showcase />
    </>
  );
}

function Showcase() {
  return (
    <section className="flex flex-col justify-between md:flex-row gap-12 w-full max-w-[1300px] mx-auto mt-[-30px] pb-24 px-6 md:px-0">
      <Education />
      <SoftwareSkill />
    </section>
  );
}

function Education() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full md:w-1/2 ">
      <h2 className="text-7xl font-accent text-white">Education</h2>

      <ul className="border-l border-white text-white pl-4">
        <li className="flex flex-col">
          <span>2015-2019 - Vilamoura International School</span>
          <span>Basic Core Subjects</span>
        </li>
        <li className="flex flex-col">
          <span>2019-2022 - Escola Secundaria Tomas Caabreira</span>
          <span>Arts and Design</span>
        </li>
        <li className="flex flex-col">
          <span>2022-now - Universidade do Algarve</span>
          <span>History of Art and Design, Photography, Crafts, Design</span>
        </li>
      </ul>

      <ExperienceCard />
      <ContentsCard />
    </div>
  );
}

function ContentsCard() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full ">
      <h2 className="text-7xl font-accent text-white">Contents</h2>

      <ul className="border-l border-white text-white pl-4">
        <li className="flex flex-col">01 Brand Identity</li>
        <li className="flex flex-col">02 Logo Design</li>
        <li className="flex flex-col">03 Web Development</li>
        <li className="flex flex-col">04 Magazine Design</li>
      </ul>
    </div>
  );
}

function ExperienceCard() {
  return (
    <section className=" p-6 px-12 bg-[#C27E35] rounded-2xl flex flex-col gap-4 justify-center items-center w-full ">
      <h3 className="text-7xl font-accent text-white text-[#1E3226]">
        Experience
      </h3>

      <ul className="border-l border-white text-white pl-4">
        <li className="flex flex-col">
          2022 Web Designer as Freelance Work Designed a Brand Identity Horizon
        </li>
        <li className="flex flex-col">
          2024 Marketing and Social Media Inter Created contente for the stores
          Duck World, London, England
        </li>
        <li className="flex flex-col">
          2023 Social Media Marketing and Logo Design Social Media and Logo
          Design for a Brand Arte de Beleza, Algarve, Portugal
        </li>
      </ul>
    </section>
  );
}
function SoftwareSkill() {
  return (
    <div className="flex flex-col gap-4 items-center w-full md:w-1/2 ">
      <h2 className="text-7xl font-accent text-white">Software Skill</h2>
    </div>
  );
}

function AboutIntro() {
  return (
    <div className=" bg-[#F1DAAE] w-full p-6 md:px-24   py-24 pt-8 md:pt-24">
      <div className="  flex flex-col items-center justify-center md:flex-row gap-12 w-full  max-w-[1000px] mx-auto">
        <AboutHero />
        <AboutHeroImage />
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <section className=" flex flex-col gap-4 w-full md:w-1/2">
      <h1 className="text-6xl md:text-8xl font-accent">
        Hey,
        <br /> I'm Nadia
      </h1>
      <p className="text-sm font-semibold max-w-[300px]">
        I am a self-thought Graphic Designer based in Algarve, Portugal with
        substantial marketing and content creation experience. I am currently
        living in London and pursuing a degree in Visual Arts.
      </p>
    </section>
  );
}

function AboutHeroImage() {
  return (
    <Image
      src="/about-hero.png"
      alt="Nadia"
      width={2000}
      height={1000}
      quality={100}
      priority={true}
      className="w-full px-0 h-auto md:w-1/2 max-w-[1300px] "
    />
  );
}
