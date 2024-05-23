export default function Schools({ title, xlist }) {
  return (
    <section className="bg-[#f7f7f7] px-4 py-16 text-center">
      <div className="container-p">
        <div className=" max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">{title.h2}</h2>
          <h5 className="font-bold">{title.h5}</h5>
          <p className="my-4 ">{title.p}</p>
        </div>
        <div className="flex justify-center items-center overflow-scroll  ">
          <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 space-x-0 xl:space-x-4 justify-center ">
            {xlist.map((m) => (
              <div
                key={m.id}
                className="p-8 md:w-96 mx-auto bg-white border border-purple-300 rounded-lg shadow hover:bg-purple-300"
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{m.title}</h3>
                </div>
                {/* <p className="text-xs">{m.desc}</p> */}
                <ul className="px-4 my-3 text-left list-disc">
                  {m.specs.map((s, index) => (
                    <li key={index} className="text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="my-8 text-2xl">
            Mesleki Yeterlilik ve Gelişim Sertifika Programları
          </h3>
          <p className=" max-w-4xl mx-auto">
            Platformumuzda yer alan 4 okulumuzdaki tüm sertifika programları hem
            ulusal hem de uluslararası standartlara uyumluluğu esas alarak
            hazırlanmıştır. Platformumuz, her sertifika programı için hem
            tanınma hem de mesleki güvenilirlik sağlayan ikili sertifika modeli
            sunar.
          </p>
          <div className="my-8 flex justify-center items-start gap-8 ">
            <div className="border rounded-xl p-4 max-w-sm">
              <h4 className="my-4 bg-black text-white p-2 rounded-xl">
                Sertifika Programlarımızda Avrupa Standartlarına Uyum
              </h4>
              <p>
                Mesleki Yeterlilik ve Gelişim Sertifika Programlarımız, MYK
                Seviye-6 ve Avrupa Yeterlilikler Çerçevesi (EQF) Seviye 6
                referans alınarak tasarlanmıştır. Bu düzey, verilen eğitimin
                üniversite lisans derecesine uygun olduğunu ancak örgün lisans
                eğitiminin katılım için ön koşul olmadığını göstermektedir.
              </p>
            </div>
            <div className="border rounded-xl p-4 max-w-sm">
              <h4 className="my-4 bg-black text-white p-2 rounded-xl">
                Mezunlarımıza Sağladığımız Sertifikalar
              </h4>
              <ul className="flex flex-col gap-4">
                <li>METASİSTEMİK Onaylı Sertifikalar</li>
                <li>Uluslararası Onaylı Güvenilir Sertifikasyon Sistemi</li>
              </ul>
            </div>
          </div>
          <p>
            Bu ikili sertifikalandırma yaklaşımı, kimlik bilgilerinizin hem
            Metasistemik toplulukta hem de global çapta daha geniş profesyonel
            ortamda tanınmasını ve saygı duyulmasını sağlar.
          </p>
          <h3>Sertifika Programları Başlangıç Tarihleri</h3>
        </div>
      </div>
    </section>
  );
}
