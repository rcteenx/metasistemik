import IconComponent from "@/components/ui/icons/icons";
import MySvgIcon from "@/components/ui/svg/enegram";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function Schools2() {
  return (
    <section id="servicestut" className="m-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className=" xl:px-12  flex items-center flex-col xl:flex-row xl:mb-[60px]">
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

      <div className="container mx-auto xl:-mt-36 ">
        <h3 className="m-4 p-4 bg-gray-300 rounded-xl text-center text-2xl md:text-4xl gradientChoose md:border">
          OKULUNUZU SEÇİN
        </h3>
        <div className="xl:mx-8 grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 xl:px-0 ">
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientAccentToDark gradientTransition ">
            <a href="/okullar/kocluk">
              <div className=" flex justify-center items-center">
                <IconComponent name="school" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Koçluk Okulu</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Kalıcı dönüşüme doğru yönlendirmek için uzmanlaşın.
              </p>
            </a>
          </div>

          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientGreenToBlack gradientTransition">
            <a href="/okullar/egitmenlik">
              <IconComponent
                name="teacher"
                size={64}
                color="white"
                className="my-4 mx-auto"
              />
              <h3 className="mb-[10px] font-semibold">Eğitmenlik Okulu</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Dönüşümsel öğrenme ortamlarının dinamik kolaylaştırıcı ve lider
                olun.
              </p>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientAccentOppositeToBlack gradientTransition">
            <a href="/okullar/sistemik-dizim">
              <IconComponent
                name="systemic"
                size={64}
                color="white"
                className="my-4 mx-auto"
              />
              <h3 className="mb-[10px] font-semibold">Sistemik Dizim</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Bireyler, gruplar ve organizasyon sistemleri içindeki gizli
                dinamikler
              </p>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientRedToBlack gradientTransition">
            <a href="/okullar/enneagram">
              <div className="my-4 mx-auto w-16">
                <MySvgIcon />
              </div>
              <h3 className="mb-[10px] font-semibold">Enneagram Okulu</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Derinlemesine kişisel anlayış ve gelişime dönüştürücü yaklaşım
              </p>
            </a>
          </div>
        </div>
        <p className="text-center mt-4 ">
          Karar veremediyseniz, danışman desteği için bize ulaşın
        </p>
      </div>
    </section>
  );
}
