import {
  enneagramwhatwegain,
  enneagramwhatwegain2,
} from "@/content/data/schools";
import { metasistemik1, metasistemik2 } from "@/public/assets/images";

import PageContent from "@/components/templates/pageContent";

import EnneagramPrograms from "@/components/sections/schools/enneagram-programs";

import EnneagramWhy from "@/components/sections/schools/enneagram-why";
import EnneagramGain from "@/components/sections/schools/enneagram-gain";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "ENNEAGRAM OKULU",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent bgColor={"enneagram"} h2Title="ENNEAGRAM OKULU">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/G2sUrRAGOnU?si=Hcy3N0KyO11CFZSq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Üç seviyeden oluşan sertifika programlarıyla Enneagram Okulumuz,
          uluslararası Enneagram Uygulayıcılığı ve Enneagram Öğretmenliği eğitim
          programları standartlarına uyumluluğunu sağlamayı, eğitimlerimizin
          sürekli güncelliğini sağlayarak, öğrencilerimizin öğrenme süreçlerini
          kararlılıkla desteklemeyi, Farkındalık Geliştirme ve Sistemik Çalışma
          anlayışımızı eğitimlerimize entegre etmeyi kendine misyon edinmiştir.
        </p>
        <p>
          Platformumuzda yer alan dört mesleki okulun hepsi aynı vizyonu
          paylaşmaktadır: Farkındalık Geliştirmeyi ve Sistemik Çalışmayı
          öncelikle bir yaşama sanatı olarak kavranmasını sağlamak.
        </p>
        <h3>Enneagram Eğitimlerine Katılım Koşulları</h3>
        <p>
          Enneagram Sistemi Seviye-1 eğitimi için herhangi bir ön koşul
          gerekmemektedir. Bununla birlikte dünya genelinde ve ülkemizde,
          Enneagram Uygulayıcılığı ve Enneagram Öğretmenliği henüz resmi birer
          meslek olarak düzenlenmemiştir. Bu bağlamda, Enneagram Sistemi
          Seviye-1 eğitimini tamamlayıp, mesleki yeterlilik eğitimi olan
          Enneagram Uygulayıcılığı Seviye-2 Sertifika programına katılabilmek
          için 72 saatlik Profesyonel Koçluk Seviye-1 (ya da ICF Level-1 /
          ACSTH) eğitimi tamamlanmış olmalıdır. Enneagram Uygulayıcılığı
          Seviye-2 eğitimini tamamlayıp, devam ve gelişim yolu olan Enneagram
          Öğretmenliği Seviye-3 Sertifika Programına katılabilmek içinse 100
          Saatlik Profesyonel Eğitmenlik Sertifika Programının da tamamlanmış
          olması gerekmektedir.
        </p>
        <p>
          Enneagram Okulumuz, “Farkındalık Geliştirme ve Sistemik Çalışma”
          alanlarındaki uzmanlığını eğitim programlarına entegre etmiştir.
          Enneagram Uygulayıcılığı ve Öğretmenliğine dair ihtiyaç
          duyabileceğiniz çok boyutlu derinliği ve özgünlüğü eğitim
          programlarımızda bulacaksınız.
        </p>
      </PageContent>

      <EnneagramPrograms />

      <EnneagramWhy />
      <EnneagramGain
        img={metasistemik1}
        img2={metasistemik2}
        gain={enneagramwhatwegain}
        gain2={enneagramwhatwegain2}
      />
      <SocialMedia />
    </>
  );
}
