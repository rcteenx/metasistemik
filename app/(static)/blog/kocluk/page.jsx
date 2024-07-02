import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";
import CategoryBlogs from "@/components/sections/blogs/coaching/blogs";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Koçluk Okulu Bloğu",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Koçluk Okulu Bloğu</HeaderTitle>

      <CategoryBlogs />
      <SocialMedia />
    </>
  );
}
