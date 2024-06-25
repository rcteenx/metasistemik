import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import EnneagramPrograms from "@/components/sections/schools/enneagram-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"enneagram"}>
        ENNEAGRAM OKULU - Seviye 1
      </HeaderTitle>

      <PageContent
        bgColor={"enneagram"}
        h2Title="ENNEAGRAM OKULUEnneagram Sistemi Sertifika Programı Seviye 1"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/53f16Xd_RY8?si=wJ8Jpc5CPvhy4_CM"
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
