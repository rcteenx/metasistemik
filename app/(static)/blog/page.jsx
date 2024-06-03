import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import BlogsWhy from "@/components/sections/blogs/why";
import BlogCategories from "@/components/sections/blogs/categories";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>BLOG</HeaderTitle>
      <HeaderImage>Bloglarımız Hakkında</HeaderImage>

      <PageContent h2Title="Potansiyelinizi Ortaya Çıkarın">
        <h3>Metasistemik Blogu Keşfedin</h3>
        <p>
          İçgörü, ilham ve dönüşümle dolu bir dünyaya adım atın. Blogumuz,
          düşündürücü makalelerden, uzman bakış açılarından ve aşağıdakileri
          yapmanıza yardımcı olacak pratik araçlardan oluşan seçilmiş bir
          koleksiyondur:
        </p>
        <h3>Dönüşüme Giden Yolunuzu Seçin</h3>
        <ul className="[&>li>dd]:font-bold">
          <li>
            <dd>Kişisel Gelişiminizi Ateşleyin: </dd>
            <dt>
              Bireysel hizmetlerimizle kendinizi keşfetme ve kişisel dönüşüm
              yolculuğuna çıkın. Yeni bakış açıları keşfedin, eski yaraları
              iyileştirin ve en derin değerleriniz ve arzularınızla uyumlu bir
              yaşam yaratın.
            </dt>
          </li>
          <li>
            <dd>Organizasyonunuzu Güçlendirin: </dd>
            <dt>
              Size özel kurumsal çözümlerimizle şirketinizin performansını,
              kültürünü ve liderliğini yükseltin. Ekipleriniz ve
              sistemlerinizdeki gizli potansiyeli açığa çıkarmak için uzman
              rehberliği ve kanıtlanmış metodolojiler sunuyoruz.
            </dt>
          </li>
          <li>
            <dd>Olumlu Bir Etki Yaratın: </dd>
            <dt>
              Sosyal sorumluluk taahhüdümüze katılın. Sistemik farkındalığın
              daha iyi bir dünya yaratma gücüne sahip olduğuna inanıyoruz ve
              sizi olumlu değişim yaratma konusunda bizimle ortak olmaya davet
              ediyoruz.
            </dt>
          </li>
        </ul>
      </PageContent>

      <BlogsWhy />
      <BlogCategories />

      <SocialMedia />
    </>
  );
}
