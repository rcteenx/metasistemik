import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import MissionVision from "@/components/sections/platform/mission-vision";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Metasistematik</HeaderTitle>

      <PageContent h2Title="Farkındalığın Işığında, Dönüşüme Adım Adım: Platformumuzun Hikayesi">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mM373kwYNTY?si=L18Ks_cBXlTQ7x-0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          2020 yılında Enneagram Sistemi öğretim programlarıyla başladığımız
          yolculuk, 2024'te "METASİSTEMİK Farkındalık Geliştirme ve Sistemik
          Çalışma" markasıyla yeni bir boyuta taşındı. 4 farklı branştaki
          mesleki eğitim okulumuzla, bireylerin ve organizasyonların
          potansiyelini açığa çıkarmak ve yetenek geliştirmek için Ulusal ve
          Uluslararası standartlarda çeşitli eğitim programlarımızla hizmet
          veriyor rehberlik sunuyoruz.
        </p>
        <h3>Bireysel ve Kurumsal Dönüşümün Anahtarı:</h3>
        <p>
          Platformumuzda yer alan sertifika programlarımız, farkındalık
          geliştirme ve sistemik çalışma prensiplerine dayalı olarak ulusal ve
          uluslararası standartlara uyumluluğu sağlayarak, bireylerin ve
          kurumların potansiyellerini keşfetmelerine ve tam potansiyellerine
          ulaşmalarına yardımcı olmak üzere tasarlanmıştır. Eğitim
          Programlarımızın her biri, bağlantısallığa ve bütünselliğe dayalı
          (meta)sistemik perspektifi merkeze alarak, Enneagram Sistemi, Sistemik
          Dizim, Koçluk ve Eğitmenlik mesleki alanlarına yönelik, başta
          Psikoloji ve Felsefe olmak üzere, Eğitim Bilimleri, İş Yönetimi,
          Kişisel Gelişim ve diğer ilgili disiplinlerden faydalanarak
          hazırlanmaktadır. Platform bünyesinde katılımcılara yüksek
          standartlarda mesleki eğitim ve gelişim imkanları sunmanın yanı sıra,
          sertifika programlarımız bireylere, bağlantısallığı ve bütünselliği
          karmaşık sistemler çerçevesinde anlama, daha bilinçli kararlar verme,
          potansiyelleri açığa çıkarma, yetenek geliştirme, daha etkili iletişim
          ve ilişki kurma becerileriyle daha iyi işlevsellik kazandırmayı
          amaçlamaktadır.
        </p>
        <h3>Herkes İçin Fırsatlar:</h3>
        <p>
          Eğitim programlarımız, her bireyin ve kurumun ihtiyaçlarına uygun bir
          seçenek sunmaktadır. Farklı seviyelerdeki programlarımız, yeni
          başlayanlardan deneyimli profesyonellere kadar herkese hitap
          etmektedir. Ayrıca, esnek öğrenme seçeneklerimiz ile programlarımıza
          dilediğiniz zaman ve mekandan katılabilirsiniz. Platformumuz
          bünyesinde ye alan okullarımız, farkındalık geliştirme ve sistemik
          çalışma anlayışına bağlı kalarak, organizasyonların eğitim ve gelişim
          ihtiyaçlarına yönelik uçtan-uca çözüm üretebilmektedir.
        </p>
        <h3>Birlikte Öğrenme ve Büyüme:</h3>
        <p>
          Platformumuz, sadece eğitim programları sunmakla kalmaz, aynı zamanda
          bir topluluk oluşturmayı da amaçlamaktadır. Farkındalık geliştirme ve
          sistemik çalışma alanlarında bilgi ve deneyim alışverişini teşvik eden
          platformumuz, katılımcılarla grup çalışması amacıyla bir araya gelerek
          birlikte öğrenme ve büyüme imkanı sunmaktadır.
        </p>
        <h3>Daha Adil ve Sürdürülebilir Bir Gelecek İçin:</h3>
        <p>
          Farkındalık geliştirme ve sistemik çalışma anlayışımızın gücüne
          inanıyoruz. Platformumuzun vizyonu, bireylerin ve kurumların
          potansiyellerini açığa çıkararak, daha adil, sürdürülebilir ve refah
          dolu bir dünya inşa etmeye katkıda bulunmaktır.
        </p>
        <h3>Bize Katılın ve Dönüşümün Bir Parçası Olun:</h3>
        <p>
          Farkındalığınızı geliştirmek, potansiyelinizi keşfetmek ve daha iyi
          bir dünya için katkıda bulunmak istiyorsanız, platformumuza katılın.
          Birlikte, daha bilinçli ve daha sorumlu bir yaşam için çalışabiliriz.
        </p>
        <p>
          Ücretsiz Eğitici Materyaller içeren ve periyodik olarak yenilenip
          sunduğumuz
        </p>
      </PageContent>

      <MissionVision />

      <SocialMedia />
    </>
  );
}
