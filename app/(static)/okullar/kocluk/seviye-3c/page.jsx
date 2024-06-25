import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import CoachingProgramms from "@/components/sections/schools/coaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"coaching"}>KOÇLUK OKULU - Seviye 3C</HeaderTitle>

      <PageContent h2Title="Enneagram'la Sistemik Koçluk Sertifika Programı Seviye 3C">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k3CuaCcKjFM?si=xGt-D3wg0onBWC1g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </PageContent>
      <CoachingProgramms />

      <SocialMedia />
    </>
  );
}
