import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import SystemicPrograms from "@/components/sections/schools/systemic-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <PageContent
        bgColor={"systemic"}
        h2Title="Bireysel Sistemik Dizim Kolaylaştırıcısı Sertifika Programı"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pEISYP5btHg?si=759AomVDuCcSEwHs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </PageContent>

      <SystemicPrograms />
      <SocialMedia />
    </>
  );
}
