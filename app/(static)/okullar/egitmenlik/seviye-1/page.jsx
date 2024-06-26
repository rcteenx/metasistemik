import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import TeachingProgramms from "@/components/sections/schools/teaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <PageContent
        bgColor={"teaching"}
        h2Title="Profesyonel Eğitmenlik Sertifika Programı"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6tx_wZLVJYQ?si=lLfIxGw00uGi8PB-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </PageContent>
      <TeachingProgramms />

      <SocialMedia />
    </>
  );
}
