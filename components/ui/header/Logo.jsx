import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const HeaderLogo = () => {
  return (
    <div className="w-32 md:w-64 p-4 bg-black rounded-xl">
      <Link id="metasistemik" href="/">
        <img src={smd.siteLogo} alt={smd.title} className="" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
