import PageContent from "@/components/templates/pageContent";

import WorkshopsWhy2 from "@/components/sections/workshops/why_2";
import ContactAtolye from "@/components/sections/common/z-contact-atolye";

export async function generateMetadata() {
  return {
    title: "Sistemik Dizim Çalışma Grubu",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Sistemik Dizim Çalışma Grubu">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EagOZN1Jwko?si=WOzUy7gnVlORqpZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3>
          Gizli Dinamiklerin Kilidini Açın, Hayatınızı Dönüştürün ve Dünyanızı
          Etkileyin
        </h3>
        <p>
          İlişkilerinizi, kariyerinizi, sağlığınızı ve genel refahınızı
          şekillendiren gizli kalıpları ortaya çıkarmaya hazır mısınız? Sistemik
          Dizim Çalışma Grubumuz, yaşamınızı etkileyen birbirine bağlı
          dinamikleri keşfetmeniz için güçlü ve dönüştürücü bir alan sunar.
        </p>
        <p>
          Farkındalık Geliştirme ve Sistemik Çalışma anlayışımız, gerçek
          dönüşümün içeriden başladığına ve sistemik çerçevede gerçekleştiği
          fikrine dayanır. Derin bir kişisel farkındalık geliştirdiğinizde ve
          dünyamızı şekillendiren birbirine bağlı sistemik çerçevedeki yerinizi
          anladığınızda, olumlu değişim için bir güç haline gelirsiniz.
        </p>
        <h3>Sistemik Dizim Çalışması Nedir? </h3>
        <p>
          Sistemik Dizim, yaşam alanlarınıza ait tüm kişisel, ailevi ve
          organizasyonel sistemik dinamikleri ortaya çıkaran fenomenolojik bir
          yöntemdir. Bu ara bağlantıların sistemik haritasını çıkararak,
          farkındalığa, atılımlara, iyileşmeye ve uzun süredir devam eden
          sorunların çözümüne yol açan derin içgörüler elde ederiz.
        </p>
      </PageContent>

      <WorkshopsWhy2 />
      <ContactAtolye />
    </>
  );
}
