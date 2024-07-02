import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog1 from "@/components/sections/blogs/coaching/b-1";

import BlogCategories from "@/components/sections/blogs/categories";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Profesyonel Koçluğun Gücü",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>BLOG - Profesyonel Koçluğun Gücü</HeaderTitle>

      <PageContent h2Title="Kişisel ve Profesyonel Gelişimin Kilidini Açmak">
        <p>
          Sürekli değişim ve dönüşüm gerekliliğinin olduğu bir çağda profesyonel
          koçlar, büyüme ve hedeflere ulaşma çabasında olan bireyler ve
          kuruluşlar için paha biçilmez ortaklar haline geldi. Danışmanlık veya
          terapiden farklı olarak koçluk, müşterilerin kendi çözümlerini
          keşfetmeleri, güçlü yönlerini en üst düzeye çıkarmaları ve zorlukların
          üstesinden gelmeleri için onları güçlendirmeye odaklanır. Profesyonel
          koçluğun dönüştürücü doğasını derinlemesine inceleyelim.
        </p>
      </PageContent>

      <Blog1 />

      <BlogCategories />
      <SocialMedia />
    </>
  );
}
