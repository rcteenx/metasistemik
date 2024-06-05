import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function Schools2() {
  return (
    <section id="servicestut" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container ">
          <div className=" px-12 services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="xl:pr-8 xl:border-r text-3xl xl:text-5xl text-white">
              OKULLARIMIZ
            </h2>
            <div className="xl:pl-8 flex-1 text-center xl:text-left">
              <h3>Sistemik Yaklaşımda Uzmanlık Geliştirin</h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışmanın dönüştürücü ilke
                ve yöntemlerini tüm sertifika programlarımda, yetenek
                geliştirmeye dayalı dönüşüm yolculuğunu güçlendiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-[144px] ">
        <h3 className="mx-8 p-4 bg-gray-300 rounded-xl text-center text-2xl md:text-4xl gradientChoose">
          OKULUNUZU SEÇİN
        </h3>
        <div className="mx-8 grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 xl:px-0">
          <div className="bg-white px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center gradientCoaching">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-1.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">
              <a href="/okullar/kocluk">Koçluk Okulu</a>
            </h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Kalıcı dönüşüme doğru yönlendirmek için uzmanlaşın.
            </p>
          </div>

          <div className="bg-white px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center gradientTeaching">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-2.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">
              <a href="/okullar/egitmenlik">Eğitmenlik Okulu</a>
            </h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Dönüşümsel öğrenme ortamlarının dinamik bir kolaylaştırıcı ve
              lider olun.
            </p>
          </div>

          <div className="services__item bg-white px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientSystemic">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-3.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">
              <a href="/okullar/sistemik-dizim">Sistemik Dizim</a>
            </h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Bireyler, gruplar ve organizasyon sistemleri içindeki gizli
              dinamikler
            </p>
          </div>

          <div className="services__item bg-white px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientEnneagram">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-4.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">
              <a href="/okullar/enneagram">Enneagram Okulu</a>
            </h3>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              Derinlemesine kişisel anlayış, ilişkiler ve kişisel gelişime
              dönüştürücü bir yaklaşım
            </p>
          </div>
        </div>
        <p className="text-center mt-4 ">
          Karar veremediyseniz, danışman desteği için bize ulaşın
        </p>
      </div>
    </section>
  );
}
