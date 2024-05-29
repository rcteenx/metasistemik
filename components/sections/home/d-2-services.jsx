import IconComponent from "@/components/ui/icons/icons";

import { socialMedia } from "@/content/data";

export default function HomeServices() {
  return (
    <section className="container mx-auto my-16 lg:my-24">
      <div className="px-8 text-center">
        <h2 className="text-2xl lg:text-6xl text-accent-dark-6">
          HİZMETLERİMİZ
        </h2>
        <h3 className="my-4 text-base md:text-xl text-accent-light-5">
          Dönüşüme Doğru İlk Adımı Atın
        </h3>
        <p>
          İster organizasyonunuzu, kişisel yaşamınızı, ister çevrenizdeki
          dünyayı dönüştürmeyi hedefliyor olun, Metasistemik yolculuğunuzda size
          rehberlik edecek araçlara ve uzmanlığa sahiptir. Hizmetlerimizi
          keşfedin ve sistemik farkındalığın gücünü bugün keşfedin.
        </p>
        <p>
          Daha tatmin edici bir hayata ve daha etkili bir organizasyona doğru
          yolculuğunuz burada başlıyor.
        </p>
        <h4 className="text-accent my-8">
          Detaylı Bilgi İçin Hizmetlerimiz sayfasına ulaşın
        </h4>
      </div>
    </section>
  );
}