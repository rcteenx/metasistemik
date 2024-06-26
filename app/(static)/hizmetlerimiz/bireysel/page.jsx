import PageContent from "@/components/templates/pageContent";

import ServicesWhy from "@/components/sections/services/why";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Bireysel Hizmetlerimiz: Kişisel Dönüşümünüzü Güçlendirin">
        <p>
          Metasistemik, bireysel büyümenin kolektif dönüşümün temeli olduğuna
          inanıyor. Kendini keşfetme, kişisel gelişim ve sistemik farkındalık
          yolculuğunuzu desteklemek için çok çeşitli bireysel hizmetler
          sunuyoruz.
        </p>
        <hr className="my-2" />
        <h3 className="my-0 py-0">Dönüşüme Giden Yolunuzu Keşfedin:</h3>
        <ul className="my-0 py-0 [&>li]:my-2 [&>li>dd]:font-bold ">
          <li>
            <dd>Bireysel Sistemik Koçluk: </dd>
            <dt>
              Deneyimli koçlarımızın rehberliğinde kişiselleştirilmiş bir koçluk
              yolculuğuna çıkın. Hedeflerinize netlik kazandırın, zorlukların
              üstesinden gelin ve benzersiz yaşam sisteminiz bağlamında tüm
              potansiyelinizi ortaya çıkarın.
            </dt>
          </li>
          <li>
            <dd>Sistemik Dizim Seansları: </dd>
            <dt>
              Bireysel sistemik dizim seansları aracılığıyla hayatınızı
              etkileyebilecek gizli dinamikleri ve atalardan kalma kalıpları
              ortaya çıkarın. Yeni bakış açıları kazanın, çözümler bulun ve
              ilişkilerinizde ve refahınızda derin değişimler deneyimleyin.
            </dt>
          </li>
          <li>
            <dd>Enneagram Yazma ve Kişisel Gelişim Oturumları:</dd>
            <dt>
              Enneagram yazma oturumuyla, kişilik tipinizi kişisel
              doğrulamanızla birlikte keşfedin ve kişisel anlayışınızı
              derinleştirin. İlişkilerinizi geliştirmek ve hayatın zorluklarını
              daha büyük bir farkındalıkla aşmak için kişilik türünüzü,
              motivasyonlarınızı ve büyüme fırsatlarınızı keşfedin.
            </dt>
          </li>
          <li>
            <dd>Grupla İnzivalar ve Atölye Çalışmaları: </dd>
            <dt>
              Kendinizi keşfetmeyi, farkındalığı ve kişisel gelişimi teşvik
              etmek için tasarlanmış dönüştürücü deneyimlere bırakın. Grup
              inzivalarımız ve atölyelerimiz, benzer düşüncelere sahip
              bireylerle düşünmek, öğrenmek ve bağlantı kurmak için bir alan
              sunar.
            </dt>
          </li>
          <li>
            <dd>
              Çevrimiçi Mesleki Yeterlilik ve Gelişim Sertifika Programları:{" "}
            </dd>
            <dt>
              Platformumuzda yer alan 4 okulumuz, mesleki yeterlilik ve gelişimi
              sağlayan 15 sertifika programı sunmaktadır.{" "}
            </dt>
          </li>
          <li>
            <dd>Grup Atölyeleri ve Etkinlikleri: </dd>
            <dt>
              Kişisel gelişim ve dönüşüme kendini adamış bireylerden oluşan
              topluluklarımıza katılın. Destekleyici bir ortamda başkalarıyla
              bağlantı kurun, deneyimleri paylaşın ve birbirinizden öğrenin.
            </dt>
          </li>
        </ul>
        <hr className="my-2" />
        <h3 className="my-0 py-0">
          Bireysel Yolculuğunuz için Neden Metasistemik'i Seçmelisiniz:
        </h3>
        <ul>
          <li>
            <strong>Deneyimli Uygulayıcılar:</strong> Yetenekli koçlardan,
            kolaylaştırıcılardan, eğitmenlerden ve uygulayıcılardan oluşan
            ekibimiz, bireylere dönüşüme giden benzersiz yollarda rehberlik etme
            konusunda tutkuludur.
          </li>
          <li>
            <strong>Bütünsel Yaklaşım:</strong> Kişisel gelişime kapsamlı bir
            yaklaşım sunmak için sistemik koçluk, dizimler ve Enneagram
            uygulamaları dahil olmak üzere birçok yöntemi entegre ediyoruz.
          </li>
          <li>
            <strong>İnsana Odaklanma:</strong> Bireysel ihtiyaçlarınız ve
            hedefleriniz hizmetlerimizin merkezinde yer alır. Yaklaşımımızı, en
            alakalı ve etkili desteği almanızı sağlayacak şekilde uyarlıyoruz.
          </li>
          <li>
            <strong>Mükemmelliğe Bağlılık:</strong> Dönüştürücü yolculuğunuz
            için güvenli ve destekleyici bir alan yaratarak en yüksek
            profesyonellik ve etik standartlarını destekliyoruz.
          </li>
        </ul>
        <hr className="my-2" />
        <h3>Kişisel Gelişiminizde Bir Sonraki Adımı Atın</h3>
        <p>
          İster netlik, şifa, büyüme, ister sadece kendinize ve dünyadaki
          yerinize dair daha derin bir anlayış arayışında olun, Metasistemik
          sizi desteklemek için burada. Bireysel hizmetlerimizle sistemik
          farkındalığın dönüştürücü gücünü keşfedin.
        </p>
      </PageContent>

      <ServicesWhy />

      <SocialMedia />
    </>
  );
}
