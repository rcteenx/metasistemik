import HeaderTitle from "@/components/templates/headerTitle";
import Blogs from "@/components/sections/blogs/systemic/blogs";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Sistemik Dizim Okulu Bloğu",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Sistemik Dizim Okulu Bloğu</HeaderTitle>

      <Blogs />
      <SocialMedia />
    </>
  );
}
