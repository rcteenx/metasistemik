import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import Schools from "@/components/sections/home/b-2-schools";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Metasistematik Okullarımız</HeaderTitle>

      <Schools />

      <SocialMedia />
    </>
  );
}
