import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog from "@/components/sections/blogs/systemic/b-1";

import Blogs from "@/components/sections/blogs/systemic/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title:
      "Sistemik Dizim: Tedavi Alanının Dışında Kalan Sistemik Farkındalık Alanı",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>
        BLOG - Sistemik Dizim: Tedavi Alanının Dışında Kalan Sistemik
        Farkındalık Alanı
      </HeaderTitle>

      <PageContent h2Title="Sistemik Dizim: Tedavi Alanının Dışında Kalan Sistemik Farkındalık Alanı">
        <p>
          Meşru kökleri sistemik müdahale yaklaşımlarına ve aile sistemleri
          teorisine dayanan Sistemik Dizim; bireyleri, ekipleri ve daha geniş
          sosyal sistemleri etkileyen, sıklıkla görülmeyen dinamikleri anlamaya
          yönelik yapılandırılmış ve farkındalığa dayalı bir yaklaşım sağlar.
          Sistemik Dizim çerçevesi “Bilme Alanı” ve “Temsilci Algısı” gibi
          özelliklerinden dolayı, özellikle terapötik olmayan bağlamlarda daha
          fazla kabul görmektedir. Bu blog yazımızda öncelikli vurgu, sistemik
          içgörüler elde etmek ve pratik çözümleri kolaylaştırmaktır.
        </p>
      </PageContent>

      <Blog />

      <Blogs />
      <SocialMedia />
    </>
  );
}
