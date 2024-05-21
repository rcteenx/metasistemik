import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/icons/icons";
const Hero = ({ rVideo }) => {
  return (
    <section
      id="hero"
      className="container mx-auto px-4 my-2 md:p-0 md:my-8 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left">
        <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
          {contHero.desc}
        </p>
        <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
          {contHero.desc2}
        </p>
        <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
          {contHero.desc3}
        </p>

        <div className="flex my-8 flex-row space-x-4 justify-center xl:justify-start">
          <a
            href="https://wa.me/905443087402?text=bilgi"
            className="btn-hero bg-slate text-white"
          >
            {contHero.btn1}
            <IconComponent name="arrowright" size={18} color="white" />
          </a>
          <a href={"/" + StaticPages[2].link} className="btn-hero border-0">
            {/* className="pb-2 border-b-2 border-slate" */}
            <span>{contHero.btn2}</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center  bg-cover relative rounded-2xl">
        <img
          src={rVideo.src}
          alt="img colletion"
          width="w-full"
          height={400}
          className=" rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
