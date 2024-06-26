import {
  systemicwhatwegain,
  systemicwhatwegain2,
} from "@/content/data/schools";
import { metasistemik1, metasistemik2 } from "@/public/assets/images";

import PageContent from "@/components/templates/pageContent";

import SystemicPrograms from "@/components/sections/schools/systemic-programs";

import SystemicWhy from "@/components/sections/schools/systemic-why";
import SystemicGain from "@/components/sections/schools/systemic-gain";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "SİSTEMİK DİZİM OKULU",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent bgColor={"systemic"} h2Title="SİSTEMİK DİZİM OKULU">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ViJGKLGRPJ8?si=c5b6c-HCUg9_-9Vs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Sistemik Dizim Okulumuz, eğitimlerimizin uluslararası Sistemik Dizim
          Kolaylaştırıcılığı standartlarına uyumluluğunu sağlamayı,
          eğitimlerimizin sürekli güncelliğini sağlayarak, öğrencilerimizin
          öğrenme süreçlerini kararlılıkla desteklemeyi, Farkındalık Geliştirme
          ve Sistemik Çalışma anlayışımızı eğitimlerimize entegre etmeyi kendine
          misyon edinmiştir.
        </p>
        <p>
          Platformumuzda yer alan dört mesleki okulun hepsi aynı vizyonu
          paylaşmaktadır: Farkındalık Geliştirmeyi ve Sistemik Çalışmayı
          öncelikle bir yaşama sanatı olarak kavranmasını sağlamak.
        </p>
        <p>
          Sistemik Dizim Kolaylaştırıcılığı henüz resmi bir meslek olarak
          düzenlenmemiştir. Bu bağlamda Sistemik Dizim Okulumuz, eğitimlerimize
          katılım ön şartı olarak, 72 saat süreli Profesyonel Koçluk (Seviye-1)
          Eğitiminin ( yada ICF Level-1 / ACSTH) tamamlanmış olmasını şart
          koşmaktadır.
        </p>
        <p>
          Sistemik Dizim Okulumuz, “Farkındalık Geliştirme ve Sistemik Çalışma”
          alanlarındaki uzmanlığını eğitim programlarına entegre etmiştir.
          Profesyonel SD Kolaylaştırıcılığına dair ihtiyaç duyabileceğiniz çok
          boyutlu derinliği ve özgünlüğü eğitim programlarımızda bulacaksınız.
        </p>
      </PageContent>

      <SystemicPrograms />

      <SystemicWhy />
      <SystemicGain
        img={metasistemik1}
        img2={metasistemik2}
        gain={systemicwhatwegain}
        gain2={systemicwhatwegain2}
      />

      <SocialMedia />
    </>
  );
}
