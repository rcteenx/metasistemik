"use client";

import { useState } from "react"; // import state

export default function MykPrograms() {
  const [openTab, setOpenTab] = useState(1);

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
      <div className="container mx-auto my-4 xl:-mt-[124px]">
        <div className="grid xl:grid-cols-3 gap-4 px-8 xl:px-4">
          <a
            className={" " + (openTab === 1 ? "" : "")}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            <div
              className={
                " px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center border border-accent " +
                (openTab === 1 ? "bg-accent-opposite" : "bg-accent-light-9")
              }
            >
              <h4 className="mb-[10px]">MYK Koç Seviye-6</h4>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                16 saat / 2 Gün
              </p>
            </div>
          </a>

          <a
            className={" " + (openTab === 1 ? "" : "")}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            <div
              className={
                " px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center border border-accent " +
                (openTab === 2 ? "bg-accent-opposite" : "bg-accent-light-7")
              }
            >
              <h4 className="mb-[10px]">MYK “EĞİTİM UZMANI” SEVİYE-6</h4>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                16 saat / 2 Gün
              </p>
            </div>
          </a>

          <a
            className={" " + (openTab === 1 ? "" : "")}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            <div
              className={
                " px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center border border-accent " +
                (openTab === 3 ? "bg-accent-opposite" : "bg-accent-light-5")
              }
            >
              <h4 className="mb-[10px]">MYK “KURUMSAL EĞİTMEN” SEVİYE-6</h4>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                16 saat / 2 Gün
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <h3>MYK Koç SeVİYE–6 Sınav Hazırlık Programı:</h3>
              <p>
                <strong>Program Tanıtımı:</strong> Resmi Mesleki Yeterlilik
                Kimlik Belgenizi Edinin
              </p>
              <p>
                Öncelikle sınava girmek için zorunlu olan 60 saatlik koşulları
                yerine getiren temel koçluk eğitiminin tamamlanmış olması
                gereklidir. Koçluk okulumuzda gerekli kriterleri sağlayan 72
                saat süreli (ulusal ve uluslararası standartlara uyumluluğu esas
                alan) Profesyonel Koçluk Seviye-1 Sertifika Programı sunuyoruz.
                Program sonrasında Üniversitelerin Sürekli Eğitim Merkezlerinde
                tercih edilen Cardcert Sertifikasyonu ve Platform
                sertifikalarına ek olarak almış olduğunuz eğitimin detaylarını
                veren transkriptinizi adınıza düzenliyoruz. (Bu belgelerle sınav
                başvurunuzu yapabilirsiniz.)
              </p>
              <p>
                Profesyonel Koçluk eğitimi sonrasında öğrencilerimize
                desteğimizi sürdürüyoruz. Eğitim sonrasında 12 Saatlik “MYK Koç
                Seviye-6” Sınav Hazırlık Programıyla, öğrencilerimizin başarı
                şanslarını artırıyor ve Mesleki Yeterlilik Belgelerini
                almalarını kolaylaştırıyoruz.
              </p>
              <ul>
                <li>
                  <strong>Sınav Hazırlık Programın amacı:</strong> Bu program,
                  temel koçluk eğitimi almış olup mesleki yeterlilik belgesi
                  almak için MYK Koç Seviye-6 sınavına girecek olanlar, sınavda
                  başarı oranını artırmak ve sorunsuz bir sınav süreci geçirmek
                  isteyenler için hazırlanmıştır.{" "}
                </li>
                <li>
                  <strong>Programa Katılım Koşulu:</strong> Bu programa, 72 Saat
                  Profesyonel Koçluk (Seviye-1) sertifika programını tamamlamış
                  olan öğrencilerimiz ya da 60 saatlik (kanıtlanabilir) temel
                  koçluk eğitimini tamamlanmış olanlar katılabilir.
                </li>
                <li>
                  <strong>Program süresi:</strong> Program 12 saat / 2 Gün
                  sürelidir.
                </li>
                <li>
                  <strong>Program Eğitim Modülü İçeriği:</strong> Teorik Sınav
                  Soru Bankası ve Analizleri, grup mentorluk desteği ile
                  Performans Sınavı Hazırlık ve Simülasyon
                </li>
              </ul>
              <hr className="my-4" />
              <h3>Neden Sizi Seçmeliyim? Programın Faydaları:</h3>
              <ul>
                <li>
                  <strong>Özel Destek:</strong> MYK sınavının göz korkutucu
                  olabileceğini biliyoruz. Hazırlık programımız, güçlü
                  yönlerinizi ve geliştirilecek alanlarınızı ele alan
                  kişiselleştirilmiş rehberlik desteği içerir.
                </li>
                <li>
                  <strong>Odaklanmış Uygulama:</strong> Hedeflenen uygulama
                  oturumlarımız, MYK sınavında değerlendirilen temel
                  yeterliliklere odaklanarak koçluk becerilerinizi geliştirir.
                  Sınav formatına dair güven ve aşinalık geliştireceksiniz.
                </li>
                <li>
                  <strong>Sınava Özel Stratejiler:</strong> Sınav ortamının
                  benzersiz baskısını yönetmeye yönelik test çözme stratejileri
                  ve ipuçları sunarak teorik bilginin ötesine geçiyoruz.
                </li>
                <li>
                  <strong>Başarı Topluluğu:</strong> Destekleyici bir öğrenme
                  atmosferi geliştirerek ve geri bildirim ve işbirliği için
                  fırsatlar yaratarak diğer motivasyonlu profesyonellerle
                  birlikte hazırlanın.
                </li>
                <li>
                  <strong>METASİSTEMİK Farkı:</strong> Sistemik Koçluk ve
                  Farkındalık Geliştirmeye olan bağlılığımız, koçluk
                  uygulamalarına ilişkin size daha geniş bir bakış açısı
                  sağlayarak, sizi MYK belgesi olsun veya olmasın, daha kapsamlı
                  ve etkili bir koç haline getirir.
                </li>
              </ul>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <h3>
                MYK “EĞİTİM UZMANI” SEVİYE-6 Sınavlarına Hazırlık Programı
              </h3>
              <p>Program Tanıtımı: Resmi Meslek Kimlik Belgenizi Edinin</p>
              <p>
                100 saat süreli ve ulusal ve uluslararası standartlara
                uyumluluğu esas alan Profesyonel Eğitmenlik Sertifika Programı
                sunuyoruz. Bu nitelikli eğitim müfredatı,
              </p>
              <p>
                Mesleki yeterlilikleri için gerekli olan uyarlamalar yapılarak
                hazırlanmıştır. Sertifika Programı sonunda 24 saatlik MYK
                Seviye-6 Sınavlarına Hazırlık Programıyla, katılımcılarımızın
                hem “Eğitim Uzmanı” hem de “Kurumsal Eğitmen” sınavlarında
                başarı şanslarını artırıyor ve mesleki yeterlilik belgelerini
                almalarını kolaylaştırıyoruz.
              </p>
              <ul>
                <li>
                  <strong>Programın amacı:</strong> Bu program, gerekli ön
                  koşulları yerine getirerek “Eğitim Uzmanı” ve/veya “Kurumsal
                  Eğitmen” resmi meslek belgelerini almak için MYK Seviye-6
                  sınavlarına girecek olanlar, sınavda başarı oranını artırmak
                  ve sorunsuz bir sınav süreci geçirmek isteyenler için
                  hazırlanmıştır.
                </li>
                <li>
                  <strong>Programa Katılım Koşulu:</strong> Bu programa, 100
                  Saat Profesyonel Eğitmenlik Sertifika Programımızı tamamlamış
                  olanlar (ya da kanıtlanabilir eş değer bir programdan mezun
                  olanlar) katılabilir.
                </li>
                <li>
                  <strong>Program süresi:</strong> Program 24 saat / 4 Gün
                  sürelidir.
                </li>
                <li>
                  <strong>Program Eğitim Modülü İçeriği:</strong> Eğitim Uzmanı
                  Sınav Hazırlık Programı / 12 Saat ve Kurumsal Eğitmen Sınavı
                  Hazırlık Programı / 12 Saat
                </li>
              </ul>
              <hr className="my-4" />
              <h3>Neden Sizi Seçmeliyim? Programın Faydaları:</h3>
              <ul>
                <li>
                  <strong>Kapsamlı Hazırlık:</strong> Programımız her iki sınavı
                  da kapsayarak süreci kolaylaştırır ve ayrı hazırlıklara göre
                  daha uygun maliyetli bir çözüm sunar.
                </li>
                <li>
                  <strong>Pratik Odak:</strong> Sınava özgü gereklilikleri ele
                  alırken gerçek dünyadaki eğitim ve kolaylaştırma becerilerinin
                  geliştirilmesini vurguluyoruz. Doğrudan uygulanabilir
                  uzmanlıkla diğerlerinden ayrılacaksınız.
                </li>
                <li>
                  <strong>Sınav Simülasyonu:</strong> Alıştırma oturumu sınav
                  koşullarını simüle ederek güveninizi ve baskı altında
                  performans gösterme yeteneğinizi artırır.
                </li>
                <li>
                  <strong>Kişiye Özel Geri Bildirim:</strong> Katılımcılarımıza
                  kişiselleştirilmiş geri bildirim ve rehberlik sağlıyoruz.
                </li>
                <li>
                  <strong>METASİSTEMİK Farkı:</strong> Kolaylaştırma ve grup
                  dinamikleri konusundaki sistemik bakış açımız sizi
                  diğerlerinden ayırarak daha etkili ve dönüştürücü öğrenme
                  ortamları yaratmanıza olanak tanır.
                </li>
              </ul>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <h3>
                MYK “KURUMSAL EĞİTMEN” SEVİYE-6 Sınavlarına Hazırlık Programı
              </h3>
              <p>Program Tanıtımı: Resmi Meslek Kimlik Belgenizi Edinin</p>
              <p>
                100 saat süreli ve ulusal ve uluslararası standartlara
                uyumluluğu esas alan Profesyonel Eğitmenlik Sertifika Programı
                sunuyoruz. Bu nitelikli eğitim müfredatı,
              </p>
              <p>
                Mesleki yeterlilikleri için gerekli olan uyarlamalar yapılarak
                hazırlanmıştır. Sertifika Programı sonunda 24 saatlik MYK
                Seviye-6 Sınavlarına Hazırlık Programıyla, katılımcılarımızın
                hem “Eğitim Uzmanı” hem de “Kurumsal Eğitmen” sınavlarında
                başarı şanslarını artırıyor ve mesleki yeterlilik belgelerini
                almalarını kolaylaştırıyoruz.
              </p>
              <ul>
                <li>
                  <strong>Programın amacı:</strong> Bu program, gerekli ön
                  koşulları yerine getirerek “Eğitim Uzmanı” ve/veya “Kurumsal
                  Eğitmen” resmi meslek belgelerini almak için MYK Seviye-6
                  sınavlarına girecek olanlar, sınavda başarı oranını artırmak
                  ve sorunsuz bir sınav süreci geçirmek isteyenler için
                  hazırlanmıştır.
                </li>
                <li>
                  <strong>Programa Katılım Koşulu:</strong> Bu programa, 100
                  Saat Profesyonel Eğitmenlik Sertifika Programımızı tamamlamış
                  olanlar (ya da kanıtlanabilir eş değer bir programdan mezun
                  olanlar) katılabilir.
                </li>
                <li>
                  <strong>Program süresi:</strong> Program 24 saat / 4 Gün
                  sürelidir.
                </li>
                <li>
                  <strong>Program Eğitim Modülü İçeriği:</strong> Eğitim Uzmanı
                  Sınav Hazırlık Programı / 12 Saat ve Kurumsal Eğitmen Sınavı
                  Hazırlık Programı / 12 Saat
                </li>
              </ul>
              <hr className="my-4" />
              <h3>Neden Sizi Seçmeliyim? Programın Faydaları:</h3>
              <ul>
                <li>
                  <strong>Kapsamlı Hazırlık:</strong> Programımız her iki sınavı
                  da kapsayarak süreci kolaylaştırır ve ayrı hazırlıklara göre
                  daha uygun maliyetli bir çözüm sunar.
                </li>
                <li>
                  <strong>Pratik Odak:</strong> Sınava özgü gereklilikleri ele
                  alırken gerçek dünyadaki eğitim ve kolaylaştırma becerilerinin
                  geliştirilmesini vurguluyoruz. Doğrudan uygulanabilir
                  uzmanlıkla diğerlerinden ayrılacaksınız.
                </li>
                <li>
                  <strong>Sınav Simülasyonu:</strong> Alıştırma oturumu sınav
                  koşullarını simüle ederek güveninizi ve baskı altında
                  performans gösterme yeteneğinizi artırır.
                </li>
                <li>
                  <strong>Kişiye Özel Geri Bildirim:</strong> Katılımcılarımıza
                  kişiselleştirilmiş geri bildirim ve rehberlik sağlıyoruz.
                </li>
                <li>
                  <strong>METASİSTEMİK Farkı:</strong> Kolaylaştırma ve grup
                  dinamikleri konusundaki sistemik bakış açımız sizi
                  diğerlerinden ayırarak daha etkili ve dönüştürücü öğrenme
                  ortamları yaratmanıza olanak tanır.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
