import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";
import Blogs from "@/components/sections/blogs/teaching/blogs";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Koçluk Okulu Bloğu",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Eğitmenlik Okulu Bloğu</HeaderTitle>

      <Blogs />
      <SocialMedia />
    </>
  );
}
