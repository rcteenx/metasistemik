import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/icons/icons";
const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center py-8 md:py-16 lg:py-24 bg-kocluk1 bg-opacity-10  bg-center
      bg-cover"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold ">
        <span className="">{contHero.h1a}</span>
        <br />
        <span className="inline-block xl:my-4 xl:whitespace-nowrap">
          {contHero.h1b}
        </span>
      </h1>
      <hr className="md:hidden" />
      <h2 className="mb-4 font-medium md:text-lg lg:text-3xl text-white bg-black/50">
        {contHero.h2a}
        <br />
        <span className="font-normal text-xs md:text-sm lg:text-xl">
          {contHero.h2b}
        </span>
      </h2>
      <div className="flex my-8 flex-row space-x-4 justify-center">
        <a
          href="https://wa.me/905443087402?text=bilgi"
          className="btn-hero bg-slate text-white"
        >
          {contHero.btn1}
          <IconComponent name="arrowright" size={18} color="white" />
        </a>
        <a
          href={"/" + StaticPages[2].link}
          className="btn-hero border-0 text-white"
        >
          {/* className="pb-2 border-b-2 border-slate" */}
          <span>{contHero.btn2}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
