import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";

import SystemicPrograms from "@/components/sections/schools/systemic-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Sistemik Dizim Kolaylaştırıcısı Sertifika Programı",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent
        bgColor={"systemic"}
        h2Title="Sistemik Dizim Kolaylaştırıcısı Sertifika Programı - Seviye 2A"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dIx0hwrJpRE?si=pJKmqcqs1A8AScj-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ContactSchools />
      </PageContent>

      <SystemicPrograms id="2" />
      <SocialMedia />
    </>
  );
}
