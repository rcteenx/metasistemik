import Schools from "@/components/sections/home/b-2-schools";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "OKULLARIMIZ ve EĞİTİMLERİMİZ",
  };
}

export default function StaticPage() {
  return (
    <>
      <Schools />
      <SocialMedia />
    </>
  );
}
