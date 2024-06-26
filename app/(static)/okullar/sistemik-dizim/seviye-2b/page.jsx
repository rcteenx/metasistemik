import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import SystemicPrograms from "@/components/sections/schools/systemic-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"systemic"}>
        SİSTEMİK DİZİM OKULU - Seviye 2B
      </HeaderTitle>

      <PageContent
        bgColor={"systemic"}
        h2Title="Y&O Sistemik Dizim Kolaylaştırıcısı Sertifika Programı Seviye 2B"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dk3RiUxWaKc?si=bIsASU4AZREs5A4K"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </PageContent>

      <SystemicPrograms />
      <SocialMedia />
    </>
  );
}