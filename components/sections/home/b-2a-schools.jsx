import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
const Schools2 = () => {
  return (
    <section id="servicestut" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2 xl:pr-8 xl:border-r xl:text-6xl text-white">
              OKULLARIMIZ
            </h2>
            <div className="xl:pl-8 flex-1">
              <h3>Sistemik Yaklaşımda Uzmanlık Geliştirin</h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışmanın dönüştürücü ilke,
                yöntem ve tekniklerini tüm sertifika programlarımıza entegre
                ederek, yetenek geliştirmeye dayalı dönüşüm yolculuğu için
                güçlendiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-[144px]">
        <h3 className="text-center mb-4 text-white">OKULUNUZU SEÇİN</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-8 xl:px-0">
          <div className="services__item bg-white p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center ">
            {" "}
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-1.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Koçluk Okulu</h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Kendinizi ve diğerlerini kalıcı dönüşüme doğru yönlendirmek için
              uzmanlaşın.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-2.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Eğitmenlik Okulu</h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Dönüşümsel öğrenme ortamlarının dinamik bir Sistemik Eğitmen,
              kolaylaştırıcı ve lider olun.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-3.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Sistemik Dizim Okulu</h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Bireyler, gruplar ve organizasyon sistemleri içindeki gizli
              dinamikleri ortaya çıkarın.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-4.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Enneagram Okulu</h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Derinlemesine kişisel anlayış, ilişkiler ve kişisel gelişime
              dönüştürücü bir yaklaşım kazanın.
            </p>
          </div>
        </div>
        <p className="text-center mt-4 text-accent">
          Karar veremediyseniz, danışman desteği için bize ulaşın
        </p>
      </div>
    </section>
  );
};

export default Schools2;
