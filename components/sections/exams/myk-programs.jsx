import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function MykPrograms() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative xl:h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">MESLEKİ YETERLİLİK SINAVLARI</h2>
            <h3 className="xl:text-2xl ">
              MYK Seviye-6 Meslek Sınavlarına Hazırlık Programlarımız
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4 xl:my-0 xl:-mt-[124px]">
        <div className="grid  xl:grid-cols-3 gap-4 px-8 xl:px-0">
          <div className="services__item bg-accent-light-9 p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center border border-accent ">
            <p className="text-3xl text-accent-dark-3 font-bold">Seviye 1</p>
            <h4 className="mb-[10px]">MYK Koç Seviye-6</h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              12 saat / 2 Gün
            </p>
          </div>

          <div className="services__item bg-accent-light-7 p-[30px] rounded-[10px]  shadow-custom2 flex flex-col items-center text-center border-accent">
            <p className="text-3xl text-accent-dark-3 font-bold">Seviye 2</p>
            <h4 className="mb-[10px]">MYK “EĞİTİM UZMANI” SEVİYE-6</h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              24 saat / 4 Gün
            </p>
          </div>

          <div className="services__item bg-accent-light-5 p-[30px] rounded-[10px] shadow-custom2 flex flex-col items-center text-center border-accent">
            <p className="text-3xl text-accent-dark-5 font-bold">Seviye 3</p>
            <h4 className="mb-[10px]">MYK “KURUMSAL EĞİTMEN” SEVİYE-6</h4>
            <p className=" font-light leading-normal max-w-[300px] text-sm">
              24 saat / 4 Gün
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
