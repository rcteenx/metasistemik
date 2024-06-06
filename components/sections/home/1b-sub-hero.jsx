export default function SubHero({ img }) {
  return (
    <section
      id="subhero"
      className="container mx-auto px-4 my-8 md:p-0 md:my-24"
    >
      <h2 className="text-center lg:text-6xl text-accent">
        METASİSTEMİK ÇALIŞMA NEDİR?
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 justify-center items-center">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/9-RBxaXSwTo?si=3htehL1FjwnEArfH"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="px-4 text-center xl:text-left ">
          <div className="lg:my-8 text-base [&>p]:leading-6 [&>p]:my-4">
            <p>
              Farkındalık Geliştirme ve Sistemik Çalışmaya olan bağlılığımıza
              dayalı bir çalışma sistemidir.
            </p>
            <p>
              Kişisel farkındalığı geliştirmenin ve bütünsel birbirine bağlılığı
              anlamak; bireylerde ve ekiplerde dönüşüm potansiyelinin kilidini
              açmak için gereklidir.
            </p>
          </div>
          <hr className="my-4" />
          <h3 className="text-accent">Metasistemik Çalışmanın Farkı</h3>
          <ul className="xl:px-4 my-4 xl:list-disc [&>li]:text-sm [&>li]:my-2 [&>li]:leading-6">
            <li>Bireysel yetenek ve beceri geliştirmenin ötesine geçiyoruz.</li>
            <li>
              Daha büyük sistemlerin dinamikleri içerisinde nasıl etkileşime
              girdiğimize dair derinlemesine bir anlayış ve farkındalık
              geliştiriyoruz.
            </li>
            <li>
              Kapsamlı mesleki yeterlilik ve gelişim sertifika programlarımız
              kişisel gelişim ve sistemik etki için dönüştürücü bir alan sağlar.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
