import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog from "@/components/sections/blogs/coaching/b-2";

import Blogs from "@/components/sections/blogs/coaching/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Sistemik Koçluk Nedir? ",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>BLOG - Sistemik Koçluk Nedir? </HeaderTitle>

      <PageContent h2Title='"Geleneksel Koç" ile "Sistemik Koç" Arasındaki Farkları Anlamak'>
        <h3>Sistemik Koçluk</h3>
        <p>
          Sistemik koçluk, bireyleri sadece bireysel varlıklar olarak değil,
          içinde bulundukları sistemlerle etkileşim halinde ele alan bir koçluk
          yaklaşımıdır. Bu yaklaşım, bireyin deneyimlerini, davranışlarını ve
          hedeflerini derinden etkileyen karmaşık sistemlerin (aileler,
          işyerleri, topluluklar) rolünü kabul eder.
        </p>
        <p>
          Sistemik koçluk bireyleri aileler, işyerleri ve topluluklar gibi
          birbirine bağlı sistemlerin parçaları olarak görür. Bir parçadaki
          değişikliklerin bütüne yansıdığını kabul ederek sistem teorisinden
          yararlanır.
        </p>
      </PageContent>

      <Blog />

      <Blogs id="2" />
      <SocialMedia />
    </>
  );
}
