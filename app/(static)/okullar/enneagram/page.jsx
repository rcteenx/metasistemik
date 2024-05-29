import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import {
  enneagramwhatwegain,
  enneagramwhatwegain2,
} from "@/content/data/schools";
import { kocluky1, kocluky2, metasistemikNedir } from "@/public/assets/images";
import { mykLogo, icfLogo } from "@/public/assets/logo";

import EnneagramWhy from "@/components/sections/scools/enneagram-why";
import EnneagramGain from "@/components/sections/scools/enneagram-gain";

import EnneagramPrograms from "@/components/sections/scools/enneagram-programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>ENNEAGRAM OKULU</HeaderTitle>
      <HeaderImage>Enneagram Okulu Hakkında</HeaderImage>

      <PageContent h2Title="ENNEAGRAM OKULU">
        <p>
          Üç seviyeden oluşan sertifika programlarıyla Enneagram Okulumuz,
          uluslararası Enneagram Uygulayıcılığı ve Enneagram Öğretmenliği eğitim
          programları standartlarına uyumluluğunu sağlamayı, eğitimlerimizin
          sürekli güncelliğini sağlayarak, öğrencilerimizin öğrenme süreçlerini
          kararlılıkla desteklemeyi, Farkındalık Geliştirme ve Sistemik Çalışma
          anlayışımızı eğitimlerimize entegre etmeyi kendine misyon edinmiştir.
        </p>
        <p>
          Platformumuzda yer alan dört mesleki okulun hepsi aynı vizyonu
          paylaşmaktadır: Farkındalık Geliştirmeyi ve Sistemik Çalışmayı
          öncelikle bir yaşama sanatı olarak kavranmasını sağlamak.
        </p>
        <h3>Enneagram Eğitimlerine Katılım Koşulları</h3>
        <p>
          Enneagram Sistemi Seviye-1 eğitimi için herhangi bir ön koşul
          gerekmemektedir. Bununla birlikte dünya genelinde ve ülkemizde,
          Enneagram Uygulayıcılığı ve Enneagram Öğretmenliği henüz resmi birer
          meslek olarak düzenlenmemiştir. Bu bağlamda, Enneagram Sistemi
          Seviye-1 eğitimini tamamlayıp, mesleki yeterlilik eğitimi olan
          Enneagram Uygulayıcılığı Seviye-2 Sertifika programına katılabilmek
          için 72 saatlik Profesyonel Koçluk Seviye-1 (ya da ICF Level-1 /
          ACSTH) eğitimi tamamlanmış olmalıdır. Enneagram Uygulayıcılığı
          Seviye-2 eğitimini tamamlayıp, devam ve gelişim yolu olan Enneagram
          Öğretmenliği Seviye-3 Sertifika Programına katılabilmek içinse 100
          Saatlik Profesyonel Eğitmenlik Sertifika Programının da tamamlanmış
          olması gerekmektedir.
        </p>
        <p>
          Enneagram Okulumuz, “Farkındalık Geliştirme ve Sistemik Çalışma”
          alanlarındaki uzmanlığını eğitim programlarına entegre etmiştir.
          Enneagram Uygulayıcılığı ve Öğretmenliğine dair ihtiyaç
          duyabileceğiniz çok boyutlu derinliği ve özgünlüğü eğitim
          programlarımızda bulacaksınız.
        </p>
      </PageContent>

      <EnneagramWhy />
      <EnneagramGain
        img={kocluky1}
        img2={kocluky2}
        gain={enneagramwhatwegain}
        gain2={enneagramwhatwegain2}
      />

      <EnneagramPrograms />

      <SocialMedia />
    </>
  );
}
