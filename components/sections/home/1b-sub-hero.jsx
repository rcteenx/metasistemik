const SubHero = ({ rVideo }) => {
  return (
    <section
      id="subhero"
      className="container mx-auto px-4 my-2 md:p-0 md:my-8"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4">
        <div className="rounded-3xl hidden xl:flex justify-center items-center border">
          <img
            src={rVideo.src}
            alt="img colletion"
            width="w-full"
            height={400}
            className="  rounded-xl"
          />
        </div>
        <div className="text-center xl:text-left">
          <h3>
            Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
            Gerçekleştiği Yer
          </h3>
          <div className="[&_p]:text-base [&_p]:md:text-lg text-slate-gray leading-4">
            <p>
              METASİSTEMİK olarak, Farkındalık Geliştirme ve Sistemik Çalışmaya
              olan bağlılığımız bizi farklı kılıyor. Kişisel farkındalığı
              geliştirmenin ve bütünsel birbirine bağlılığı anlamanın
              bireylerde, ekiplerde ve kuruluşlarda dönüşüm potansiyelinin
              kilidini açmak için gerekli olduğuna inanıyoruz.
            </p>
            <p>
              Geleneksel programların aksine, bireysel yetenek ve beceri
              geliştirmenin ötesine geçerek, daha büyük sistemlerin dinamikleri
              içerisinde nasıl etkileşime girdiğimize dair derinlemesine bir
              anlayış ve farkındalık geliştiriyoruz.
            </p>
            <p>
              Kapsamlı mesleki yeterlilik ve gelişim sertifika programlarımız
              kişisel gelişim ve sistemik etki için dönüştürücü bir alan sağlar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
