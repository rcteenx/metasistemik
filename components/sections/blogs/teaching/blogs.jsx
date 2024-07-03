export default function BlogCategory() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative xl:h-72 flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">
              METASİSTEMATİK EĞİTMENLİK OKULU BLOG YAZILARI
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 xl:-mt-[80px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 xl:px-0 ">
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientAccentToDark gradientTransition w-96">
            <a href="/blog/egitmenlik/profesyonel-egitmenlerin-rolu">
              <h3 className="mb-[10px] font-semibold h-24">
                Profesyonel Eğitmenlerin Gelişen Rolü
              </h3>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientGreenToBlack gradientTransition w-96">
            <a href="/blog/egitmenlik/profesyonel-egitmenlik-egitimi">
              <h3 className="mb-[10px] font-semibold h-24">
                Profesyonel Eğitmenlik Eğitimi ve MYK Seviye-6 Yeterliliklerinde
                Uzmanlaşmak
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
