import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";

import EnneagramPrograms from "@/components/sections/schools/enneagram-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Sistemik Enneagram Öğretmeni Sertifika Programı",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent
        bgColor={"enneagram"}
        h2Title="Sistemik Enneagram Öğretmeni Sertifika Programı - Seviye 3"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KZbzSdQH9G4?si=05Gk_Kd4o0aZFfQ6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ContactSchools />
      </PageContent>

      <EnneagramPrograms id="3" />
      <SocialMedia />
    </>
  );
}
