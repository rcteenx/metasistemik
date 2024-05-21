import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/icons/icons";
const SubHero = ({ rVideo }) => {
  return (
    <section
      id="subhero"
      className="container mx-auto px-4 my-2 md:p-0 md:my-8"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center">
        <div className="rounded-3xl hidden xl:flex justify-center items-start">
          <img
            src={rVideo.src}
            alt="img colletion"
            width="w-full"
            height={400}
            className="  rounded-xl"
          />
        </div>
        <div className="p-4">
          <h3>
            Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
            Gerçekleştiği Yer
          </h3>
          <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
            {contHero.desc}
          </p>
          <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
            {contHero.desc2}
          </p>
          <p className="px-6 md:px-0 text-xs md:text-lg text-slate-gray leading-4 ">
            {contHero.desc3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
