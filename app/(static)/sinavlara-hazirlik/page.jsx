import { mykLogo, icfLogo } from "@/public/assets/logo";

import ExamPrograms from "@/components/sections/exams/programs";
import Exams from "@/components/sections/home/d-1-exams";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "MESLEK SINAVLARINA HAZIRLIK PROGRAMLARI",
  };
}

export default function StaticPage() {
  return (
    <>
      <ExamPrograms />

      <Exams img={mykLogo} img2={icfLogo} />

      <SocialMedia />
    </>
  );
}
