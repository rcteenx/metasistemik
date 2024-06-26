import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import ExamsWhyIcf from "@/components/sections/exams/why_icf";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>ICF (ACC/PCC) ÜNVAN ALMA SINAVI</HeaderTitle>
      <HeaderImage>ICF (ACC/PCC) ÜNVAN ALMA SINAVI</HeaderImage>

      <PageContent h2Title="ICF (ACC/PCC) ÜNVAN ALMA SINAVI">
        <h3>Metasistemik Farkıyla ICF (ACC/PCC) Unvanınızı Güvenle Alın:</h3>
        <p>
          ICF, ACC veya PCC unvan alma yolculuğunuzun son aşaması olan sınav
          sürecine ulaştınız. Yeterliliğinizi kanıtlayarak Unvan Alma hedefinize
          ulaşmanız için gereken özveri ve titizliği anlıyoruz. ICF (ACC/PCC)
          Yeterlilik Sınavı Hazırlık Programımız, başarı şansınızı en üst düzeye
          çıkarmak için kapsamlı rehberlik ve destek sunarak mesleki
          hedeflerinize net bir yol sağlar.
        </p>
      </PageContent>

      <ExamsWhyIcf />

      <SocialMedia />
    </>
  );
}
