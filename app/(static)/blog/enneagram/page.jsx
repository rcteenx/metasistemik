import HeaderTitle from "@/components/templates/headerTitle";
import Blogs from "@/components/sections/blogs/enneagram/blogs";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Enneagram Okulu Bloğu",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Enneagram Okulu Bloğu</HeaderTitle>

      <Blogs />
      <SocialMedia />
    </>
  );
}
