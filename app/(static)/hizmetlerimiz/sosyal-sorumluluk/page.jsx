import PageContent from "@/components/templates/pageContent";

import ServicesWhy from "@/components/sections/services/why";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Sosyal Sorumluluk",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Sosyal Sorumluluk Taahhüdümüz">
        <p>
          Metasistemik Farkındalık Geliştirme ve Sistemik Çalışma Platformu
          olarak dünyada olumlu değişim yaratma konusunda sistemik yaklaşımların
          gücüne inanıyoruz. Platformumuzda yer alan okullarımızla sistemik
          yaklaşıma dayalı eğitim uzmanlığımızı bir fark yaratmak için
          kullanmaya kararlıyız.
        </p>
        <hr className="my-2" />
        <h3 className="my-0 py-0">Nasıl Etki Yaratıyoruz?</h3>
        <ul className="my-0 py-0 [&>li]:my-2 [&>li>dd]:font-bold ">
          <li>
            <dd>Burslar ve İndirimli Programlar: </dd>
            <dt>
              Sivil toplum kuruluşları başta olmak üzere sosyal etki odaklı kişi
              ve kuruluşların dönüştürücü eğitimlerimize erişimini artırmak için
              finansal kolaylıklar dahil destekler sağlıyoruz.
            </dt>
          </li>
          <li>
            <dd>
              Kâr Amacı Gütmeyen Kuruluşlar ve Topluluk Gruplarıyla Ortaklıklar:{" "}
            </dd>
            <dt>
              Belirli sosyal zorlukları ele almak üzere tasarlanmış sistemik
              eğitim ve atölye çalışmaları tasarlamak ve sunmak için işbirliği
              yapıyoruz.
            </dt>
          </li>
          <li>
            <dd>Belirli Sosyal Gruplara Yönelik Girişimciliği Destekleme: </dd>
            <dt>
              Hem genç girişimcileri hem de kadın girişimcileri desteklemek
              üzere sistemik eğitim ve atölye programları tasarlıyor ve
              sunuyoruz.
            </dt>
          </li>
          <li>
            <dd>Ücretsiz Kaynaklar ve Web Seminerleri: </dd>
            <dt>
              Başkalarını güçlendirmek ve sistemik düşünceyi daha geniş bir
              kitleye tanıtmak için bilgi ve içgörüleri paylaşıyoruz.
            </dt>
          </li>
          <li>
            <dd>Global Sürdürülebilirlik Girişimleri: </dd>
            <dt>
              Global sorunlara yönelik sistemik çözümlere odaklanan proje ve
              diyalogları destekliyoruz.
            </dt>
          </li>
        </ul>
        <hr className="my-2" />
        <h3 className="my-0 py-0">
          Yeni Projelerde Ortak Olmak İçin Bize Katılın
        </h3>
        <ul>
          <li>
            <strong>Bizimle Ortak Olun:</strong> Kuruluşunuz değerlerimizi
            paylaşıyorsa işbirliği fırsatlarını keşfedin.
          </li>
          <li>
            <strong>Bildirin:</strong> Toplumsal değişime yönelik sistemik
            yaklaşımlar hakkında farkındalık yaratmak için çalışmalarımızı
            ağlarınızda paylaşın.
          </li>
        </ul>
        <p>
          Daha fazlasını öğrenmek ve birlikte nasıl çalışabileceğimizi tartışmak
          için bizimle iletişime geçin.
        </p>
      </PageContent>

      <ServicesWhy />

      <SocialMedia />
    </>
  );
}
