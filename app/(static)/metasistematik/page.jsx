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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3>Farkındalığın Işığında, Dönüşüme Adım Adım</h3>
        <p>
          2020'de Enneagram Okulu’muzla başladığımız yolculuk, 2024'te
          "METASİSTEMİK Farkındalık Geliştirme ve Sistemik Çalışma Platformu"
          markasıyla yeni bir boyuta taşındı.
        </p>
        <p>
          Platformumuzda yer alan 4 okulumuz ile birlikte global standartlarda
          tasarladığımız mesleki yeterlilik ve gelişime yönelik eğitim
          programlarımızla hizmet veriyor ve rehberlik sunuyoruz.
        </p>
        <h3>Metasistemik Nedir?</h3>

        <p>
          "Meta sistemik”, kelime anlamı olarak, Sistem’le ilgili olanların
          ötesinde; onları aşan, anlamına gelmektedir.
        </p>
        <p>
          Metasistemik yaklaşım, “Farkındalık Geliştirme” anlayışına ve
          “Sistemik Çalışma” uygulamalarına dayanır.
        </p>
        <p>
          Özünde Metasistemik yaklaşım, olağan bir yaşamda olağanüstü insanlar
          olmaya çalışma anlayışına meydan okur.
        </p>
        <p>
          Bunun yerine, varoluşun olağanüstü doğasına dahil olarak, olağan birer
          insan olmaya çalışmaya teşvik eder.
        </p>
        <p>
          Yaşamın bu “Metasistemik” kavranışı, çeşitli seviyelerde ve modlarda
          Bütün-Parça ilişkisini anlamada ve uyumlanmada bitmeyen bir süreçtir;
          bunu, “Farkındalık Geliştirme” olarak tanımlıyoruz.
        </p>
        <p>
          Yaşamı algılayışımızdaki bu değişim, bağlantısal bütünlüğünü takdir
          etmemize olanak sağlayan, Metasistemik bakış açısını yansıtır.
        </p>
        <p>
          Böylece, kim(?) olduğumuz sorusuna katı bireyselci sınırlamalar
          içerisinde cevap aramak yerine, ilişkilerimizin dinamik ve bağlantısal
          bir akış içerisinde var olduğunu deneyimleyerek Farkındalığımızı
          Geliştiriyor, Sistemik Çalışmalarla kendimizi, diğerlerini ve yaşamı
          keşfediyoruz.
        </p>
      </PageContent>

      <MissionVision />

      <SocialMedia />
    </>
  );
}
