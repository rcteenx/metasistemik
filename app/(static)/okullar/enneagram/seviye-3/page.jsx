import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import EnneagramPrograms from "@/components/sections/schools/enneagram-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"enneagram"}>
        ENNEAGRAM OKULU - Seviye 3
      </HeaderTitle>

      <PageContent
        bgColor={"enneagram"}
        h2Title="Sistemik Enneagram Öğretmeni Sertifika Programı Seviye 3"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KZbzSdQH9G4?si=05Gk_Kd4o0aZFfQ6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </PageContent>

      <EnneagramPrograms />

      <SocialMedia />
    </>
  );
}
