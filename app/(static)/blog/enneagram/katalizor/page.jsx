import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog from "@/components/sections/blogs/enneagram/b-2";

import Blogs from "@/components/sections/blogs/enneagram/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title:
      "Sistemik Enneagram: Dönüştürücü Farkındalık Gelişimi için Bir Katalizör",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>
        BLOG - Sistemik Enneagram: Dönüştürücü Farkındalık Gelişimi için Bir
        Katalizör
      </HeaderTitle>

      <PageContent h2Title="Sistemik Enneagram: Dönüştürücü Farkındalık Gelişimi için Bir Katalizör">
        <p>
          Enneagram temel motivasyonlarımızı, düşünce kalıplarımızı ve
          davranışlarımızı anlamak için sağlam ve sistemik bir çerçeve sağlar.
          Sistemik Enneagram yaklaşımı, kişiliklerimizin içinde faaliyet
          gösterdiğimiz ortamlardan (aile sistemleri, sosyal ağlar, ekipler ve
          daha geniş organizasyonlar) dinamik olarak etkilendiğini ve etkileşimi
          vurgular. Bu birbirine bağlılığın anlaşılması, Enneagram'ın kişisel ve
          kolektif gelişimle olan ilgisini güçlendirir.
        </p>
      </PageContent>

      <Blog />

      <Blogs id="2" />
      <SocialMedia />
    </>
  );
}
