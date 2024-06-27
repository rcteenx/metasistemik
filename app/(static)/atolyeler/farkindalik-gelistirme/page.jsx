import PageContent from "@/components/templates/pageContent";

import WorkshopsWhy1 from "@/components/sections/workshops/why_1";
import ContactAtolye from "@/components/sections/common/z-contact-atolye";

export async function generateMetadata() {
  return {
    title: "Farkındalık Geliştirme ve Sistemik Çalışma Grubu",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Farkındalık Geliştirme ve Sistemik Çalışma Grubu">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z74hbZfXnPI?si=RpRnhMnGqVS_b0wP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3>
          Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
          Gerçekleştiği Yer
        </h3>
        <h4>Potansiyelinizin Kilidini Açın. Dünyanızla Birlikte Dönüşün!</h4>
        <p>
          Farkındalık çalışmaları anlayışımız, gerçek dönüşümün içeriden
          başladığına ve sistemik çerçevede gerçekleştiği fikrine dayanır. Derin
          bir kişisel farkındalık geliştirdiğinizde ve dünyamızı şekillendiren
          birbirine bağlı sistemik çerçevedeki yerinizi anladığınızda, olumlu
          değişim için güçlü bir güç haline gelirsiniz.
        </p>
        <p>
          Dönüşüme giden benzersiz bir yolu keşfedin. Farkındalık Geliştirme ve
          Sistemik Çalışmanın dönüştürücü ilkelerini, yöntemlerini ve
          tekniklerini grup oturumlarımıza entegre ederek, sizi farkındalık
          geliştirmeye dayalı dönüşüm yolculuğu için güçlendiriyoruz.
        </p>
      </PageContent>

      <WorkshopsWhy1 />

      <ContactAtolye />
    </>
  );
}
