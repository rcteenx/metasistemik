import { StaticPages } from "@/content/data";

export default function Workshops() {
  return (
    <section id="workshops" className="">
      <div className="container mx-auto my-8 lg:my-24">
        <div className="bg-gradient-to-br from-accent via-accent-dark-3 to-accent-dark-7 p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2 className=" text-accent-light-7 lg:text-6xl">
            ATÖLYE VE ETKİNLİKLER
          </h2>
          <p className=" text-accent-light-8">
            Hafta da birer gün olarak düzenlediğimiz aşağıdaki gruplarımız genel
            katılıma açıktır:
          </p>
          <ul className="text-accent text-base flex flex-col sm:flex-row gap-4 ">
            <li className=" w-full border p-4 my-4 rounded-md shadow-lg bg-white hover:bg-gray-100 ">
              <h3>Grup İçin Sistemik Dizim</h3>
              <p> (Sürekli çalışma grubu)</p>
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-xl cursor-pointer shadow-lg">
                  <a href="https://wa.me/905443087402?text=bilgi">Kayıt</a>
                </li>
                <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
                  <a href="#">Bilgi</a>
                </li>
              </ul>
            </li>
            <li className=" w-full border p-4 my-4 rounded-md shadow-lg bg-white hover:bg-gray-100">
              <h3>Farkındalık Geliştirime & Sistemik Çalışma</h3>
              <p> (Sürekli çalışma grubu)</p>
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-xl cursor-pointer shadow-lg">
                  <a href="https://wa.me/905443087402?text=bilgi">Kayıt</a>
                </li>
                <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
                  <a href="#">Bilgi</a>
                </li>
              </ul>
            </li>
          </ul>
          <h3>Birlikte Çalışıyoruz</h3>
          <p>
            Her ay düzenli olarak yüz-yüze atölyeler ve 3-4 ayda bir gelişim
            inziva programlarımız için bize katılın.
          </p>
        </div>
      </div>
    </section>
  );
}
