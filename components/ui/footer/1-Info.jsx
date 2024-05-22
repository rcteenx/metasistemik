import { footerReyhan } from "@/public/assets/images";
import { socialMedia } from "@/content/data";
import IconComponent from "@/components/ui/icons/icons";

const FooterInfo = () => {
  return (
    <div className="flex justify-around items-center md:ml-8 ">
      <div>
        <a href="/">
          <img
            src={footerReyhan.src}
            alt="resim"
            title="resim"
            className="m-0 p-2 h-28 w-28 border-2 border-gray rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterInfo;
