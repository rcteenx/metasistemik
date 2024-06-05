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
              className="group flex sm:block items-center justify-center gap-8 bg-white hover:bg-gray-100  shadow-[3px_4px_20px_0_rgba(0,0,0,.15)] hover:shadow-[3px_4px_20px_0_rgba(0,0,0,.35)] rounded-xl transition-all text-center "
              target="_blank"
            >
              <div className="flex justify-center items-center w-36 h-36">
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

        {/* <a
          href="#livechat"
          className="text-center group live-help-button flex sm:block items-center justify-center gap-5 hover:bg-white py-10 px-5 hover:shadow-[3px_4px_20px_0_rgba(0,0,0,.15)] rounded transition-all"
        >
          <div className="flex justify-center h-14 items-center">
            <svg
              width="53"
              height="54"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:hidden transition-all"
            >
              <path
                d="M11.1676 26.6999V16.5995C11.1976 14.6141 11.6191 12.6541 12.4079 10.8318C13.1966 9.0096 14.3372 7.36091 15.7643 5.98023C17.1913 4.59956 18.8768 3.51404 20.7241 2.78587C22.5714 2.05771 24.5442 1.70121 26.5296 1.7368C28.5149 1.70121 30.4877 2.05771 32.335 2.78587C34.1823 3.51404 35.8678 4.59956 37.2948 5.98023C38.7219 7.36091 39.8625 9.0096 40.6513 10.8318C41.44 12.6541 41.8615 14.6141 41.8915 16.5995V26.6999M34.2105 46.8625C36.2476 46.8625 38.2013 46.0532 39.6418 44.6128C41.0822 43.1723 41.8915 41.2186 41.8915 39.1815V30.5404M34.2105 46.8625C34.2105 48.1357 33.7047 49.3567 32.8045 50.257C31.9042 51.1573 30.6831 51.6631 29.4099 51.6631H23.6492C22.376 51.6631 21.1549 51.1573 20.2547 50.257C19.3544 49.3567 18.8486 48.1357 18.8486 46.8625C18.8486 45.5893 19.3544 44.3682 20.2547 43.4679C21.1549 42.5677 22.376 42.0619 23.6492 42.0619H29.4099C30.6831 42.0619 31.9042 42.5677 32.8045 43.4679C33.7047 44.3682 34.2105 45.5893 34.2105 46.8625ZM5.40689 20.9392H9.24738C9.75665 20.9392 10.2451 21.1415 10.6052 21.5016C10.9653 21.8618 11.1676 22.3502 11.1676 22.8595V34.3809C11.1676 34.8902 10.9653 35.3786 10.6052 35.7387C10.2451 36.0988 9.75665 36.3012 9.24738 36.3012H5.40689C4.38833 36.3012 3.41149 35.8965 2.69126 35.1763C1.97103 34.4561 1.56641 33.4792 1.56641 32.4607V24.7797C1.56641 23.7611 1.97103 22.7843 2.69126 22.0641C3.41149 21.3438 4.38833 20.9392 5.40689 20.9392ZM47.6522 36.3012H43.8117C43.3025 36.3012 42.814 36.0988 42.4539 35.7387C42.0938 35.3786 41.8915 34.8902 41.8915 34.3809V22.8595C41.8915 22.3502 42.0938 21.8618 42.4539 21.5016C42.814 21.1415 43.3025 20.9392 43.8117 20.9392H47.6522C48.6708 20.9392 49.6476 21.3438 50.3679 22.0641C51.0881 22.7843 51.4927 23.7611 51.4927 24.7797V32.4607C51.4927 33.4792 51.0881 34.4561 50.3679 35.1763C49.6476 35.8965 48.6708 36.3012 47.6522 36.3012Z"
                stroke="#333366"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="53"
              height="54"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:block hidden transition-all"
            >
              <path
                d="M11.1676 26.6999V16.5995C11.1976 14.6141 11.6191 12.6541 12.4079 10.8318C13.1966 9.0096 14.3372 7.36091 15.7643 5.98023C17.1913 4.59956 18.8768 3.51404 20.7241 2.78587C22.5714 2.05771 24.5442 1.70121 26.5296 1.7368C28.5149 1.70121 30.4877 2.05771 32.335 2.78587C34.1823 3.51404 35.8678 4.59956 37.2948 5.98023C38.7219 7.36091 39.8625 9.0096 40.6513 10.8318C41.44 12.6541 41.8615 14.6141 41.8915 16.5995V26.6999M34.2105 46.8625C36.2476 46.8625 38.2013 46.0532 39.6418 44.6128C41.0822 43.1723 41.8915 41.2186 41.8915 39.1815V30.5404M34.2105 46.8625C34.2105 48.1357 33.7047 49.3567 32.8045 50.257C31.9042 51.1573 30.6831 51.6631 29.4099 51.6631H23.6492C22.376 51.6631 21.1549 51.1573 20.2547 50.257C19.3544 49.3567 18.8486 48.1357 18.8486 46.8625C18.8486 45.5893 19.3544 44.3682 20.2547 43.4679C21.1549 42.5677 22.376 42.0619 23.6492 42.0619H29.4099C30.6831 42.0619 31.9042 42.5677 32.8045 43.4679C33.7047 44.3682 34.2105 45.5893 34.2105 46.8625ZM5.40689 20.9392H9.24738C9.75665 20.9392 10.2451 21.1415 10.6052 21.5016C10.9653 21.8618 11.1676 22.3502 11.1676 22.8595V34.3809C11.1676 34.8902 10.9653 35.3786 10.6052 35.7387C10.2451 36.0988 9.75665 36.3012 9.24738 36.3012H5.40689C4.38833 36.3012 3.41149 35.8965 2.69126 35.1763C1.97103 34.4561 1.56641 33.4792 1.56641 32.4607V24.7797C1.56641 23.7611 1.97103 22.7843 2.69126 22.0641C3.41149 21.3438 4.38833 20.9392 5.40689 20.9392ZM47.6522 36.3012H43.8117C43.3025 36.3012 42.814 36.0988 42.4539 35.7387C42.0938 35.3786 41.8915 34.8902 41.8915 34.3809V22.8595C41.8915 22.3502 42.0938 21.8618 42.4539 21.5016C42.814 21.1415 43.3025 20.9392 43.8117 20.9392H47.6522C48.6708 20.9392 49.6476 21.3438 50.3679 22.0641C51.0881 22.7843 51.4927 23.7611 51.4927 24.7797V32.4607C51.4927 33.4792 51.0881 34.4561 50.3679 35.1763C49.6476 35.8965 48.6708 36.3012 47.6522 36.3012Z"
                stroke="#333366"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-bold sm:mt-3 group-hover:text-jaffa">
            Yüzyüze Sohbet
          </div>
        </a> */}
      </div>
    </section>
  );
}
