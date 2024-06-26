import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>İletişim</HeaderTitle>
      <HeaderImage bgImage="iMerhaba">Bize Ulaşın</HeaderImage>

      <PageContent h2Title="İletişim Bilgileri">
        <p>Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+902325208409" className="hover:border-b">
                0 (232) 520 8409
              </a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a
                href="mailto:social@metasistemik.com"
                className="hover:border-b"
              >
                social@metasistemik.com
              </a>
            </dt>
          </li>
        </ul>
      </PageContent>

      <SocialMedia />
    </>
  );
}
