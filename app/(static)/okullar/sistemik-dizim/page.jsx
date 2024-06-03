import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import {
  systemicwhatwegain,
  systemicwhatwegain2,
} from "@/content/data/schools";
import { kocluky1, kocluky2, metasistemikNedir } from "@/public/assets/images";
import { mykLogo, icfLogo } from "@/public/assets/logo";

import SystemicWhy from "@/components/sections/schools/systemic-why";
import SystemicGain from "@/components/sections/schools/systemic-gain";

import SystemicPrograms from "@/components/sections/schools/systemic-programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>SİSTEMİK DİZİM OKULU</HeaderTitle>
      <HeaderImage>Sistemik Dizim Okulu Hakkında</HeaderImage>

      <PageContent h2Title="SİSTEMİK DİZİM OKULU">
        <p>
          Sistemik Dizim Okulumuz, eğitimlerimizin uluslararası Sistemik Dizim
          Kolaylaştırıcılığı standartlarına uyumluluğunu sağlamayı,
          eğitimlerimizin sürekli güncelliğini sağlayarak, öğrencilerimizin
          öğrenme süreçlerini kararlılıkla desteklemeyi, Farkındalık Geliştirme
          ve Sistemik Çalışma anlayışımızı eğitimlerimize entegre etmeyi kendine
          misyon edinmiştir.
        </p>
        <p>
          Platformumuzda yer alan dört mesleki okulun hepsi aynı vizyonu
          paylaşmaktadır: Farkındalık Geliştirmeyi ve Sistemik Çalışmayı
          öncelikle bir yaşama sanatı olarak kavranmasını sağlamak.
        </p>
        <p>
          Sistemik Dizim Kolaylaştırıcılığı henüz resmi bir meslek olarak
          düzenlenmemiştir. Bu bağlamda Sistemik Dizim Okulumuz, eğitimlerimize
          katılım ön şartı olarak, 72 saat süreli Profesyonel Koçluk (Seviye-1)
          Eğitiminin ( yada ICF Level-1 / ACSTH) tamamlanmış olmasını şart
          koşmaktadır.
        </p>
        <p>
          Sistemik Dizim Okulumuz, “Farkındalık Geliştirme ve Sistemik Çalışma”
          alanlarındaki uzmanlığını eğitim programlarına entegre etmiştir.
          Profesyonel SD Kolaylaştırıcılığına dair ihtiyaç duyabileceğiniz çok
          boyutlu derinliği ve özgünlüğü eğitim programlarımızda bulacaksınız.
        </p>
      </PageContent>

      <SystemicWhy />
      <SystemicGain
        img={kocluky1}
        img2={kocluky2}
        gain={systemicwhatwegain}
        gain2={systemicwhatwegain2}
      />

      <SystemicPrograms />

      <SocialMedia />
    </>
  );
}
