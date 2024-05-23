import IconComponent from "@/components/ui/icons/icons";

// https://www.youtube.com/watch?v=qmMIz0_c9Ek
const ServicesTut = () => {
  return (
    <section id="servicestut" className=" ">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2">Our Services for Your Solution</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              eaque voluptatibus hic recusandae culpa quos soluta? Sapiente in,
              nostrum maxime.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 px-8 xl:px-0">
          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-1.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Genel Çözüm</h3>
            <p className=" font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing amet elit.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-2.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Genel Destek</h3>
            <p className=" font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing amet elit.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-3.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Besin Desteği</h3>
            <p className=" font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing amet elit.
            </p>
          </div>

          <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
            <div className="mb-[15px]">
              <img src="assets/icons/services/icon-4.svg" alt="" />
            </div>
            <h3 className="mb-[10px]">Genel Bakım</h3>
            <p className=" font-light leading-normal max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing amet elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTut;
