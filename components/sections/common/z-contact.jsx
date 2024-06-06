import IconComponent from "@/components/ui/icons/icons";

import { socialMedia } from "@/content/data";

export default function SocialMedia() {
  return (
    <section className="container mx-auto text-center my-16 lg:my-24">
      <div className="px-8">
        <h2 className="text-2xl lg:text-6xl text-center border-b-4 inline-block border-black">
          BİZE ULAŞIN
        </h2>
        <h3>Periyodik Bülten</h3>
        <p>
          Ücretsiz Eğitici Materyaller içeren ve periyodik olarak yenilenip
          sunduğumuz Bültenimize Kaydolmak için tıklayın
        </p>
        <h3>Sertifika Programları Sunum Dosyaları</h3>
        <p>Talep için tıklayınız</p>
        <hr className="my-8" />
        <div className="text-2xl lg:text-4xl">
          Doğrudan iletişim için
          <span className="font-bold">"sosyal medya"dayız!</span>
        </div>
        <div className="text-center mt-4 text-base md:text-xl">
          Karşılıklı etkileşim için sosyal medya sayfalarımıza bekliyoruz.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8 max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl border ">
        {socialMedia.map((i) => (
          <div key={i.id}>
            <a
              href={i.link}
              className="group flex sm:block items-center justify-center gap-8 bg-white hover:bg-gray-100 shadow-[3px_4px_20px_0_rgba(0,0,0,.15)] hover:shadow-[3px_4px_20px_0_rgba(0,0,0,.35)] rounded-xl transition-all text-center "
              target="_blank"
            >
              <div className="flex justify-center items-center w-36 h-36 hover:scale-90 transition duration-300 ease-in-out cursor-pointer">
                <IconComponent
                  name={i.svgIcon}
                  size={96}
                  color="#f3af56"
                  alt={i.alt}
                  title={i.alt}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
