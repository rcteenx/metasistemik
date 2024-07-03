import SvgCheck from "@/components/ui/svg/check16";
import { metasistemik1, metasistemik2 } from "@/public/assets/images";

export default function Blog1({ gain, gain2 }) {
  return (
    <div id="gain" className="bg-white py-4 lg:my-8">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="p-4 text-center lg:text-5xl gradientAccentToDark sm:rounded-xl ">
            Profesyonel Eğitmenlerin Gelişen Rolü
          </h2>
        </div>
        <div className="md:x-8 grid grid-cols-1 xl:grid-cols-2 md:gap-4 items-start [&>div>h3]:text-accent-dark-3  [&>div>ul>li>div>dt]:text-accent-dark-3 [&>div>ul>li>div>dd]:text-sm">
          <div className="p-4">
            <h3>1. Deneyimsel Öğrenmenin Mimarları</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Aktif Öğrenme Stratejileri</dt>
                  <dd>
                    Profesyonel eğitmenler, yetişkin öğrenme ilkelerini temel
                    alan etkileşimli atölye çalışmaları, simülasyonlar ve
                    hedeflenen vaka çalışmaları tasarlar. Bu, bağlamsal olarak
                    uygun bir şekilde problem çözme becerilerini ve eleştirel
                    düşünmeyi teşvik eder.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sezgileri ve İçgörüleri Kolaylaştırma</dt>
                  <dd>
                    Eğitmenler, açık uçlu sorgulama ve rehberli düşünmeyi
                    kullanarak öğrencilerin çözümlere bağımsız olarak
                    ulaşmalarını sağlar, yeni becerilerin uygulanmasında
                    içselleştirmeyi ve güveni artırır.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h3>2. Kapsayıcı Öğrenme Ortamlarının Yetiştiricileri</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Psikolojik Güvenlik</dt>
                  <dd>
                    Profesyonel eğitmenler, öğrencilerin bakış açılarını
                    paylaşmaya, deney yapmaya ve yapıcı eleştiriden öğrenmeye
                    teşvik edildiği saygılı ve destekleyici bir ortam
                    geliştirir.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Usta Grup Kolaylaştırıcılığı</dt>
                  <dd>
                    Grup dinamiklerini etkili bir şekilde yönlendirir, farklı
                    kişilikler arasında adil katılımı teşvik eder ve tüm
                    katılımcılar için aidiyet duygusu sağlar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Kolaylık ve Esneklik</dt>
                  <dd>
                    Öğrenme stillerinin çeşitliliğinin ve potansiyel
                    erişilebilirlik ihtiyaçlarının farkında olan profesyonel
                    eğitmenler, engelsiz bir deneyim yaratmak için
                    yaklaşımlarını ve materyallerini proaktif bir şekilde
                    uyarlar.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:x-8 gradientAccentToDark grid grid-cols-1 xl:grid-cols-2 md:gap-4 items-start [&>div>ul>li>div>dd]:text-sm">
          <div className="p-4">
            <h3>3. Teknolojinin Stratejik Entegrasyonu</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Katılımın Artırılması</dt>
                  <dd>
                    Profesyonel eğitmenler, öğretimi çeşitlendirmek ve aktif
                    katılımı teşvik etmek için başta yapay zeka destekli
                    kullanıcı dostu programlar olmak üzere öğrenme yönetim
                    sistemlerini (LMS), işbirlikçi platformları ve multimedya
                    araçlarını stratejik olarak kullanırlar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Hibrit Öğrenme Modelleri</dt>
                  <dd>
                    Senkron (kişisel veya sanal) ve asenkron (kendi hızına göre)
                    öğrenmenin faydalarını optimize ederler. Bu, becerilerin
                    işbirlikçi uygulamasına odaklanmayı sürdürürken öğrencilere
                    esneklik sunar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Veriye Dayalı İçgörüler</dt>
                  <dd>
                    Eğitmenler, akran öğrenimi topluluklarını kolaylaştırmak,
                    biçimlendirici değerlendirmeleri yönetmek, öğrencinin
                    ilerlemesini izlemek ve gelecekteki programları geliştirmek
                    için veri analitiği teknolojilerinden yararlanır.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h3>4. Bilgi Transferinin ve Sürdürülebilir Etkinin Sağlanması</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Uygulamaya Odaklanma</dt>
                  <dd>
                    Profesyonel Eğitmenler yeni becerileri ve kavramları gerçek
                    dünyadaki işyeri zorluklarıyla sorunsuz bir şekilde
                    ilişkilendirir. Öğrencilerin anında, hedefe yönelik geri
                    bildirim alabilmeleri için güvenli "alıştırma alanları"
                    yaratırlar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Eğitim Sonrası Destek</dt>
                  <dd>
                    Profesyonel eğitmenler, sürekli destek sağlamak ve sürekli
                    davranış değişikliğini teşvik etmek için koçluk,
                    kolaylaştırıcılık, iş yardımları veya çevrimiçi takviye
                    mekanizmalarını birleştirir.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:x-8 grid grid-cols-1 xl:grid-cols-2 md:gap-4 items-start [&>div>h3]:text-accent-dark-3 [&>div>ul>li>div>dt]:text-accent-dark-3 [&>div>ul>li>div>dd]:text-sm">
          <div className="p-4">
            <h3>5. Mesleki Yeterlilikler ve Gelişim</h3>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Öğretim Tasarımı Uzmanlığı</dt>
                  <dd>
                    Profesyonel eğitmenler, yetişkin öğrenme teorileri, ihtiyaç
                    değerlendirme metodolojileri ve yenilikçi müfredat
                    geliştirme alanlarında en iyi uygulamaları konusunda hem
                    güncel kalırlar hem de yenilikçi tasarımlara imza atarlar.
                  </dd>
                </div>
              </li>
              <li className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt>Sürekli Öğrenme</dt>
                  <dd>
                    Profesyonel eğitmenler meraklı olmaya devam eder ve en son
                    eğitim teknolojileri, araştırma bulguları ve endüstri
                    trendleri konusunda güncel kalmaya ve donanımlarını işlerine
                    yansıtmaya kararlıdırlar.
                  </dd>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h3>6. Kariyer Etkileri</h3>
            <p>
              Kendi girişimlerinin kurucuları olan profesyonel eğitmenlerin yanı
              sıra, özel, kamu ve kar amacı gütmeyen sektörlerde nitelikli
              profesyonel eğitmenlere olan talep artıyor. Profesyonel
              eğitmenler, Eğitim Uzmanı, Kurumsal Eğitmen, Öğrenme ve Gelişim
              Uzmanı, Öğretim Tasarımcısı ve daha pek çok unvana sahiptir.
              Profesyonel Eğitmenler, başta MYK Seviye-6 mesleki yeterlilik
              belgeleri olmak üzere, sektörde tanınan sertifikalara ve sürekli
              mesleki gelişime yatırım yaparak kendilerini dinamik ve tatmin
              edici bir alanda kariyer hareketliliği ve liderlik rolleri için
              konumlandırırlar.
            </p>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mx-auto p-4 max-w-4xl">
          <h3 className="text-accent-dark-3 text-center">
            Sonuç: Dönüşümün Anahtarı: Profesyonel Eğitmenlik
          </h3>
          <p>
            Profesyonel eğitmenler, bilgi aktarımının ötesine geçerek, bireysel
            ve kurumsal dönüşümü teşvik eden, kalıcı öğrenmeyi mümkün kılan ve
            değişimi yöneten kritik bir rol üstlenirler. Bu yazıda keşfedilen
            becerilere yatırım yapmak, sadece bir meslek edinmenin değil,
            anlamlı bir etkiye sahip bir kariyere adım atmanın da anahtarıdır.
          </p>

          <div className="p-4 gradientAccentToDark rounded-xl">
            <h4>Eğitimcilerin Etkisi</h4>
            <p>
              <strong>Bireysel Dönüşüm:</strong> Profesyonel eğitmenler,
              bireylerin güçlü ve zayıf yönlerini keşfetmelerine, yeni beceriler
              kazanmalarına ve potansiyellerini tam olarak kullanmalarına
              yardımcı olur. Örneğin, bir “Etkili İletişimde Dönüşüm; Sistemik
              İletişim” eğitim programı, katılımcıların sadece iletişim
              yeterliliklerini geliştirmekle kalmaz, kendilerine, ilişkilere ve
              yaşama bakış açılarını geliştirmelerine, özgüvenlerini
              artırmalarına ve daha fazlasını yapmalarına yardımcı olabilir.
            </p>
            <p>
              <strong>Kurumsal Dönüşüm:</strong> Profesyonel eğitmenler,
              kurumların yenilikleri benimsemelerine, çalışanların becerilerini
              geliştirmelerine ve değişime ayak uydurmalarına yardımcı olur.
              Örneğin, bir “Liderlik Geliştirme” eğitim programı, yöneticilerin
              daha etkili iletişim kurmalarını, ekipleri motive etmelerini ve
              stratejik hedeflere ulaşmalarını sağlayabilir.
            </p>
            <p>
              <strong>Kalıcı Öğrenme:</strong> Profesyonel eğitmenler,
              katılımcıların sadece bilgi edinmelerini değil, öğrendiklerini
              uygulamaya koymalarını ve sürdürülebilir bir şekilde gelişmelerini
              sağlar. Örneğin, bir karma eğitim programı, teorik dersleri pratik
              alıştırmalar ve online kaynaklarla destekleyerek kalıcı öğrenmeyi
              teşvik edebilir.
            </p>
            <p>
              <strong>Değişimi Yönetme:</strong> Profesyonel eğitmenler,
              değişimin gerekliliğini ve faydalarını katılımcılara açıklayarak,
              direnci azaltarak ve yeni iş modellerini benimsemelerini
              sağlayarak değişimi kolaylaştırır. Örneğin, bir “Değişim Yönetimi”
              eğitim programı, çalışanların değişime uyum sağlamalarına, yeni
              süreçleri ve teknolojileri öğrenmelerine ve yeni bir çalışma
              kültürüne adapte olmalarına yardımcı olabilir.
            </p>
          </div>

          <hr className="my-4" />

          <div>
            <h4>Profesyonel Eğitmenlik Kariyeri:</h4>
            <p>
              <strong>Kendi İşlerinin Profesyonelleri:</strong> Profesyonel
              eğitmenler kurdukları akademilerde hem bireysel hem de kurumsal
              alanda hizmet vererek sektöre ve topluma çok yönlü katkı
              sağlamaktalar.
            </p>
            <p>
              <strong>Talep Artışı:</strong> Eğitim ve geliştirme sektörü hızla
              büyüyor ve profesyonel eğitmenlere olan talep de artıyor. Bu,
              profesyonel eğitmenler için geniş bir yelpazede iş imkanları
              olduğu anlamına gelir.
            </p>
            <p>
              <strong>Çeşitlilik:</strong> Profesyonel eğitmenler, özel
              sektörde, kamu sektöründe veya sivil toplum kuruluşlarında
              çalışabilirler. Ayrıca, serbest çalışan eğitmen olarak da
              çalışabilirler.
            </p>

            <p>
              <strong>Yüksek Maaş:</strong> Profesyonel eğitmenler, becerilerine
              ve deneyimlerine göre tatmin edici yüksek maaşlar alabilirler.
            </p>
            <p>
              <strong>Kişisel Tatmin:</strong> Profesyonel Eğitmenlik, insanlara
              yardımcı olma, toplumsal iyiye hizmet etme ve insanların
              hayatlarında olumlu bir fark yaratma imkanı sunan oldukça tatmin
              edici bir kariyerdir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
