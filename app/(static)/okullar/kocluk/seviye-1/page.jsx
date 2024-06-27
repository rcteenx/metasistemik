import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";

import CoachingProgramms from "@/components/sections/schools/coaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Profesyonel Koçluk Sertifika Programı",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Profesyonel Koçluk Sertifika Programı - Seviye 1">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p24N9H_uwcU?si=e7vqDYi1WUdQddSL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <ContactSchools />
      </PageContent>

      <CoachingProgramms />
      <SocialMedia />
    </>
  );
}
