import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog from "@/components/sections/blogs/systemic/b-2";

import Blogs from "@/components/sections/blogs/systemic/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title:
      "“Sistemik Dizim” ve Sistemik Koçluk: Stratejik Bir Analiz; Benzerlikleri ve Farklılıkları Anlamak",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>
        “Sistemik Dizim” ve Sistemik Koçluk: Stratejik Bir Analiz; Benzerlikleri
        ve Farklılıkları Anlamak
      </HeaderTitle>

      <PageContent h2Title="“Sistemik Dizim” ve Sistemik Koçluk: Stratejik Bir Analiz; Benzerlikleri ve Farklılıkları Anlamak">
        <p>
          Sistemik Dizimlerin, terapötik olan ve olmayan iki ana akımı olduğunu
          söyleyebiliriz. Sistemik dizimlerin belirgin özellikleri olan “bilme
          alanı” ve “temsilci algısı” olguları terapötik uygulayıcılar arasında
          oldukça tartışmalıdır ve psikoloji camiasında ana akım savunucuları
          arasında “bilim dışı” olmakla eleştirilmektedir. Diğer yandan
          terapötik olmayan sistemik dizimlerin baskın özellikleri,
          yapılandırmacı ve çözüm odaklı olma eğilimleridir ve her geçen gün
          yenisi eklenen bilimsel araştırmalarla güvenilirliği
          desteklenmektedir. Bu blog yazımızda, (Platformumuzda yer alan
          okullarımızda da benimsemiş olduğumuz), terapötik olmayan,
          yapılandırmacı ve çözüm odaklı olma eğilimleriyle öne çıkan Sistemik
          Dizimler ile Sistemik Koçluk arasındaki benzerliklere ve farklılıklara
          odaklanacağız.
        </p>
        <p>
          Sistemik Dizim ve Sistemik Koçluk, her ikisi de sistemik ilkeler de
          ortak bir temeli paylaşır. Her iki metodoloji de bireylerin ve
          zorlukların tek başına tam olarak anlaşılamayacağını kabul ederek
          sistemlerin birbirine bağlı doğasını vurgulamaktadır. Her ikisi de
          içgörüyü kolaylaştırmak ve sürdürülebilir değişimi teşvik etmek için
          güçlü metodolojiler sunar. Bununla birlikte bireysel ve kuramsal
          bağlamlarda belli ayrımları vardır. Bu blog yazımızda, her iki
          yaklaşımın temel benzerliklerini ve uygulamalarına yön veren
          farklılıkları inceleyelim:
        </p>
      </PageContent>

      <Blog />

      <Blogs id="2" />
      <SocialMedia />
    </>
  );
}
