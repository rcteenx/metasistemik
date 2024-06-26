import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import { mykLogo, icfLogo } from "@/public/assets/logo";

import ExamPrograms from "@/components/sections/exams/programs";
import Exams from "@/components/sections/home/d-1-exams";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      {/* <HeaderTitle>MESLEK SINAVLARINA HAZIRLIK PROGRAMLARI</HeaderTitle> */}
      {/* <HeaderImage>Meslek Sınavları Hakkında</HeaderImage> */}
      <ExamPrograms />

      <Exams img={mykLogo} img2={icfLogo} />

      <SocialMedia />
    </>
  );
}
