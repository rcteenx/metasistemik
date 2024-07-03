import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog1 from "@/components/sections/blogs/teaching/b-1";

import Blogs from "@/components/sections/blogs/teaching/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Profesyonel Koçluğun Gücü",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>BLOG - Profesyonel Eğitmenlerin Gelişen Rolü</HeaderTitle>

      <PageContent h2Title="Profesyonel Eğitmenlerin Gelişen Rolü">
        <p>
          Bilgi odaklı teknolojik yeniliklerin birbiri ardına geldiği günümüzün
          hızla değişen bilgi ekonomisinde, profesyonel eğitmenler kişisel ve
          kurumsal gelişim için temel katalizör görevi görmektedir. Profesyonel
          eğitmenler, bilgi aktarımını optimize eden ve uzun vadeli yetenek ve
          beceri gelişimini kalıcı hale getiren dönüştürücü öğrenme
          deneyimlerini teşvik ederek salt bilgi dağıtımının ötesine geçiyorlar.
          Dönüşüme yöne verenler arasında yer alan profesyonel eğitmenleri
          farklı kılan temel unsurları inceleyelim:
        </p>
      </PageContent>

      <Blog1 />

      <Blogs />
      <SocialMedia />
    </>
  );
}
