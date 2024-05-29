import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import {
  enneagramwhatwegain,
  enneagramwhatwegain2,
} from "@/content/data/schools";
import { kocluky1, kocluky2, metasistemikNedir } from "@/public/assets/images";
import { mykLogo, icfLogo } from "@/public/assets/logo";

import WorkshopsWhy from "@/components/sections/workshops/why";

import WorkshopPrograms from "@/components/sections/workshops/programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>ATÖLYELER VE ETKİNLİKLER</HeaderTitle>
      <HeaderImage>Hayatınızı Dönüştürün, Dünyanızı Güçlendirin</HeaderImage>

      <PageContent h2Title="ATÖLYELER VE ETKİNLİKLER">
        <p>
          Metasistemik olarak derin dönüşümün tohumlarının her birimizin içinde
          yattığına inanıyoruz. Atölye çalışmalarımız ve etkinliklerimiz bu
          tohumları beslemek, derin kişisel farkındalığa, sistemik anlayışa ve
          kalıcı değişime giden yollar sunmak üzere tasarlanmıştır.
        </p>
        <h3>İki Güçlü Yaklaşımla Potansiyelinizi Ortaya Çıkarın</h3>
        <p>İki farklı ama tamamlayıcı grup atölyesi deneyimi sunuyoruz:</p>
        <h4>1-Farkındalık Geliştirme ve Sistemik Çalışma Grubu:</h4>
        <p>
          Farkındalığı geliştirin, hayatınızı şekillendiren sistemik yapıları
          keşfedin ve destekleyici bir topluluk içinde tüm potansiyelinizi
          ortaya çıkarın.
        </p>
        <h4>2-Sistemik Dizim Çalışma Grubu:</h4>
        <p>
          Kendi içinizdeki, ilişkilerinizdeki ve daha geniş sistemlerinizdeki
          gizli dinamikleri ortaya çıkarın. Dönüştürücü içgörüler elde edin,
          iyileşmeyi teşvik edin ve karmaşık zorluklara çözümler bulun.
        </p>
        <h3>Bizi Farklı Kılan Nedir?</h3>
        <p>
          METASİSTEMİK sürekli grup çalışmalarımız, geleneksel kendi kendine
          yardım yaklaşımların ötesine geçer. Farkındalık Geliştirme ve Sistemik
          Çalışma’ya olan bağlılığımız, etrafınızdaki dünyayla nasıl etkileşim
          kurduğunuzu anlamanız için bütünsel bir çerçeve sağlar. Atılımları
          teşvik etmek için bilgelik geleneklerini, modern psikolojinin
          uyarlanabilir verilerini ve güçlü deneyimsel yöntemleri entegre
          ediyoruz.
        </p>
      </PageContent>

      <WorkshopsWhy />

      <WorkshopPrograms />

      <SocialMedia />
    </>
  );
}
