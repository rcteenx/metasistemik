import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function WorkshopPrograms() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="my-8 bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">METASİSTEMATİK ÇALIŞMALAR</h2>
            <h3 className="xl:text-2xl ">GRUP ATÖLYE ÇALIŞAMLARIMIZ</h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4 xl:-mt-[124px]">
        <div className="mx-4 grid md:grid-cols-2 gap-4 px-8 xl:px-0">
          <div className=" bg-accent-light-9 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center border border-accent gradientAccentToDark">
            <h4>
              <a href="/atolyeler/farkindalik-gelistirme">
                Farkındalık Geliştirme ve Sistemik Çalışma Grubu
              </a>
            </h4>
          </div>

          <div className=" bg-accent-light-7 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center gradientAccentOppositeToBlack">
            <h4>
              <a href="/atolyeler/sistemik-dizim">
                Sistemik Dizim Çalışma Grubu
              </a>
            </h4>
          </div>
        </div>
        {/* <div className="text-center my-8">
          <h2>MESLEKİ YETERLİLİK VE GELİŞİM SERTİFİKA PROGRAM TAKVİMİ:</h2>
          <p className=" max-w-4xl mx-auto text-accent">
            4 Okulumuz için ilk sertifika programları olan Mesleki Yeterlilik
            Sertifika Programları 2 Ayda bir olmak üzere açılır. Mesleki Gelişim
            Sertifika Programlarımız için lütfen bizimle iletişime geçin.
          </p>
          <h3>Erken Kayıt İndiriminden Yararlanın</h3>
          <p>
            Seçmiş olduğunuz sertifika programı başlangıç tarihinden 1 Ay
            öncesine kadar ilk taksitlerini ödeyerek kayıt yaptıran
            katılımcılarımız Program ücretinde %10 indirim alırlar.
          </p>
          <h3>Grup İndirimi</h3>
          <p>Her bir katılımcı aşağıdaki oranlarda indirim alır</p>
          <ul>
            <li>5 kişi birlikte kayıt: %15</li>
            <li>10 kişi birlikte kayıt: %20</li>
            <li>15 kişi birlikte kayıt: %25</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
