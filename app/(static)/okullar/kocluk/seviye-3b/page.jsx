import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";

import CoachingProgramms from "@/components/sections/schools/coaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Yönetim ve Organizasyonel Sistemik Koçluk Sertifika Programı",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Yönetim ve Organizasyonel Sistemik Koçluk Sertifika Programı - Seviye 3B">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uAY99JmrBOQ?si=AChULktXh8iMWXxV"
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
