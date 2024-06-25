import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import TeachingProgramms from "@/components/sections/schools/teaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"teaching"}>
        EĞİTMENLİK OKULU - Seviye 3
      </HeaderTitle>

      <PageContent
        bgColor={"teaching"}
        h2Title="Sistemik Süpervizyon Sertifika Programı"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x4yeCnzBL8E?si=x6qKcb8O-qKM4Ibn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </PageContent>
      <TeachingProgramms />

      <SocialMedia />
    </>
  );
}
