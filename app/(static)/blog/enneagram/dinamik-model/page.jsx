import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog from "@/components/sections/blogs/enneagram/b-1";

import Blogs from "@/components/sections/blogs/enneagram/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title:
      "Enneagram Sistemi: Kişiliği Anlamak ve Büyümeyi Teşvik Etmek İçin Bağlantılı ve Dinamik Bir Model",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>
        BLOG - Enneagram Sistemi: Kişiliği Anlamak ve Büyümeyi Teşvik Etmek İçin
        Bağlantılı ve Dinamik Bir Model
      </HeaderTitle>

      <PageContent h2Title="Enneagram Sistemi: Kişiliği Anlamak ve Büyümeyi Teşvik Etmek İçin Bağlantılı ve Dinamik Bir Model">
        <p>
          Enneagram sistemi, insan kişiliğinin karmaşıklıklarını anlamak için
          bağlantısal ve dinamik bir çerçeve sunar. Yüzeysel sınıflandırma
          araçlarından farklı olarak bu sistem, her bireyin dünya görüşünü,
          davranışını ve karar verme süreçlerini şekillendiren temel
          motivasyonları, korkuları ve savunma mekanizmalarını derinlemesine
          inceler.  
        </p>
      </PageContent>

      <Blog />

      <Blogs id="1" />
      <SocialMedia />
    </>
  );
}
