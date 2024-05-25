import SvgCheck from "@/components/ui/svg/check";

export default function Exams({ img, img2 }) {
  return (
    <div id="gain" className="bg-white py-10 lg:my-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="text-2xl lg:text-6xl text-accent-dark-6">
            MESLEKİ YETERLİLİK SINAVLARI
          </h2>
          <h5>
            Sınav Hazırlık Programlarıyla Ulusal ve Uluslararası Mesleki
            Tanınırlığa Ulaşın
          </h5>
          <p>
            Metasistemik'in kapsamlı sınav hazırlık programlarıyla, ulusal
            mesleki yeterlilik belgelerinizi edinin, uluslararası mesleki
            unvanınızı alın.
          </p>
          <p>
            Ulusal ve uluslararası düzeyde tanınan mesleki yeterlilik
            belgelerine ulaşmanıza yardımcı olmak için tasarlanan
            programlarımız, başarılı olmanız için ihtiyaç duyduğunuz bilgi ve
            desteği sağlar.
          </p>
        </div>
        <div className="lg:mt-4  p-8 bg-accent text-accent-light-7 rounded-xl ">
          <h3 className="text-center my-4">
            Ulusal Mesleki Kimlik Kazanımı (MYK Düzey-6)
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-3 items-end gap-8 ">
            <div className="rounded-xl p-8 bg-white ">
              <img
                src={img.src}
                alt="img colletion"
                className=" h-[150px] mx-auto object-cover object-center rounded-xl"
              />
            </div>
            <div className="p-4 col-span-2 ">
              <ul className="space-y-5">
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Sertifikalı ve Meslek Belgeli Koç Olun
                    </dt>
                    <dd className="-ml-7 mt-2">
                      Profesyonel Koçluk Sertifika Programımız ve özel MYK
                      Seviye-6 Koçluk Sınavına Hazırlık Programımızla koçluk
                      kariyerinize başlayın. (Bağlantı) [MYK Logosunu Buraya
                      Yerleştirin]
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Sertifikalı ve Meslek Belgeli Eğitim Uzmanı veya Kurumsal
                      Eğitmen Olun
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Eğitim Uzmanı ve Kurumsal Eğitmen sertifikalarına yönelik
                      hedeflenen MYK Seviye-6 Sınav Hazırlık Programlarıyla
                      tamamlanan Profesyonel Eğitmen Sertifika Programımızla
                      eğitim ve gelişim alanındaki uzmanlığınızı geliştirin.
                    </dd>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:mt-4 p-8 border rounded-xl border-accent-dark-3 text-accent-dark-3">
          <h3 className="text-center my-4">
            Ulusal Mesleki Kimlik Kazanımı (MYK Düzey-6)
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-3 items-end gap-8 ">
            <div className="p-4 col-span-2 ">
              <ul className="space-y-5">
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold mt-1">
                      ACC veya PCC Unvanınızı Kazanın
                    </dt>
                    <dd className="-ml-7 mt-2">
                      Uluslararası Koçluk Federasyonu (ICF) ile Ortak
                      Sertifikalı Koç (ACC) veya Profesyonel Sertifikalı Koç
                      (PCC) olma yolunda son adımı atmaya hazırsanız, sıkı ICF
                      Sınav Hazırlık Programımız size gerekli donanımı
                      sağlayacaktır. (Bağlantı) [ICF Logosunu Buraya
                      Yerleştirin]
                    </dd>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl hidden xl:block">
              <img
                src={img2.src}
                alt="img colletion"
                className=" h-[120px] mx-auto object-cover object-center "
              />
            </div>
          </div>
        </div>

        <p className="text-center my-4">
          Dağa kapsamlı bilgiler için Mesleki Yeterlilik Sınavları sayfamızı
          ziyaret edin
        </p>
      </div>
    </div>
  );
}
