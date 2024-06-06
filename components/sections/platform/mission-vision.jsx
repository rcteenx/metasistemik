import { StaticPages } from "@/content/data";

export default function MissionVision() {
  return (
    <section id="mission" className="">
      <div className="container mx-auto my-8 lg:my-24">
        {/* <div className="bg-gradient-to-br from-accent via-accent-dark-3 to-accent-dark-7 p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
        <h2 className=" text-accent-light-7 lg:text-6xl">
            MİSYON ve VİZYONUMUZ
          </h2> */}
        {/* <ul className="text-accent text-base flex flex-col sm:flex-row gap-4 ">
            <li className=" w-full border p-4 my-4 rounded-md shadow-lg bg-white hover:bg-gray-100 ">
              <h3>Misyon</h3>
              <h3>
                Dönüşümün Anahtarları; Farkındalık Geliştirme ve Sistemik
                Çalışma
              </h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışma anlayışımızla
                bireylerin ve organizasyonların yetenek geliştirmelerine
                odaklanan, birlikte öğrenmeyi ve büyümeyi kolaylaştıran, daha
                adil, bilinçli, sorumlu ve bağlantısal bir yaşam için öncülük
                yapan global çapta yetkin bir eğitim platformu olarak hizmet
                vermek.
              </p>
            </li>
            <li className=" w-full border p-4 my-4 rounded-md shadow-lg bg-white hover:bg-gray-100">
              <h3>Vizyon</h3>
              <h3>Sistemik Farkındalığın Rehberliğiyle Dönüşüm Yolculuğu</h3>
              <p>
                {" "}
                Bağlantısal bütünselliğe dayalı Sistemik Farkındalık
                anlayışımızla, bireylerin ve organizasyonların potansiyellerini
                açığa çıkarmalarına, tam potansiyellerini kullanmalarına ve
                dönüşüm yaşamalarına hizmet ve rehberlik etmek.
              </p>
            </li>
          </ul>
        </div> */}
        <div className=" mx-auto my-8 p-4 md:p-12  bg-accent-light-3  text-accent-dark-7 rounded-xl text-center ">
          <h2 className="md:text-6xl">Temel Anlayış ve Değerlerimiz</h2>
          <ul className="grid md:grid-cols-2 mx-auto gap-8 my-8 p-4 [&>li]:border [&>li]:bg-accent-light-7 [&>li]:rounded-xl [&>li]:p-4">
            <li>
              <h3>Sistemik Farkındalık ve Dönüşüm</h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışma prensiplerini temel
                alarak, bireylerin ve organizasyonları.
              </p>
            </li>
            <li>
              <h3>Bağlantısal Bilinçli Yaşam:</h3>
              <p>
                Bağlantısal bütünselliğe dayalı sistemik farkındalık
                anlayışıyla, bireylerin ve organizasyonların daha bilinçli ve
                sorumlu bir şekilde yaşamalarına ve daha anlamlı bağlantılar
                kurmalarına katkıda bulunmak.
              </p>
            </li>
            <li>
              <h3>Eğitim ve Gelişim Platformu</h3>
              <p>
                Sistemik farkındalığa dayalı mesleki yeterlilik ve gelişim
                sertifika programlarıyla öncü bir eğitim platformu olarak,
                katılımcılara yüksek kalitede hizmet sunmak ve bilgi
                birikimimizi paylaşmak.
              </p>
            </li>
            <li>
              <h3>Erişilebilir Hizmet</h3>
              <p>
                Sistemik Farkındalıktan ilham alan eğitim programlarımızın
                bireylere ve organizasyonlara ulaştırılmasını kolaylaştırarak,
                bu değerli anlayış ve araçların faydalarını toplumda
                yaygınlaştırmak.
              </p>
            </li>
            <li>
              <h3>Kişisel ve Organizasyonel Gelişimin Merkezi</h3>
              <p>
                Bireylerin ve organizasyonların potansiyellerini açığa
                çıkarmalarına ve tam potansiyellerine ulaşmalarına yardımcı
                olacak eğitim ve gelişim programları sunmak.
              </p>
            </li>
            <li>
              <h3>Sistemik Farkındalığın Lideri</h3>
              <p>
                Sistemik farkındalığa dayalı mesleki eğitim ve gelişim
                hizmetleri veren lider bir platform olarak, ülkemizde öncü ve
                global çapta yetkin bir organizasyon olmak.
              </p>
            </li>
            <li>
              <h3>Farkındalık Topluluğu</h3>
              <p>
                Farkındalık geliştirme ve sistemik çalışma anlayışını paylaşan
                bir topluluk oluşturarak, topluluğumuzda bilgi ve deneyim
                alışverişini kolaylaştırmak ve birlikte öğrenmeyi ve büyümeyi
                teşvik etmek.
              </p>
            </li>
            <li>
              <h3>Farkındalıkla Dönüşen Bir Dünya</h3>
              <p>
                Bağlantısal bütünselliğe dayalı sistemik farkındalık anlayışının
                benimsendiği, bilinçli ve sorumlu bireylerin ve
                organizasyonların öncülüğünde daha adil, sürdürülebilir ve refah
                dolu bir dünya inşa edilmesine hizmetlerimizle katkıda bulunmak.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
