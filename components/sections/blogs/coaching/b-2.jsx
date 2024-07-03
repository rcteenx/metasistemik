import SvgCheck from "@/components/ui/svg/check16";

export default function ({ gain, gain2 }) {
  return (
    <div id="gain" className="bg-white py-4 lg:my-8">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="p-4 text-center lg:text-5xl gradientAccentToDark sm:rounded-xl ">
            Sistemik Koçluk Nedir?
          </h2>

          <p className="mx-auto max-w-3xl">
            Sistemik koçluk, bireylere yalnızca kendilerini değil aynı zamanda
            içinde yaşadıkları daha geniş sistemleri de olumlu yönde etkileyecek
            seçimler yapma gücü verir. Hayatlarımızın birbirine bağlı dinamik
            ağı üzerinde, eylemlerimizin ve seçimlerimizin derin etkisinin
            farkındalığına olanak sağlar.
          </p>
        </div>
        <div className="md:x-8 grid grid-cols-1 xl:grid-cols-3 md:gap-4 items-start [&>div>h3]:text-accent-dark-3  [&>div>ul>li>div>dt]:text-accent-dark-3 [&>div>ul>li>div>dd]:text-sm">
          <div className="p-4">
            <h3>Temel ilkeler ve modeller </h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sistem Teorisi</dt>
                  <dd>
                    Bireylerin, ilişkilerin ve bağlamların birbirini nasıl
                    etkilediğini vurgular.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sistemik Dizimler (Systemic Constellations)</dt>
                  <dd>
                    Müşterilerin, sistemlerini temsil edecek şekilde insanları
                    veya nesneleri düzenlediği güçlü bir araç. Bu, aile
                    sistemleri, takımlar veya iç mücadeleler içindeki gizli
                    kalıpları ve dinamikleri ortaya çıkarır.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sistemik Algı</dt>
                  <dd>
                    Koçlar, birbirine bağlılığı ve olumlu değişim için bu
                    bağlantılardan nasıl yararlanılacağını belirleyen bütünsel
                    bir bakış açısı geliştirir.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h3>Sistemik koçlar aşağıdaki gibi araçları kullanır</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Döngüsel Sorgulama</dt>
                  <dd>
                    Bir sistem içindeki farklı bakış açılarını araştırır
                    (örneğin, "Takım arkadaşınız bunu nasıl görebilir? ").
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sistemik Haritalar</dt>
                  <dd>
                    Görsel diyagramlar sistemler içindeki dengesizliklerin veya
                    gerilimlerin belirlenmesine yardımcı olur.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Yeniden çerçeveleme</dt>
                  <dd>
                    Koçlar, anlayış ve sorumluluğu geliştirerek müşterilerin
                    durumları sistemik bir bakış açısıyla yeniden
                    yorumlamalarına yardımcı olur.
                  </dd>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4">
            <h3>Sistematik koçlukta etik ilkeler çok önemlidir</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sınırlar</dt>
                  <dd>
                    Sistemik Koçlar, ICF etik standartlarına bütünüyle uyarlar.
                    Terapötik alanlara adım atmaktan kaçınarak net Koç rol ve
                    sorumluluklarını yerine getirirler.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Gizlilik</dt>
                  <dd>
                    Grup ortamında da uygulanabildiği için, müşteriler ve
                    sistemleri hakkındaki hassas bilgileri korunması için ek
                    önlemleler alırlar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Bilgilendirilmiş Onam</dt>
                  <dd>
                    Koçluk sözleşmesine ek olarak, müşteriler sistemik koçluk
                    süreci ve hakları konusunda tam olarak bilgilendirilir.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mx-auto p-4 max-w-4xl">
          <div className="p-4 gradientAccentToDark rounded-xl">
            <h3 className=" text-center">Formula-1 Analojisi</h3>
            <p>
              Geleneksel Koç ile Sistemik Koç’un farkını anlamak için gelin
              Formüla-1 analojisini kullanalım. İleri sürüş yetkinliklerine
              sahip bir Sürücü ile, F-1 Sürücülerini(!) karşılaştırmak istesek
              ilk göze çarpan unsurlar nelerdir? Öncelikle F-1 sürücülerine
              Pilot ve sürücü koltuk mahalline de Kokpit deniyor (tıpkı
              uçaklarda olduğu gibi!) Araçları yüksek hızlara çok kısa sürede
              ulaşıyor ve diğer araçlarla pist ortamında yarışıyorlar. F-1
              Pilotları sadece sürücü yetkinliklerine ve ileri sürüş
              becerilerine sahip değiller sürücülerde olmayan bir takım ek
              yetenek ve becerilerine de sahipler. Onlar sadece özel bir tür
              sürücü değil hem bir araba yarışçısı hem de bir  motor sporcusu.
              Bu gelişmiş ilave yetkinlikler onları geleneksel bir sürücü
              olmanın ötesine taşıyor.
            </p>
          </div>

          <div className="p-4">
            <p>
              Şimdi, F-1 analojisini Sistemik Koçluğu anlamak içinde kullanalım.
              Bir Formula-1 pilotunu düşünelim. Pilot, aracı kullanma konusunda
              yetenekli, odaklanmış ve kararlıdır. Ancak başarısı sadece kendi
              yeteneğine bağlı değildir. Pilotun arkasında, katkıları doğrudan
              yarışın sonucunu etkileyen mekanikerler, mühendisler ve rekabeti
              yöneten stratejistlerden oluşan bir ekip vardır. 
            </p>
            <p>
              Diğer yandan F-1 Pilotunun kendi gibi takım arkadaşları, meslektaş
              rakipleri, izleyici ve takipçi kitlesi de var. Tüm bu unsurlar
              dahil oldukları organizasyonlarla birlikte Formüla-1 topluluğunun
              bir parçası. Bu topluluk daha büyük bir ekonomik sistem olan motor
              sporları sektörünün bir parçası vb.
            </p>
            <p>
              Bir sistemik koç, müşterisinin F1 Pilot kimliğini tüm bu
              unsurlarla dinamik ilişkisi bağlamında anlaşılabilir olarak kabul
              edecektir.Tıpkı bir Formula-1 sürücüsünün optimum performans için
              bir takıma dahil olması gibi, sistemik bir koç da hepimizin
              çeşitli sistemlere derinden bağlı olduğunu kabul eder. Sistemik
              koçluk, odağı yalnızca "sürücüden" tüm "yarış takımına" ve gerekli
              durumlarda daha geniş sistemik bağlamlara kaydırarak, bireyin
              bilinçli seçimler yapmasına ve hem kendi içinde hem de dahil
              olduğu daha geniş sistemlerde değişimi başlatmasına olanak tanır. 
              Bu benzetme, sistemik koçluğun özünü yansıtır.
            </p>
          </div>

          <div className="p-4 gradientAccentToDark rounded-xl">
            <h3 className="text-center">
              Geleneksel Koç ile Sistemik Koç Arasındaki Farklar
            </h3>
            <p>
              Bir koç, bireyin kişisel ve profesyonel gelişimini desteklemek
              için çeşitli teknikler ve araçlar kullanır. Sistemik koç ise bu
              araçlara ek olarak, bireyin içinde bulunduğu sistemleri de dikkate
              alır. Geleneksel koçluk ile sistemik koçluk arasındaki temel
              farkları aşağıdaki karşılaştırma tablosunda inceleyelim:
            </p>
          </div>
          <div className="my-4 border">
            <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Özellik
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Koç
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sistemik Koç
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr>td>ul>li]:text-xs">
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Odak ve Kapsam
                  </th>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Öncelikle bireyin iç dünyasına (inançlar, güçlü ve
                        gelişime açık yönler, değerler, motivasyonlar gibi) ve
                        hedeflerine odaklanır.
                      </li>
                      <li>
                        Bireyin, duygu durumunu ihmal etmeden düşünce, eylem ve
                        davranışlarına odaklanmak.
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Hem bütünsel bireyi hem de parçası/dahil olduğu
                        sistemleri eş zamanlı olarak dikkate alır.
                      </li>
                      <li>
                        Etkileşimleri ve ilişkileri inceleyerek kendi sistemi
                        içindeki bütünsel bireye odaklanmak.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Yaklaşım
                  </th>
                  <td className="px-6 py-4 ">
                    <ul>
                      <li>
                        Genellikle çözüm odaklıdır, bireyin kendi cevaplarını
                        bulmasına yardımcı olur.
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Sistemik perspektifle modelleri ve dinamikleri ortaya
                        çıkarma ve daha geniş bağlamda çözümleri güçlendirmeyi
                        kolaylaştırarak daha geniş bağlamda bireyin cevaplarını
                        bulmasına yardımcı olur.
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Koçun Rolü
                  </th>
                  <td className="px-6 py-4 ">
                    <ul>
                      <li>
                        Bireyin kendi özellikleri ve potansiyellerini keşif ve
                        farkındalığına yönelik kendi yolunu aydınlatmasına
                        destek veren, kolaylaştırıcı, kendi kendini yönlendiren
                        değişim için araçlar ve destek sunar.
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Sistemik perspektif ve bağlantısallığı içeren
                        farkındalığı teşvik eden koçluk rolü, sistem
                        perspektifiyle daha geniş bağlamda bütünsel bireyin
                        değişimine yönelik güçlü bir kolaylaştırıcı rolü.
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Daha Çok Kimlere Uygun
                  </th>
                  <td className="px-6 py-4 ">
                    <ul>
                      <li>
                        Kişisel gelişim, hedefe ulaşma, iç engelleri aşma
                        arayışında olan bireyler. İş konularını ele almak
                        isteyen bireyler. İş alanında yöneticiler, liderler,
                        Takımlar ve ekipler.
                      </li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Sistemik perspektif, algı ve farkındalık geliştirmek
                        isteyen, birbiriyle bağlantılı zorluklarla karşı karşıya
                        kalan, bütünsel gelişim (ve dönüşüm) arayan bireyler ve
                        sistem çapında değişim arayan, topluluklar, ekipler ve
                        organizasyonlar.
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Ek Yetkinlikler
                  </th>
                  <td className="px-6 py-4 ">
                    <ul>
                      <li>-</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <ul>
                      <li>
                        Sistem düşüncesi + Sistemik algı yetkinliği + Sistemik
                        Projeksiyon becerileri +Sistemik haritalama ve kullanım
                        becerileri + Karmaşık dinamikleri anlamak + Grup
                        süreçlerini kolaylaştırma beceriler.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 gradientAccentToDark rounded-xl">
            <h3 className="text-center">Sistemik Koçluğun Faydaları</h3>
            <p>
              İşte, baş döndürücü bir hızla değişen dünyamızda, değişime karşı
              sıradışı adaptasyon yeteneğiyle öne çıkan ve global çapta etki
              alanını her geçen gün artıran sistemik koçluğun geleneksel koçluğa
              göre önemli avantajlarından bazıları:
            </p>
          </div>

          <div className="p-4 ">
            <h4>Daha Derin Farkındalık ve Daha Büyük Etki:</h4>
            <p>
              Sistemik koçluk, bireyin ötesine bakarak, bireyin bağlantılı ve
              dahil olduğu dinamik sistemler ağı içindeki gizli kalıpları,
              desenleri ve bağlantıları ortaya çıkarır. Bu anlayış, bireysel
              perspektiften dinamik ve bağlantısal sistemik perspektife geçiştir
              ve bu paradigma ve algı değişimi daha kapsamlı ve etkili çözümlere
              yol açmaktadır.
            </p>
            <h4>Daha Geniş Bağlamda, Sistemik Sürdürülebilir Değişiklikler:</h4>
            <p>
              Kaos ve belirsizliği kabul eden VUCA dünyasında Sistemik bir
              yaklaşım, bireyin dahil olduğu karmaşık sistemlerdeki küçük
              değişikliklerin dalgalanma etkileri yaratabileceğini kabul eder.
              Bu anlayış değişimin izole edilmiş bireysel dönüşümden farklı
              olarak sistemik çapta, daha sürdürülebilir ve geniş kapsamlı
              olduğu anlamına gelir.
            </p>
            <h4>Daha Güçlü Ekip Çalışması ve İşbirliği:</h4>
            <p>
              Sistemik koçluk, başarının etkili dinamiklere ve ilişkilere bağlı
              olduğu organizasyonlar veya ekipler için özellikle faydalıdır.
              İletişimi, güveni ve genel sistemin çevikliğini etkili biçimde
              artırır.
            </p>
            <hr className="my-4" />
            <h4>
              Tüm Bu Etkileyici Özellikleriyle Sistemik Koçluğu Ne Zaman
              Seçmelisiniz?
            </h4>
            <p>
              Bireyler, hangi koçluğu seçeceklerine karar verirken, sistemik
              koçluğun aşağıdaki durumlarda özellikle faydalı olduğunu göz
              önünde tutabilirler:
            </p>
            <ul>
              <li>
                Hızlı düzeltmeler yerine uzun vadeli, bütünsel çözümleri
                hedefliyorsanız.
              </li>
              <li>
                Çevrenizle (işyeri, aile, yakın ilişkiler vb.) bağlantılı
                olabileceğini düşündüğünüz zorluklarla karşı karşıyasınız.
              </li>
              <li>
                Değişimi yalnızca kendi içinizde değil aynı zamanda dahil
                olduğunuz tüm sistemler bağlamında ele almak istiyorsunuz.
              </li>
            </ul>
          </div>

          <div className="p-4 gradientAccentToDark rounded-xl">
            <h3 className="text-center">
              Sistemik Koçluğun Geleceği ve Potansiyeli
            </h3>
            <p>
              Sistemik koçluk, hızla değişen ve giderek birbirine bağlı hale
              gelen bir dünyada, bireylerin ve organizasyonların karşılaştığı
              karmaşık zorlukların çözümünde çok önemli bir rol oynama
              potansiyeline sahiptir. Gelecekte, sistemik koçluğun şu alanlarda
              büyümeye ve gelişmeye devam etmesini bekleyebiliriz:
            </p>
          </div>

          <div className="p-4 ">
            <h4>Bireysel Gelişim</h4>
            <p>
              İnsanlar, sadece kendi iç dünyalarına değil, içinde bulundukları
              daha geniş sistemlere bağlı olduklarının farkına vardıkça,
              sistemik koçluk daha bütünsel dönüşüm ve farkındalık arayan
              bireyler tarafından talep edilmeye devam edecek.
            </p>
            <h4>Kurumsal Gelişim</h4>
            <p>
              Sistemik koçluk; çeviklik, işbirliği, çeşitlilik ve katılımı
              önemseyen organizasyonlarda giderek daha etkili bir araç haline
              gelecek. Sistemik dinamikleri ve iletişimi geliştirerek daha
              sağlıklı ve güçlü organizasyonlar oluşmasına katkı sağlayacak.
            </p>
            <h4>Toplumsal Değişim </h4>
            <p>
              Sistemik koçluk, toplumları etkileyen sosyal, çevresel ve ekonomik
              sorunlarda olumlu değişime katkıda bulunma fırsatına sahip.
              Topluluklar, STK'lar ve sosyal girişimciler, toplumsal konulara
              sistemik çözümler üretmek için sistemik koçluk yaklaşımlarını daha
              geniş biçimde kullanabilirler.
            </p>
            <p>
              Sistemik koçluk, bireyleri, ekipleri ve kurumları daha büyük
              sistemlerin bir parçası olarak görerek, onlara kendi etki
              alanlarındaki değişimleri başlatmalarında yardımcı olmaya devam
              edecek.
            </p>
            <p>
              Sistemik koçluk, hızla değişen ve giderek birbirine bağlı hale
              gelen bir dünyada, bireylerin ve organizasyonların karşılaştığı
              karmaşık zorlukların çözümünde çok önemli bir rol oynama
              potansiyeline sahiptir.
            </p>
            <h4>
              Teknolojik gelişmelerle birlikte, genel olarak koçluğun gelecekte
              şu şekilde büyümesi ve gelişmesi beklenebilir:
            </h4>
            <ul>
              <li>
                <strong>Uzaktan Koçluk ve Sanal Çalışmalar:</strong> Video
                konferans araçlarının, gelişmiş sanal gerçeklik (VR) ve
                artırılmış gerçeklik (AR) teknolojilerinin gelişmesiyle birlikte
                koçluk görüşmeleri, mesafeleri ortadan kaldırarak coğrafi
                sınırların ötesine geçecek. Bu sayede, uzak mesafelerdeki
                bireyler ve takımlar daha kolayca kapsayıcı koçluk çözümlerinden
                yararlanabilecek.
              </li>
              <li>
                <strong>Yapay Zeka Destekli Koçluk Uygulamaları:</strong> Yapay
                zeka sistemleri, koçluk uygulamalarını daha verimli,
                kişiselleştirilmiş hale getirecek. Müşterilerin ilerlemesini
                takip ederek, kalıpları belirleyerek ve uygun kaynakları veya
                egzersizleri önererek koçlara yardımcı olacak.
              </li>
              <li>
                <strong>Veri Analizi ve Sistemik Modelleme:</strong> Büyük veri
                ve analitikteki gelişmeler, koçluk seansları dahilinde ilişkisel
                verilere dair daha derin bilgiler sağlayabilir. Koçlar, karmaşık
                sistemlerin görselleştirilmesi ve simülasyonlar aracılığıyla
                sistem dinamiklerini ve etkileşimlerini daha iyi anlayarak
                müşterilerine daha etkili yol gösterebilirler.
              </li>
            </ul>
            <p>
              Teknolojik gelişmeler, genel olarak koçluğun erişimini,
              ölçeklenebilirliğini ve etkinliğini artırma potansiyeline
              sahiptir. Yeni teknolojileri benimseyerek, koçlar bireyleri ve
              ekipleri geleceğin birbirine bağlı dünyasında daha iyi bir şekilde
              destekleyebilirler.
            </p>
          </div>

          <div className="p-4 gradientAccentOppositeToBlack rounded-xl">
            <h3 className="text-center">Sonuç</h3>
            <p>
              Sistemik Koçluk, koçluğun tüm alt dallarını kendine entegre
              edebilecek esnekliğe sahiptir. Bununla birlikte Koçluğun bir
              türüdür ve genel koçluk çerçevesi içerisinde bir alt dal olarak
              kabul edilmektedir.
            </p>
            <p>
              Bu yazımızda geleneksel koçluğa göre farklılıkları ve avantajları
              üzerinde durduğumuz Sistemik Koçluk, her durum ve koşulda ve/veya
              her müşteriye göre avantajlı değildir. Bu bağlamda geleneksel
              koçluktan ne daha iyidir ne daha üstündür. Müşterinin değişen
              ihtiyaçları ve tercihlere göre geleneksel koçluk daha uygun
              olabilir ve tercih edilebilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
