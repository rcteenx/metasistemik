import { StaticPages } from "@/content/data";
import FooterInfo from "@/components/ui/footer/1-Info";

export default function FooterLinks() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8 text-center lg:text-left">
      {StaticPages.map((pg) => (
        <div key={pg.title}>
          <h4 className="mb-2 text-lg leading-normal font-medium text-white lg:border-b">
            <a href={"/" + pg.link}>{pg.title}</a>
          </h4>
          <ul>
            {pg.pages.map((sp) => (
              <li
                key={sp.id}
                className="mt-1 text-sm leading-normal text-white-400"
              >
                <a
                  href={
                    pg.id == 4 && sp.id < 3
                      ? sp.link
                      : "/" + pg.link + "/" + sp.link
                  }
                >
                  {sp.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
