import SvgCheck from "@/components/ui/svg/check";

export default function Certificates({ img, mekanikYollar }) {
  return (
    <section id="mekanikYollar" className="bg-accent/50 py-10">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2>Mesleki Yeterlilik ve Gelişim Sertifika Programları</h2>
          <p>
            Platformumuzda yer alan 4 okulumuzdaki tüm sertifika programları hem
            ulusal hem de uluslararası standartlara uyumluluğu esas alarak
            hazırlanmıştır. Platformumuz, her sertifika programı için hem
            tanınma hem de mesleki güvenilirlik sağlayan ikili sertifika modeli
            sunar.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:my-8 items-start">
          <div className="p-4">
            <img
              src={img.src}
              alt="img colletion"
              className=" h-[420px] w-full rounded-xl object-cover object-center "
            />
            <h3 className="mt-4">METASİSTEMİK Onaylı Sertifikalar</h3>
            <p>
              Uzman okullarımız tarafından verilen ve platformumuz tarafından
              onaylanan transkriptli bu sertifikalar, desteklediğimiz sıkı
              eğitim ve değerlendirme standartlarını yansıtır.
            </p>
          </div>
          <div className="p-4">
            <img
              src={img.src}
              alt="img colletion"
              className=" h-[420px] w-full rounded-xl object-cover object-center "
            />
            <h3 className="mt-4">
              Uluslararası Onaylı Güvenilir Sertifikasyon Sistemi
            </h3>
            <p>
              Ek bir onay ve güvenlik katmanı sağlamak için üniversitelerdeki
              Sürekli Eğitim Merkezlerinin de (SEM) tercih ettiği (CARDCERT) ile
              ortaklık yapıyoruz. Mezunlarımız, güvenli doğrulama ve küresel
              erişilebilirlik için uluslararası onaylı ve ingilizce olarak
              düzenlenmiş elektronik sertifika alırlar ve tüm sertifikaların
              yüklendiği akıllı (çipli ve barkodlu) kimlik kartlarını edinirler.
            </p>
          </div>
        </div>
        <div className="text-center">
          <h3>Sertifika Programlarımızda Avrupa Standartlarına Uyum</h3>
          <p>
            Mesleki Yeterlilik ve Gelişim Sertifika Programlarımız, MYK Seviye-6
            ve Avrupa Yeterlilikler Çerçevesi (EQF) Seviye 6 referans alınarak
            tasarlanmıştır.
          </p>
          <p>
            Bu düzey, verilen eğitimin üniversite lisans derecesine uygun
            olduğunu ancak örgün lisans eğitiminin katılım için ön koşul
            olmadığını göstermektedir.
          </p>
          <p>
            Bu ikili sertifikalandırma yaklaşımı, kimlik bilgilerinizin hem
            Metasistemik toplulukta hem de global çapta daha geniş profesyonel
            ortamda tanınmasını ve saygı duyulmasını sağlar.
          </p>
          <p>
            Yaklaşan yeni sınıflarımızı kaçırmayın; dönüştürücü öğrenme
            yolculuğunuza başlamak için bugün bizimle iletişime geçin!
          </p>
        </div>
      </div>
    </section>
  );
}
