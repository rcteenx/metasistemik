import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import { mykLogo, icfLogo } from "@/public/assets/logo";
import Exams from "@/components/sections/home/d-1-exams";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>MESLEKİ YETERLİLİK SINAVLARI </HeaderTitle>
      <HeaderImage>Mesleki Sınavlar Hakkında</HeaderImage>

      <Exams img={mykLogo} img2={icfLogo} />

      <SocialMedia />
    </>
  );
}
