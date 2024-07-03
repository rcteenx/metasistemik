import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import Blog2 from "@/components/sections/blogs/teaching/b-2";

import Blogs from "@/components/sections/blogs/teaching/blogs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Profesyonel Eğitmenlerin Gelişen Rolü",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>
        BLOG - Profesyonel Eğitmenlik Eğitimi ve MYK Seviye-6 Yeterliliklerinde
        Uzmanlaşmak
      </HeaderTitle>

      <PageContent h2Title="Profesyonel Eğitmenlik Eğitimi ve MYK Seviye-6 Yeterliliklerinde Uzmanlaşmak">
        <p>
          Global etkilerin liderliğinde sürekli değişen kaotik düzenler
          içerisinde yaşıyoruz. Değişimin katalizörü teknolojik yeniliklerin
          eşlik ettiği günümüzün bilgi odaklı ekonomisinde, bireysel gelişimin
          ve toplumsal dönüşümün teşvik edilmesi ayrıca kurumsal başarının
          artırılması için yetenekli eğitmenler hayati öneme sahiptir. Mesleki
          Yeterlilik Kurumu (MYK), profesyonel eğitmenler için net standartlar
          belirler ve Seviye-6 sertifikaları, alanda ileri düzeyde uzmanlığı
          ifade eder. Bu blog yazımız, MYK Eğitim Uzmanı Seviye-6 ve MYK
          Kurumsal Eğitmen Seviye-6'nın temel yetkinliklerini araştırıyor ve
          Profesyonel Eğitmen olmak ya da eğitmenlikte kariyerlerini ilerletmek
          isteyenler için içgörüler sunuyoruz.
        </p>
      </PageContent>

      <Blog2 />

      <Blogs />
      <SocialMedia />
    </>
  );
}
