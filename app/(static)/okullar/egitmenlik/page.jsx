import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import {
  teachingwhatwegain,
  teachingwhatwegain2,
} from "@/content/data/schools";
import { kocluky1, kocluky2, metasistemikNedir } from "@/public/assets/images";
import { mykLogo, icfLogo } from "@/public/assets/logo";

import TeadchingWhy from "@/components/sections/scools/teaching-why";
import TeachingGain from "@/components/sections/scools/teaching-gain";

import TeachingProgramms from "@/components/sections/scools/teaching-programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>EĞİTMENLİK OKULU</HeaderTitle>
      <HeaderImage>Metasistematik Eğitmenlik Okulu Hakkında</HeaderImage>

      <PageContent h2Title="EĞİTMENLİK OKULU">
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

      <TeadchingWhy />
      <TeachingGain
        img={kocluky1}
        img2={kocluky2}
        gain={teachingwhatwegain}
        gain2={teachingwhatwegain2}
      />

      <TeachingProgramms />

      <SocialMedia />
    </>
  );
}
