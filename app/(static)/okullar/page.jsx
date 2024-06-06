import HeaderTitle from "@/components/templates/headerTitle";

import Schools from "@/components/sections/home/b-2-schools";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"schools"}>Metasistematik Okullarımız</HeaderTitle>

      <Schools />

      <SocialMedia />
    </>
  );
}
