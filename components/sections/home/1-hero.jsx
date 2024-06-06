import IconComponent from "@/components/ui/icons/icons";

export default function Hero() {
  return (
    <section id="hero" className="text-center text-white gradientHero">
      {/* imageBG */}
      <div className="relative overflow-hidden bg-cover bg-no-repeat h-96 imageBG">
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-cover flex items-center justify-center text-white">
          {/* bg-[hsla(240,33%,30%,.50)] */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Potansiyelinizin Kilidini Açın
            </h1>
            <h3 className="mb-4 text-xl md:text-2xl font-light ">
              Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
              Gerçekleştiği Yer
            </h3>
            {/* bg-accent/30 */}
            <h2 className="border-b-4 inline-block font-bold text-4xl lg:text-6xl ">
              METASİSTEMİK
            </h2>
            <div className="flex flex-row space-x-4 justify-center items-center">
              <a
                href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
                className="btn-hero gradientSystemic "
              >
                Mesaj Atın
                <IconComponent name="arrowright" size={18} color="white" />
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
    </section>
  );
}
