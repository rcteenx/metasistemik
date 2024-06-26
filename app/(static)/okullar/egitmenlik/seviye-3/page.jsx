import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";
import TeachingProgramms from "@/components/sections/schools/teaching-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ContactSchools />
      </PageContent>
      <TeachingProgramms />

      <SocialMedia />
    </>
  );
}
