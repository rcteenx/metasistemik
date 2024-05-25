const SubHero = ({ img }) => {
  return (
    <section
      id="subhero"
      className="container mx-auto px-4 my-8 md:p-0 md:my-24"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 justify-center items-center">
        <div className="rounded-3xl hidden xl:flex justify-center items-center">
          <img
            src={img.src}
            alt="img colletion"
            width="w-full"
            height={400}
            className="  rounded-xl"
          />
        </div>
        <div className="text-center xl:text-left">
          <h3>METASİSTEMİK ÇALIŞMA NEDİR?</h3>
          <div className="text-base leading-4">
            <p>
              Farkındalık Geliştirme ve Sistemik Çalışmaya olan bağlılığımıza
              dayalı bir çalışma sistemidir.
            </p>
            <p>
              Kişisel farkındalığı geliştirmenin ve bütünsel birbirine bağlılığı
              anlamak; bireylerde ve ekiplerde dönüşüm potansiyelinin kilidini
              açmak için gereklidir.
            </p>
            <h3>Metasistemik Çalışmanın Farkı</h3>
            <ul className="list-disc px-4">
              <li>
                Bireysel yetenek ve beceri geliştirmenin ötesine geçiyoruz.
              </li>
              <li>
                Daha büyük sistemlerin dinamikleri içerisinde nasıl etkileşime
                girdiğimize dair derinlemesine bir anlayış ve farkındalık
                geliştiriyoruz.
              </li>
              <li>
                Kapsamlı mesleki yeterlilik ve gelişim sertifika programlarımız
                kişisel gelişim ve sistemik etki için dönüştürücü bir alan
                sağlar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
