import PageContent from "@/components/templates/pageContent";

import MykPrograms from "@/components/sections/exams/myk-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "MYK SEVİYE-6 MESLEKİ YETERLİLİK SINAVLARINA HAZIRLIK",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="MYK SEVİYE-6 MESLEKİ YETERLİLİK SINAVLARINA HAZIRLIK">
        <h3>Önce Mesleki Yeterlilik Eğitimi, Sonra Resmi Meslek Belgesi</h3>
        <p>
          Ulusal Resmi Meslek Belgesi Edinmek İçin, MYK’nın Avrupa Mesleki
          Yeterlilik Çerçevesine (EQF) göre uyumladığı MYK Seviye-6 sınavlarına
          katılıp başarılı olmak gerekmektedir.
        </p>
        <ul className="list-decimal list-inside [&>li]: ">
          <li>
            Koçluk Okulumuzda yer alan, Profesyonel Koçluk Sertifika Programı’nı
            tamamladıktan sonra, “MYK Koç Seviye-6” sınavına hazırlık programına
            katılabilirsiniz.
          </li>
          <li>
            Eğitmenlik Okulumuzda yer alan, Profesyonel Eğitmenlik Sertifika
            Programı’nı tamamladıktan sonra:
            <ul>
              <li>“MYK Eğitim Uzmanı Seviye-6” ve</li>
              <li>
                “MYK Kurumsal Eğitmen Seviye-6” sınavlarına hazırlık
                programlarına katılabilirsiniz.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Sınavlarına hazırlık programlarıyla entegre ettiğimiz mesleki eğitim
          sertifika programlarımız, süreç boyunca ihtiyaç duyacağınız
          kesintisizi desteğimizle birlikte sunulmaktadır.
        </p>
      </PageContent>

      <MykPrograms />

      <SocialMedia />
    </>
  );
}
