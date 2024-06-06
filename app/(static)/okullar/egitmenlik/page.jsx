import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import {
  teachingwhatwegain,
  teachingwhatwegain2,
} from "@/content/data/schools";
import { kocluky1, kocluky2, metasistemikNedir } from "@/public/assets/images";

import TeadchingWhy from "@/components/sections/schools/teaching-why";
import TeachingGain from "@/components/sections/schools/teaching-gain";

import TeachingProgramms from "@/components/sections/schools/teaching-programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"teaching"}>EĞİTMENLİK OKULU</HeaderTitle>

      <PageContent bgColor={"teaching"} h2Title="EĞİTMENLİK OKULU">
        <div className="dvVideo">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/E5E5WUmaWpM?si=RbWE_yAKfS8q-SOJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <p>
          Eğitmenlik Okulumuzda yer alan Profesyonel Eğitmenlik sertifika
          programımız hem ulusal ve uluslararası mesleki standartlara uyumluluğu
          hem de MYK “Eğitim Uzmanı” Seviye-6 ve “Kurumsal Eğitmen” Seviye-6
          mesleki yeterlilikleri sağlamak üzere hazırlanmıştır.
        </p>
        <p>
          Eğitmenlik Okulumuzun diğer eğitimleri olarak, “Sistemik Eğitmenlik” ,
          sistemik koç ve sistemik kolaylaştırıcıların katılabildiği “Sistemik
          Mentorluk” ve “Sistemik Süpervizyon” Sertifika Programlarımı yer
          almaktadır. Tüm bu sertifika programlarıyla, sektörde ihtiyaç duyulan
          tüm güçlü talepleri karşılamayı hedefledik.
        </p>
        <p>
          Eğitmenlik Okulumuz, eğitim programlarının sürekli güncelliğini
          sağlayarak, öğrencilerimizin öğrenme süreçlerini kararlılıkla
          desteklemeyi, Farkındalık Geliştirme ve Sistemik Çalışma anlayışımızı
          eğitimlerimize entegre etmeyi misyon edinmiştir. Platformumuzda yer
          alan dört mesleki okulun hepsi aynı vizyonu paylaşmaktadır:
          Farkındalık Geliştirmeyi ve Sistemik Çalışmayı öncelikle bir yaşama
          sanatı olarak kavranmasını sağlamak.
        </p>
      </PageContent>
      <TeachingProgramms />

      <TeadchingWhy />
      <TeachingGain
        img={kocluky1}
        img2={kocluky2}
        gain={teachingwhatwegain}
        gain2={teachingwhatwegain2}
      />

      <SocialMedia />
    </>
  );
}
