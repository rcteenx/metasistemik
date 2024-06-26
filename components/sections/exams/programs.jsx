import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
export default function ExamPrograms() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">
              MESLEK SINAVLARINA HAZIRLIK PROGRAMLARI
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4 xl:-mt-[124px]">
        <div className="mx-4 grid md:grid-cols-2 gap-4 px-8 xl:px-0">
          <div className=" bg-accent-light-9 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center border border-accent gradientAccentToDark">
            <h4>
              <a href="/sinavlara-hazirlik/myk">MYK SEVİYE-6 SINAVLARI</a>
            </h4>
          </div>

          <div className=" bg-accent-light-7 px-4 py-8 rounded-2xl  shadow-custom2 flex flex-col items-center text-center gradientAccentOppositeToBlack">
            <h4>
              <a href="/sinavlara-hazirlik/icf">
                ICF (ACC/PCC) YETERLİLİK SINAVI
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
