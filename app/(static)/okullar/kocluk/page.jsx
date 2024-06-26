import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import { whatwegain, whatwegain2 } from "@/content/data/schools";
import {
  metasistemik1,
  metasistemik2,
  metasistemikNedir,
} from "@/public/assets/images";
import { mykLogo, icfLogo } from "@/public/assets/logo";

import WhyCoacging from "@/components/sections/schools/coaching-why";
import WhatYouGain from "@/components/sections/schools/coaching-gain";
import CoachingInfoBar from "@/components/sections/schools/coaching-bar";
import CoachingTitles from "@/components/sections/schools/coaching-title";

import CoachingProgramms from "@/components/sections/schools/coaching-programs";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle bgColor={"coaching"}>KOÇLUK OKULU</HeaderTitle>

      <PageContent
        h2Title="Farkındalığınızı Geliştirin,
Potansiyelinizi Açığa Çıkarmaya ve Yetenek Geliştirmeye Hazır
Olun!"
      >
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P5xmoZZOKfk?si=RhhmCMBqPNymAp61"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <h3>Koçlukta Fark Yaratan İnovatif Yaklaşım:</h3>
        <p>
          METASİSTEMİK Koçluk Okulu, sadece koçluk becerileri kazandırmakla
          kalmaz, aynı zamanda sistemik perspektif kazandırarak farkındalığınızı
          artırmaya, potansiyelinizi açığa çıkarmanıza ve benzersiz
          yeteneklerinizi geliştirmeye de yardımcı olur. "Farkındalık Geliştirme
          ve Sistemik Çalışma" anlayışımızı koçluk eğitimlerimize entegre
          ederek, sizi sadece koçluk teknikleri değil, aynı zamanda yaşamın tüm
          alanlarında farkındalık ve bilinçle hareket etmeyi teşvik eden bir
          yolculuğa çıkarıyoruz.
        </p>
      </PageContent>
      <CoachingProgramms />

      <WhyCoacging />
      <WhatYouGain
        img={metasistemik1}
        img2={metasistemik2}
        gain={whatwegain}
        gain2={whatwegain2}
      />
      <CoachingInfoBar />
      <CoachingTitles img={mykLogo} img2={icfLogo} />

      <SocialMedia />
    </>
  );
}
