import PageContent from "@/components/templates/pageContent";

import ServicesWhy from "@/components/sections/services/why";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Kurumsal Hizmetler",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Metasistemik'in Dönüştürücü Kurumsal Çözümleriyle Organizasyonunuzu Yükseltin">
        <p>
          Metasistemik yalnızca bireysel hizmetlerle sınırlı bir platform
          değildir; organizasyonların ihtiyaç duyduğu uyarlanabilir katalizör
          işlevini de üstleniyoruz. Kapsamlı kurumsal çözüm yetkinliğimiz
          kuruluşunuzu yeni boyutlara taşımak için sistemik farkındalığın ve
          değişimin gücünden yararlanır.
        </p>
        <hr className="my-2" />
        <h3 className="my-0 py-0">
          Metasistemik Neden Kuruluşunuzun Büyümesi İçin İdeal Ortaktır:
        </h3>
        <ul className="my-0 py-0 [&>li]:my-2 [&>li>dd]:font-bold ">
          <li>
            <dd>Bütünsel Yaklaşım: </dd>
            <dt>
              Organizasyonların karmaşık, birbirine bağlı ekosistemler olduğunun
              bilincindeyiz. Çözümlerimiz bireyler, ekipler ve sistemler
              arasındaki karmaşık ilişkileri kabul ederek baştan sona
              sürdürülebilir büyümeyi teşvik eder.
            </dt>
          </li>
          <li>
            <dd>Kanıtlanmış Metodolojiler: </dd>
            <dt>
              Sistemik Koçluk, Dizimler, Kurumsal Eğitim, Enneagram ve yetişkin
              öğrenme ilkeleri konularında kapsamlı uzmanlıktan yararlanıyoruz.
              Güçlü araç setimiz dönüştürücü organizasyonel değişimi
              güçlendirir.
            </dt>
          </li>
          <li>
            <dd>Özel Çözümler: </dd>
            <dt>
              Her kuruluşun kendine özgü doğasının bilincinde olarak, özel
              hedeflerinize, zorluklarınıza ve kültürünüze mükemmel şekilde uyum
              sağlayan özel çözümler üretmek için sizinle yakın işbirliği
              yapıyoruz.
            </dt>
          </li>
          <li>
            <dd>Deneyimli Rehberler: </dd>
            <dt>
              Deneyimli kolaylaştırıcılardan, koçlardan, eğitmenlerden ve
              danışmanlardan oluşan ekibimiz, dönüşüm yolculuğunuzda sizinle
              ortak olmaya kararlıdır. Her aşamada uzman rehberliği ve sarsılmaz
              destek sağlıyoruz.
            </dt>
          </li>
        </ul>
        <hr className="my-2" />
        <h3 className="my-0 py-0">Dönüştürücü Kurumsal Hizmetlerimiz:</h3>
        <ol className=" list-decimal text-left">
          <li>
            <strong>Liderlik Gelişim Programları:</strong> Gelişmiş sistemik
            farkındalık, duygusal zeka ve işbirlikçi liderlik becerileri yoluyla
            liderlerinizi olumlu değişimin katalizörleri haline getirecek
            şekilde güçlendirin.
          </li>
          <li>
            <strong>Yüksek Performanslı Takım Gelişimi:</strong> Dinamik atölye
            çalışmaları, kapsamlı inzivalar ve hedefe yönelik koçluk
            müdahaleleri aracılığıyla takımlarınızın kolektif potansiyelini
            ortaya çıkarın. Etkili sonuçlar elde etmek için güveni, işbirliğini
            ve ortak sorumluluğu geliştirin.
          </li>
          <li>
            <strong>Organizasyon Kültürü Dönüşümü:</strong> Farkındalık,
            kapsayıcılık ve sürekli öğrenmeyle gelişen bir kültürü birlikte
            yaratın. Bu canlı kültür, yenilikçiliği, uyarlanabilirliği ve
            çalışanların refahını teşvik edecektir.
          </li>
          <li>
            <strong>Çatışma Dönüşümü ve Arabuluculuk:</strong> Açık diyaloğu
            kolaylaştırarak ve paydaşlar arasında daha güçlü, daha sağlıklı
            ilişkiler kurarak kuruluşunuz içindeki çatışmanın temel nedenlerini
            ele alın.
          </li>
          <li>
            <strong>Stratejik Değişim Yönetimi:</strong> Sistemik yaklaşımları
            kullanarak organizasyonel değişime güven ve dayanıklılıkla yön
            verin. Çalışanları dahil edin, direnci azaltın ve başarılı sonuçlar
            elde edin.
          </li>
          <li>
            <strong>Özel Atölyeler ve Eğitim:</strong> Uzman ekibimiz,
            kuruluşunuzun özel ihtiyaçlarını karşılamak için sistem düşüncesi ve
            iletişimden çeşitlilik ve katılıma kadar çok çeşitli konuları
            kapsayan özel programlar tasarlar ve sunar.
          </li>
          <li>
            <strong>Sistemik Yaklaşımla Yönetici ve Takım Koçluğu:</strong>{" "}
            Performansı, liderlik etkinliğini ve genel refahı artırmak için
            liderlerinizi ve ekiplerinizi kişiselleştirilmiş sistemik koçlukla
            güçlendirin.
          </li>
        </ol>
        <hr className="my-2" />
        <h3>Şirket İçi Çözümler</h3>
        <ul>
          <li>
            <strong>Özelleştirilmiş Şirket İçi Eğitim:</strong> Sistemik
            yaklaşıma dayalı uzmanlığımızı doğrudan size getiriyoruz, benzersiz
            ihtiyaçlarınıza ve hedeflerinize mükemmel şekilde uyum sağlayan
            hedefe yönelik eğitim programları tasarlıyor ve sunuyoruz.
          </li>
          <li>
            <strong>Sistemik Yönetici Koçluğu ve Liderlik Toplantıları:</strong>{" "}
            Yönetici ekibinize sistemik perspektife dayalı derin düşünme,
            stratejik planlama ve beceri geliştirme için odaklanmış ve
            sürükleyici bir deneyim sağlayın.
          </li>
          <li>
            <strong>Organizasyon Kültürü Değerlendirmeleri:</strong> Kapsamlı
            değerlendirmeler ve kolaylaştırılmış sistemik çalıştaylar
            aracılığıyla kuruluşunuzun kültürüne dair değerli bilgiler edinin ve
            iyileştirilecek alanları belirleyin.
          </li>
        </ul>
        <hr className="my-2" />
        <h3>Atölyeler ve Etkinlikler</h3>
        <ul>
          <li>
            <strong>Ekip Oluşturma ve İşbirliği Atölyeleri:</strong> İletişimi,
            güveni ve işbirliğini geliştirmek, sonuçta üretkenliği ve yeniliği
            artırmak için ekiplerinizi etkileşimli etkinliklere ve alıştırmalara
            dahil edin.
          </li>
          <li>
            <strong>
              Kurumsal Çalışanlara Yönelik Uzmanlaşmış Sertifika Programları:
            </strong>{" "}
            Çalışanlarınıza sistemik koçluk, dizimler, kurumsal eğitim ve
            Enneagram'ı kapsayan özel profesyonel sertifika programlarımıza
            katılma fırsatı sunun.
          </li>
          <li>
            <strong>Web Seminerleri ve Sanal Etkinlikler:</strong> İlgi çekici
            çevrimiçi web seminerleri ve sanal etkinlikler aracılığıyla
            erişiminizi genişletin ve uzmanlığımıza kolay erişim sağlayın.
          </li>
        </ul>
        <hr className="my-2" />
        <h3>Eğitim Kampları</h3>
        <ul>
          <li>
            <strong>Sistemik Liderlik Eğitim Kampı:</strong> Yüksek potansiyele
            sahip liderler için, yoğun eğitim, koçluk ve deneyimsel öğrenme
            yoluyla gelişimlerini hızlandıran ve onları gelecekteki zorluklara
            hazırlayan dönüştürücü bir deneyim.
          </li>
          <li>
            <strong>Yoğun Sistemik Dizimler:</strong> Derinlemesine bir
            yoğunlaştırılmış program aracılığıyla sistemik dizimlerdeki anlayışı
            ve pratik becerileri derinleştirin.
          </li>
          <li>
            <strong>Enneagram’la Derin İnziva:</strong> Kişisel farkındalığı,
            kişisel gelişimi ve daha sağlıklı ilişkileri geliştiren özel bir
            hafta sonu inzivasında Enneagram sistemini keşfedin.
          </li>
        </ul>
        <hr className="my-2" />
        <h3>Kuruluşunuz için Somut Sonuçlar</h3>
        <ul>
          <li>
            <strong>Geliştirilmiş Sonuç:</strong> Ölçülebilir iş sonuçlarına yol
            açan artan üretkenliği, verimliliği ve yeniliği deneyimleyin.
          </li>
          <li>
            <strong>Bağlı İşgücü:</strong> Değer verildiğini, bağlı olduğunu ve
            kuruluşun başarısına yatırım yaptığını hisseden bir iş gücünü teşvik
            edin.
          </li>
          <li>
            <strong>İşbirliğine Dayalı Ortam:</strong> Etkili iletişim kuran,
            zahmetsizce işbirliği yapan ve sorunları yaratıcı bir şekilde çözen
            ekipler yetiştirin.
          </li>
          <li>
            <strong>Uyarlanabilir Kapasite:</strong> Değişimi büyüme ve evrim
            için bir fırsat olarak benimseyin.
          </li>
          <li>
            <strong>Olumlu İtibar:</strong> Üstün yetenekleri kendine çeken ve
            elinde tutan güçlü bir işveren markası oluşturun.
          </li>
        </ul>
        <h4>
          Kuruluşunuzun Tam Potansiyelini Ortaya Çıkarmak için Metasistemik ile
          Ortak Olun
        </h4>
        <p>
          Statükoya razı olmayın. Metasistemik ile dönüştürücü bir yolculuğa
          çıkın ve kuruluşunuzun performans, işbirliği ve refah için gerçek
          potansiyelinin kilidini açın.
        </p>
        <h4>
          Hizmetlerimizi benzersiz ihtiyaçlarınıza göre nasıl
          uyarlayabileceğimizi görüşmek üzere danışmak için bugün bizimle
          iletişime geçin.
        </h4>
      </PageContent>

      <ServicesWhy />

      <SocialMedia />
    </>
  );
}
