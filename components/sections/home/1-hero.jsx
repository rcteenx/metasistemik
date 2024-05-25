import { kocluk1 } from "@/public/assets/images";

import IconComponent from "@/components/ui/icons/icons";
const Hero = () => {
  return (
    <section id="hero" className="text-center text-white">
      <div className="relative overflow-hidden bg-cover bg-no-repeat imageBG">
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-cover flex items-center justify-center text-black">
          {/* bg-[hsla(240,33%,30%,.50)] */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              Potansiyelinizin Kilidini Açın
            </h1>
            <h3 className="mb-4 text-2xl md:text-2xl font-bold ">
              Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
              Gerçekleştiği Yer
            </h3>
            <div className="bg-accent/30 mx-4 p-4 rounded-full text-white ">
              <h2 className="border-b-4 inline-block font-bold md:text-lg lg:text-6xl ">
                METASİSTEMİK
              </h2>
              <p className="font-normal text-xs md:text-sm lg:text-xl ">
                Çalışmalarımız hakkında bilgi almak ve katılmak için
              </p>
              <div className="flex my-8 flex-row space-x-4 justify-center items-center">
                <a
                  href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
                  className="btn-hero text-black bg-accent-opposite "
                >
                  Mesaj Atın
                  <IconComponent name="arrowright" size={18} color="black" />
                </a>
                <a
                  href="#"
                  className="border-0 border-b border-white rounded-none "
                >
                  Sizi Arayalım
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
