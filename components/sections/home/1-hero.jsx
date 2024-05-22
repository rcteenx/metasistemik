import { contHero, StaticPages } from "@/content/data";
import { kocluk1 } from "@/public/assets/images";

import IconComponent from "@/components/ui/icons/icons";
const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center text-white"
      // bg-kocluk1
      // bg-opacity-10
      // bg-center
      // bg-cover bg-blend-darken"
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat imageBG">
        <div className="absolute py-8 inset-0 h-full w-full overflow-hidden bg-[hsla(240,33%,30%,.50)] bg-fixed">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold ">
            {contHero.h1a}
          </h1>
          <h3 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-bold">
            {contHero.h1b}
          </h3>
          <hr className="md:hidden " />
          <h2 className="font-medium md:text-lg lg:text-6xl text-white">
            {contHero.h2a}
          </h2>
          <p className="font-normal text-xs md:text-sm lg:text-xl">
            {contHero.h2b}
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
