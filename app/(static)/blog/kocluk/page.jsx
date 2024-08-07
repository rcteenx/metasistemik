import HeaderTitle from "@/components/templates/headerTitle";
import Blogs from "@/components/sections/blogs/coaching/blogs";

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

      <Blogs />
      <SocialMedia />
    </>
  );
}
