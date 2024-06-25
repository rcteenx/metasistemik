import SvgCheck from "@/components/ui/svg/check";

export default function Certificates({ img, img2, mekanikYollar }) {
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
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:my-8 items-start bg-accent-light-7 p-4 rounded-xl text-center">
          <div className="p-4">
            <img
              src={img.src}
              alt="img colletion"
              className=" h-[420px] w-full rounded-xl object-cover object-center shadow-lg border-8   border-white"
            />
            <h3 className="mt-4">METASİSTEMİK Onaylı Sertifikalar</h3>
            <p className="bg-white p-4 rounded-lg shadow-lg ">
              Uzman okullarımız tarafından verilen ve platformumuz tarafından
              onaylanan transkriptli bu sertifikalar, desteklediğimiz sıkı
              eğitim ve değerlendirme standartlarını yansıtır.
            </p>
          </div>
          <div className="p-4">
            <img
              src={img2.src}
              alt="img colletion"
              className=" h-[420px] w-full rounded-xl object-cover object-center shadow-lg border-8   border-white"
            />
            <h3 className="my-4">
              Uluslararası Onaylı Güvenilir Sertifikasyon Sistemi
            </h3>
            <p className="bg-white p-4 rounded-lg shadow-lg ">
              Ek bir onay ve güvenlik katmanı sağlamak için üniversitelerdeki
              Sürekli Eğitim Merkezlerinin de (SEM) tercih ettiği (CARDCERT) ile
              ortaklık yapıyoruz. Mezunlarımız, güvenli doğrulama ve küresel
              erişilebilirlik için uluslararası onaylı ve ingilizce olarak
              düzenlenmiş elektronik sertifika alırlar ve tüm sertifikaların
              yüklendiği akıllı (çipli ve barkodlu) kimlik kartlarını edinirler.
            </p>
          </div>
        </div>
        <div className="text-center bg-accent-dark-3 p-8 rounded-xl text-accent-light-7">
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
          <div className="bg-accent-light-5 p-4 mt-8 rounded-xl text-accent-dark-5 max-w-lg mx-auto">
            <h4>Bizimle iletişime geçin</h4>
            <p>
              Yaklaşan başlangıç tarihleri hakkında daha fazla bilgi edinmek
              veya mesleki gelişim hedeflerinizi tartışmak için sizi şu adrese
              davet ediyoruz:
            </p>
            <ul className="flex flex-col md:flex-row justify-center gap-4 my-4">
              <li className="p-4 border rounded-xl w-96">
                <dd className="font-semibold">Ara</dd>
                <dt>
                  <a href="tel:+902325208409" className="hover:border-b">
                    0 (232) 520 8409
                  </a>
                </dt>
              </li>
              <li className="p-4 border rounded-xl w-96">
                <dd className="font-semibold">Yaz</dd>
                <dt>
                  <a
                    href="mailto:bilgi@metasistemik.com"
                    className="hover:border-b"
                  >
                    bilgi@metasistemik.com
                  </a>
                </dt>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
