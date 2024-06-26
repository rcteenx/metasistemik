import PageContent from "@/components/templates/pageContent";
import ContactSchools from "@/components/sections/common/z-contact-okullar";
import EnneagramPrograms from "@/components/sections/schools/enneagram-programs";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <PageContent
        bgColor={"enneagram"}
        h2Title="Sistemik Enneagram Uygulayıcısı Sertifika Programı Seviye 2"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xnGQVfdLVAY?si=3wbc61SU8IzYk3j7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ContactSchools />
      </PageContent>

      <EnneagramPrograms />

      <SocialMedia />
    </>
  );
}
