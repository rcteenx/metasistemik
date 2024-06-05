import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function SystemicPrograms() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">SİSTEMİK DİZİM OKULU</h2>
            <h3 className="xl:text-2xl ">
              MESLEKİ YETERLİLİK ve GELİŞİM SERTİFİKA PROGRAMLARI
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-[124px]">
        <div className="grid  xl:grid-cols-3 gap-4 px-8 xl:px-0">
          <div className="services__item bg-accent-light-9 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center border border-accent ">
            <p className="text-3xl text-accent-dark-1 font-bold">Seviye 1</p>
            <h4 className="mb-[10px]">
              BİREYSEL SİSTEMİK DİZİM KOLAYLAŞTIRICISI SERTİFİKA PROGRAMI
            </h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              120 Saat
              <br />
              Mesleki Yeterlilik Eğitimi
            </p>
          </div>

          <div className="services__item bg-accent-light-7 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center border-accent">
            <p className="text-3xl text-accent-dark-3 font-bold">Seviye 2/A</p>
            <h4 className="mb-[10px]">
              <a href="#">SİSTEMİK DİZİM KOLAYLAŞTIRICISI SERTİFİKA PROGRAMI</a>
            </h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              120 Saat
              <br />
              Mesleki Gelişim Eğitimi
            </p>
          </div>

          <div className="services__item bg-accent-light-5 px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center border-accent">
            <p className="text-3xl text-accent-dark-5 font-bold">Seviye 2/B</p>
            <h4 className="mb-[10px]">
              YÖNETİM VE ORGANİZASYONEL SİSTEMİK DİZİM KOLAYLAŞTIRICISI
              SERTİFİKA PROGRAMI
            </h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              120 Saat
              <br />
              Mesleki Gelişim Eğitimi
            </p>
          </div>
        </div>
        <div className="text-center my-8">
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
        </div>
      </div>
    </section>
  );
}
