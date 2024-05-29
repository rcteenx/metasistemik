import SvgCheck from "@/components/ui/svg/check";

export default function CoachingTitles({ img, img2 }) {
  return (
    <div id="gain" className="bg-white py-10 lg:my-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="text-2xl lg:text-6xl text-accent-dark-6">
            Koçluk Okulu Practicum (Staj) Uygulaması ve Unvan Alma
          </h2>
          <p>
            Koçluk okulumuz, eğitim programlarının ulusal ve uluslararası
            standartlara uygunluğu karşılaması için özel koşullar belirler. Bu
            gereklilikler yüksek standartta bir eğitim sağlar ve mezunları
            başarılı koçluk kariyerleri için gerekli becerilerle donatır.
          </p>
          <p>
            Koçluk okulumuzda Staj sürecinin genel olarak nasıl uygulandığına
            dair açıklamaları burada bulabilirsiniz:
          </p>
        </div>
        <div className="lg:mt-4  p-8 bg-accent text-accent-light-7 rounded-xl ">
          <h3 className="text-center my-4">
            Practicum (Staj) Süreci için Gereksinimler / Mezuniyet ve Unvan Alma
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
                      Minimum Koçluk Saati
                    </dt>
                    <dd className="-ml-7 mt-2">
                      72 saatlik Profesyonel Koçluk Seviye-1 eğitiminin
                      tamamladıktan sonra, okulumuz bünyesindeki Sistemik Koçluk
                      Seviye-2 eğitimine başlanmış ve ilk eğitim modülünün
                      tamamlanmış olması gerekir.
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Müşteri Odaklılık
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Koçluk görüşmelerini değerlendirme oturumlarımız
                      (Süpervizyon) yalnızca akran koçluk görüşmelerini veya
                      simüle edilmiş senaryoları değil, gerçek müşteri
                      görüşmelerini de içermektedir. Koçluk okulumuz gerçek
                      müşterilerin bulunması yönünde öğrencilerimize destek
                      olmaktadır.
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Denetim
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Koçluk okulumuz, nitelikli bir koç-süpervizörün sürekli
                      denetimini zorunlu kılar. Bu, öğrencilerin geri bildirim
                      almasını, zorlukların üstesinden gelmesini ve koçluk
                      becerilerini güvenli bir ortamda geliştirmesini sağlar. Bu
                      bağlamda her koçluk eğitim sınıfına atanmış bir
                      Koç-Süpervizör bulunmaktadır ve bu Koç-Süpervizörler,
                      Seviye-2 eğitimi boyunca gerek süpervizyon oturumlarıyla
                      gerekse ders ortamında öğrencilere gerekli desteği
                      vermektedirler.
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Belgeleme
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Öğrencilerin koçluk saatlerinin, müşteri anlaşmalarının ve
                      yansıtıcı notlarının kayıtlarını tutmaları gerekmektedir.
                      Bu belgeler ilerlemelerinin kanıtı olarak hizmet eder ve
                      stajın tamamlanması için sıklıkla gözden geçirilir
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Minimum Koçluk Görüşmesi Saati
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Level-2 eğitimini tamamlayan öğrencilerimizin 5 tanesi
                      gerçek müşteri olmak üzere en az 25 koçluk görüşmesini
                      tamamlamış olması ve çevrimiçi gerçekleştirilen müşteri
                      görüşmelerinden 1 tane görüntülü kaydın, Sistemik Koçluk
                      yeterlilikleri ve becerileri kontrolünden geçmesi
                      gerekmektedir. Talep edilen Sistemik Koçluk görüşmesi,
                      Dijital Sistemik Haritalama Aracının kullanılmasını
                      gerektirdiğinden, ilgili görüşmenin görüntülü kaydının
                      alınması gerekmektedir.
                    </dd>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:mt-4 p-8 border rounded-xl border-accent-dark-3 text-accent-dark-3">
          <h3 className="text-center my-4">
            Metasistemik Akredite “Sistemik Koç” Unvan Alma Süreci
          </h3>
          <p className="text-center">
            Koçluk okulumuz Level-2 mezun öğrencilerimize, Platformumuzun
            akredite ve ünvanlı Sistemik Koç olma imkânı sunmaktadır.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 items-end gap-8 ">
            <div className="p-4 col-span-2 ">
              <ul className="space-y-5">
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    Unvan Alma için 10 tanesi gerçek müşteriyle yapılmış 50
                    standart koçluk görüşmesi ve 10 tanesi gerçek müşteri ile
                    yapılmış 50 sistemik koçluk görüşmesi olmak üzere an az 20
                    farklı gerçek müşteriyle yapılmış en az 100 koçluk görüşmesi
                    gerçekleştirilmiş olması gerekmektedir.
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    Tüm görüşmelerin yazılı not olarak kayıt altına alınarak,
                    müşteri onam formlarıyla birlikte platformumuza sunulması, 1
                    adet standart koçluk görüşmesinin sadece ses kaydı ve 1 adet
                    sistemi koçluk görüşmesi için görüntülü ve sesli kaydın
                    yapılarak platformumuza sunulması gerekmektedir. (Talep
                    edilen Sistemik Koçluk görüşmesinde, dijital sistemik koçluk
                    aracı kullanılacağından, görüşmenin görüntülü kaydının
                    alınması gerekmektedir.)
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    Adayların, standart koçluk için en fazla 45 ve sistemik
                    koçluk için en fazla 75 dakikaya kadar olan görüşme
                    kayıtlarının her ikisi içinde 40 Kriterden oluşan kontrol
                    listesinden en az 28 tanesinin ve sistemik koçluk için ilave
                    10 kriterden 7 tanesini daha yerine getirdiklerine dair
                    yazılı bir savunmayla birlikte sunması gerekmektedir.
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    Koçluk okulumuzun sunduğu Level 1 ve Level 2 eğitimleriyle
                    birlikte tüm bu süreçler, ICF’in ACC unvan alma sınavına
                    katılım için gerekli olan ICF Portfolyo Yolu kriterlerini
                    karşılamış olmaktadır. Metasistemik Sistemik Koç ünvanlama
                    süreci sonrası isteye bağlı olarak ek koşullarla birlikte
                    öğrencilerimizi ICF ACC/PCC Unvan Alma için, ICF Yeterlilik
                    Sınavına hazırlıyoruz.
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
        <div className="text-center my-4">
          <h3>MESLEKİ YETERLİLİK VE GELİŞİM SERTİFİKA PROGRAM TAKVİMİ</h3>
          <p>
            4 Okulumuz için ilk sertifika programları olan Mesleki Yeterlilik
            Sertifika Programları 2 Ayda bir olmak üzere açılır. Mesleki Gelişim
            Sertifika Programlarımız için lütfen bizimle iletişime geçin.
          </p>
          <p>
            Yeni sınıf başlangıç tarihlerini öğrenmek için lütfen bize ulaşın:
          </p>
        </div>
      </div>
    </div>
  );
}
