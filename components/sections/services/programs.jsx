import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function ServicesPrograms() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[288px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">METASİSTEMATİK HİZMETLER</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-[80px]">
        <div className="grid  md:grid-cols-3 gap-4 px-8 xl:px-0">
          <div className="services__item bg-accent-light-9 p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center border border-accent ">
            <h4 className="">Kurumsal Hizmetler</h4>
            <p>
              Metasistemik'in Dönüştürücü Kurumsal Çözümleriyle
              Organizasyonunuzu Yükseltin
            </p>
          </div>

          <div className="services__item bg-accent-light-7 p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center border-accent">
            <h4 className="">
              <a href="#">Bireysel Hizmetler</a>
            </h4>
            <p>Bireysel Hizmetlerimiz: Kişisel Dönüşümünüzü Güçlendirin</p>
          </div>

          <div className="services__item bg-accent-light-5 p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center border-accent">
            <h4 className="">
              <a href="#">Sosyal Sorumluluk</a>
            </h4>
            <p>Sosyal Sorumluluk Taahhüdümüz</p>
          </div>
        </div>
      </div>
    </section>
  );
}
